import Head from 'next/head';
import Link from 'next/link';
export default function Game2048() {
  return (
    <>
    <Head>
    <title>2048 | JIS Media Pro</title>
    </Head>
    <div className="p-4 shadow-[0_35px_35px_rgba(0,0,0,0.25)] mx-6 my-4 bg-slate-400 rounded-lg">
    <div className="max-w-full rounded overflow-hidden text-center">
    <Link href="/Games/2048/Play"><img className="w-140px rounded-lg cursor-pointer" src="https://jeremiahisa.jeremiahis.repl.co/assets/play.jpg" alt="Play"/></Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">2048</div>
        <p className="text-white text-base">
         2048 is a popular single-player game for Web and mobile. It&apos;s a type of “sliding block puzzle”
        </p>
      </div>
    </div>
  </div>

     </>
  )
}
