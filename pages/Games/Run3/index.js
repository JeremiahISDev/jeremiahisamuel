import Head from 'next/head';
import Link from 'next/link';
export default function Run3() {
  return (
    <>
    <Head>
    <title>Run3 | JIS Media Pro</title>
    </Head>
    <div className="p-4 shadow-[0_35px_35px_rgba(0,0,0,0.25)] mx-6 my-4 bg-slate-400 rounded-lg">
    <div className="max-w-full rounded overflow-hidden text-center">
    <Link href="/Games/Run3/Play"><img className="w-140px rounded-lg cursor-pointer" src="https://jeremiahisa.jeremiahis.repl.co/assets/play.jpg" alt="Play"/></Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Run3</div>
        <p className="text-white text-base">
          RUN!!!        </p>
      </div>
    </div>
  </div>

     </>
  )
}
