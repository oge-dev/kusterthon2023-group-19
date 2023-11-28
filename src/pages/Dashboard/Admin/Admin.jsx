import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';

function Admin() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Retrieve user data from local storage
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserData(parsedUser);

      //  API endpoint and request based on your server implementation
      axios.get('https://easyinvoiceapi.onrender.com/api/Auth/Register')
        .then(response => {
          // Update the user data with additional information if needed
          setUserData(response.data);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });

 }
  }, []);

  return (
    <div>
      <h1>Welcome to the Dashboard, {userData ? userData.name : 'User'}!</h1>
      {/* Display additional user information as needed */}
      {userData && (
        <div>
          <p>Email: {userData.email}</p>
          {/* Display other user information here */}
        </div>
      )}
       </div>
  );
}

export default Admin