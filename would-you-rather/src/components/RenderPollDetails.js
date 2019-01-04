import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logVote } from "../actions/users";
import { handleAddVote } from "../actions/polls";
import { NavLink } from "react-router-dom";
import { formatDate } from "../utils/api";
import My404Component from "./My404Component";


class RenderPollDetails extends Component {
  getAvatar = author => {
    let avatarURL = this.props.users.map(user => {
      if (user.name === author) {
        return user.avatarURL;
      }
    });

    avatarURL = avatarURL.join("");
    return avatarURL;
  };



  getName = id => {
    const { users } = this.props;

    let name = users.filter(user => {
      return user.id === id;
    });

    console.log("### Hey Name", name);
    name = name[0].name
        console.log("### Hey Name", name);
    return name;
  };



  parseVoters(optionOne, optionTwo) {
    let a = optionOne.map(user => this.getName(user));
    let b = optionTwo.map(user => this.getName(user));
    let combined = a.concat(b);
    combined = combined.join(" ");
    return combined;
  }

  roundNumber = num => {
    console.log(num);
    if (num >= 0) {
      return parseFloat(Math.round(num * 100) / 100).toFixed(0);
    } else return "0";
  };

  wasSelected = voters => {
    let changeButtonColor = voters.map(voter => {
      if (voter === this.props.authedUser) {
        return "buttonSelected";
      }
    });

    return changeButtonColor[changeButtonColor.length - 1];
  };

  render() {
    if (this.props.authedUser === "") {
      return (<My404Component/>);
      //this.props.history.push("/login");
    }

    let pollDetailsId = window.location.pathname;
    pollDetailsId = pollDetailsId.replace("/question/", "");
    if (pollDetailsId === null) {
      return <p>This Poll doesn't existd</p>;
    }

    let { polls, authedUser } = this.props;
    if (authedUser == null) {
      authedUser = "Loading...";
    }

    return (
      <div className="poll-info" key={pollDetailsId}>
        <h2>Would You Rather</h2>

        {this.props.polls.map(poll => {
          if (poll.id === pollDetailsId) {
            let avatarURL = this.getAvatar(poll.author);

            return (
              <div key={poll.id}>
                <div>
                  <span className={this.wasSelected(poll.optionOne.votes)}>
                    Question 1: {poll.optionOne.text}
                    <br />
                  </span>
                  Votes: {poll.optionOne.votes.length}
                  <br />
                  {this.roundNumber(
                    (poll.optionOne.votes.length /
                      (poll.optionOne.votes.length +
                        poll.optionTwo.votes.length)) *
                      100
                  )}
                  % <br />
                  <br />
                  <span className={this.wasSelected(poll.optionTwo.votes)}>
                    Question 2: {poll.optionTwo.text}
                    <br />
                  </span>
                  Votes: {poll.optionTwo.votes.length}
                  <br />
                  {this.roundNumber(
                    (poll.optionTwo.votes.length /
                      (poll.optionOne.votes.length +
                        poll.optionTwo.votes.length)) *
                      100
                  )}
                  % <br />
                  <br />
                  Created: {formatDate(poll.timestamp)}
                  <br />
                  ID: {poll.id}
                  <br />
                  Author: {poll.author}
                  <br />
                  <img src={avatarURL} height="50" width="50" alt="avatar" />
                  <br />
                  <br />
                  Voters:
                  <br />{" "}
                  {this.parseVoters(poll.optionOne.votes, poll.optionTwo.votes)}
                </div>
              </div>
            );
          } else {
            return;
          }
        })}
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
  return {
    id: Object.keys(polls),
    polls: Object.values(polls),
    authedUser: authedUser,
    users: Object.values(users),
    views
  };
}

export default withRouter(connect(mapStateToProps)(RenderPollDetails));
