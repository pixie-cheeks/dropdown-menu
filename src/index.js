/* eslint-disable import/no-import-module-exports */

import './style.css';
import './scripts/dropdown';

console.log('Check whether everything is working or not.');

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept();
  }
}
