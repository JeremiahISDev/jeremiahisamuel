import Head from 'next/head';
import Link from 'next/link';
export default function CrossCode() {
  return (
    <>
    <Head>
    <title>CrossCode | JIS Media Pro</title>
    </Head>
    <div className="p-4 shadow-[0_35px_35px_rgba(0,0,0,0.25)] mx-6 my-4 bg-slate-400 rounded-lg">
    <div className="max-w-full rounded overflow-hidden text-center">
    <Link href="/Games/CrossCode/Play"><img className="w-140px rounded-lg cursor-pointer" src="https://jeremiahisa.jeremiahis.repl.co/assets/play.jpg" alt="Play"/></Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">CrossCode</div>
        <p className="text-white text-base">
          CrossCode combines 16-bit SNES-style graphics with butter-smooth physics, a fast-paced combat system, and engaging puzzle mechanics, served with a gripping sci-fi story. CrossCode is all about how it plays! Take the best out of two popular genres, find a good balance between them and make a great game.
        </p>
      </div>
    </div>
  </div>

     </>
  )
}
