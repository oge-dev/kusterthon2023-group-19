// ClientProfile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClientProfile = () => {
  // State to manage client profiles
  const [clientProfiles, setClientProfiles] = useState([]);

  // State to handle form input
  const [newClient, setNewClient] = useState({
    name: '',
    email: '',
    // Add other client details as needed
  });

  // API URL
  const apiUrl = 'https://your-api-url/client-profiles';

  // Function to add a new client profile
  const addClient = async () => {
    // Validate input fields before adding
    if (newClient.name && newClient.email) {
      try {
        // Send a POST request to the server
        const response = await axios.post(apiUrl, newClient);
        
        // Update clientProfiles state with the response from the server
        setClientProfiles([...clientProfiles, response.data]);

        // Clear form after adding
        setNewClient({
          name: '',
          email: '',
        });
      } catch (error) {
        console.error('Error adding client:', error);
      }
    } else {
      // Handle validation error
      alert('Please enter both name and email.');
    }
  };

  // Load client profiles from the server on component mount
  useEffect(() => {
    const fetchClientProfiles = async () => {
      try {
        const response = await axios.get(apiUrl);
        setClientProfiles(response.data);
      } catch (error) {
        console.error('Error fetching client profiles:', error);
      }
    };

    fetchClientProfiles();
  }, [apiUrl]);

  return (
    <div>
      <h2>Client Profiles</h2>

      {/* Form to add a new client */}
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={newClient.name}
          onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
        />
        <label>Email:</label>
        <input
          type="email"
          value={newClient.email}
          onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
        />
        {/* Add other input fields as needed */}
        <button onClick={addClient}>Add Client</button>
      </div>

      {/* Display list of client profiles */}
      <div>
        <h3>Client List</h3>
        <ul>
          {clientProfiles.map((client, index) => (
            <li key={index}>{`${client.name} - ${client.email}`}</li>
            // Display other client details as needed
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClientProfile;
