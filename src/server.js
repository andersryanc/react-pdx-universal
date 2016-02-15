/**
 * Nodejs entry point, transpiled through Babel for ES6.
 */

import path from 'path';
import http from 'http';
import Express from 'express';
import favicon from 'serve-favicon';
import compression from 'compression';

const app = new Express();
const server = new http.Server(app);

app.use(compression());
app.use(favicon(path.join(__dirname, '..', 'static', 'favicon.ico')));

app.use(require('serve-static')(path.join(__dirname, '..', 'static')));
app.use(require('serve-static')(path.join(__dirname, '..', 'dist')));

const PORT = 3000;
server.listen(PORT, (err) => {
  /* eslint-disable no-console */
  if (err) {
    console.error(err);
  }
  console.info(`==> 💻  Open \x1b[33mhttp://localhost:${PORT}\x1b[0m in a browser to view the app.`);
  /* eslint-enable */
});

