import React from "react";


console.log("Login Page");

const LoginView = ({ onSubmit }) => {
  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={onSubmit}>
        <label>
        <span class="label-text"> Email </span> <br/>
          <input
            name="email"
            type="email"
            placeholder="Email"
          />
        </label>
        <br/>
        <label>
          <span class="label-text"> Password</span><br/>
          <input
            name="password"
            type="password"
            placeholder="Password"
          />
        </label>
         <br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default LoginView
