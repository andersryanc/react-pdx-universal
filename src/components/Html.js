import React, { Component } from 'react';
import ReactDOM from 'react-dom/server';

const { node } = React.PropTypes;

export default class Html extends Component {
  static propTypes ={
    component: node.isRequired
  }

  render() {
    const content = ReactDOM.renderToString(this.props.component);
    return (
      <html>
        <head>
          <title>React Universal Rendering</title>
          <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css' />
        </head>
        <body>
          <div id='root' dangerouslySetInnerHTML={{ __html: content }}/>
          <script src='/client.js' charSet='UTF-8' />
        </body>
      </html>
    );
  }
}
