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
    // set the header links
    // fetch shop products action creator
    // fetch navbar links
      // set the navbar links
      // filter products with links 
  }

  render() {
    return (
      <div className='shop'>
        {/* shop search bar component */}
        {/* shop product component */}
        {/* shop cart component */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps, actions)(Shop)
