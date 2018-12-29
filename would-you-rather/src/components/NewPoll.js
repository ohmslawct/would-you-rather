import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddPoll } from '../actions/polls'
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import firebaseApp from "../firebaseApp";


class NewPoll extends Component {
  state = {
    text: '',
    textOne: '',
    textTwo: '',
    toHome: false,
  }

  handleChange = (e) => {

    const text = e.target.value
console.log("Hey e", e);
console.log("Hey text", text, e.target);

if (e.target.id=="optionOne") {
  this.setState( () => ({
    textOne : text
  }))
}


if (e.target.id=="optionTwo") {
  this.setState( () => ({
    textTwo : text
  }))
}


    this.setState( () => ({
      text
    }))



  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { textOne, textTwo } = this.state

    const author = firebaseApp.auth().currentUser.email;

    // get dispatch and id from props which is handled by connnect
    const { dispatch, id } = this.props

    console.log("ID: ", id);
    console.log("Author: ", author);

    // call the ACTION to add poll.


    var car = {type:"Fiat", model:"500", color:"white"};

    var text = { textOne: {textOne} , textTwo: {textTwo}};


    dispatch(handleAddPoll(text, id, author))

    this.setState(() => ({
      text: '',
      textOne:'',
      textTwo:'',
    }))

  } // handleSubmit

  render() {
    const { text, textOne, textTwo, toHome } = this.state

    if(this.props.authedUser === ""){
      this.props.history.push("/");
    }

    const textLeftOptionOne = 400 - textOne.length;
    const textLeftOptionTwo = 400 - textTwo.length;

    return (
      <div>
        <h3 className='center'>Create Poll</h3>
        <form className='new-poll' onSubmit={this.handleSubmit}>
        <p>
          Would you rather?
        </p>
          <textarea
            id="optionOne"
            placeholder="Option 1"
            value={textOne}
            onChange={this.handleChange}
            className='textarea'
            maxLength={400}
          />
          {textOne >= 400 && (
            <div className='poll-length'>
              {textLeftOptionOne}
            </div>
          )}
          <p></p>

          <textarea
            id="optionTwo"
            placeholder="Option 2"
            value={textTwo}
            onChange={this.handleChange}
            className='textarea'
            maxLength={400}
          />
          {textTwo >= 400 && (
            <div className='poll-length'>
              {textLeftOptionTwo}
            </div>
          )}

          <button
            className='btn'
            type='submit'
            disabled={text === ''}>
              Submit
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps({authedUser}) {
  return{
    authedUser : authedUser
  }
}

export default withRouter(connect(mapStateToProps)(NewPoll))
