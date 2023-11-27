// Alerts.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Alerts = () => {
  // State to manage alerts
  const [alerts, setAlerts] = useState([]);

  // Function to add a new alert
  const addAlert = (message, type = 'info') => {
    const newAlert = { message, type, id: new Date().getTime() };
    setAlerts([...alerts, newAlert]);

    // Automatically remove the alert after a set time (e.g., 5 seconds)
    setTimeout(() => {
      removeAlert(newAlert.id);
    }, 5000);
  };

  // Function to remove an alert
  const removeAlert = (id) => {
    setAlerts(alerts.filter((alert) => alert.id !== id));
  };

  // API URL for managing alerts
  const apiUrl = 'https://your-api-url/alerts';

  // Load alerts from the server on component mount
  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const response = await axios.get(apiUrl);
        setAlerts(response.data);
      } catch (error) {
        console.error('Error fetching alerts:', error);
      }
    };

    fetchAlerts();
  }, [apiUrl]);

  // Save alerts to the server whenever it changes
  useEffect(() => {
    const saveAlerts = async () => {
      try {
        await axios.post(apiUrl, alerts);
      } catch (error) {
        console.error('Error saving alerts:', error);
      }
    };

    saveAlerts();
  }, [apiUrl, alerts]);

  // Check user authentication from local storage
  const isAuthenticated = localStorage.getItem('user') !== null;

  // Example usage of addAlert (you can call this function from other components)
  // addAlert('Payment received for Invoice #123', 'success');

  return (
    <div>
      {/* Display alerts */}
      {isAuthenticated && alerts.map((alert) => (
        <div key={alert.id} className={`alert ${alert.type}`}>
          {alert.message}
          <button onClick={() => removeAlert(alert.id)}>Dismiss</button>
        </div>
      ))}
    </div>
  );
};

export default Alerts;
