import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // React Router history hook
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

    try {
      setLoading(true);

      // API call for login (API endpoint)
      const response = await axios.post("https://api/login", formData);

      setLoading(false);

      if (response.data.success) {
        // Redirect to dashboard on successful login
        console.log("Login successful");
        navigate.push("/dashboard");
      } else {
        setErrorMessage(
          "Invalid username/email or password. Please try again or register."
        );
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage("Error during login. Please try again.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {/* Username/Email Input */}
        <div>
          <label htmlFor="text">
            Username or Email:
            <input
              type="text"
              name="usernameOrEmail"
              value={formData.usernameOrEmail}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        {/* Password Input */}
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

        {/* Feedback messages */}
        <div>
          {loading && <p>Loading...</p>}
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>

        {/* Submit button */}
        <button type="submit">Login</button>
      </form>

      {/* Registration link */}
      <p>
        Don't have an account? <Link to="/register">Register here</Link>.
      </p>
    </div>
  );
};

export default LoginForm;
