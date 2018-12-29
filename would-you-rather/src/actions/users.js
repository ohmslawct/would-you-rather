import React, { Component } from "react";
import firebaseApp from "../firebaseApp";
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const UPDATE_USER = 'UPDATE_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export function receiveUsers (users) {
  return{
    type: RECEIVE_USERS,
    users,
  }
}

export function updateUserProfile (uid) {
  return{
    type: UPDATE_USER,
    uid,
  }
}

export function loginUser (user) {
  return {
    type: LOGIN_USER,
    userEmail : user.emailAddress,
    userId : user.id
  }
}

export function logoutUser (user) {
  return {
    type : LOGOUT_USER,
    user
  }
}

export function handleLogoutUser(user) {
  return (dispatch, getState) => {

    firebaseApp.auth().signOut().then(function() {
      console.log("Sign-out successful.");
    }).catch(function(error) {
      console.log("Error: ", error);
    }).then( () => {
          dispatch(logoutUser(user));
    })



  }
}
