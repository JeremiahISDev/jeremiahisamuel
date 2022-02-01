import Head from 'next/head';
export default function Stream() {
  return (
    <>
    <Head>
    <title>Loading...</title>
    <script defer>
    window.open('https://stream-planet.com','_self')
    </script>
    </Head>
    
  </>
  )
}
