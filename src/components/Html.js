import React, { Component } from 'react';
import ReactDOM from 'react-dom/server';

const { node, string } = React.PropTypes;

export default class Html extends Component {
  static propTypes ={
    component: node.isRequired,
    scriptTag: string,
  }

  render() {
    const content = ReactDOM.renderToString(this.props.component);
    return (
      <html>
        <head>
          <title>React Universal Rendering</title>
          <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css' />
        </head>
        <body style={{ paddingTop: 20 }}>
          <div id='root' dangerouslySetInnerHTML={{ __html: content }}/>
          <div dangerouslySetInnerHTML={{ __html: this.props.scriptTag }} />
          <script src='/client.js' charSet='UTF-8' />
        </body>
      </html>
    );
  }
}
