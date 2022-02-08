import '../styles/globals.css'
import Navigation from '../components/Navigation'
import Head from 'next/head'
import Script from 'next/script';
import "prismjs/themes/prism-tomorrow.css";
export default function Portfolio({ Component, pageProps }) {
  return (
    <>
<Script async id="GTAG" src="https://www.googletagmanager.com/gtag/js?id=G-HN74T3ZW6W"></Script>
    <Script id="luckyOrange" async defer src="https://tools.luckyorange.com/core/lo.js?site-id=605447fe">
        </Script>
<Script id="inspectlet" src="../components/inspectlet.js">
</Script>
<Script id="inspectlet" src="../components/GTAG.js">
</Script>
      <Head>
        
       <meta name="google-site-verification" content="GvQClaWf6xn3H-Pf6ytkMkBpf8J1jjTNb_sEMVpHyKE" />
      </Head>
      <Navigation />
      <Component {...pageProps} />
    </>
  )
}