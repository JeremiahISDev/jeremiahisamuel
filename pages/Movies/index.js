import Head from 'next/head';
import Link from 'next/link';
export default function Movies() {
  return (
    <>
    <Head>
    <title>Movies | JIS Media Pro</title>
    </Head>
    <div className="text-center p-6">
    
    <Link href="/Movies/Stream">
    <div>
    <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-full inline-flex items-center w-fit py-4 my-4"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
</svg><span className="px-4">Stream Planet</span></button>
  </div>
</Link>

<Link href="/Movies/Soap">
    <div>
    <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-full inline-flex items-center w-fit py-4 my-4"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
</svg><span className="px-4">Soap2Day</span></button>
  </div>
</Link>
    </div>
  </>
  )
}
