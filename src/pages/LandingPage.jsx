import React from "react";
import LoginForm from "../components/LoginForm";
import "./LandingPage.css";

const LandingPage = () => {
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
