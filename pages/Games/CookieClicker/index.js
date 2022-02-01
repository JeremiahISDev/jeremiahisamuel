import Head from 'next/head';
import Link from 'next/link';
export default function CookieClicker() {
  return (
    <>
    <Head>
    <title>Cookie Clicker | JIS Media Pro</title>
    </Head>
    <div className="p-4 shadow-[0_35px_35px_rgba(0,0,0,0.25)] mx-6 my-4 bg-slate-400 rounded-lg">
    <div className="max-w-full rounded overflow-hidden text-center">
    <Link href="/Games/CookieClicker/Play"><img className="w-140px rounded-lg cursor-pointer" src="https://jeremiahisa.jeremiahis.repl.co/assets/play.jpg" alt="Play"/></Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Cookie Clicker</div>
        <p className="text-white text-base">
          Cookie Clicker is an incremental game created by French programmer Julien "Orteil" Thiennot in 2013. The user initially clicks on a big cookie on the screen, earning a single cookie per click. Though the game has no ending, it has hundreds of achievements, and users may aim to reach milestone numbers of cookies.
        </p>
      </div>
    </div>
  </div>

     </>
  )
}
