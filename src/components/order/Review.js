import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

import PageTitle from '../PageTitle'
import ReviewForm from './ReviewForm'

class review extends Component {

  componentDidMount() {
    this.props.setHeaderLinks([])
    this.props.setNavbarLinks([])
  }

  handleSubmit = (fields) => {
    console.log(fields)
  }

  render() {
    return (
      <div className='review'>
        <PageTitle className='review__page-title' title='Order Review' />
        <ReviewForm className='review__form' onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default connect(null, actions)(review)
