import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

import PageTitle from '../PageTitle'

class review extends Component {

  componentDidMount() {
    this.props.setHeaderLinks([])
    this.props.setNavbarLinks([])
  }

  render() {
    return (
      <div className='review'>
        <PageTitle className='review__page-title' title='Order Review' />
      </div>
    )
  }
}

export default connect(null, actions)(review)
