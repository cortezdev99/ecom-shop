import React, { Component } from 'react'
import { connect } from 'react-redux'

class Navbar extends Component {
  render() {
    const { navbarLinks } = this.props 
    return (
      <div className="navbar">
        {
          navbarLinks.map(link => {
            return  (
              <a className={`navbar__link ${link.active ? 'green-text' : ''}`} key={link.id} onClick={() => console.log('trying to switch tabs')}>
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

export default connect(mapStateToProps)(Navbar)