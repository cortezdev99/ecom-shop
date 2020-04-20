import React, { Component } from 'react'

import { connect } from 'react-redux'
import * as actions from '../../actions'
import ShopSearchBar from './ShopSearchBar'
import ShopProduct from './ShopProduct'

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

  onSubmit = (fields) => {
    console.log(fields)
    this.props.filterProductsWithQuery(fields)
  }

  render() {
    const { filteredProducts } = this.props
    return (
      <div className='shop'>
        <ShopSearchBar className='shop__search-bar' onSubmit={this.onSubmit}/>
        <div className='shop__products'>
          {
              filteredProducts.map(product => {
                return (
                  <ShopProduct {...product} key={product._id}/>
                )
              })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const{ categories, filteredProducts } = state.shop
  return {
    categories,
    filteredProducts
  }
}

export default connect(mapStateToProps, actions)(Shop)
