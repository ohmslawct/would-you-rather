import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
//import { withRouter } from "react-router";
import firebaseApp from "../firebaseApp";
import { handleLogoutUser } from "../actions/users";

class Logout extends Component {

render() {

  const { dispatch } = this.props;

  function handleChange() {
    dispatch(handleLogoutUser());
   }

function sendResetEmail() {

  var auth = firebaseApp.auth();
  var emailAddress = auth.currentUser.email;
  auth.sendPasswordResetEmail(emailAddress).then(function() {
  }).catch(function(error) {
    console.log(error);
  });
}
    return(

      <div>
      <button onClick={sendResetEmail}>
        Reset Password  <br/>
      </button>
      <br/>
      <br/>
      <button onClick={handleChange}>
        Logout
      </button>
      <br/>


      </div>
    )
  }
}

function mapStateToProps () {
  return {
  }
}

export default withRouter(connect(mapStateToProps)(Logout))
