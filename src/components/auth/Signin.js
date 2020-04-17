import React, { Component } from 'react'
import SigninForm from './SigninForm'

class Signin extends Component {
  render() {
    return (
      <div className='sign-in'>
        <SigninForm className="sign-in__form" />
      </div>
    )
  }
}

export default Signin