// modules/NavLink.js
import React, { Component } from 'react'
import { Link } from 'react-router'

class NavLink extends Component {
  render() {
    let isActive = this.context.router.isActive(this.props.to, true);
    let className = isActive ? 'active nav-item' : 'nav-item';
    return <li className={className}><Link {...this.props} activeClassName="active"/></li>
  }
}

NavLink.contextTypes = {
  router: React.PropTypes.object
};

export default NavLink;
