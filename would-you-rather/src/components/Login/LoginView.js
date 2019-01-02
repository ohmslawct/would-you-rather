import React from "react";
import SignUp from "../SignUp";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const LoginView = ({ onSubmit }) => {
//
// if(this.props.authedUser !== ""){
//       this.props.history.push("/");
// }

  return (
    <div>
      <header className="App-header">
        <h1 className="App-title">Would You Rather!</h1>
      </header>
      Please Log In or Sign Up. <br />
      <br />
      <span className="notes">
        Reviewers can sign up or use demo account: <br />
        U: demo@rainmakerco.com <br />
        P: WonderfulYou
      </span>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <label>
          <span className="label-text"> Email </span> <br />
          <input name="email" type="email" placeholder="Email" />
        </label>
        <br />
        <label>
          <span className="label-text"> Password</span>
          <br />
          <input name="password" type="password" placeholder="Password" />
        </label>
        <br />
        <button type="submit">Login</button>
        <br />
      </form>
    </div>
  );
};


function mapStateToProps( {authedUser}  ){
  return {
    authedUser : authedUser
  }
}





export default withRouter(connect(mapStateToProps)(LoginView));
