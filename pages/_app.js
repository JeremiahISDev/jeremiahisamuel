//org. Crisp ID "b7bb8868-8124-4604-bb59-f3d9f8c6659e"

import '../styles/globals.css'
import Navigation from '../components/Navigation'
import Head from 'next/head'
import Script from 'next/script';
import "prismjs/themes/prism-tomorrow.css";
export default function Portfolio({ Component, pageProps }) {
  return (
    <>
<Script
  id="crisp-widget"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      window.$crisp=[];
      window.CRISP_WEBSITE_ID="9f460efd-73d6-4fd2-af0f-11d2591c0e7c";
      (function(){
        const d = document;
        const s = d.createElement("script");
        s.src = "https://client.crisp.chat/l.js";
        s.async = 1;
        d.getElementsByTagName("head")[0].appendChild(s);
      })();`,
  }}
/>
      <Head>
        
       <meta name="google-site-verification" content="GvQClaWf6xn3H-Pf6ytkMkBpf8J1jjTNb_sEMVpHyKE" />
      </Head>
      <Navigation />
      <Component {...pageProps} />
    </>
  )
}