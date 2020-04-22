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
    let subtotal = 0
    this.props.cartProducts.map(cartProduct => {
      subtotal += cartProduct.quantity * cartProduct.product.price
    })
    return (
      <div className='review'>
        <PageTitle className='review__page-title' title='Order Review' />
        <ReviewForm className='review__form' onSubmit={this.handleSubmit} subtotal={subtotal} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { cartProducts } = state.user
  return {
    cartProducts
  }
}

export default connect(mapStateToProps, actions)(review)
