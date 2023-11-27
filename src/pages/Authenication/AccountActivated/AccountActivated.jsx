import React from "react";
import { Link } from "react-router-dom";
import Layout from "../AuthLayout/Layout";
import "./AccountActivated.css";

const AccountActivated = () => {
  return (
    <div className="accountActivatedlayout-wrappper">
       <Layout>
      <div className="accountActivated-form-control">
        <h3>Account Activated</h3>
        <div>
          <p>Your Acccount has been successfully Activated.</p>
          <p> Now you can start using CrediEase!</p>
        </div>
        {/* logIn link */}
        <button className="accountActivated-logIn-btn">
          <Link to="/signIn">Go to Sign In</Link>
        </button>
      </div>
    </Layout>
    </div>
  );
};

export default AccountActivated;
