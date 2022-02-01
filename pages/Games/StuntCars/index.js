import Head from 'next/head';
import Link from 'next/link';
export default function StuntCars() {
  return (
    <>
    <Head>
    <title>Madalin Stunt Cars | JIS Media Pro</title>
    </Head>
    <div className="p-4 shadow-[0_35px_35px_rgba(0,0,0,0.25)] mx-6 my-4 bg-slate-400 rounded-lg">
    <div className="max-w-full rounded overflow-hidden text-center">
    <Link href="/Games/StuntCars/Play"><img className="w-140px rounded-lg cursor-pointer" src="https://jeremiahisa.jeremiahis.repl.co/assets/play.jpg" alt="Play"/></Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Madalin Stunt Cars</div>
        <p className="text-white text-base">
          Madalin Stunt Cars Multiplayer is a 3D stunt driving game featuring some of the world's most powerful cars. Jump behind the wheel of your favorite automobile and race around one of the three expansive maps. You can invite your friends to play in any of the online multiplayer servers to share the high-octane thrill.
        </p>
      </div>
    </div>
  </div>

     </>
  )
}
