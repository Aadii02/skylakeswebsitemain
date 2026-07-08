/* eslint-disable react-refresh/only-export-components -- server-only entry, not part of the HMR graph */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App.jsx';

export { routes, SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from './data/routeMeta.js';

export function render(url) {
  return renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
}
