import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'

const Footer = (props) => {
  return (
    <>
      <div role="contentinfo" className="footer-container1">
        <footer className="footer-thq-huntley-footer-root-elm huntley-footer-root">
          <div className="huntley-footer-inner">
            <div className="huntley-footer-statement-zone">
              <Link href="/">
                <a
                  data-thq-link-box="true"
                  className="huntley-footer-logo-link footer-link1"
                >
                  <img
                    loading="eager"
                    decoding="async"
                    alt="Huntley Capital Partners"
                    src="https://drive.google.com/thumbnail?id=12pixEAHvhYSHHWzSXscVE_xO4mcqz0Ih&amp;sz=w1000"
                    className="footer-image"
                  />
                </a>
              </Link>
              <p className="footer-thq-huntley-footer-statement-elm huntley-footer-statement">
                Investing in the enabling layer of U.S. power infrastructure.
              </p>
            </div>
            <div className="huntley-footer-content-grid">
              <div className="huntley-footer-column">
                <h4 className="huntley-footer-label">Locations</h4>
                <p className="footer-thq-huntley-footer-value-elm huntley-footer-value">
                  <span>Annapolis, Maryland</span>
                  <br></br>
                  <span>Salt Lake City, Utah</span>
                </p>
              </div>
              <div className="huntley-footer-column huntley-footer-nav-column">
                <h4 className="huntley-footer-label">Navigation</h4>
                <nav className="huntley-footer-nav">
                  <Link href="/">
                    <a
                      data-thq-link-box="true"
                      className="huntley-footer-nav-link"
                    >
                      <span>Home</span>
                    </a>
                  </Link>
                  <Link href="/strategy">
                    <a className="huntley-footer-nav-link">Strategy</a>
                  </Link>
                  <Link href="/team">
                    <a className="huntley-footer-nav-link">Team</a>
                  </Link>
                </nav>
              </div>
              <div className="huntley-footer-column huntley-footer-action-column">
                <h4
                  id="huntley-contact-label-open"
                  role="button"
                  aria-controls="huntley-contact-modal"
                  tabIndex="0"
                  className="huntley-footer-label huntley-contact-label-open"
                >
                  Contact
                </h4>
                <button
                  id="huntley-contact-open"
                  type="button"
                  className="huntley-footer-contact-trigger"
                >
                  {' '}
                  Contact
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </button>
              </div>
            </div>
            <div className="huntley-footer-legal-zone">
              <div aria-hidden="true" className="huntley-footer-divider"></div>
              <div className="huntley-footer-legal-content">
                <p className="huntley-footer-copyright">
                  © 2026 Huntley Capital Partners
                </p>
              </div>
            </div>
          </div>
          <div
            id="huntley-contact-modal"
            aria-hidden="true"
            className="huntley-modal-overlay"
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              className="huntley-modal-panel"
            >
              <button
                id="huntley-contact-close"
                type="button"
                aria-label="Close panel"
                className="huntley-modal-close"
              >
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <div className="huntley-modal-header">
                <h2 id="modal-title" className="huntley-modal-title">
                  Contact Partners
                </h2>
                <p className="huntley-modal-subtitle">
                  Direct institutional engagement for power infrastructure
                  investment.
                </p>
              </div>
              <div id="huntley-contact-gate" className="huntley-modal-gate">
                <button
                  id="huntley-reveal-trigger"
                  type="button"
                  className="huntley-modal-reveal-btn"
                >
                  <div className="footer-thq-flex-row-elm flex-row">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m16 11l2 2l4-4m-6 12v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle r="4" cx="9" cy="7"></circle>
                      </g>
                    </svg>
                    <span>Show contact information</span>
                  </div>
                </button>
              </div>
              <div
                id="huntley-contact-details"
                className="footer-thq-huntley-modal-details-elm huntley-modal-details"
              >
                <div className="huntley-partner-card">
                  <h3 className="huntley-partner-name">Ted Demiris</h3>
                  <p className="huntley-partner-title">Co-Founder</p>
                  <div className="huntley-partner-links">
                    <a
                      href="#"
                      id="link-ted-email"
                      data-thq-link-box="true"
                      className="huntley-partner-link"
                    >
                      <svg
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                          <rect
                            x="2"
                            y="4"
                            rx="2"
                            width="20"
                            height="16"
                          ></rect>
                        </g>
                      </svg>
                      <span>Email</span>
                    </a>
                    <a
                      href="#"
                      id="link-ted-phone"
                      data-thq-link-box="true"
                      className="huntley-partner-link"
                    >
                      <svg
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Call</span>
                    </a>
                  </div>
                </div>
                <div className="huntley-partner-card huntley-partner-card-pos-last">
                  <h3 className="huntley-partner-name">Daniel Popowski</h3>
                  <p className="huntley-partner-title">Co-Founder</p>
                  <div className="huntley-partner-links">
                    <a
                      href="#"
                      id="link-dan-email"
                      data-thq-link-box="true"
                      className="huntley-partner-link"
                    >
                      <svg
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                          <rect
                            x="2"
                            y="4"
                            rx="2"
                            width="20"
                            height="16"
                          ></rect>
                        </g>
                      </svg>
                      <span>Email</span>
                    </a>
                    <a
                      href="#"
                      id="link-dan-phone"
                      data-thq-link-box="true"
                      className="huntley-partner-link"
                    >
                      <svg
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Call</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<script defer data-name="huntley-footer-logic">
(function(){
(function() {
  const modal = document.getElementById('huntley-contact-modal');
  const openBtn = document.getElementById('huntley-contact-open');
  const closeBtn = document.getElementById('huntley-contact-close');
  const revealBtn = document.getElementById('huntley-reveal-trigger');
  const gate = document.getElementById('huntley-contact-gate');
  const details = document.getElementById('huntley-contact-details');
  const labelOpenBtn = document.getElementById('huntley-contact-label-open');
  const mobileContactMedia = window.matchMedia('(max-width: 767px)');
  const footerLogo = document.querySelector('.huntley-footer-logo-link img');

  if (footerLogo) {
    const desktopLogoSrc = footerLogo.getAttribute('src');
    const mobileLogoSrc = 'https://drive.google.com/thumbnail?id=1lNlHulcBxxA5B8mReE0nuvCjC7dLrDUY&sz=w1600';
    const logoMedia = window.matchMedia('(max-width: 767px)');
    const updateFooterLogo = () => {
      if (logoMedia.matches) {
        footerLogo.setAttribute('src', mobileLogoSrc);
      } else if (desktopLogoSrc) {
        footerLogo.setAttribute('src', desktopLogoSrc);
      }
    };
    updateFooterLogo();
    if (logoMedia.addEventListener) {
      logoMedia.addEventListener('change', updateFooterLogo);
    } else if (logoMedia.addListener) {
      logoMedia.addListener(updateFooterLogo);
    }
  }

  const syncLabelOpenAccessibility = () => {
    if (!labelOpenBtn) return;
    if (mobileContactMedia.matches) {
      labelOpenBtn.setAttribute('role', 'button');
      labelOpenBtn.setAttribute('tabindex', '0');
    } else {
      labelOpenBtn.removeAttribute('role');
      labelOpenBtn.removeAttribute('tabindex');
    }
  };

  syncLabelOpenAccessibility();
  if (mobileContactMedia.addEventListener) {
    mobileContactMedia.addEventListener('change', syncLabelOpenAccessibility);
  } else if (mobileContactMedia.addListener) {
    mobileContactMedia.addListener(syncLabelOpenAccessibility);
  }

  if (!modal || !openBtn || !closeBtn || !revealBtn || !gate || !details) return;

  const openModal = () => {
    modal.classList.add('is-active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('is-active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  const revealInfo = () => {
    const domain = 'huntleycp.com';
    const users = { ted: 'tdemiris', dan: 'dpopowski' };
    const phones = { ted: '3174423033', dan: '4105994177' };
    const phoneLabels = { ted: '(317) 442-3033', dan: '(410) 599-4177' };

    const tedEmail = document.getElementById('link-ted-email');
    const tedPhone = document.getElementById('link-ted-phone');
    const danEmail = document.getElementById('link-dan-email');
    const danPhone = document.getElementById('link-dan-phone');

    if (tedEmail) {
      const email = users.ted + '@' + domain;
      tedEmail.href = 'mailto:' + email;
      tedEmail.innerHTML = '<span class="huntley-reveal-channel-label">EMAIL</span><span class="huntley-reveal-channel-value">' + email + '</span>';
    }
    if (tedPhone) {
      tedPhone.href = 'tel:+1' + phones.ted;
      tedPhone.innerHTML = '<span class="huntley-reveal-channel-label">PHONE</span><span class="huntley-reveal-channel-value">' + phoneLabels.ted + '</span>';
    }
    if (danEmail) {
      const email = users.dan + '@' + domain;
      danEmail.href = 'mailto:' + email;
      danEmail.innerHTML = '<span class="huntley-reveal-channel-label">EMAIL</span><span class="huntley-reveal-channel-value">' + email + '</span>';
    }
    if (danPhone) {
      danPhone.href = 'tel:+1' + phones.dan;
      danPhone.innerHTML = '<span class="huntley-reveal-channel-label">PHONE</span><span class="huntley-reveal-channel-value">' + phoneLabels.dan + '</span>';
    }

    gate.style.display = 'none';
    details.style.display = 'flex';
  };

  openBtn.addEventListener('click', openModal);
  if (labelOpenBtn) {
    labelOpenBtn.addEventListener('click', () => {
      if (mobileContactMedia.matches) openModal();
    });
    labelOpenBtn.addEventListener('keydown', (e) => {
      if (!mobileContactMedia.matches || (e.key !== 'Enter' && e.key !== ' ')) return;
      e.preventDefault();
      openModal();
    });
  }
  closeBtn.addEventListener('click', closeModal);
  revealBtn.addEventListener('click', revealInfo);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-active')) closeModal();
  });
})();
})();
</script>`}
            ></Script>
          </div>
        </div>
        <div className="footer-container4">
          <div className="footer-container5">
            <Script
              html={`<style>
body, body * { font-family: Manrope, sans-serif !important; }
:where(h1, h2, h3, h4, h5, h6) { overflow-wrap: break-word; }
#huntley-contact-modal .huntley-partner-links {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
#huntley-contact-modal .huntley-partner-links > a {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}
#huntley-contact-modal .huntley-reveal-channel-label,
#huntley-contact-panel .huntley-channel-label {
  color: #826F28;
  font-size: 12px;
  text-transform: uppercase;
}
#huntley-contact-modal .huntley-reveal-channel-value,
#huntley-contact-panel .huntley-channel-val {
  color: #00205B;
  font-size: 16px;
  text-transform: none;
  overflow-wrap: anywhere;
  min-width: 0;
}
#huntley-contact-panel .huntley-partner-channels {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
#huntley-contact-panel .huntley-channel-link {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}
@media (min-width: 1024px) and (max-width: 1440px) {
  .navigation-bar,
  .huntley-footer-inner,
  .team-reference-container,
  .huntley-roster-container {
    box-sizing: border-box;
    padding-left: 48px;
    padding-right: 48px;
  }
}
</style>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-thq-huntley-footer-root-elm {
            width: 100%;
            box-sizing: border-box;
          }
          .footer-image {
            width: 145px;
            height: 91px;
            display: block;
            max-width: 100%;
          }
          .footer-thq-huntley-footer-statement-elm {
            color: var(--color-on-surface);
            font-size: 14px;
            font-family: Manrope;
            line-height: 1.5;
          }
          .footer-thq-huntley-footer-value-elm {
            font-size: var(--font-size-xs);
            font-family: Manrope;
            font-weight: var(--font-weight-body);
          }
          .footer-thq-flex-row-elm {
            gap: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .footer-thq-huntley-modal-details-elm {
            display: none;
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
          .footer-container4 {
            display: none;
          }
          .footer-container5 {
            display: contents;
          }
          @media (max-width: 767px) {
            .footer-link1 {
              background-color: #ffffff;
            }
            .footer-image {
              width: auto;
              height: 44px;
              object-fit: contain;
            }
            .footer-thq-huntley-footer-statement-elm {
              font-size: 14px;
              line-height: 1.5;
            }
            .footer-thq-huntley-footer-value-elm {
              font-size: var(--font-size-xs);
              font-weight: var(--font-weight-body);
              line-height: 1.5;
            }
          }
        `}
      </style>
    </>
  )
}

export default Footer
