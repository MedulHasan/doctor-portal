/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken, signOut } from "firebase/auth";
import initializationAuthentication from "../firebase/firebase.init";

initializationAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');
    const [authError, setAuthError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name }
                setUser(newUser);
                saveUserDB(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                }).catch((error) => {
                    // An error occurred
                });

                history.push('/')
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false))
    };

    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError('Invalid Credential');
            })
            .finally(() => setIsLoading(false))
    };

    const signInWithGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUserDB(user.email, user.displayName, 'PUT')
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            }).catch((error) => {
                setAuthError('Invalid Credential');
            })
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        // setIsLoading(true)
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then((idToken) => {
                        setToken(idToken);
                    })
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [])

    useEffect(() => {
        fetch(`https://doctor-portal-medul.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    };

    const saveUserDB = (email, displayName, method) => {
        fetch('https://doctor-portal-medul.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email, displayName })
        })
            .then(res => res.json())
            .then(data => { })
    }

    return {
        user,
        admin,
        token,
        registerUser,
        loginUser,
        logout,
        isLoading,
        authError,
        setAuthError,
        signInWithGoogle
    }
}

export default useFirebase;