import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AlertMessage from './context/AlertMessage';
import AuthProvider from './context/AuthProvider';
import Appointment from './pages/Appointment/Appointment/Appointment';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Register from './pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AlertMessage>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
              <PrivateRoute exact path="/appointment">
                <Appointment />
              </PrivateRoute>
              <PrivateRoute path="/dashboard">
                <Dashboard />
              </PrivateRoute>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
            </Switch>
          </BrowserRouter>
        </AlertMessage>
      </AuthProvider>
    </div>
  );
}

export default App;
