import React, { useState } from 'react'
import Link from 'next/link'

import Logo from './logo'

const Navigation = (props) => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
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
                <a className="navigation-link4">Contact</a>
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
                  <path d="m12 16l3.644 3.644a1.21 1.21 0 0 0 1.712 0l2.288-2.288a1.21 1.21 0 0 0 0-1.712L16 12l3.644-3.644a1.21 1.21 0 0 0 0-1.712l-2.288-2.288a1.21 1.21 0 0 0-1.712 0L12 8L8.356 4.356a1.21 1.21 0 0 0-1.712 0L4.356 6.644a1.21 1.21 0 0 0 0 1.712L8 12l-3.644 3.644a1.21 1.21 0 0 0 0 1.712l2.288 2.288a1.21 1.21 0 0 0 1.712 0z"></path>
                </svg>
              </button>
            </div>
            <div className="navigation-overlay-content">
              <div className="navigation-overlay-links">
                <Link href="/">
                  <a
                    data-thq-link-box="true"
                    className="navigation-overlay-link navigation-link5"
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
                  <a className="navigation-overlay-link">Contact</a>
                </Link>
              </div>
              <div className="navigation-overlay-footer">
                <p className="navigation-overlay-tagline navigation-thq-navigation-overlay-tagline-elm">
                  Investing in the enabling layer of U.S. power infrastructure.
                </p>
                <div className="navigation-overlay-locations">
                  <span className="navigation-text3">Annapolis, Maryland</span>
                  <div className="navigation-dot-separator"></div>
                  <span className="navigation-text4">Salt Lake City, Utah</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      <style jsx>
        {`
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
          .navigation-thq-navigation-hamburger-elm {
            display: none;
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
          @media (max-width: 991px) {
            .navigation-link4 {
              display: none;
            }
            .navigation-thq-navigation-hamburger-elm {
              display: flex;
            }
          }
          @media (max-width: 767px) {
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
            .navigation-thq-navigation-overlay-tagline-elm {
              font-size: 16px;
              line-height: 1.5;
            }
            .navigation-text3 {
              font-size: 14px;
              line-height: 1.45;
            }
            .navigation-text4 {
              font-size: 14px;
              line-height: 1.45;
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
          }
        `}
      </style>
    </>
  )
}

export default Navigation
