import React, { Component } from 'react'

import { UnderlinedTitle, InfoTitle } from './infoHelp'
import { connect } from 'react-redux';

class OrderSummary extends Component {
  render() {
    const { className } = this.props
    let subtotal = 0;
    let tax = 0.16;
    let cartAmount = 0
    this.props.cartProducts.map(cartProduct => {
      subtotal += cartProduct.quantity * cartProduct.product.price
      cartAmount += cartProduct.quantity
    })
    return (
      <div className={`${className} order-summary`}>
        <UnderlinedTitle className='order-summary__title' title='Order Summary' />
        <InfoTitle className='order-summary__subtotal' title={`${cartAmount} stickers`} value={`${subtotal}`} />
        <InfoTitle className='order-summary__tax-shipping' title='Taxes & Shipping' value={`${tax}`} />
        <InfoTitle className='order-summary__total info-title-green' title='Total' value={`${subtotal + tax}`} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { cartProducts } = state.user;
  return { cartProducts }
}

export default connect(mapStateToProps)(OrderSummary)
