import React, { useState } from "react";
import "./anima.css";

export const SimpleForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

  const validatePassword = (password) => {
    if (!password) return "Password is required";
    if (password.length < 6) return "Password must be at least 6 characters";
    return "";
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Validate on change if field has been touched
    if (touched[field]) {
      const error = field === "email" ? validateEmail(value) : validatePassword(value);
      setErrors(prev => ({
        ...prev,
        [field]: error
      }));
    }
  };

  const handleBlur = (field) => {
    setTouched(prev => ({
      ...prev,
      [field]: true
    }));

    const value = formData[field];
    const error = field === "email" ? validateEmail(value) : validatePassword(value);
    setErrors(prev => ({
      ...prev,
      [field]: error
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      email: true,
      password: true
    });

    // Validate all fields
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    
    setErrors({
      email: emailError,
      password: passwordError
    });

    // If no errors, submit form
    if (!emailError && !passwordError) {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="simple-form">
      <h2 className="form-title">Login Form</h2>
      
      <form onSubmit={handleSubmit} className="form">
        <div className="form-field">
          <label className="field-label">Email *</label>
          <input
            type="email"
            className={`field-input ${errors.email && touched.email ? 'error' : ''}`}
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            onBlur={() => handleBlur("email")}
          />
          {errors.email && touched.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>

        <div className="form-field">
          <label className="field-label">Password *</label>
          <input
            type="password"
            className={`field-input ${errors.password && touched.password ? 'error' : ''}`}
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            onBlur={() => handleBlur("password")}
          />
          {errors.password && touched.password && (
            <span className="error-message">{errors.password}</span>
          )}
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>

      <div className="demo-section">
        <h3>Valid Test Data:</h3>
        <div className="valid-data">
          <p><strong>Email:</strong> user@example.com</p>
          <p><strong>Password:</strong> password123</p>
        </div>
        
        <h3>Demo Options:</h3>
        <p>Try these to see validation:</p>
        <ul>
          <li>Use the valid data above for successful submission</li>
          <li>Leave fields empty and click Submit</li>
          <li>Enter invalid email (e.g., "test" or "test@")</li>
          <li>Enter password shorter than 6 characters</li>
        </ul>
      </div>
    </div>
  );
};
