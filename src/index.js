/* eslint-disable import/no-import-module-exports */

import './style.css';
import createDropdownManager from './scripts/dropdown';

const manager = createDropdownManager('dropdown__menu--hidden');

manager.addDropdown(
  document.querySelector('.js-one .button'),
  document.querySelector('.js-one .dropdown__menu'),
  'click',
);

manager.addDropdown(
  document.querySelector('.js-two .button'),
  document.querySelector('.js-two .dropdown__menu'),
  'click',
);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}
