import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logVote } from "../actions/users";

import { handleAddVote } from "../actions/polls";
import { NavLink } from "react-router-dom";

class Poll extends Component {
  handleClick = e => {
    e.preventDefault();
    let questionNumber = e.target.name;
    let pollId = e.target.id;

    // get dispatch and id from props which is handled by connnect
    const { dispatch, authedUser } = this.props;

    dispatch(
      handleAddVote({
        pid: pollId,
        questionNumber: questionNumber,
        authedUser: this.props.authedUser
      })
    );

    let user = this.getName(authedUser);

    dispatch(logVote(authedUser, pollId, user));
  }; // handleclick

  getName = id => {
    const { users } = this.props;

    let name = users.filter(user => {
      return user.id === id;
    });

    name = name[0].name;
    return name;
  };

  getAvatar = author => {
    const { users } = this.props;
    let avatarURL = this.props.users.map(user => {
      if (user.name === author) {
        return user.avatarURL;
      } else
        return "";
    });

    avatarURL = avatarURL.join("");
    return avatarURL;
  };

  roundNumber = num => {
    return parseFloat(Math.round(num * 100) / 100).toFixed(0);
  };

  wasSelected = voters => {
    let changeButtonColor = voters.map(voter => {
      if (voter === this.props.authedUser) {
        return "buttonSelected";
      } else return "";
    });

    return changeButtonColor[changeButtonColor.length - 1];
  };

  pollsDisplay = poll => {
    switch (this.props.views.pollView) {
      case "answered":
        if (
          poll.optionOne.votes.length !== 0 ||
          poll.optionTwo.votes.length !== 0
        ) {
          return (
            <div key={poll.id}>
              <button
                name="optionOne"
                id={poll.id}
                onClick={this.handleClick}
                className={this.wasSelected(poll.optionOne.votes)}
              >
                {poll.optionOne.votes.length}{" "}
              </button>{" "}
              {poll.optionOne.text}{" "}
              {this.roundNumber(
                (poll.optionOne.votes.length /
                  (poll.optionOne.votes.length + poll.optionTwo.votes.length)) *
                  100
              )}{" "}
              {"%"}
              <br />
              <button
                name="optionTwo"
                id={poll.id}
                onClick={this.handleClick}
                className={this.wasSelected(poll.optionTwo.votes)}
              >
                {poll.optionTwo.votes.length}{" "}
              </button>{" "}
              {poll.optionTwo.text}{" "}
              {this.roundNumber(
                (poll.optionTwo.votes.length /
                  (poll.optionOne.votes.length + poll.optionTwo.votes.length)) *
                  100
              )}{" "}
              {"%"}
              <div className="author">
                {" "}
                <img
                  src={this.getAvatar(poll.author)}
                  height="20"
                  width="20"
                  alt="avatar"
                />
                {poll.author}{" "}
                <NavLink to={`/question/${poll.id}`}>details</NavLink>
              </div>
              <br />
            </div>
          );
        }
        break;

      case "all":
        return (
          <div key={poll.id}>
            <button
              name="optionOne"
              id={poll.id}
              onClick={this.handleClick}
              className={this.wasSelected(poll.optionOne.votes)}
            >
              {poll.optionOne.votes.length}{" "}
            </button>{" "}
            {poll.optionOne.text} <br />
            <button
              name="optionTwo"
              id={poll.id}
              onClick={this.handleClick}
              className={this.wasSelected(poll.optionTwo.votes)}
            >
              {poll.optionTwo.votes.length}{" "}
            </button>{" "}
            {poll.optionTwo.text} <br />
            <div className="author">
              {" "}
              <img
                src={this.getAvatar(poll.author)}
                height="20"
                width="20"
                alt="avatar"
              />{" "}
              {poll.author}{" "}
              <NavLink to={`/question/${poll.id}`}>details</NavLink>{" "}
            </div>
            <br />
          </div>
        );

      // show new as default
      default:
        if (
          poll.optionOne.votes.length === 0 &&
          poll.optionTwo.votes.length === 0
        ) {
          return (
            <div key={poll.id}>
              <button
                name="optionOne"
                id={poll.id}
                onClick={this.handleClick}
                className={this.wasSelected(poll.optionOne.votes)}
              >
                {poll.optionOne.votes.length}{" "}
              </button>{" "}
              {poll.optionOne.text} <br />
              <button
                name="optionTwo"
                id={poll.id}
                onClick={this.handleClick}
                className={this.wasSelected(poll.optionTwo.votes)}
              >
                {poll.optionTwo.votes.length}{" "}
              </button>{" "}
              {poll.optionTwo.text} <br />
              <div className="author">
                {" "}
                <img
                  src={this.getAvatar(poll.author)}
                  height="20"
                  width="20"
                  alt="avatar"
                />{" "}
              </div>
              <br />
            </div>
          );
        } else {
        }

        break;
    }
  };

  render() {
    let { polls, authedUser } = this.props;

    if (authedUser == null) {
      authedUser = "Loading...";
    }

    polls.sort((a, b) => b.timestamp - a.timestamp);

    return (
      <div className="poll-info">
        {polls.map(poll => {
          return this.pollsDisplay(poll);
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

  return {
    id: Object.keys(polls),
    polls: Object.values(polls),
    authedUser: authedUser,
    users: Object.values(users),
    views,
    data
  };
}

export default withRouter(connect(mapStateToProps)(Poll));
