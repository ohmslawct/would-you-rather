import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from "react-router";
import firebaseApp from "../../firebaseApp";
import SignUpView from "./SignUpView";


class SignUpContainer extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await firebaseApp
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
       this.props.history.push("/");
    } catch (error) {
      alert(error);

    }
  };
  
  render() {
    return <SignUpView onSubmit={this.handleSignUp} />;
  }
}

function mapStateToProps(  ){
  return {

  }
}

export default withRouter(connect(mapStateToProps)(SignUpContainer));
