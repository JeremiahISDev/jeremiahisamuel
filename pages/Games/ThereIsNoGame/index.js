import Head from 'next/head';
import Link from 'next/link';
export default function ThereIsNoGame() {
  return (
    <>
    <Head>
    <title>There Is No Game | JIS Media Pro</title>
    </Head>
    <div className="p-4 shadow-[0_35px_35px_rgba(0,0,0,0.25)] mx-6 my-4 bg-slate-400 rounded-lg">
    <div className="max-w-full rounded overflow-hidden text-center">
    <Link href="/Games/ThereIsNoGame/Play"><img className="w-140px rounded-lg cursor-pointer" src="https://jeremiahisa.jeremiahis.repl.co/assets/play.jpg" alt="Play"/></Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">There Is No Game</div>
        <p className="text-white text-base">
         There Is No Game is a Point&Click comedy adventure (and Point&Click only!) that will take you on a journey you never asked to go on, through silly and unexpected video game universes.
        </p>
      </div>
    </div>
  </div>

     </>
  )
}
