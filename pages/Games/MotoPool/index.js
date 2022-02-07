import Head from 'next/head';
import Link from 'next/link';
export default function MotoPool() {
  return (
    <>
    <Head>
    <title>MotoPool | JIS Media Pro</title>
    </Head>
    <div className="p-4 shadow-[0_35px_35px_rgba(0,0,0,0.25)] mx-6 my-4 bg-slate-400 rounded-lg">
    <div className="max-w-full rounded overflow-hidden text-center">
    <Link href="/Games/MotoPool/Play"><img className="w-140px rounded-lg cursor-pointer" src="https://jeremiahisa.jeremiahis.repl.co/assets/play.jpg" alt="Play"/></Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Moto X3M Pool Party</div>
        <p className="text-white text-base">
          Moto X3M 5 Pool Party is a motorbike racing game with summer as main theme. This 5th part in the Moto X3M series has 22 new challenging levels. Race your motorbike through pools and beaches and discover all the new obstacles in this sequel in the Moto X3M series.
        </p>
      </div>
    </div>
  </div>

     </>
  )
}
