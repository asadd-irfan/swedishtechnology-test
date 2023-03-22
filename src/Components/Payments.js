

  import React, { useState } from 'react';
// use any payment gateway library paypal, stripe etc.

async function processPayment(paymentInfo) {
  // Replace this with your payment gateway API endpoint and any necessary authentication headers
  const apiUrl = 'https://your-payment-gateway-api.com/process-payment';

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentInfo),
    });

    const data = await response.json();

    if (response.ok) {
      return data.transactionId;
    } else {
      throw new Error(data.errorMessage);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

const PaymentForm = () => {
  const [paymentInfo, setPaymentInfo] = useState({ 
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    amount: '',
  });

  const handleInputChange = (event) => { 
    const { name, value } = event.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handleSubmit = async (event) => { 
    event.preventDefault();

    try {
      const transactionId = await processPayment(paymentInfo); // process payment with payment gateway API
      console.log(`Payment successful with transaction ID: ${transactionId}`);
    } catch (error) {
      console.error(`Payment failed with error: ${error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name on Card</label>
      <input type="text" id="name" name="name" value={paymentInfo.name} onChange={handleInputChange} required />

      <label htmlFor="cardNumber">Card Number</label>
      <input type="text" id="cardNumber" name="cardNumber" value={paymentInfo.cardNumber} onChange={handleInputChange} required />

      <label htmlFor="expiryDate">Expiry Date</label>
      <input type="text" id="expiryDate" name="expiryDate" value={paymentInfo.expiryDate} onChange={handleInputChange} required />

      <label htmlFor="cvv">CVV</label>
      <input type="text" id="cvv" name="cvv" value={paymentInfo.cvv} onChange={handleInputChange} required />

      <label htmlFor="amount">Amount</label>
      <input type="number" id="amount" name="amount" value={paymentInfo.amount} onChange={handleInputChange} required />

      <button type="submit">Submit Payment</button>
    </form>
  );
};

export default PaymentForm;

