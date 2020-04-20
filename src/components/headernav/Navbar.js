import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions'

class Navbar extends Component {

  handleOnClick = (link) => {
    this.props.changeNavbarActive(link._id)
    if (this.props.onClick) {
      this.props.onClick(link._id)
    }
  }

  render() {
    const { navbarLinks } = this.props 
    return (
      <div className="navbar">
        {
          navbarLinks.map(link => {
            return  (
              <a className={`navbar__link ${link.active ? 'green-text' : ''}`} key={link._id} onClick={() => this.handleOnClick(link)}>
                {link.title}
              </a>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { navbarLinks, onClick } = state.headerNavbar
  return {
    navbarLinks,
    onClick
  }
}

export default connect(mapStateToProps, actions)(Navbar)