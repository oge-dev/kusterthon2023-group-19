// PaymentTransaction.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentTransaction = () => {
  // State to manage payment transactions
  const [transactions, setTransactions] = useState([]);

  // State to handle form input
  const [newTransaction, setNewTransaction] = useState({
    clientName: '',
    amount: 0,
    // Add other transaction details as needed
  });

  // API URL
  const apiUrl = 'https://your-api-url/payment-transactions';

  // Function to record a new payment transaction
  const recordTransaction = async () => {
    // Validate input fields before recording
    if (newTransaction.clientName && newTransaction.amount > 0) {
      try {
        // Send a POST request to the server
        const response = await axios.post(apiUrl, newTransaction);

        // Update transactions state with the response from the server
        setTransactions([...transactions, response.data]);

        // Clear form after recording
        setNewTransaction({
          clientName: '',
          amount: 0,
        });
      } catch (error) {
        console.error('Error recording transaction:', error);
      }
    } else {
      // Handle validation error
      alert('Please enter both client name and amount.');
    }
  };

  // Load transactions from local storage on component mount
  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
    setTransactions(storedTransactions);
  }, []);

  // Save transactions to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  // Check user authentication from local storage
  const isAuthenticated = localStorage.getItem('user') !== null;

  // Render component based on user authentication
  return (
    <div>
      {isAuthenticated ? (
        <>
          <h2>Payment Transactions</h2>

          {/* Form to record a new payment transaction */}
          <div>
            <label>Client Name:</label>
            <input
              type="text"
              value={newTransaction.clientName}
              onChange={(e) => setNewTransaction({ ...newTransaction, clientName: e.target.value })}
            />
            <label>Amount:</label>
            <input
              type="number"
              value={newTransaction.amount}
              onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
            />
            {/* Add other input fields as needed */}
            <button onClick={recordTransaction}>Record Transaction</button>
          </div>

          {/* Display list of payment transactions */}
          <div>
            <h3>Transaction List</h3>
            <ul>
              {transactions.map((transaction, index) => (
                <li key={index}>{`${transaction.clientName} - $${transaction.amount}`}</li>
                // Display other transaction details as needed
              ))}
            </ul>
          </div>
        </>
      ) : (
        <p>Please log in to record payment transactions.</p>
      )}
    </div>
  );
};

export default PaymentTransaction;
