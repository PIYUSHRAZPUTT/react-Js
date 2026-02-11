import React from "react";
import { useState } from "react";

const FormValidation = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  //   validation condition
  const validate = () => {
    const newErrors = {};
    // check email and its validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid Email";
    }
    // check password and its vlidation
    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    // check confirmPassword and its vlidation
    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = "confirmPassword is required";
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = "confirmPassword must be same as Password";
    }
    return newErrors;
  };
  const handleSubmit = (e) => {
    // prevent the default behaviour
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
    } else {
      setErrors({});
      setSuccess("Login successfull !");
    }
  };
  //   // ✅ Check if form is valid (real-time validation)
  //   const isFormValid =
  //     email &&
  //     password.length >= 6 &&
  //     confirmPassword === password &&
  //     /\S+@\S+\.\S+/.test(email);
  return (
    <div className="parent">
      <h1>Form Validation</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="Enter the valid email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors((prev) => ({ ...prev, email: "" }));
            }}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter the password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter the confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
        <button type="submit">Login</button>
      </form>
      {success && <h3>{success}</h3>}
    </div>
  );
};

export default FormValidation;
