import React, { Component, PropTypes } from 'react';

export default class NotFound extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div className='container'>
        <div className='page-heading'>
          <h1>Ruh oh!</h1>
          <p>The page you were looking for isn't here.</p>
        </div>
      </div>
    );
  }
}
