import React from 'react';
import {  useNavigate } from "react-router-dom";
import './SignOut.css'

const SignOut = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    // Clear the token from local storage
    localStorage.removeItem("user");
    // Redirect to the Landing page
    navigate("/");
  };

  return (
    <div className='SignOut-wrappper'>
      are you sure you want log Out?
      <div>
      <button onClick={handleClick} className='signOut-btn'>
        Yes
      </button>
      </div>
    </div>
  )
};

export default SignOut;
