import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import { connect } from 'react-redux'

import { handleInitialData } from '../actions/shared'
import {userStateChangeMonitor} from '../actions/shared'

import Dashboard from "./Dashboard"
import LoadingBar from 'react-redux-loading'
import NewPoll from "./NewPoll"
import Nav from "./Nav"

import '../index.css';
import * as firebaseui from 'firebaseui'
import firebase from "firebase";
import firebaseApp from "../firebaseApp";

//import PrivateRoute from "../PrivateRoute";
import Home from "./Home";
import ViewPolls from "./ViewPolls"
import Login from "./Login/";
import SignUp from "./SignUp/";
import UserProfile from "./UserProfile";
import Logout from "./Logout";

import { loginUser, logoutUser } from "../actions/users";
import {setAuthedUser} from "../actions/authedUser";



class App extends Component {

//    state = { loading: true, authenticated: false, user: null };


componentWillMount() {
  let authenticated, loading

  const { dispatch } = this.props;

  if (authenticated == ""){
    authenticated = false;
  }

  if  (loading == ""){
    loading = true;
  }


firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {

      dispatch(loginUser(user.email))
      dispatch(setAuthedUser(user.email))

    } else {
            dispatch(setAuthedUser(""));
           }
    }
  );

}

// authenticated: true,
// currentUser: user,
// loading: false

componentDidMount() {
  this.props.dispatch(userStateChangeMonitor())

  this.props.dispatch(handleInitialData())
}



render() {


const { authenticated, loading } = this.props;

if (loading) {
     return (<div> <LoadingBar /> <p>Loading......</p></div>)
}


return (
<Fragment>
  <LoadingBar />
    <Nav />
        <div className='container'>
          <div className="App">
            <Route exact path="/" component={withRouter(Dashboard)} authenticated={this.props.authenticated}/>
            <Route exact path="/login" component={withRouter(Login)} />
            <Route exact path="/signup" component={withRouter(SignUp)} />
            <Route exact path="/newpoll" component={withRouter(NewPoll)}/>
            <Route exact path="/viewpolls" component={withRouter(ViewPolls)}/>
            <Route exact path="/profile" component={UserProfile}/>
          </div>
    </div>
</Fragment>
    );
  }
}

function mapStateToProps({authedUser}) {
  return {
    loading : authedUser === null
  }
}

//export default connect(mapStateToProps)()
export default withRouter(connect(mapStateToProps)(App))
