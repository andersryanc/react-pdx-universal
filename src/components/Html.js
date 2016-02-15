import React, { Component } from 'react';

export default class Html extends Component {
  render() {
    return (
      <html>
        <head>
          <title>React Universal Rendering</title>
          <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css' />
        </head>
        <body>
          <div id='root'></div>
          <script src='/client.js' charSet='UTF-8' />
        </body>
      </html>
    );
  }
}
