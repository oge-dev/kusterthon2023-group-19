import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Content from '../../components/authLayout/Authenication/Content'

const INITIAL_STATE = {
  fullName: "",
  gender: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegistrationForm = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (
      !formData.fullName ||
      !formData.gender ||
      !formData.username ||
      !formData.email ||
      !formData.password
    ) {
      setErrorMessage("Please fill in all fields");
      return;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMessage("Invalid email format");
      return;
    } else if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Ensure password and confirm password match.");
      return;
    }

    try {
      setLoading(true);
      //  API call (API endpoint)
      const response = await axios.post("https://easyinvoiceapi.onrender.com/api/auth/Register", formData);

      if (response.data.success) {
        
        console.log("Response:", response.data, response.status, response.data.token);
        // Redirect to emailVerification on successful Register
        navigate("/emailVerification");
      }
    } catch (error) {
      setLoading(false);
      console.log("Error:", error);

      if (error.response) {
        console.log(error.response);
        console.log("server responded");
        setErrorMessage("Registration failed: server respond Error");
      } else if (error.request) {
        console.log("network error");
        setErrorMessage("Registration failed: network error");
      } else {
        console.log("Error: " + error);
        setErrorMessage("Error: " + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Content>
    <div className="form-control">
      {/* Form fields */}
      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div>
          <label htmlFor="fullName">
            Full Name:
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </label>
        </div>

        {/* Gender */}
        <div>
          <label htmlFor="gender">
            Gender:
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>

        {/* Username */}
        <div>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
        </div>

        {/* Confirm Password */}
        <div>
          <label htmlFor="confirmPassword">
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </label>
        </div>

        {/* Feedback messages */}
        <div>
          {loading && <p>Loading...</p>}
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>

        {/* Submit button */}
        <button type="submit">{loading ? "Registering..." : "Register"}</button>
      </form>
    </div>
    </Content>

  );
};

export default RegistrationForm;
