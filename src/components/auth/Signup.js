import React, { Component } from 'react'
import { connect } from 'react-redux'

import SignupForm from './SignupForm'
import PageTitle from '../PageTitle'
import * as actions from '../../actions'

class Signup extends Component {

  componentDidMount() {
    this.props.setHeaderLinks([])
    this.props.setNavbarLinks([])
  }

  onSubmit = (fields) => {
    console.log(fields)
  }

  render() {
    return (
      <div className='sign-up'>
        <PageTitle className='sign-up__page-title' title='Register' />
        <SignupForm onSubmit={this.onSubmit} className="sign-up__form" />
      </div>
    )
  }
}

export default connect(null, actions)(Signup)
