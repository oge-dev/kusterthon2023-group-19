import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EmailVerification = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
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
    try {
      setLoading(true);

      //  API call to verify OTP (API endpoint)
      const response = await axios.post("https:///api/verify-otp", { otp });

      setLoading(false);

      if (response.data.success) {
        setSuccessMessage("Email verification successful!");
        setErrorMessage("");
        navigate.push("/dashboard");
      } else {
        setSuccessMessage("");
        setErrorMessage("Invalid OTP. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      setSuccessMessage("");
      setErrorMessage("Error verifying OTP. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleVerify}>
        <h2>Email Verification</h2>
        <p>Check your email for the OTP code.</p>

        {/* OTP Input */}
        <div>
        <label htmlFor="otp">
          OTP Code:
          <input type="text" value={otp} onChange={handleOtpChange} maxLength='4' />
        </label>
        </div>
        

        {/* Feedback messages */}
        <div>
        {loading && <p>Loading...</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>

        {/* Verify button */}
        <button type="submit">Verify</button>
      </form>
    </div>
  );
};

export default EmailVerification;
