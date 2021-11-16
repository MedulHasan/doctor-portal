import { CircularProgress } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const CheckoutForm = ({appointment}) => {
  const {price, patientName, _id} = appointment;
  const {user} = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [processing, setProcessing] = useState(false);
  
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    fetch('https://doctor-portal-medul.herokuapp.com/create-payment-intent', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({price})
    })
    .then(res => res.json())
    .then(data => setClientSecret(data.clientSecret))
  }, [price])

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    if(!stripe || !elements) {
      return;
    };
    
    const card = elements.getElement(CardElement);
    if(card === null) {
      return;
    };
    
    setProcessing(true);
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    // console.log(paymentMethod, error);

    if(error) {
      setError(error.message);
      setSuccess('');
    }
    else {
      setError('')
      // setSuccess('Your billing process is done');
    }

    const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: user.email
          },
        },
      },
    );



    // console.log(paymentIntent, intentError);

    if(intentError) {
      setError(intentError.message);
      setSuccess('');
      setProcessing(false);
    } else {
      setError('');
      setSuccess('Your payment process successfully!');
      setProcessing(false);

      // save to db
      const payment = {
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        last4: paymentMethod.card.last4,
        transaction: paymentIntent.client_secret.slice('_secret')[0],
      };
      fetch(`https://doctor-portal-medul.herokuapp.com/appointment/${_id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(payment)
      })
      .then(res=> res.json())
      .then(data => {})
    }
  };


    return (
        <div>
            <form onSubmit={handleSubmit}>
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: '16px',
                      color: '#424770',
                      '::placeholder': {
                        color: '#aab7c4',
                      },
                    },
                    invalid: {
                      color: '#9e2146',
                    },
                  },
                }}
              />
              {processing ? <CircularProgress /> : <button type="submit" disabled={!stripe || success}>
                Pay ${price}
              </button>}
          </form>
          {error && <p style={{color: 'red'}}>{error}</p>}
          {success && <p style={{color: 'green'}}>{success}</p>}
        </div>
    );
};

export default CheckoutForm;