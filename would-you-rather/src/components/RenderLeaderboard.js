import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class RenderLeaderboard extends Component {
  render() {
    let { authedUser } = this.props;

    if (authedUser == null) {
      authedUser = "Loading...";
    }

    return (
      <div className="">
        <br />

        {this.props.data.map(user => {
          return (
            <div className="leaderboard" key={user.id}>
              <figure key={user.id}>
                <img src={user.avatarURL} height="50" width="50" alt="avatar" />
                <figcaption>
                  {user.name}
                  <br />
                  Q: {user.questions} A: {user.answers}
                </figcaption>
              </figure>
            </div>
          );
        })}

        <br />
      </div>
    ); // return
  } // render
} // component

function mapStateToProps(
  { authedUser, users, polls, views },
  id,
  pollId,
  myPoll
) {
  let data = [];

  Object.keys(users).map(id => {
    data.push({
      id: id,
      name: users[id].name,
      avatarURL: users[id].avatarURL,
      questions: Object.keys(users[id].questions).length,
      answers: Object.keys(users[id].answers).length
    });
  });

  data.sort(function(a, b) {
    return b.answers + b.questions - (a.answers + a.questions);
  });

  return {
    id: Object.keys(polls),
    polls: Object.values(polls),
    authedUser: authedUser,
    users: Object.values(users),
    views,
    data
  };
}

export default withRouter(connect(mapStateToProps)(RenderLeaderboard));
