import React, { useState } from 'react'

const LoginPage = (props) => {
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <>
      <div className="auth-form-container">
        <h2 className="heading">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
        </form>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("register")}
        >
          Dont have an account? Register Here{" "}
        </button>
      </div>
      <div className="main">
        <div className="d1"></div>
        <div className="d2"></div>
        <div className="d3"></div>
        <div className="d4"></div>
      </div>
    </>
  );
}

export default LoginPage