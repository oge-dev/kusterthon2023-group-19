import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../AuthLayout/Layout";
import FormField from "../../../components/formField/formField";
import "./SignIn.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(null); // Clear any previous error when the user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = formData;
      let payload = {
        email: email,
        password: password,
      };
      const response = await axios.post(
        "https://easyinvoiceapi.onrender.com/api/auth/login",
        payload
      );

      const user = response.data;

      localStorage.setItem("user", JSON.stringify(user));

      // Navigate to the dashboard after successful login
      navigate("/dashboard");
    } catch (error) {
        console.error('Error logging in:', error);
        setError('An error occurred. Please try again later.');
      
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signInlayout-wrappper">
      <Layout>
        <div className="signIn-form-control">
          <h3>Sign In</h3>
          <form
            onSubmit={handleSubmit}
          >
            {/* Email Input */}
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
            <div style={{ position: "relative" }}>
              {/* Password Input */}
              <FormField
                htmlFor={"password"}
                type={showPassword ? "text" : "password"}
                inputName={"password"}
                placeholder={"Password"}
                value={formData.password}
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
             {error && <p style={{ color: 'red' }}>{error}</p>}
            {/* Submit button */}
            <button
              type="submit"
              className="signIn-btn"
            >
              Sign In
            </button>
          </form>
          {/* Registration link */}
          <button className="SignIn-register-btn">
            <Link to="/createAccount">Create Account</Link>
          </button>
        </div>
      </Layout>
      <div className="SignIn-forgetPassword-link">
        <Link to="/forgetPassWord">Forget Password?</Link>
      </div>
    </div>
  );
};

export default SignIn;
