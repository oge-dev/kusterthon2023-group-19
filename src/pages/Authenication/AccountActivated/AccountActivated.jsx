import React from "react";
import { Link } from "react-router-dom";
import Layout from "../AuthLayout/Layout";
import "../Authenication.css";

const AccountActivated = () => {
  return (
    <Layout className="form-layout">
      <div className="form-control Forget-Password">
        <h2>Forget Password</h2>
        <div>
          <p>Your Acccount has been successfully Activated.</p>
          <p> Now you can start using CrediEase!</p>
        </div>
        {/* logIn link */}
        <button className="ForgetPassword-logIn-btn">
          <Link to="/logIn">Go to Sign In</Link>
        </button>
      </div>
    </Layout>
  );
};

export default AccountActivated;
