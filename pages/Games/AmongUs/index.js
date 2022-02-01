import Head from 'next/head';
import Link from 'next/link';
export default function AmongUs() {
  return (
    <>
    <Head>
    <title>Among Us | JIS Media Pro</title>
    </Head>
    <div className="p-4 shadow-[0_35px_35px_rgba(0,0,0,0.25)] mx-6 my-4 bg-slate-400 rounded-lg">
    <div className="max-w-full rounded overflow-hidden text-center">
    <Link href="/Games/AmongUs/Play"><img className="w-140px rounded-lg cursor-pointer" src="https://jeremiahisa.jeremiahis.repl.co/assets/play.jpg" alt="Play"/></Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Among Us</div>
        <p className="text-white text-base">
          Among Us is a multiplayer game where between four and 10 players are dropped onto an alien spaceship. Each player is designated a private role as a “crewmate” or “impostor.”
        </p>
      </div>
    </div>
  </div>

     </>
  )
}
