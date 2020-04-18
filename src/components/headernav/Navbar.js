import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions'

class Navbar extends Component {
  render() {
    const { navbarLinks } = this.props 
    return (
      <div className="navbar">
        {
          navbarLinks.map(link => {
            return  (
              <a className={`navbar__link ${link.active ? 'green-text' : ''}`} key={link._id} onClick={() => this.props.changeNavbarActive(link._id)}>
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
  const { navbarLinks } = state.headerNavbar
  return {
    navbarLinks
  }
}

export default connect(mapStateToProps, actions)(Navbar)