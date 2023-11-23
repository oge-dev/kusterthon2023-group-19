import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from '../AuthLayout/Layout'

const EmailVerification = ({ email }) => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!otp) {
      setErrorMessage("Please enter the OTP code.");
      return;
    }

    setLoading(true);

    try {
      // API call (API endpoint)
      const response = await axios.post("https://easyinvoiceapi.onrender.com/api/auth/RequestEmailVerification/${email}", { otp });

      if (response.data.success) {
        // Redirect to dashboard on successful login
        console.log(
          "Response:",
          response.formData,
          response.status,
          response.data.token
        );
        navigate("/dashboard");
      }
    } catch (error) {
      setLoading(false);

      if (error.response) {
        console.log(error.response);
        console.log("server responded");
        setErrorMessage("Verification failed: server respond Error");
      } else if (error.request) {
        console.log("network error");
        setErrorMessage("Verification failed: network error");
      } else {
        console.log("Error: " + error);
        setErrorMessage("Error: " + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
 <div>
      <form onSubmit={handleVerify}>
        <h2>Email Verification</h2>
        <p>Check your email for the OTP code.</p>

        {/* OTP Input */}
        <div>
          <label htmlFor="otp">
            OTP Code:
            <input
              type="text"
              value={otp}
              onChange={handleOtpChange}
              maxLength="4"
            />
          </label>
        </div>

        {/* Feedback messages */}
        <div>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>

        {/* Verify button */}
        <button type="submit">{loading ? "Verifying..." : "Verify"}</button>
      </form>
    </div>
    </Layout>
   
  );
};

export default EmailVerification;
