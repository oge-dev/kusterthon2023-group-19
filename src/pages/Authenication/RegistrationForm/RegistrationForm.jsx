import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../AuthLayout/Layout";
import "../Authenication.css";
import FormField from "../../../components/formField/formField";

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
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
    console.log(
      formData.firstName +
        " " +
        formData.lastName +
        " " +
        formData.email +
        " " +
        formData.password +
        " " +
        formData.confirmPassword
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
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
      const response = await axios.post(
        "https://easyinvoiceapi.onrender.com/api/auth/Register",
        formData
      );

      if (response.data.success) {
        console.log(
          "Response:",
          response.data,
          response.status,
          response.data.token
        );
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
    <Layout className="form-layout">
      <div className="form-control">
        <h2>Create Account</h2>
        {/* Form fields */}
        <form onSubmit={handleSubmit}>
          {/* First Name & Last Name */}
          <div className="fullName">
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
              placeholder={"Email"}
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div>
            <FormField
              htmlFor={"password"}
              type={"password"}
              inputName={"password"}
              placeholder={"Password"}
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <FormField
              htmlFor={"confirmPassword"}
              type={"password"}
              inputName={"confirmPassword"}
              placeholder={"Confirm Password"}
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          {/* Feedback messages */}
          <div>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </div>

          {/* Submit button */}
          <button type="submit" className="submit-btn">
            {loading ? "Sign Up..." : "Sign Up"}
          </button>
        </form>
        <button className="logIn-btn">
          <Link to="/logIn">I already have an Account</Link>
        </button>
      </div>
    </Layout>
  );
};

export default RegistrationForm;
