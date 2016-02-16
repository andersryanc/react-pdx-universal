import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const { node } = PropTypes;

export default class MyApp extends Component {
  static propTypes = {
    children: node.isRequired
  }

  render() {
    const activeStyle = { fontWeight: 'bold' };

    return (
      <div className='container'>
        <nav className='navbar navbar-default'>
          <ul className='nav navbar-nav'>
            <li><Link to='home' activeStyle={activeStyle}>Home</Link></li>
            <li><Link to='docs' activeStyle={activeStyle}>Documentation</Link></li>
            <li><Link to='about' activeStyle={activeStyle}>About</Link></li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    );
  }
}
