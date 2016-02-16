import React, { Component, PropTypes } from 'react';

const { array } = PropTypes;
export default class Docs extends Component {
  static propTypes = {
    docs: array,
  }

  static defaultProps = {
    docs: [],
  }

  static async loadProps(params, cb) {
    const resp = await fetch('http://localhost:3000/getDocs');
    const docs = await resp.json();
    cb(null, { docs });
  }

  render() {
    return (
      <div>
        <div>Here are our docs:</div>
        <ul>
          {this.props.docs.map((doc, i) => <li key={i}>{doc}</li>)}
        </ul>
      </div>
    );
  }
}
