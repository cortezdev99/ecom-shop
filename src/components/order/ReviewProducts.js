import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions'

class ReviewProducts extends Component {
  render() {
    const { className } = this.props
    return (
      <div className={`${className} review-products`}>
        {
          this.props.cartProducts.map(cartProduct => {
            return <h1 key={cartProduct._id}>{cartProduct.product.title}</h1>
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
