/* eslint-disable import/no-import-module-exports */

import 'normalize.css';
import './style.css';

console.log('Check whether everything is working or not.');

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept();
  }
}
