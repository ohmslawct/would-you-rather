import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddPoll } from '../actions/polls'
import { withRouter } from 'react-router-dom'

class AddPoll extends Component {
  state = {
    text: '',
    textOne: '',
    textTwo: '',
    toHome: false,
  }

handleChange = (e) => {

const text = e.target.value

if (e.target.id==="optionOne") {
  this.setState( () => ({
    textOne : text
  }))
}

if (e.target.id==="optionTwo") {
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
    const { dispatch, id } = this.props
    var text = { textOne: {textOne} , textTwo: {textTwo}};

    const { authedUser } = this.props;

    dispatch(handleAddPoll(text, id, authedUser ))

    this.setState(() => ({
      text: '',
      textOne:'',
      textTwo:'',
    }))

        this.props.history.push("/");

  } // handleSubmit

  render() {
    const { text, textOne, textTwo } = this.state

    if(this.props.authedUser === ""){
      this.props.history.push("/");
    }

    const textLeftOptionOne = 400 - textOne.length;
    const textLeftOptionTwo = 400 - textTwo.length;

    return (
      <div>
        <h2 className='center'>Create Poll</h2>
        <form className='new-poll' onSubmit={this.handleSubmit}>
        <p>
          Would you rather?
        </p>
          <textarea
            rows="2" cols="50"
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
            rows="2" cols="50"
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
          <br/>
          <br/>
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

export default withRouter(connect(mapStateToProps)(AddPoll))
