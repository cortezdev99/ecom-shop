import React, { Component } from 'react'

import { connect } from 'react-redux'
import * as actions from '../../actions'

class Shop extends Component {

  componentDidMount() {
    const headerLinks = [
      {
        _id: 0,
        title: 'Login',
        path: '/signin'
      }
    ]
    this.props.setHeaderLinks(headerLinks)
    this.props.fetchShopCategories();
    this.props.fetchShopProducts()
  }
  
  shouldComponentUpdate(nextProps) {
    if (this.props != nextProps) {
      this.props.setNavbarLinks(nextProps.categories, (_id) => this.props.filterProductsWithCategoryId(_id))
    }
    return true
  }

  render() {
    return (
      <div className='shop'>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const{ categories } = state.shop
  return {
    categories
  }
}

export default connect(mapStateToProps, actions)(Shop)
