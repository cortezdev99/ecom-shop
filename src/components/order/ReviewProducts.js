import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions'
import ReviewProduct from './ReviewProduct'

class ReviewProducts extends Component {
  render() {
    const { className } = this.props
    return (
      <div className={`${className} review-products`}>
        {
          this.props.cartProducts.map(cartProduct => {
            return (
              <ReviewProduct
                key={cartProduct._id} 
                {...cartProduct}
              />
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { cartProducts } = state.user
  return { cartProducts }
}

export default connect(mapStateToProps, actions)(ReviewProducts)
