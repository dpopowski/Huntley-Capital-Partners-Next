import React from 'react'

import Script from 'dangerous-html/react'

const CustomComponent = (props) => {
  return (
    <>
      <div
        id="huntley-global-contact-host"
        className="custom-component-container1"
      >
        <div
          id="huntley-contact-panel"
          role="dialog"
          hidden
          aria-modal="true"
          aria-labelledby="huntley-modal-title"
          className="custom-component-thq-huntley-contact-modal-elm huntley-contact-modal"
        >
          <div
            id="huntley-contact-backdrop"
            className="custom-component-thq-huntley-contact-backdrop-elm huntley-contact-backdrop"
          ></div>
          <div className="custom-component-thq-huntley-contact-dialog-elm huntley-contact-dialog">
            <div className="huntley-contact-header">
              <div className="huntley-contact-title-group">
                <span className="huntley-contact-firm-label">
                  Huntley Capital Partners
                </span>
                <h3
                  id="huntley-modal-title"
                  className="huntley-contact-dialog-title"
                >
                  Reach us directly.
                </h3>
              </div>
              <button
                id="huntley-close-contact-btn"
                type="button"
                aria-label="Close contact panel"
                className="huntley-modal-close-btn"
              >
                <svg
                  fill="none"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="huntley-contact-body">
              <div
                id="huntley-reveal-gate"
                className="huntley-reveal-prompt-state"
              >
                <p className="huntley-contact-prompt-copy">
                  You will always speak with a co-founder. We welcome
                  conversations with owners, operators, and investors, whether
                  or not there is a deal on the table.
                </p>
                <button
                  id="huntley-trigger-reveal-btn"
                  type="button"
                  className="huntley-reveal-btn btn-primary btn"
                >
                  <span>Show contact information</span>
                </button>
              </div>
              <div
                id="huntley-revealed-box"
                hidden
                className="huntley-revealed-contact-state"
              >
                <div
                  id="partner-ted-container"
                  className="huntley-partner-contact-row custom-component-thq-huntley-partner-contact-row-elm1"
                ></div>
                <div className="huntley-partner-divider"></div>
                <div
                  id="partner-dan-container"
                  className="huntley-partner-contact-row custom-component-thq-huntley-partner-contact-row-elm2"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-component-container2">
          <div className="custom-component-container3">
            <Script
              id="huntley-contact-controller-host"
              html={`<script defer data-name="huntley-contact-controller">
(function(){
  var version = 3;
  var existing = window.__huntleyContactController;
  if (existing && existing.version === version) { existing.reconcile(); return; }
  var oldHost = existing && (existing.host || existing.active && existing.active.host);
  var oldPanel = existing && (existing.panel || existing.active && existing.active.panel || document.getElementById('huntley-contact-panel'));
  if (existing && typeof existing.cleanup === 'function') { try { existing.cleanup(); } catch (error) {} }
  if (oldHost && oldHost.isConnected && oldPanel && oldPanel.id === 'huntley-contact-panel') oldHost.appendChild(oldPanel);

  var active = null;
  var isOpen = false;
  var previousFocus = null;
  var previousBodyOverflow = '';
  var previousBodyOverflowPriority = '';
  var previousHtmlOverflow = '';
  var previousHtmlOverflowPriority = '';
  var observer = null;
  var api;
  var triggerSelector = '#open-contact-hero, #question-open-contact, .huntley-contact-trigger, [data-contact-trigger], #huntley-contact-open, #huntley-contact-label-open, a[href="#contact"], .navigation-tablet-contact[href="/contact"], .navigation-overlay-link[href="/contact"]';

  function makeParts(host, panel) {
    return {host:host, panel:panel, backdrop:panel.querySelector('#huntley-contact-backdrop'), close:panel.querySelector('#huntley-close-contact-btn'), reveal:panel.querySelector('#huntley-trigger-reveal-btn'), gate:panel.querySelector('#huntley-reveal-gate'), revealed:panel.querySelector('#huntley-revealed-box'), ted:panel.querySelector('#partner-ted-container'), dan:panel.querySelector('#partner-dan-container')};
  }
  function connectedHost() {
    var host = document.getElementById('huntley-global-contact-host');
    return host && host.isConnected ? host : null;
  }
  function restoreProperty(style, value, priority) {
    if (!style) return;
    if (value === '') style.removeProperty('overflow'); else style.setProperty('overflow', value, priority);
  }
  function restoreScroll() {
    restoreProperty(document.body && document.body.style, previousBodyOverflow, previousBodyOverflowPriority);
    restoreProperty(document.documentElement && document.documentElement.style, previousHtmlOverflow, previousHtmlOverflowPriority);
    previousBodyOverflow = ''; previousBodyOverflowPriority = ''; previousHtmlOverflow = ''; previousHtmlOverflowPriority = '';
  }
  function clearReveal(current) {
    if (!current) return;
    if (current.ted && current.ted.firstChild) current.ted.replaceChildren();
    if (current.dan && current.dan.firstChild) current.dan.replaceChildren();
    if (current.revealed) current.revealed.setAttribute('hidden', '');
    if (current.gate) current.gate.removeAttribute('hidden');
  }
  function hidePanel(current) {
    if (!current || !current.panel) return;
    current.panel.setAttribute('hidden', ''); current.panel.setAttribute('aria-hidden', 'true');
    current.panel.style.display = 'none'; current.panel.style.opacity = '0'; current.panel.style.visibility = 'hidden';
    clearReveal(current);
  }
  function releaseActive() {
    if (!active) { if (isOpen) restoreScroll(); isOpen = false; previousFocus = null; return; }
    var old = active;
    var ownerDisconnected = !old.host || !old.host.isConnected;
    hidePanel(old);
    if (isOpen) restoreScroll();
    isOpen = false;
    if (previousFocus && previousFocus.isConnected && typeof previousFocus.focus === 'function') previousFocus.focus();
    previousFocus = null;
    if (ownerDisconnected && old.panel && old.panel.parentNode === document.body) document.body.removeChild(old.panel);
    active = null;
    if (api) { api.host = null; api.panel = null; }
  }
  function reconcile() {
    var host = connectedHost();
    if (active && (!active.host.isConnected || active.host !== host)) releaseActive();
    if (!host) return;
    if (active && active.host === host) {
      if (active.panel.parentNode !== document.body) document.body.appendChild(active.panel);
      if (!isOpen) hidePanel(active);
      return;
    }
    var panel = host.querySelector('#huntley-contact-panel');
    if (!panel) return;
    var next = makeParts(host, panel);
    if (!next.backdrop || !next.close || !next.reveal || !next.gate || !next.revealed || !next.ted || !next.dan) return;
    active = next;
    api.host = host; api.panel = panel;
    if (panel.parentNode !== document.body) document.body.appendChild(panel);
    hidePanel(active);
  }
  function openPanel() {
    reconcile();
    var current = active;
    if (!current || isOpen || !document.body) return;
    isOpen = true; previousFocus = document.activeElement;
    previousBodyOverflow = document.body.style.getPropertyValue('overflow');
    previousBodyOverflowPriority = document.body.style.getPropertyPriority('overflow');
    previousHtmlOverflow = document.documentElement.style.getPropertyValue('overflow');
    previousHtmlOverflowPriority = document.documentElement.style.getPropertyPriority('overflow');
    clearReveal(current);
    current.panel.removeAttribute('hidden'); current.panel.setAttribute('aria-hidden', 'false');
    current.panel.style.display = 'flex'; current.panel.style.opacity = '1'; current.panel.style.visibility = 'visible';
    document.body.style.setProperty('overflow', 'hidden'); document.documentElement.style.setProperty('overflow', 'hidden');
    current.close.focus();
  }
  function closePanel() {
    if (!isOpen) return;
    isOpen = false; hidePanel(active); restoreScroll();
    if (previousFocus && previousFocus.isConnected && typeof previousFocus.focus === 'function') previousFocus.focus();
    previousFocus = null;
  }
  function normalizedLabel(node) {
    var text = node.textContent || '', result = '', pendingSpace = false;
    for (var i = 0; i < text.length; i++) {
      var code = text.charCodeAt(i);
      if (code <= 32) { if (result) pendingSpace = true; }
      else { if (pendingSpace) result += ' '; result += text.charAt(i).toLowerCase(); pendingSpace = false; }
    }
    return result;
  }
  function isTrigger(node) {
    if (!node || !node.closest) return false;
    var item = node.closest(triggerSelector);
    if (!item) return false;
    if (item.matches('.navigation-tablet-contact[href="/contact"], .navigation-overlay-link[href="/contact"]')) return normalizedLabel(item) === 'contact';
    if (item.matches('a[href="#contact"]')) return true;
    if (item.matches('#huntley-contact-label-open')) return window.matchMedia('(max-width: 767px)').matches;
    if (item.matches('#open-contact-hero, #question-open-contact, .huntley-contact-trigger, [data-contact-trigger], #huntley-contact-open')) return true;
    return false;
  }
  function closeMobileMenu(trigger) {
    if (!trigger || !trigger.closest('.navigation-mobile-overlay')) return;
    var menu = trigger.closest('.navigation-mobile-overlay');
    var button = menu && menu.querySelector('.navigation-close');
    if (button) button.click();
  }
  function revealInfo(current) {
    if (!isOpen || !current || current !== active || !current.gate || !current.revealed || !current.ted || !current.dan) return;
    clearReveal(current);
    var domain = 'huntleycp.com', u1 = 'tdemiris', u2 = 'dpopowski';
    var e1 = u1 + '@' + domain, e2 = u2 + '@' + domain;
    var p1 = '(317) 442-3033', p1Raw = '+13174423033', p2 = '(410) 599-4177', p2Raw = '+14105994177';
    current.ted.innerHTML = '<div class="huntley-partner-meta"><h4 class="huntley-partner-name">Ted Demiris</h4><p class="huntley-partner-role">Co-Founder</p></div><div class="huntley-partner-channels"><a class="huntley-channel-link" href="mailto:' + e1 + '"><span class="huntley-channel-label">EMAIL</span><span class="huntley-channel-val">' + e1 + '</span></a><a class="huntley-channel-link" href="tel:' + p1Raw + '"><span class="huntley-channel-label">PHONE</span><span class="huntley-channel-val">' + p1 + '</span></a></div>';
    current.dan.innerHTML = '<div class="huntley-partner-meta"><h4 class="huntley-partner-name">Daniel Popowski</h4><p class="huntley-partner-role">Co-Founder</p></div><div class="huntley-partner-channels"><a class="huntley-channel-link" href="mailto:' + e2 + '"><span class="huntley-channel-label">EMAIL</span><span class="huntley-channel-val">' + e2 + '</span></a><a class="huntley-channel-link" href="tel:' + p2Raw + '"><span class="huntley-channel-label">PHONE</span><span class="huntley-channel-val">' + p2 + '</span></a></div>';
    current.gate.setAttribute('hidden', ''); current.revealed.removeAttribute('hidden');
    var firstLink = current.revealed.querySelector('a[href]');
    if (firstLink) firstLink.focus();
  }
  function clickHandler(event) {
    var target = event.target && event.target.nodeType === 1 ? event.target : event.target && event.target.parentElement;
    if (!target) return;
    reconcile();
    var current = active;
    if (!current) return;
    if (current.panel.contains(target)) {
      var close = target.closest('#huntley-close-contact-btn'), reveal = target.closest('#huntley-trigger-reveal-btn');
      if (close) { event.preventDefault(); event.stopPropagation(); if (event.stopImmediatePropagation) event.stopImmediatePropagation(); closePanel(); return; }
      if (reveal) { event.preventDefault(); event.stopPropagation(); if (event.stopImmediatePropagation) event.stopImmediatePropagation(); revealInfo(current); return; }
      if (target === current.backdrop || target === current.panel) { event.preventDefault(); event.stopPropagation(); closePanel(); }
      return;
    }
    if (!isTrigger(target)) return;
    event.preventDefault(); event.stopPropagation();
    if (event.stopImmediatePropagation) event.stopImmediatePropagation();
    var mobileContact = target.closest('.navigation-overlay-link[href="/contact"]');
    if (mobileContact) closeMobileMenu(mobileContact);
    openPanel();
  }
  function focusables(panel) {
    return Array.prototype.slice.call(panel.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter(function(node) { return !node.hidden && node.getAttribute('aria-hidden') !== 'true' && node.getClientRects().length > 0; });
  }
  function keyHandler(event) {
    var target = event.target && event.target.nodeType === 1 ? event.target : event.target && event.target.parentElement;
    if (!target) return;
    reconcile();
    var current = active;
    if (!current) return;
    if (!current.panel.contains(target) && (event.key === 'Enter' || event.key === ' ')) {
      var mobileLabel = target.closest('#huntley-contact-label-open');
      if (mobileLabel && window.matchMedia('(max-width: 767px)').matches) { event.preventDefault(); event.stopPropagation(); if (event.stopImmediatePropagation) event.stopImmediatePropagation(); openPanel(); return; }
    }
    if (!isOpen) return;
    if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); closePanel(); return; }
    if (event.key !== 'Tab') return;
    var items = focusables(current.panel);
    if (!items.length) { event.preventDefault(); current.panel.focus(); return; }
    var first = items[0], last = items[items.length - 1];
    if (event.shiftKey && (document.activeElement === first || !current.panel.contains(document.activeElement))) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && (document.activeElement === last || !current.panel.contains(document.activeElement))) { event.preventDefault(); first.focus(); }
  }
  function cleanup() {
    if (observer) observer.disconnect();
    window.removeEventListener('click', clickHandler, true); window.removeEventListener('keydown', keyHandler, true);
    releaseActive();
    if (window.__huntleyContactController === api) window.__huntleyContactController = null;
  }
  function startObserver() {
    if (observer || !document.documentElement) return;
    observer = new MutationObserver(function() { reconcile(); });
    observer.observe(document.documentElement, {childList:true, subtree:true});
    reconcile();
  }
  api = {version:version, reconcile:reconcile, cleanup:cleanup, host:null, panel:null};
  window.__huntleyContactController = api;
  window.addEventListener('click', clickHandler, true); window.addEventListener('keydown', keyHandler, true);
  if (document.documentElement) startObserver(); else document.addEventListener('DOMContentLoaded', startObserver, {once:true});
})();
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .custom-component-container1 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .custom-component-thq-huntley-contact-modal-elm {
            inset: 0;
            width: 100vw;
            filter: none;
            height: 100dvh;
            margin: 0;
            z-index: 2147483647;
            position: fixed;
            animation: none;
            transform: none;
            transition: none;
          }
          .custom-component-thq-huntley-contact-backdrop-elm {
            inset: 0;
            z-index: 0;
            position: fixed;
          }
          .custom-component-thq-huntley-contact-dialog-elm {
            z-index: 1;
            position: relative;
            max-height: calc(100dvh - 32px);
            overflow-y: auto;
          }
          .custom-component-container2 {
            display: none;
          }
          .custom-component-container3 {
            display: contents;
          }
          @media (max-width: 767px) {
            .custom-component-thq-huntley-partner-contact-row-elm1 {
              font-size: 15px;
              line-height: 1.5;
            }
            .custom-component-thq-huntley-partner-contact-row-elm2 {
              font-size: 15px;
              line-height: 1.5;
            }
          }
        `}
      </style>
    </>
  )
}

export default CustomComponent
