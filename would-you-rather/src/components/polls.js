import React, { Component } from 'react'
import { connect } from 'react-redux'

class Polls extends Component {
  render() {
    return (
      <div>
        <h3 className='center'>POLLS</h3>

        <p>
          Answered Polls
        </p>


        <p>
         Unanswered Polls
        </p>


      </div>
    )
  }
}

function mapStateToProps () {
  return {
  }
}

export default connect()(Polls)
