import React, { Component, PropTypes } from 'react';

export default class About extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div className='container'>
        <div className='page-heading'>
          <h1>About Us</h1>
          <p>We're so neat..</p>
        </div>
      </div>
    );
  }
}
