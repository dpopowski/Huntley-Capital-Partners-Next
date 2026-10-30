import React from 'react';

var STYLE_ID = 'tq-collapsible-text-overflow-style';
// When a root is measured as NOT overflowing, its Show more label is hidden.
var STYLE_CONTENT =
  '[data-tq-overflows="false"] [data-tq-collapsible-more]{display:none !important;}';

function ensureStyle() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) {
    return;
  }
  var style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = STYLE_CONTENT;
  document.head.appendChild(style);
}

function measureRoot(root) {
  // The clamped view is only in the DOM while collapsed. When expanded the Show
  // more label is already gone (See less shows instead), so a missing clamp means
  // "leave the last measurement in place" rather than forcing a false negative.
  var clamp = root.querySelector('[data-tq-collapsible-clamp]');
  if (!clamp) {
    return;
  }
  var overflows = clamp.scrollHeight - clamp.clientHeight > 1;
  root.setAttribute('data-tq-overflows', overflows ? 'true' : 'false');
}

function measureAll() {
  if (typeof document === 'undefined') {
    return;
  }
  var roots = document.querySelectorAll('[data-tq-collapsible-root]');
  for (var i = 0; i < roots.length; i++) {
    measureRoot(roots[i]);
  }
}

export default function TqCollapsibleTextOverflow() {
  React.useEffect(function () {
    if (typeof document === 'undefined' || typeof window === 'undefined') {
      return undefined;
    }
    ensureStyle();

    var frame = 0;
    var schedule = function () {
      if (frame) {
        return;
      }
      frame = window.requestAnimationFrame(function () {
        frame = 0;
        measureAll();
      });
    };

    // Initial pass (rAF so layout + web fonts have settled).
    schedule();

    window.addEventListener('resize', schedule);

    // Re-measure when the DOM changes: client-side route changes, async content,
    // and the expand/collapse conditional remounting the clamped view.
    var observer =
      typeof MutationObserver !== 'undefined'
        ? new MutationObserver(function () {
            schedule();
          })
        : null;
    if (observer && document.body) {
      observer.observe(document.body, { childList: true, subtree: true });
    }

    return function () {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener('resize', schedule);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return null;
}
