import React, { useState } from "react";

const SignUpLogin = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
<br/>
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log("Sign-Up Data Submitted:", formData);
    alert("Sign-Up Successful!");
    setFormData({ username: "", email: "", password: "" });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data Submitted:", loginData);
    alert("Login Successful!");
    setLoginData({ email: "", password: "" });
  };
<br/>
  return (
    <div>
      <h1>{isSignUp ? "Sign Up" : "Login"}</h1>
      <div>
        <button onClick={() => setIsSignUp(true)}>Sign Up</button>
        <button onClick={() => setIsSignUp(false)}>Login</button>
        <br/>
        <br/>
      </div>
      {isSignUp ? (
        <form onSubmit={handleSignUpSubmit}>
          <div>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleSignUpChange}
                placeholder="Enter your username"
                required
              />
            </label>
          </div>
          <br />
          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleSignUpChange}
                placeholder="Enter your email"
                required
              />
            </label>
          </div>
          <br />
          <div>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleSignUpChange}
                placeholder="Enter your password"
                required
              />
            </label>
          </div>
          <br />
          <button type="submit">Sign Up</button>
        </form>
      ) : (
        <form onSubmit={handleLoginSubmit}>
          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleLoginChange}
                placeholder="Enter your email"
                required
              />
            </label>
          </div>
          <br />
          <div>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                placeholder="Enter your password"
                required
              />
            </label>
          </div>
          <br />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default SignUpLogin;
