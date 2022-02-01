import Head from 'next/head';
import Link from 'next/link';
export default function Slope() {
  return (
    <>
    <Head>
    <title>Slope | JIS Media Pro</title>
    </Head>
    <div className="p-4 shadow-[0_35px_35px_rgba(0,0,0,0.25)] mx-6 my-4 bg-slate-400 rounded-lg">
    <div className="max-w-full rounded overflow-hidden text-center">
    <Link href="/Games/Slope/Play"><img className="w-140px rounded-lg cursor-pointer" src="https://jeremiahisa.jeremiahis.repl.co/assets/play.jpg" alt="Play"/></Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Slope</div>
        <p className="text-white text-base">
          In Slope, you take control of a ball rolling down a steep slope. As you steer from side to side, your game plan is to avoid colliding into obstacles, keep your ball straight onto the falling slopes, speed boosting along the way and have tons of adrenaline rushed fun as you strive attain your record!
        </p>
      </div>
    </div>
  </div>

     </>
  )
}
