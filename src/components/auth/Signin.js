import React, { Component } from 'react'
import { connect } from 'react-redux'

import SigninForm from './SigninForm'
import PageTitle from '../PageTitle'
import * as actions from '../../actions'

class Signin extends Component {

  componentDidMount() {
    this.props.setHeaderLinks([])
    this.props.setNavbarLinks([])
  }

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

export default connect(null, actions)(Signin)