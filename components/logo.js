import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

const Logo = (props) => {
  return (
    <>
      <div className="logo-container1">
        {props.isOnDarkBackground === false && (
          <div className="logo-thq-company-logo-light-elm company-logo-light">
            <Link href="/">
              <a data-thq-link-wrapper="true" className="logo-link">
                <img
                  loading="eager"
                  decoding="async"
                  alt="Huntley Capital Partners"
                  src="https://drive.google.com/thumbnail?id=1lNlHulcBxxA5B8mReE0nuvCjC7dLrDUY&amp;sz=w1600"
                  fetchpriority="high"
                  className="logo-thq-header-brand-image-elm header-brand-image"
                />
              </a>
            </Link>
          </div>
        )}
        {props.isOnDarkBackground === true && (
          <div className="logo-thq-company-logo-dark-elm company-logo-dark">
            <div className="company-logo-lockup">
              <svg
                viewBox="0 0 40 40"
                aria-hidden="true"
                className="company-logo-icon"
              >
                <path
                  d="M8 32V8H14V18H26V8H32V32H26V22H14V32H8Z"
                  fill="currentColor"
                ></path>
                <rect
                  x="18"
                  y="4"
                  fill="var(--color-accent, #C5B783)"
                  width="4"
                  height="4"
                ></rect>
                <rect
                  x="18"
                  y="32"
                  fill="var(--color-accent, #C5B783)"
                  width="4"
                  height="4"
                ></rect>
              </svg>
              <div className="company-logo-text-group">
                <span className="company-logo-name">HUNTLEY</span>
                <span className="company-logo-subtext">CAPITAL PARTNERS</span>
              </div>
            </div>
          </div>
        )}
        <div className="logo-container2">
          <div className="logo-container3">
            <Script
              html={`<script defer data-name="logo-reveal-init">
(function(){
/**
 * The company logo is a static component. 
 * Interaction logic for the Contact reveal panel is handled by the navigation 
 * or the specific contact button components.
 */
})()
</script>`}
            ></Script>
          </div>
        </div>
        <div className="logo-container4">
          <div className="logo-container5">
            <Script
              html={`<style>
[data-tq-logo-variant] {
  flex-shrink: 0;
}
[data-tq-logo-variant], [data-tq-logo-variant] * {
  white-space: nowrap;
}
</style>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .logo-container1 {
            display: contents;
          }
          .logo-thq-company-logo-light-elm {
            flex-shrink: 0;
            white-space: nowrap;
            background-color: #ffffff;
          }
          .logo-link {
            display: contents;
          }
          .logo-thq-header-brand-image-elm {
            width: 263px;
            height: 83px;
            text-decoration: none;
          }
          .logo-thq-company-logo-dark-elm {
            flex-shrink: 0;
            white-space: nowrap;
          }
          .logo-container2 {
            display: none;
          }
          .logo-container3 {
            display: contents;
          }
          .logo-container4 {
            display: none;
          }
          .logo-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

Logo.defaultProps = {
  isOnDarkBackground: false,
}

Logo.propTypes = {
  isOnDarkBackground: PropTypes.bool,
}

export default Logo
