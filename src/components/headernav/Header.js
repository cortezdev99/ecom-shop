import React, { Component } from 'react'
import { connect } from 'react-redux'

import history from '../../history'

class Header extends Component {
  render() {
    const { headerLinks } = this.props
    return (
      <div className="header">
        <img className="header__img" src="https://via.placeholder.com/50x50" />
        <div className='header__links'>
          {
            headerLinks.map(link => {
              return  (
                <a className='header__link' key={link._id} onClick={() => history.push(link.path)}>
                  {link.title}
                </a>
              )
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { headerLinks } = state.headerNavbar
  return {
    headerLinks
  }
}

export default connect(mapStateToProps)(Header)