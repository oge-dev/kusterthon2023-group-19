import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  const [successMessage, setSuccessMessage] = useState("");
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
      !formData.password ||
      formData.password !== formData.confirmPassword
    ) {
      setErrorMessage("Please fill in all fields and ensure passwords match.");
      return;
    }
    try {
      setLoading(true);

      //  API call (API endpoint)
      const response = await axios.post("https://api/register", formData);

      setLoading(false);
      setSuccessMessage(response.data.message);
      navigate.push("/emailVerification");
      setErrorMessage("");
    } catch (error) {
      console.log(error.data.message);
      setLoading(false);
      setSuccessMessage("");
      setErrorMessage("Registration failed. Please try again.");
    }
  };

  return (
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
              required
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
              required
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
              required
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
              required
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
              required
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
              required
            />
          </label>
        </div>

        {/* Feedback messages */}
        <div>
          {loading && <p>Loading...</p>}
          {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>

        {/* Submit button */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
