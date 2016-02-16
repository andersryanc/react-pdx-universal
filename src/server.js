/**
 * Nodejs entry point, transpiled through Babel for ES6.
 */

import path from 'path';
import http from 'http';
import Express from 'express';
import favicon from 'serve-favicon';
import compression from 'compression';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Html from './components/Html';
import routes from './routes';
import { match, RouterContext } from 'react-router';

const app = new Express();
const server = new http.Server(app);

app.use(compression());
app.use(favicon(path.join(__dirname, '..', 'static', 'favicon.ico')));

app.use(require('serve-static')(path.join(__dirname, '..', 'static')));
app.use(require('serve-static')(path.join(__dirname, '..', 'dist')));

app.use((req, res) => {
  match({ routes: routes, location: req.originalUrl }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      let status = renderProps.routes.find(ele => ele.status === 404) ? 404 : 200;

      const props = {
        component: <RouterContext {...renderProps} />,
      };

      const renderedHtml = ReactDOM.renderToString(<Html {...props} />);
      const response = `<!DOCTYPE html>${renderedHtml}`;

      res.status(status).send(response);
    } else {
      res.status(404).send('Not found');
    }
  });
});

const PORT = 3000;
server.listen(PORT, (err) => {
  /* eslint-disable no-console */
  if (err) {
    console.error(err);
  }
  console.info(`==> 💻  Open \x1b[33mhttp://localhost:${PORT}\x1b[0m in a browser to view the app.`);
  /* eslint-enable */
});

