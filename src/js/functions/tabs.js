import scrollWithOffset from './scrollWithOffset';

export function initTabsSimple(triggerSelector, parentSelector, onChange) {
  const triggerNodes = document.querySelectorAll(triggerSelector);
  const parentNodes = document.querySelectorAll(parentSelector);

  if (triggerNodes.length > 0 && parentNodes.length > 0) {
    const needInit = Array.from(triggerNodes).every(
      (triggerNode) => !triggerNode.classList.contains('is-active')
    );

    if (needInit) {
      triggerNodes[0].classList.add('is-active');
      parentNodes[0].classList.add('is-active');
    }

    triggerNodes.forEach((triggerNode) => {
      triggerNode.addEventListener('click', (e) => {
        // e.preventDefault();

        if (triggerNode.classList.contains('is-active')) return;

        const activeTrigger = document.querySelector(
          triggerSelector + '.is-active'
        );
        const activeParent = document.querySelector(
          parentSelector + '.is-active'
        );

        const id = triggerNode.getAttribute('data-tabs');

        activeTrigger.classList.remove('is-active');
        activeParent.classList.remove('is-active');

        triggerNode.classList.add('is-active');

        const newActiveParent = document.querySelector(
          parentSelector + '[data-tabs="' + id + '"]'
        );

        newActiveParent.classList.add('is-active');

        if (onChange) onChange(e.target);
      });
    });
  }
}

export function initTabs(triggerSelector, parentSelector, onChange, breakpoint) {
  const triggerNodes = document.querySelectorAll(triggerSelector);
  const parentNodes = document.querySelectorAll(parentSelector);

  if (triggerNodes.length > 0 && parentNodes.length > 0) {
    const startActive = document.querySelector(parentSelector + '.is-active');
    startActive.style.opacity = 1;
    startActive.style.transform = 'scale(1)';
    let isAnimated = false;

    triggerNodes.forEach((triggerNode) => {
      triggerNode.addEventListener('click', (e) => {
        if (breakpoint && window.innerWidth <= breakpoint) return;

        e.preventDefault();

        if (triggerNode.classList.contains('is-active') || isAnimated) return;

        const activeTrigger = document.querySelector(
          triggerSelector + '.is-active'
        );
        const activeParent = document.querySelector(
          parentSelector + '.is-active'
        );

        const id = triggerNode.getAttribute('data-tabs');
        const newActiveParent = document.querySelector(
          parentSelector + '[data-tabs="' + id + '"]'
        );

        activeTrigger.classList.remove('is-active');
        triggerNode.classList.add('is-active');

        isAnimated = true;

        hide(activeParent).then(() => {
          activeParent.classList.remove('is-active');
          newActiveParent.classList.add('is-active');

          setTimeout(() => {
            show(newActiveParent).then(() => {
              isAnimated = false;
            });
          }, 10);
        });

        if (onChange) onChange(e.target);
      });
    });

    async function hide(el, duration = 400) {
      el.style.transition = duration / 1000 + 's ease-in-out';
      el.style.opacity = 0;
      el.style.transform = 'scale(0)';

      return waitFor(duration);
    }

    async function show(el, duration = 400) {
      el.style.transition = duration / 1000 + 's ease-in-out';
      el.style.opacity = 1;
      el.style.transform = 'scale(1)';

      return waitFor(duration);
    }
  }
}

export function initTabsFade(triggerSelector, parentSelector, onChange, scroll = true, breakpoint) {
  const triggerNodes = document.querySelectorAll(triggerSelector);
  const parentNodes = document.querySelectorAll(parentSelector);
  const startActive = document.querySelector(parentSelector + '.is-active');

  if (!startActive) return;
  
  if (triggerNodes.length > 0 && parentNodes.length > 0) {
    startActive.style.opacity = 1;
    let isAnimated = false;

    triggerNodes.forEach((triggerNode) => {
      triggerNode.addEventListener('click', (e) => {
        if (breakpoint && window.innerWidth <= breakpoint) return;

        e.preventDefault();

        if (triggerNode.classList.contains('is-active') || isAnimated) return;

        const activeTrigger = document.querySelector(
          triggerSelector + '.is-active'
        );
        const activeParent = document.querySelector(
          parentSelector + '.is-active'
        );

        const id = triggerNode.getAttribute('data-tabs');
        const newActiveParent = document.querySelector(
          parentSelector + '[data-tabs="' + id + '"]'
        );

        activeTrigger.classList.remove('is-active');
        triggerNode.classList.add('is-active');

        isAnimated = true;

        hide(activeParent).then(() => {
          activeParent.classList.remove('is-active');
          newActiveParent.classList.add('is-active');

          setTimeout(() => {
            show(newActiveParent).then(() => {
              isAnimated = false;
            });
          }, 10);
        });

        if (window.innerWidth <= 1024 && scroll) {
          scrollWithOffset(triggerNode, 5);
        }
        if (onChange) onChange(e.target);
      });
    });

    async function hide(el, duration = 200) {
      el.style.transition = duration / 1000 + 's ease-in-out';
      el.style.opacity = 0;

      return waitFor(duration);
    }

    async function show(el, duration = 250) {
      el.style.transition = duration / 1000 + 's ease-in-out';
      el.style.opacity = 1;

      return waitFor(duration);
    }
  }
}

const waitFor = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
