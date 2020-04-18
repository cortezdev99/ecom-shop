import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions'
import PurchaseHistory from './PurchaseHistory'
import AccountInfomation from './AccountInfo'

class Account extends Component {

  componentDidMount() {
    const navbarLinks = [
      {
        _id: 0,
        title: 'Purchase History',
        active: false,
        component: <PurchaseHistory />
      },
      {
        _id: 1,
        title: 'Account Information',
        active: true,
        component: <AccountInfomation />
      }
    ]

    this.props.setHeaderLinks([])
    this.props.setNavbarLinks(navbarLinks)
  }

  renderContent = () => {
    let jsx;
    if (this.props.navbarLinks) {
      this.props.navbarLinks.map(link => {
        if(link.active) {
          jsx = link.component
        }
      })
    }
    return jsx
  }

  render() {
    return (
      <div>
        {
          this.renderContent()
        }
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  const { headerLinks, navbarLinks } = state.headerNavbar
  return {
    headerLinks,
    navbarLinks
  }
}

export default connect(mapStateToProps, actions)(Account)
