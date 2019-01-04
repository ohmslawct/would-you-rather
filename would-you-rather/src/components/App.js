import '../index.css';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import {userStateChangeMonitor} from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import AddPoll from "./AddPoll"
import Nav from "./Nav"
import LogoutNow from "./LogoutNow"
import firebaseApp from "../firebaseApp";
import ViewPolls from "./ViewPolls"
import Login from "./Login/";
import SignUp from "./SignUp/";
import Leaderboard from "./Leaderboard"
import UserProfile from "./UserProfile";
import PollDetails from "./PollDetails";
import { loginUser } from "../actions/users";
import {setAuthedUser} from "../actions/authedUser";
import My404Component from "./My404Component";

class App extends Component {

componentWillMount() {
  let authenticated, loading

  const { dispatch } = this.props;

  if (authenticated === ""){
    authenticated = false;
  }

  if  (loading === ""){
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

componentDidMount() {
  this.props.dispatch(userStateChangeMonitor())

  this.props.dispatch(handleInitialData())
}



render() {


const { loading } = this.props;

if (loading) {
     return (<div> <LoadingBar /> <p>Loading......</p></div>)
}


return (
<Fragment>
  <LoadingBar />
    <Nav />
    {this.props.loading === true
      ? null
      :
        <div className='container'>
          <div className="App">
          <Switch>
            <Route exact path="/" component={withRouter(ViewPolls)} authenticated={this.props.authenticated}/>
            <Route exact path="/login" component={withRouter(Login)} />
            <Route exact path="/signup" component={withRouter(SignUp)} />
            <Route exact path="/add" component={withRouter(AddPoll)}/>
            <Route exact path="/viewpolls" component={withRouter(ViewPolls)}/>
            <Route exact path="/leaderboard" component={withRouter(Leaderboard)}/>
            <Route exact path="/profile" component={UserProfile}/>
            <Route exact path="/logout" component={LogoutNow}/>
            <Route exact path='/question/:id' component={PollDetails} pollDetail='/question/:id' />
            <Route exact path='*' component={My404Component} />
          </Switch>
          </div>
    </div>}
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
