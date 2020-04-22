import React, { Component } from 'react'
import { connect } from 'react-redux'

import PageTitle from '../PageTitle'
import * as actions from '../../actions'
import PaymentForm from './PaymentForm'

class Payment extends Component {

  componentDidMount() {
    this.props.setHeaderLinks([])
    this.props.setNavbarLinks([])
  }

  onSubmit = (fields) => {
    console.log(fields)
  }

  render() {
    return (
      <div className='payment'>
        <PageTitle className='payment__page-title' title='Payment Information' />
        <PaymentForm onSubmit={this.onSubmit} className="payment__form" />
      </div>
    )
  }
}

export default connect(null, actions)(Payment)
