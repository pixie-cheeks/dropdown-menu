<h3 align="center">Dropdown Menu</h3>

## About the Project

This is an npm package made for creating reusable dropdowns. It supports both hover and click events as a trigger.

This was done for an assignment by The Odin Project. Initially had the idea of implementing positioning and elaborate behavioral patterns for the dropdown menus but decided to stop when I realized I was spending way too much time on a simple task. Therefore, this code does the bare minimum of what was required.

I'm still unsure about a lot of things but I did learn a lot as well.

## Getting Started

To install with npm, use the following command:

```sh
npm install @pixie-cheeks/dropdown-menu
```

## Usage

```js
const createDropdownManager = require('@pixie-cheeks/dropdown-menu');

const manager = createDropdownManager('dropdown__menu--hidden');
```

Import the `createDropdownManager` factory function and then use it to create a new dropdown manager. The factory function needs an invisibility class that will be toggled off and on whenever triggered. The following code explains this clearly.

```css
.dropdown__menu--hidden {
  display: none;
}
```

It is assumed that the menu is hidden by default and hence the name invisibility class.

```html
<div class="dropdown js-one">
  <button class="dropdown__trigger button">
    Click here <i class="bx bxs-down-arrow"></i>
  </button>

  <div class="dropdown__menu dropdown__menu--hidden">
    <button class="dropdown__item">Edit</button>
    <button class="dropdown__item">Copy</button>
    <button class="dropdown__item">Delete</button>
  </div>
</div>
```

The trigger in this case is the `.dropdown__trigger` element, and the `.dropdown__menu` is the menu. We'll use a click event for this scenario:

```js
manager.addDropdown(
  document.querySelector('.dropdown__trigger'),
  document.querySelector('.dropdown__menu'),
  'click',
);
```

This will make it so every time we click on the trigger, the dropdown menu's visibility is toggled.

### Removing Dropdowns

Once you are done with it, you can disable the dropdown behavior with this method:

```js
manager.removeDropdown(
  document.querySelector('.dropdown__trigger'),
  document.querySelector('.dropdown__menu'),
  'click',
);
```

## Contributing

If you have a suggestion that would improve this package, feel free o fork the repo and create a pull request. You can also open an issue with the tag "enhancement".

1. Fork the Project
2. Create a new Branch (`git checkout -b improvement`)
3. Commit your Changes (`git commit -m 'Optimize suboptimal code'`)
4. Push to the Branch (`git push origin improvement`)
5. Open a Pull Request

## License

Distributed under the ISC License. See [their page](https://opensource.org/license/isc-license-txt) for more information

## Acknowledgements

- [The Odin Project](https://theodinproject.com)
