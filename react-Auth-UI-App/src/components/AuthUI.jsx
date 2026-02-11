import React, { useState, useEffect } from "react";
import "./AuthUI.css";

const AuthUI = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 🔹 Load login state from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUserName(savedUser);
      setIsLoggedIn(true);
    }
  }, []);

  // 🔹 Validation
  const validate = () => {
    const newErrors = {};

    if (!userName.trim()) {
      newErrors.userName = "Username is required!";
    } else if (userName.length < 5) {
      newErrors.userName = "Username must be at least 5 characters";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid Email";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required!";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 5 characters";
    }

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm Password is required!";
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords must match";
    }

    return newErrors;
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If validation passes
    localStorage.setItem("user", userName.trim());
    setIsLoggedIn(true);
    setErrors({});
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="auth-container">
      <h1>Auth UI Form</h1>

      {isLoggedIn ? (
        <div>
          <h2>Welcome, {userName} 👋</h2>
          <p className="true">You are successfully logged in.</p>
          <p className="true">You can access the dashboard.</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleRegister}>
          <h2>Register</h2>

          <input
            type="text"
            placeholder="Enter Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          {errors.userName && <p>{errors.userName}</p>}

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p>{errors.email}</p>}

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p>{errors.password}</p>}

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
};

export default AuthUI;
