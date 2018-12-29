import React, { Component } from "react";
import { withRouter } from "react-router";
import firebaseApp from "../../firebaseApp";
import LoginView from "./LoginView";
import { connect } from 'react-redux'
import { setAuthedUser } from "../../actions/authedUser"
import { receiveUsers } from "../../actions/users"
import { addNewUser } from "../../actions/shared"

import { Redirect } from 'react-router-dom';


class LoginContainer extends Component {

  handleLogin = async event => {

    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await firebaseApp
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
       this.props.history.push("/viewpolls");

        firebaseApp.auth().onAuthStateChanged(function(user) {
          if (user) {
            console.log("User signed in: ", firebaseApp.auth().currentUser.email);
          //  var userInfo = firebaseApp.auth().currentUser;
            var { displayName, email, photoUrl, emailVerified, uid } = user;

          } else {
        //    console.log("Not Signed In", user)
          }
        });


var uid = firebaseApp.auth().currentUser.uid
var userEmail = firebaseApp.auth().currentUser.email

var userDisplayName = firebaseApp.auth().currentUser.displayName
if(userDisplayName === null){
  userDisplayName = firebaseApp.auth().currentUser.email;
}

let newUser = {
 [userEmail] : {
    id: uid,
    name: userDisplayName,
    author: "",
    avatarURL: "",
    polls: [],
    answers: [],
  }
}



   const { dispatch } = this.props

   dispatch(setAuthedUser(uid));
   dispatch(receiveUsers(newUser));

    } catch (error) {
      alert(error);
      console.log("Error: ", error);
    }
  };

  render() {
    return <LoginView onSubmit={this.handleLogin} />;
  }
}


function mapStateToProps(  ){
  return {

  }
}

export default withRouter(connect(mapStateToProps)(LoginContainer));
