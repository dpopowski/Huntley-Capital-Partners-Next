import TqCollapsibleTextOverflow from '../components/tq-collapsible-text-overflow';
import TqBodyCode from '../components/tq-body-code';
import TqPageTransition from '../components/tq-page-transition';
import NavActiveLinks from '../components/nav-active-links';
import AnalyticsTracker from '../components/analytics/AnalyticsTracker';
import './style.css'

import Head from 'next/head'
import { GlobalProvider } from '../global-context'
import { NextIntlProvider } from 'next-intl'
export default function MyApp({ Component, pageProps }) {
  return (
    <><><><><>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NextIntlProvider
        messages={pageProps?.messages}
        locale={pageProps?.locale}
      >
        <GlobalProvider>
          <TqPageTransition><Component {...pageProps} /></TqPageTransition>
        </GlobalProvider>
      </NextIntlProvider>
    </>
  <AnalyticsTracker /></><NavActiveLinks /></><TqBodyCode /></><TqCollapsibleTextOverflow /></>)
}
