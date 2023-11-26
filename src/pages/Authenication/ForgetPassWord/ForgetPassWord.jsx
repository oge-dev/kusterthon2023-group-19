import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../AuthLayout/Layout";
import FormField from "../../../components/formField/formField";
import "../Authenication.css";

const ForgetPassWord = () => {
  const [formData, setFormData] = useState({
    email: "",
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
    console.log(formData.email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email) {
      setErrorMessage("Please fill in your email");
      return;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMessage("Invalid email format");
      return;
    } else {
      try {
        setLoading(true);
        const response = await axios.post(
          "https://easyinvoiceapi.onrender.com/",
          formData
        );
        setLoading(false);

        if (response.data.success) {
          console.log(
            "Response:",
            response.data,
            response.status,
            response.data.token
          );
          navigate("/dashboard");
        }
      } catch (error) {
        setLoading(false);

        if (error.response) {
          console.log(error.response);
          console.log("server respond");
          setErrorMessage("Login failed: server respond Error");
        } else if (error.request) {
          console.log("network error");
          setErrorMessage("Login failed: network error");
        } else {
          console.log("Error:", error);
          setErrorMessage("Error: " + error.message);
        }
      }
    }
  };

  return (
    <Layout className="form-layout">
      <div className="form-control">
        <h2>Forget Password</h2>
        <form onSubmit={handleSubmit}>
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
          {/* Feedback messages */}
          <div>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </div>

          {/* Submit button */}
          <button type="submit" className="submit-btn">
            {loading ? "loading..." : "Send Recovery Link"}
          </button>
        </form>

        {/* Registration link */}
        <button className="register-btn">
          <Link to="/logIn">Back to Sign In</Link>
        </button>
      </div>
    </Layout>
  );
};

export default ForgetPassWord;
