const eventBinder = {
  eventCache: [],
  bindEvent(trigger, event, listener) {
    trigger.addEventListener(event, listener);
    this.eventCache.push({ trigger, event, listener });
  },
  unbindEvent(trigger, event) {
    this.eventCache
      .filter((elem) => elem.trigger === trigger && elem.event === event)
      .forEach((elem) => {
        elem.trigger.removeEventListener(elem.event, elem.listener);
      });
  },
};

function createDropdownManager(invisibilityClass) {
  let visibleDropdown = null;

  const hideDropdown = (menu) => {
    menu.classList.add(invisibilityClass);
  };

  const showDropdown = (menu) => {
    menu.classList.remove(invisibilityClass);
  };

  const bindHoverEvents = (button, menu) => {
    eventBinder.bindEvent(button, 'mouseenter', () => {
      showDropdown(menu, invisibilityClass);
    });
    eventBinder.bindEvent(button, 'mouseleave', (e) => {
      if (e.toElement.closest(`.${menu.className}`)) return;

      hideDropdown(menu, invisibilityClass);
    });

    eventBinder.bindEvent(menu, 'mouseleave', () => {
      hideDropdown(menu, invisibilityClass);
    });
  };

  const bindClickEvents = (button, menu) => {
    eventBinder.bindEvent(button, 'click', () => {
      if (visibleDropdown === null) {
        showDropdown(menu);
        visibleDropdown = menu;
        return;
      }

      if (visibleDropdown === menu) {
        hideDropdown(menu);
        visibleDropdown = null;
      } else {
        hideDropdown(visibleDropdown);
        showDropdown(menu);
        visibleDropdown = menu;
      }
    });
  };

  const unbindHoverEvents = (trigger, menu) => {
    eventBinder.unbindEvent(trigger, 'mouseenter');
    eventBinder.unbindEvent(trigger, 'mouseleave');
    eventBinder.unbindEvent(menu, 'mouseleave');
  };
  const unbindClickEvents = (trigger) => {
    eventBinder.unbindEvent(trigger, 'click');
  };

  const addDropdown = (trigger, menu, triggerEvent = 'click') => {
    if (!/^(click|hover)$/g.test(triggerEvent)) {
      throw new Error(
        'Only accepted triggerEvent parameters are "hover" or "click".',
      );
    }

    if (triggerEvent === 'click') {
      bindClickEvents(trigger, menu);
    } else {
      bindHoverEvents(trigger, menu);
    }
  };

  const removeDropdown = (trigger, menu, triggerEvent) => {
    if (!/^(click|hover)$/g.test(triggerEvent)) {
      throw new Error(
        'Only accepted triggerEvent parameters are "hover" or "click".',
      );
    }

    if (triggerEvent === 'click') {
      unbindClickEvents(trigger);
    } else {
      unbindHoverEvents(trigger, menu);
    }
  };

  return { addDropdown, removeDropdown };
}

export default createDropdownManager;
