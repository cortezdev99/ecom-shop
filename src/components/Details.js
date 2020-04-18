import React, { Component } from 'react'

class Details extends Component {

  renderChildren = () => {
    const { links, requires } = this.props
    let children = [];

    if (links) {
      children = links.map(link => {
        return <a key={link._id} onClick={link.onClick} className='details__link'>{link.title}</a>
      })
    } else {
      children = requires.map(require => {
        return <div key={require._id} className='details__item'>{require.title}</div>
      })
    }
    return children;
  }

  render() {
    const { className, title } = this.props
    return (
      <div className={`${className} details`}>
        <div className='details__title'>{title}</div>
        <div className="details__links">
          {
            this.renderChildren()
          }
        </div>
      </div>
    )
  }
}

export default Details
