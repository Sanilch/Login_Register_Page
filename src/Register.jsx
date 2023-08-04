import React, { useState } from "react";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className='heading'>Register</h2>
        <label htmlFor="name">Full Name</label>
        <input
          value={name}
          id="name"
          onChange={(e) => setName(e.target.value)}
          name="name"
          placeholder="Enter full name"
          autoComplete="off"
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email address"
          id="email"
          name="email"
          autoComplete="off"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          type="password"
          onChange={(e) => setPass(e.target.value)}
          placeholder="******"
          id="password"
          name="password"
          autoComplete="off"
        />
        <button type="submit">Register</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Alreayd have an account? Login Here{" "}
      </button>
    </div>
  );
};

export default Register;
