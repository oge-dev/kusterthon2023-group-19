import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../AuthLayout/Layout";
import "./CreateAccount.css";
import FormField from "../../../components/formField/formField";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const CreateAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Extract only the required fields (email, firstName, lastName, password) from formData
      const { email, firstName, lastName, password } = formData;

      // Create a new object with the required fields
      const requestData = {
        email,
        name: `${firstName} ${lastName}`,
        password,
      };

      // Send user registration data to the server
      const response = await axios.post(
        "https://easyinvoiceapi.onrender.com/api/Auth/Register",
        requestData
      );

      // Assuming the server responds with the created user data
      const user = response.data;

      // Save user data in local storage
      localStorage.setItem("user", JSON.stringify(user));

      // Navigate to the dashboard after successful registration
      navigate("/accountActivated");
    } catch (error) {
      console.error("Error creating account:", error);
      // display an error message to the user
      setMessage("An error occurred. Please try again later.");
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="createAccountlayout-wrappper">
      <Layout>
        <div className="createAccount-form-control">
          <h3>Create Account</h3>
          {/* Form fields */}
          <form onSubmit={handleSubmit}>
            {/* First Name & Last Name */}
            <div className="firstName-lastName-wrapper">
              <div>
                <FormField
                  htmlFor={"firstName"}
                  type={"text"}
                  inputName={"firstName"}
                  placeholder={"First Name"}
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <FormField
                  htmlFor={"lastName"}
                  type={"text"}
                  inputName={"lastName"}
                  placeholder={"Last Name"}
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* Email */}
            <div>
              <FormField
                htmlFor={"email"}
                type={"email"}
                inputName={"email"}
                value={formData.email}
                placeholder={"Email"}
                className={"email"}
                onChange={handleChange}
              />
            </div>
            {/* Password */}
            <div style={{ position: "relative" }}>
              <FormField
                htmlFor={"password"}
                type={showPassword ? "text" : "password"}
                inputName={"password"}
                value={formData.password}
                placeholder={"Password"}
                onChange={handleChange}
                className={"password"}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "168px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
                onClick={handleTogglePassword}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
            {/* Confirm Password */}
            <div style={{ position: "relative" }}>
              <FormField
                htmlFor={"confirmPassword"}
                type={showPassword ? "text" : "password"}
                inputName={"confirmPassword"}
                value={formData.confirmPassword}
                placeholder={"Confirm Password"}
                className={"password"}
                onChange={handleChange}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "168px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
                onClick={handleTogglePassword}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
            {message && <p style={{ color: 'red' }}>{message}</p>}
            {/* Submit button */}
            <button type="submit" className="signUp-btn">
              Sign Up
            </button>
          </form>
          <button className="signUp-logIn-btn">
            <Link to="/logIn">I already have an Account</Link>
          </button>
        </div>
      </Layout>
    </div>
  );
};

export default CreateAccount;
