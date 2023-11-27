import React from 'react';
import {  useNavigate } from "react-router-dom";

const SignOut = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    // Clear the token from local storage
    localStorage.removeItem("user");
    // Redirect to the Landing page
    navigate("/");
  };

  return (
    <div>
      are you sure you want log Out?
      <button onClick={handleClick} className="logout-btn">
        Yes
      </button>
    </div>
  );
};

export default SignOut;
