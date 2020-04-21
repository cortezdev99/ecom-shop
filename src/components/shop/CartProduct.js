import React, { Component } from 'react'
import Quantity from '../quantity'
import GreenPriceTag from '../GreenPriceTag'

class CartProduct extends Component {
  render() {
    const { className, product, quantity } = this.props
    const { title, price } = product
    return (
      <div className={`${className} cart-product`}>
        <img className='cart-product__image' src='http://via.placeholder.com/130x130' />
        <div className='cart-product__title'>{title}</div>
        <Quantity className='cart-product__quantity' quantity={quantity}/>
        <a className='cart-product__remove'>Remove</a>
        <GreenPriceTag title={price} className='cart-product__price' />
      </div>
    )
  }
}

export default CartProduct
