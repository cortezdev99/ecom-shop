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
  console.log(process.env.REACT_APP_API_KEY)
  console.log(process.env.REACT_APP_AUTHDOMAIN)
  console.log(process.env.REACT_APP_DATABASEURL)
  console.log(process.env.REACT_APP_PROJECTID)
  console.log(process.env.REACT_APP_STORAGEBUCKET)
  console.log(process.env.REACT_APP_MESSAGING_SENDER_ID)
  console.log(process.env.REACT_APP_APP_ID)
  console.log(process.env.REACT_APP_MEASUREMENT_ID)
  const { navbarLinks, onClick } = state.headerNavbar
  return {
    navbarLinks,
    onClick
  }
}

export default connect(mapStateToProps, actions)(Navbar)