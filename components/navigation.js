import React, { useState } from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'

import Logo from './logo'

const Navigation = (props) => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <div role="banner" className="navigation-container1">
        <nav className="navigation-thq-navigation-section-elm navigation-section">
          <div className="navigation-thq-navigation-bar-elm navigation-bar">
            <div className="navigation-left">
              <div
                aria-label="Huntley Capital Partners Home"
                className="navigation-logo-link"
              >
                <Logo isOnDarkBackground={false}></Logo>
              </div>
            </div>
            <div className="navigation-right">
              <div className="navigation-desktop-links">
                <Link href="/">
                  <a data-thq-link-box="true" className="navigation-link1">
                    <span>Home</span>
                  </a>
                </Link>
                <Link href="/strategy">
                  <a className="navigation-link2">Strategy</a>
                </Link>
                <Link href="/team">
                  <a className="navigation-link3">Team</a>
                </Link>
              </div>
              <div className="navigation-actions">
                <Link href="/contact">
                  <a className="navigation-link4 navigation-tablet-contact">
                    Contact
                  </a>
                </Link>
                <button
                  type="button"
                  aria-label="Open menu"
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="navigation-thq-navigation-hamburger-elm navigation-hamburger"
                >
                  <svg
                    fill="none"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <line x1="4" x2="20" y1="6" y2="6"></line>
                    <line x1="4" x2="20" y1="12" y2="12"></line>
                    <line x1="4" x2="20" y1="19" y2="19"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {menuOpen === true && (
            <div className="navigation-mobile-overlay">
              <div className="navigation-overlay-header">
                <div
                  aria-label="Huntley Capital Partners Home"
                  className="navigation-logo-link"
                >
                  <Logo isOnDarkBackground={false}></Logo>
                </div>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="navigation-close"
                >
                  <svg
                    fill="none"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M6 6L18 18M18 6L6 18"></path>
                  </svg>
                </button>
              </div>
              <div className="navigation-overlay-content">
                <div className="navigation-overlay-links">
                  <Link href="/">
                    <a
                      data-thq-link-box="true"
                      className="navigation-link5 navigation-overlay-link"
                    >
                      <span className="navigation-text2">Home</span>
                    </a>
                  </Link>
                  <Link href="/strategy">
                    <a className="navigation-link6 navigation-overlay-link">
                      Strategy
                    </a>
                  </Link>
                  <Link href="/team">
                    <a className="navigation-link7 huntley-nav-team-match navigation-overlay-link">
                      Team
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a className="navigation-link8 navigation-overlay-link">
                      Contact
                    </a>
                  </Link>
                </div>
                <div className="navigation-overlay-footer">
                  <p className="navigation-overlay-tagline navigation-thq-navigation-overlay-tagline-elm">
                    Investing in the enabling layer of U.S. power
                    infrastructure.
                  </p>
                  <div className="navigation-overlay-locations">
                    <span>Annapolis, MD | Salt Lake City, UT</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<script>
(function(){(function(){var style=document.getElementById('huntley-navigation-tablet-style');if(!style){style=document.createElement('style');style.id='huntley-navigation-tablet-style';var head=document.head;if(!head){return;}head.appendChild(style);}style.textContent='@media (min-width: 768px) and (max-width: 1024px) { .navigation-section .navigation-desktop-links { display: none !important; } .navigation-section .navigation-tablet-contact { display: none !important; } .navigation-section .navigation-actions .navigation-hamburger { display: flex !important; } }';})();})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-thq-navigation-section-elm {
            width: 100%;
            box-sizing: border-box;
          }
          .navigation-thq-navigation-bar-elm {
            height: 98px;
          }
          .navigation-link1 {
            color: #00205b;
            font-size: var(--font-size-sm);
            font-weight: 500;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            text-decoration: none;
          }
          .navigation-link2 {
            color: #00205b;
            font-size: var(--font-size-sm);
            font-weight: 500;
            letter-spacing: 0.05em;
            text-transform: uppercase;
          }
          .navigation-link3 {
            color: #00205b;
            opacity: 1;
            font-size: var(--font-size-sm);
            font-weight: 500;
            letter-spacing: 0.05em;
            text-transform: uppercase;
          }
          .navigation-link4 {
            color: #00205b;
            opacity: 1;
            font-size: var(--font-size-sm);
            font-family: var(--font-family-heading);
            font-weight: 500;
            letter-spacing: 0.05em;
            text-transform: uppercase;
          }
          .navigation-thq-navigation-hamburger-elm {
            display: none;
          }
          .navigation-link5 {
            color: #00205b;
            font-weight: 500;
            letter-spacing: 0.05em;
            text-transform: uppercase;
          }
          .navigation-link6 {
            color: #00205b;
            font-weight: 500;
            letter-spacing: 0.05em;
            text-transform: uppercase;
          }
          .navigation-link7 {
            color: #00205b;
            opacity: 1;
            font-weight: 500;
            letter-spacing: 0.05em;
            text-transform: uppercase;
          }
          .navigation-link8 {
            color: #00205b;
            font-weight: 500;
            letter-spacing: 0.05em;
            text-transform: uppercase;
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
          @media (max-width: 991px) {
            .navigation-thq-navigation-hamburger-elm {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .navigation-thq-navigation-bar-elm {
              height: 64px;
              padding: 0 24px;
              box-sizing: border-box;
              min-height: 64px;
              align-items: center;
            }
            .navigation-link5 {
              font-size: 23px;
              line-height: 1.3;
            }
            .navigation-text2 {
              font-size: 23px;
              line-height: 1.3;
            }
            .navigation-link6 {
              font-size: 23px;
              line-height: 1.3;
            }
            .navigation-link7 {
              font-size: 23px;
              line-height: 1.3;
            }
            .navigation-link8 {
              font-size: 23px;
              line-height: 1.3;
            }
            .navigation-thq-navigation-overlay-tagline-elm {
              font-size: 16px;
              line-height: 1.5;
            }
          }
          @media (max-width: 479px) {
            .navigation-link5 {
              font-size: 22px;
            }
            .navigation-text2 {
              font-size: 22px;
            }
            .navigation-link6 {
              font-size: 22px;
            }
            .navigation-link7 {
              font-size: 22px;
            }
            .navigation-link8 {
              font-size: 22px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Navigation
