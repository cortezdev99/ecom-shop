import React, { Component } from 'react'
import { connect } from 'react-redux'

import PageTitle from '../PageTitle'
import * as actions from '../../actions'
import ShippingForm from './ShippingForm'

class Shipping extends Component {

  componentDidMount() {
    this.props.setHeaderLinks([])
    this.props.setNavbarLinks([])
  }

  onSubmit = (fields) => {
    console.log(fields)
  }

  render() {
    return (
      <div className='shipping'>
        <PageTitle className='shipping__page-title' title='Shipping Address' />
        <ShippingForm onSubmit={this.onSubmit} className="shipping__form" />
      </div>
    )
  }
}

export default connect(null, actions)(Shipping)
