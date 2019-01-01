
import firebaseApp from "../firebaseApp";



export const RECEIVE_USERS = 'RECEIVE_USERS'
export const UPDATE_USER = 'UPDATE_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const CHANGE_VIEW = 'CHANGE_VIEW'
export const LOG_VOTE = 'LOG_VOTE'


export function logVote(authedUser, pollId, name) {
  console.log("Logging Vote from user", authedUser, "name ", name , "for Poll ID", pollId);
  return {
    type: LOG_VOTE,
    pollId : pollId,
    authedUser : authedUser,
    name : name
  }
}

export function changeView(pollView) {
  console.log("Changing View");

  return {
    type: CHANGE_VIEW,
    pollView : pollView
  }
}


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
