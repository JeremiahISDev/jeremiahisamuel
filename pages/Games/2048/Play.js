import Head from 'next/head';
export default function Game() {
  return (
    <>
      <Head>
        <title>2048 | JIS Media Pro</title>
      </Head>
      
      <iframe width="100%" height="100%" frameBorder="0" src="https://2048.jeremiahis.repl.co/" scrolling="no" id="frame" seamless="seamless" className="h-screen m-0 p-0 absolute"></iframe>
    </>
  )
}