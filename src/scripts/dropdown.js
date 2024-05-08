const bindHoverEvents = (button, menu, visibilityClass) => {
  button.addEventListener('mouseenter', () => {
    menu.classList.remove(visibilityClass);
  });

  button.addEventListener('mouseleave', (e) => {
    if (e.toElement.closest(`.${menu.className}`)) return;
    menu.classList.add(visibilityClass);
  });

  menu.addEventListener('mouseleave', () => {
    menu.classList.add(visibilityClass);
  });
};

const createDropdown = (
  button,
  menu,
  visibilityClass,
  triggerEvent = 'click',
) => {
  if (!/^(click|hover)$/g.test(triggerEvent)) {
    throw new Error('Only accepted event parameters are hover or click.');
  }

  if (triggerEvent === 'hover') {
    bindHoverEvents(button, menu, visibilityClass);
    return;
  }
  button.addEventListener(triggerEvent, () => {
    menu.classList.toggle(visibilityClass);
  });
};

export default createDropdown;
