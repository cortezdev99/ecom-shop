import React, { Component } from 'react'

import SigninForm from './SigninForm'
import PageTitle from '../PageTitle'

class Signin extends Component {

  onSubmit = (fields) => {
    console.log(fields)
  }

  render() {
    return (
      <div className='sign-in'>
        <PageTitle className='sign-in__page-title' title='Login' />
        <SigninForm onSubmit={this.onSubmit} className="sign-in__form" />
      </div>
    )
  }
}

export default Signin