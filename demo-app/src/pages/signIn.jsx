import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
    const navigate = useNavigate();
    // State for form inputs
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
    // State for validation errors
    const [errors, setErrors] = useState({
      email: "",
      password: "",
    });
    // Handle input change and real-time validation
    const handleChange = (e) => {
      const { name, value } = e.target;
      // Update the form input value
      setFormData({ ...formData, [name]: value });
      // Run validation based on the field being changed
      validateField(name, value);
    };
    // Basic validation for the fields
    const validateField = (fieldName, value) => {
      let errorMessage = "";
      switch (fieldName) {
        case "email":
          if (!value) {
            errorMessage = "Email is required";
          } else if (!/\S+@\S+\.\S+/.test(value)) {
            errorMessage = "Please enter a valid email address";
          }
          break;
        case "password":
          if (!value) {
            errorMessage = "Password is required";
          } else if (value.length < 6) {
            errorMessage = "Password must be at least 6 characters";
          }
          break;
        default:
          break;
      }
      setErrors({ ...errors, [fieldName]: errorMessage });
    };
    // Submit the form
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform final validation on form submission
      let isValid = true;
      Object.keys(formData).forEach((field) => {
        if (!formData[field]) {
          validateField(field, formData[field]);
          isValid = false;
        }
      });
      // If the form is valid, proceed
      if (isValid) {
        console.log("Form submitted successfully!");
        // Reset form (optional)
        setFormData({
          email: "",
          password: "",
        });
        navigate('/products');
      }
    };
    return (
      <div className="registration-container">
        <div className="form-container">
          <h2>SignIn</h2>
          <form onSubmit={handleSubmit} className="registration-form">
            
            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "invalid" : "valid"}
                required
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>
            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? "invalid" : "valid"}
                required
              />
              {errors.password && (
                <span className="error-message">{errors.password}</span>
              )}
            </div>
            {/* Submit button */}
            <button type="submit" className="submit-btn">
              SignIn
            </button>
          </form>
        </div>
      </div>
    );
  };

export default SignInPage;