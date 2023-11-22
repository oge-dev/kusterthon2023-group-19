/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/LandingPage.css";
import { LoginForm } from "../components";

const LandingPage = () => {
  const handleButtonClick = () => {
    // Handle button click actions here
  };

  return (
    <div className="LandingPage-wrapper">
      LandingPage
      <div className="LoginForm">
        <LoginForm />
      </div>
    </div>
  );
};

export default LandingPage;
