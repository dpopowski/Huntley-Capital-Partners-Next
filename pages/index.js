import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Navigation from '../components/navigation'
import TqMotion from '../components/tq-motion'
import CustomComponent from '../components/custom-component'
import Footer from '../components/footer'

const Homepage = (props) => {
  return (
    <>
      <div className="homepage-container1 home-mobile-fixes">
        <Head>
          <title>
            Huntley Capital Partners | Power Infrastructure Investing
          </title>
          <meta
            name="description"
            content="Huntley Capital Partners invests in the enabling layer of U.S. power infrastructure. Explore our thesis, approach, and how we partner with owners and operators."
          />
          <meta
            property="og:title"
            content="Huntley Capital Partners | Power Infrastructure Investing"
          />
          <meta
            property="og:description"
            content="Huntley Capital Partners invests in the enabling layer of U.S. power infrastructure. Explore our thesis, approach, and how we partner with owners and operators."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ed99ebef-6fef-4947-b59e-b90befa630a9/73bee5e8-db2b-41d8-96a4-db47776b37c2?org_if_sml=1&amp;force_format=original"
          />
          <meta property="og:type" content="website" />
          <meta
            name="twitter:title"
            content="Huntley Capital Partners | Power Infrastructure Investing"
          />
          <meta
            name="twitter:description"
            content="Huntley Capital Partners invests in the enabling layer of U.S. power infrastructure. Explore our thesis, approach, and how we partner with owners and operators."
          />
          <meta
            name="twitter:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ed99ebef-6fef-4947-b59e-b90befa630a9/73bee5e8-db2b-41d8-96a4-db47776b37c2?org_if_sml=1&amp;force_format=original"
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html:
                '{"@context":"https://schema.org","@type":"Organization","@id":"https://well-to-do-potable-mole-yvavdo.teleporthq.site/#organization","name":"Huntley Capital Partners | Power Infrastructure Investing","url":"https://well-to-do-potable-mole-yvavdo.teleporthq.site","logo":"https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ed99ebef-6fef-4947-b59e-b90befa630a9/64da64e3-60ff-401a-8b42-58b0b30baf2b?org_if_sml=1&force_format=original","sameAs":["https://www.linkedin.com/in/ted-demiris-b31052201/","https://www.linkedin.com/in/daniel-popowski/"]}',
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html:
                '{"@context":"https://schema.org","@type":"WebSite","@id":"https://well-to-do-potable-mole-yvavdo.teleporthq.site/#website","name":"Huntley Capital Partners | Power Infrastructure Investing","url":"https://well-to-do-potable-mole-yvavdo.teleporthq.site","description":"Independent sponsor investing in businesses that build, connect, and operate U.S. power infrastructure. Explore our strategy and team.","publisher":{"@id":"https://well-to-do-potable-mole-yvavdo.teleporthq.site/#organization"}}',
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'WebPage',
                '@id':
                  'https://well-to-do-potable-mole-yvavdo.teleporthq.site/#webpage',
                url: 'https://well-to-do-potable-mole-yvavdo.teleporthq.site/',
                name: 'Huntley Capital Partners | Power Infrastructure Investing',
                description:
                  'Huntley Capital Partners invests in the enabling layer of U.S. power infrastructure. Explore our thesis, approach, and how we partner with owners and operators.',
                isPartOf: {
                  '@id':
                    'https://well-to-do-potable-mole-yvavdo.teleporthq.site/#website',
                },
                primaryImageOfPage: {
                  '@type': 'ImageObject',
                  url: 'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ed99ebef-6fef-4947-b59e-b90befa630a9/73bee5e8-db2b-41d8-96a4-db47776b37c2?org_if_sml=1&force_format=original',
                },
              }).replace(/</g, '\\u003c'),
            }}
          />
        </Head>
        <Navigation></Navigation>
        <section id="tq-main" className="huntley-hero">
          <div className="huntley-hero-media">
            <img
              loading="eager"
              decoding="async"
              alt="High voltage electrical power substation transformers and transmission switchgear equipment"
              src="https://images.unsplash.com/photo-1589276534126-adef63a95e05?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGdyaWQlMjBzY2FsZSUyMGJhdHRlcnklMjBzdG9yYWdlfGVufDB8fHx8MTc5MzM4NDI4NXww&amp;ixlib=rb-4.1.0&amp;w=1500"
              fetchpriority="high"
              className="homepage-thq-huntley-hero-img-elm huntley-hero-img"
            />
            <div className="huntley-hero-scrim"></div>
          </div>
          <div className="huntley-hero-container">
            <TqMotion
              data-thq="motion-node"
              preset="none"
              trigger="load"
              duration={0.3}
              delay={0}
              easing="ease-out"
              repeat={0}
              repeatType="loop"
              inViewOnce
              inViewAmount={0.3}
              stagger={0}
              distance={40}
              scrub={0}
              scrollOffset="pass"
            >
              <div className="homepage-thq-huntley-hero-content-elm huntley-hero-content">
                <div className="homepage-thq-huntley-hero-statement-block-elm huntley-hero-statement-block">
                  <p className="homepage-thq-huntley-hero-tagline-elm huntley-hero-tagline">
                    For U.S. power infrastructure, the constraint has moved from
                    demand to delivery.
                  </p>
                </div>
                <div className="homepage-thq-huntley-hero-action-block-elm huntley-hero-action-block">
                  <h1
                    data-hero-text-recolored="true"
                    className="homepage-thq-hero-title-elm huntley-hero-heading hero-title"
                  >
                    So has the opportunity.
                  </h1>
                  <div className="huntley-hero-cta-wrapper">
                    <button
                      id="open-contact-hero"
                      type="button"
                      aria-controls="huntley-contact-panel"
                      aria-haspopup="dialog"
                      className="homepage-thq-btn-elm huntley-hero-btn btn-primary btn"
                    >
                      <span>Get in touch</span>
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
                        className="homepage-thq-huntley-btn-icon-elm huntley-btn-icon"
                      >
                        <path d="M5 12h14m-7-7l7 7l-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </TqMotion>
          </div>
        </section>
        <section className="huntley-overview">
          <div className="huntley-overview-container">
            <TqMotion
              data-thq="motion-node"
              preset="fade-in"
              trigger="in-view"
              duration={0.3}
              delay={0}
              easing="ease-out"
              repeat={0}
              repeatType="loop"
              inViewOnce
              inViewAmount={0.15}
              stagger={0}
              distance={40}
              scrub={0}
              scrollOffset="pass"
            >
              <div className="huntley-overview-inner">
                <div className="huntley-overview-prose">
                  <h2 className="home-match-heading">
                    Every new megawatt depends on a business most people never
                    see.
                  </h2>
                  <p className="homepage-thq-huntley-overview-lead-elm huntley-overview-lead">
                    Huntley backs the equipment makers, technology providers,
                    and specialized service companies that allow power to be
                    built, connected, delivered, and operated. Rather than
                    focusing on generation and data centers, we invest in the
                    businesses that make them possible.
                  </p>
                </div>
              </div>
            </TqMotion>
          </div>
        </section>
        <section className="huntley-thesis">
          <div className="huntley-thesis-container">
            <TqMotion
              data-thq="motion-node"
              preset="fade-in"
              trigger="in-view"
              duration={0.3}
              delay={0}
              easing="ease-out"
              repeat={0}
              repeatType="loop"
              inViewOnce
              inViewAmount={0.15}
              stagger={0}
              distance={40}
              scrub={0}
              scrollOffset="pass"
            >
              <div className="huntley-thesis-split">
                <div className="huntley-thesis-media-panel">
                  <img
                    loading="eager"
                    decoding="async"
                    alt="Industrial substation conductors, heavy transformers, and structural steel framing"
                    src="https://images.unsplash.com/photo-1641190063892-52b69c536ab5?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fGxpbmVzbWFufGVufDB8fHx8MTc5MzM5NjYyOHww&amp;ixlib=rb-4.1.0&amp;w=1500"
                    className="huntley-thesis-img"
                  />
                </div>
                <div className="huntley-thesis-text-rail">
                  <div className="huntley-thesis-rail-top">
                    <p className="homepage-thq-home-match-label-elm home-match-label-dark home-match-label">
                      THE OPPORTUNITY
                    </p>
                    <h2 className="homepage-thq-section-title-elm1 huntley-thesis-title section-title">
                      Outfitting the Power Buildout
                    </h2>
                  </div>
                  <div className="huntley-thesis-rail-bottom">
                    <p className="homepage-thq-section-content-elm section-content huntley-thesis-body">
                      During the Gold Rush, Levi Strauss built a lasting
                      business by outfitting the miners rather than digging for
                      gold. Today&apos;s rush is for power. Data centers,
                      manufacturing, and electrification are driving demand the
                      grid was not built to meet: interconnection queues stretch
                      for years, transformers are back-ordered, and new load is
                      waiting on infrastructure that cannot keep pace. Huntley
                      invests in the companies that outfit this buildout. Here
                      is how we find them.
                    </p>
                    <div className="huntley-thesis-action-row">
                      <Link href="/strategy">
                        <a
                          data-thq-link-box="true"
                          className="huntley-thesis-cta-link home-match-cta"
                        >
                          <span className="huntley-cta-text">
                            See our strategy
                          </span>
                          <div className="huntley-cta-tile">
                            <svg
                              fill="none"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14m-7-7l7 7l-7 7"></path>
                            </svg>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </TqMotion>
          </div>
        </section>
        <section className="homepage-thq-huntley-question-elm huntley-question">
          <h2 className="huntley-question-statement section-title">
            <span className="homepage-text11">
              Every opportunity begins with one test:
            </span>
            <span>
              Does the business remove a
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="homepage-text13">real bottleneck</span>
            <span> to delivering power?</span>
          </h2>
          <div className="huntley-question-container">
            <div className="huntley-question-layout">
              <div className="homepage-thq-huntley-question-content-elm huntley-question-content">
                <TqMotion
                  data-thq="motion-node"
                  preset="fade-in"
                  trigger="in-view"
                  duration={0.3}
                  delay={0}
                  easing="ease-out"
                  repeat={0}
                  repeatType="loop"
                  inViewOnce
                  inViewAmount={0.15}
                  stagger={0.06}
                  distance={40}
                  scrub={0}
                  scrollOffset="pass"
                >
                  <div className="huntley-outcomes-matrix">
                    <p className="home-outcomes-leadin">
                      A BUSINESS SHOULD DELIVER ON AT LEAST ONE
                    </p>
                    <div className="huntley-outcome-item">
                      <h3 className="huntley-outcome-term">Faster</h3>
                      <p className="huntley-outcome-desc">
                        Shortening the time from demand to delivered power.
                      </p>
                    </div>
                    <div className="huntley-outcome-item">
                      <h3 className="huntley-outcome-term">More Reliably</h3>
                      <p className="huntley-outcome-desc">
                        Strengthening the systems that keep power flowing.
                      </p>
                    </div>
                    <div className="huntley-outcome-item">
                      <h3 className="huntley-outcome-term">Lower Risk</h3>
                      <p className="huntley-outcome-desc">
                        Reducing execution risk across construction,
                        interconnection, and operations.
                      </p>
                    </div>
                    <div className="huntley-outcome-item">
                      <h3 className="huntley-outcome-term">Lower Cost</h3>
                      <p className="huntley-outcome-desc">
                        Delivering power at a meaningfully lower cost.
                      </p>
                    </div>
                  </div>
                </TqMotion>
                <p className="huntley-closing-line">
                  If a business clears this test, we want to hear about it.
                </p>
                <div className="home-criteria-link-row">
                  <button
                    id="question-open-contact"
                    type="button"
                    aria-controls="huntley-contact-panel"
                    aria-haspopup="dialog"
                    className="home-conversation-btn"
                  >
                    Start a conversation
                  </button>
                  <Link href="/strategy">
                    <a data-thq-link-box="true" className="home-criteria-link">
                      <span>See our investment criteria</span>
                      <span aria-hidden="true"> →</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-leadership">
          <div className="home-leadership-inner">
            <p className="home-leadership-label">LEADERSHIP</p>
            <h2 className="home-leadership-heading">
              More time in the field. Fewer assumptions in the model.
            </h2>
            <p className="home-leadership-body">
              <span>
                Huntley&apos;s founders spend their time where the business
                happens: with operators, engineers, and customers. We dig deeper
                and stay longer than a typical financial buyer, because in power
                infrastructure, execution decides the outcome. A senior advisory
                board adds operating, technical, legal, and capital-markets
                depth.
              </span>
              <br></br>
            </p>
            <Link href="/team">
              <a className="homepage-link3 home-leadership-link">
                <span>Meet the team</span>
                <span> →</span>
              </a>
            </Link>
          </div>
        </section>
        <CustomComponent></CustomComponent>
        <div className="homepage-container2">
          <div className="homepage-container3">
            <Script
              html={`<style>
:where(img, picture, video, canvas) {
  min-width: 0;
  max-width: 100%;
}
:where(h1, h2, h3, h4, h5, h6) {
  overflow-wrap: break-word;
}
#huntley-contact-panel .huntley-partner-channels {
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #00205B;
}
#huntley-contact-panel .huntley-channel-link {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: inherit;
  overflow-wrap: anywhere;
}
#huntley-contact-panel .huntley-channel-label {
  color: #C5B783;
  font-size: 12px;
  text-transform: uppercase;
}
#huntley-contact-panel .huntley-channel-val {
  color: #00205B;
  font-size: 16px;
  overflow-wrap: anywhere;
}
@media (min-width: 1024px) and (max-width: 1440px) {
  .home-mobile-fixes .huntley-hero-container,
  .home-mobile-fixes .huntley-overview .huntley-overview-container,
  .home-mobile-fixes .huntley-thesis .huntley-thesis-container,
  .home-mobile-fixes .huntley-question-container,
  .home-mobile-fixes .home-leadership .home-leadership-inner {
    padding-left: 48px;
    padding-right: 48px;
    box-sizing: border-box;
    width: 100%;
  }
  .home-mobile-fixes .huntley-question-statement {
    width: calc(100% - 96px);
  }
}
</style>`}
            ></Script>
          </div>
        </div>
        <div>
          <div className="homepage-container5">
            <Script
              html={`<style>
a.home-leadership-link:hover {
  text-decoration: underline;
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="homepage-container6">
          <div className="homepage-container7">
            <Script
              html={`<script>
(function(){(function(){document.addEventListener('click',function(event){var target=event.target;if(!(target instanceof Element))return;var trigger=target.closest('#question-open-contact');if(!trigger)return;var existing=document.getElementById('open-contact-hero');if(existing)existing.click();});})();})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .homepage-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .homepage-thq-huntley-hero-img-elm {
            object-position: center bottom;
          }
          .homepage-thq-huntley-hero-content-elm {
            gap: 24px;
            justify-content: center;
          }
          .homepage-thq-huntley-hero-statement-block-elm {
            padding-top: 0;
          }
          .homepage-thq-huntley-hero-tagline-elm {
            font-size: 24px;
          }
          .homepage-thq-huntley-hero-action-block-elm {
            gap: 28px;
            padding-bottom: 0;
          }
          .homepage-thq-hero-title-elm {
            color: var(--color-surface);
            font-size: 60px;
          }
          .homepage-thq-btn-elm {
            color: var(--color-primary);
            border: 1px solid var(--color-primary);
            padding: 0 20px;
            font-size: var(--font-size-base);
            transform: none;
            box-shadow: none;
            min-height: 44px;
            font-family: var(--font-family-heading);
            font-weight: 400;
            line-height: var(--line-height-body);
            border-radius: 4px;
            letter-spacing: normal;
            text-transform: none;
            background-color: #ffffff;
          }
          .homepage-thq-btn-elm:hover {
            color: var(--color-primary);
            transform: none;
            box-shadow: none;
            border-color: var(--color-primary);
            background-color: #f5f7fa;
          }
          .homepage-thq-btn-elm:active {
            transform: none;
            box-shadow: none;
          }
          .homepage-thq-btn-elm:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 2px;
          }
          .homepage-thq-huntley-btn-icon-elm {
            stroke: var(--color-primary);
          }
          .homepage-thq-huntley-overview-lead-elm {
            color: var(--color-on-surface);
            margin: 0;
            font-size: var(--font-size-base);
            max-width: 62rem;
            text-align: left;
            font-family: var(--font-family-body);
            font-weight: var(--font-weight-body);
            line-height: var(--line-height-body);
          }
          .homepage-thq-home-match-label-elm {
            margin: 0;
            font-size: var(--font-size-xs);
            font-family: var(--font-family-heading);
            font-weight: 600;
            line-height: 1.4;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }
          .homepage-thq-section-title-elm1 {
            color: #ffffff;
            margin: 0;
            font-size: 28px;
            font-family: var(--font-family-heading);
            font-weight: var(--font-weight-heading);
            line-height: 1.2;
            letter-spacing: var(--letter-spacing-heading);
          }
          .homepage-thq-section-content-elm {
            color: #ffffff;
            margin: 0;
            font-size: var(--font-size-base);
            max-width: 62rem;
            font-family: var(--font-family-body);
            font-weight: var(--font-weight-body);
            line-height: var(--line-height-body);
          }
          .homepage-thq-huntley-question-elm {
            align-items: flex-start;
            flex-direction: column;
          }
          .homepage-text11 {
            color: #00205b;
            display: block;
            font-size: 24px;
            font-weight: 400;
            line-height: 1.5;
            margin-bottom: 16px;
          }
          .homepage-text13 {
            color: #826f28;
          }
          .homepage-thq-huntley-question-content-elm {
            height: auto;
            display: flex;
          }
          .homepage-link3 {
            text-decoration: none;
          }
          .homepage-container2 {
            display: none;
          }
          .homepage-container3 {
            display: contents;
          }
          .homepage-container5 {
            display: contents;
          }
          .homepage-container6 {
            display: none;
          }
          .homepage-container7 {
            display: contents;
          }
          @media (max-width: 991px) {
            .homepage-thq-huntley-overview-lead-elm {
              font-size: var(--font-size-base);
              max-width: 62rem;
              line-height: var(--line-height-body);
            }
            .homepage-thq-section-title-elm1 {
              font-size: 28px;
              line-height: 1.2;
              letter-spacing: var(--letter-spacing-heading);
            }
            .homepage-thq-section-content-elm {
              font-size: var(--font-size-base);
              max-width: 62rem;
              line-height: var(--line-height-body);
            }
          }
          @media (max-width: 767px) {
            .homepage-thq-huntley-hero-tagline-elm {
              font-size: 18px;
              line-height: 1.55;
            }
            .homepage-thq-hero-title-elm {
              font-size: 34px;
              line-height: 1.12;
            }
            .homepage-thq-huntley-overview-lead-elm {
              font-size: var(--font-size-base);
              max-width: 62rem;
              line-height: var(--line-height-body);
            }
            .homepage-thq-section-title-elm1 {
              font-size: 28px;
              line-height: 1.2;
              letter-spacing: var(--letter-spacing-heading);
            }
            .homepage-thq-section-content-elm {
              font-size: var(--font-size-base);
              max-width: 62rem;
              line-height: var(--line-height-body);
            }
            .homepage-text11 {
              font-size: 16px;
              text-align: center;
              line-height: 1.4;
            }
          }
          @media (max-width: 479px) {
            .homepage-thq-hero-title-elm {
              font-size: 30px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Homepage
