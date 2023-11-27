// Invoice.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Invoice = () => {
  // State to manage invoices
  const [invoices, setInvoices] = useState([]);

  // State to handle form input
  const [newInvoice, setNewInvoice] = useState({
    clientName: '',
    amount: 0,
    // Add other invoice details as needed
  });

  // API URL
  const apiUrl = 'https://your-api-url/invoices';

  // Function to add a new invoice
  const addInvoice = async () => {
    // Validate input fields before adding
    if (newInvoice.clientName && newInvoice.amount > 0) {
      try {
        // Send a POST request to the server
        const response = await axios.post(apiUrl, newInvoice);

        // Update invoices state with the response from the server
        setInvoices([...invoices, response.data]);

        // Clear form after adding
        setNewInvoice({
          clientName: '',
          amount: 0,
        });
      } catch (error) {
        console.error('Error adding invoice:', error);
      }
    } else {
      // Handle validation error
      alert('Please enter both client name and amount.');
    }
  };

  // Load invoices from local storage on component mount
  useEffect(() => {
    const storedInvoices = JSON.parse(localStorage.getItem('invoices')) || [];
    setInvoices(storedInvoices);
  }, []);

  // Save invoices to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('invoices', JSON.stringify(invoices));
  }, [invoices]);

  // Check user authentication from local storage
  const isAuthenticated = localStorage.getItem('user') !== null;

  // Render component based on user authentication
  return (
    <div>
      {isAuthenticated ? (
        <>
          <h2>Invoices</h2>

          {/* Form to add a new invoice */}
          <div>
            <label>Client Name:</label>
            <input
              type="text"
              value={newInvoice.clientName}
              onChange={(e) => setNewInvoice({ ...newInvoice, clientName: e.target.value })}
            />
            <label>Amount:</label>
            <input
              type="number"
              value={newInvoice.amount}
              onChange={(e) => setNewInvoice({ ...newInvoice, amount: e.target.value })}
            />
            {/* Add other input fields as needed */}
            <button onClick={addInvoice}>Add Invoice</button>
          </div>

          {/* Display list of invoices */}
          <div>
            <h3>Invoice List</h3>
            <ul>
              {invoices.map((invoice, index) => (
                <li key={index}>{`${invoice.clientName} - $${invoice.amount}`}</li>
                // Display other invoice details as needed
              ))}
            </ul>
          </div>
        </>
      ) : (
        <p>Please log in to view invoices.</p>
      )}
    </div>
  );
};

export default Invoice;
