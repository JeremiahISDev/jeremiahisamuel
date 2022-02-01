import Head from 'next/head';
import Link from 'next/link';
export default function RollingSky() {
  return (
    <>
    <Head>
    <title>Rolling Sky | JIS Media Pro</title>
    </Head>
    <div className="p-4 shadow-[0_35px_35px_rgba(0,0,0,0.25)] mx-6 my-4 bg-slate-400 rounded-lg">
    <div className="max-w-full rounded overflow-hidden text-center">
    <Link href="/Games/RollingSky/Play"><img className="w-140px rounded-lg cursor-pointer" src="https://jeremiahisa.jeremiahis.repl.co/assets/play.jpg" alt="Play"/></Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Rolling Sky</div>
        <p className="text-white text-base">
          Rolling Sky is a ball running game that combines rhythm and fun. Challenge your speed and showcase your reaction time! Stunning 3D effects, easy to operate, simply steer the ball to dodge the obstacles and conquer the world! Control the ball to avoid obstacles and do not fall!
        </p>
      </div>
    </div>
  </div>

     </>
  )
}
