import React from "react";

const SignUpView = ({ onSubmit }) => {
  return (
    <div>
      <h2>Sign up</h2>
      <form onSubmit={onSubmit}>
        <label>
          <span className="label-text"> Email </span> <br/>
          <input
            name="email"
            type="email"
            placeholder="Email"
          />
        </label>
        <br/>
        <label>

        <span className="label-text"> Password</span> <br/>
          <input
            name="password"
            type="password"
            placeholder="Password"
          />
        </label>
         <br/>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpView;
