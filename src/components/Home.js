import React, { Component, PropTypes } from 'react';

export default class Home extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div className='container'>
        <div className='page-heading'>
          <h1>Welcome Home.</h1>
          <p>Huzzah!</p>
        </div>
      </div>
    );
  }
}
