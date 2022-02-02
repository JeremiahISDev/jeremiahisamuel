import Head from 'next/head';
export default function Game() {
  return (
    <>
      <Head>
        <title>ShootR | JIS Media Pro</title>
      </Head>
      
      <iframe width="100%" height="100%" frameBorder="0" src="https://shootr.azurewebsites.net/" scrolling="yes" id="frame" seamless="seamless" className="h-screen m-0 p-0 absolute"></iframe>
    </>
  )
}