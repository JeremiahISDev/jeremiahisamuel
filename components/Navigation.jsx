import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from "react";
function Navigation() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
        <Head>
       
<script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?skin=desert">
</script>
    <link rel="apple-touch-icon" sizes="180x180" href="assets/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="194x194" href="assets/favicon-194x194.png"/>
<link rel="icon" type="image/png" sizes="192x192" href="assets/android-chrome-192x192.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="assets/favicon-16x16.png"/>
<link rel="manifest" href="assets/site.webmanifest"/>
<link rel="mask-icon" href="assets/safari-pinned-tab.svg" color="#0088ff"/>
<meta name="apple-mobile-web-app-title" content="JIS Media Pro"/>
<meta name="application-name" content="JIS Media Pro"/>
<meta name="msapplication-TileColor" content="#2b5797"/>
<meta name="msapplication-TileImage" content="assets/mstile-144x144.png"/>
<meta name="theme-color" content="#0088ff"/>
    </Head>
    <header className="flex items-center p-3 flex-wrap text-white bg-purple-700 sticky top-0 z-50">
      <div
        id="logo"
        className="lg:text-xl p-2 mr-4 inline-flex items-center font-serif font-bold"
      >
        <Link href="/">
        <span>
        <img className="h-16 w-16" src="/assets/LOGO.png" alt="JIS Media Pro" />
        </span>
        </Link>
      </div>
      <button
        onClick={() => setShowNav(!showNav)}
        type="button"
        className="inline-flex p-3 text-white hover:text-gray-300 focus:text-white focus:outline-none lg:hidden ml-auto"
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 -53 384 384"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
          <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
          <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
        </svg>
      </button>

      <div className="w-full flex-grow lg:inline-flex lg:flex-grow lg:w-auto">
        <div
          className={
            "lg:inline-flex lg:flex-row lg:ml-auto flex flex-col " +
            (showNav ? "" : "hidden")
          }
        >
          <Link href="/">
            <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-blue-600">
              Home
            </a>
          </Link>
          <Link href="/Games">
            <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-blue-600">
              Games
            </a>
          </Link>
          <Link href="/Hacks">
            <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-blue-600">
              Hacks
            </a>
          </Link>
          <Link href="/Movies">
            <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-blue-600">
              Movies
            </a>
          </Link>
          <Link href="/About">
            <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-blue-600">
              About
            </a>
          </Link>
        </div>
      </div>
      
    </header>
    </>
  )
}

export default Navigation;