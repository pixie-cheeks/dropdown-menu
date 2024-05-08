/* eslint-disable import/no-import-module-exports */

import './style.css';
import createDropdown from './scripts/dropdown';

createDropdown(
  document.querySelector('.button'),
  document.querySelector('.dropdown__menu'),
  'dropdown__menu--hidden',
);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}
