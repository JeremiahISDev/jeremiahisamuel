import Head from 'next/head';
import Link from 'next/link';
export default function Games() {
  return (
    <>
      <Head>
        <title>Games | JIS Media Pro</title>
      </Head>
      <h1 className="text-center text-blue-600 font-bold text-3xl pt-6 md:pb-6">Games</h1>
      <div id="Container" className=" text-center mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-6 p-6 content-center justify-center">
        <Link href="Games/Slope"><div className="cursor-pointer w-fit">
          <div className="w-fit rounded-[2.5rem] hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
            <img src="https://play-lh.googleusercontent.com/uJn2i9h7KxYQarC_c3K4qH6o7gLtflFnhD_dN14MNkzHJ1NeNFzCL69jpB5mT0vCoQs"
              alt="Slope" className="rounded-lg w-40 h-40" />

          </div>
          <div className="pt-2">Slope</div>
        </div>
        </Link>
        <Link href="Games/StuntCars"><div className="cursor-pointer w-fit"><div className="w-fit rounded-[2.5rem] hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
          <img src="https://madalinstuntcars2.io/data/image/madalin-cars-multiplayer1.jpg"
            alt="Stunt Cars" className="rounded-lg w-40 h-40" />

        </div><div className="pt-2">Madalin Stunt Cars</div>
        </div>
        </Link>

         <Link href="Games/AmongUs"><div className="cursor-pointer w-fit"><div className="w-fit rounded-[2.5rem] hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
          <img src="https://seeklogo.com/images/A/among-us-logo-315EB5A5DA-seeklogo.com.png"
            alt="Among Us" className="rounded-lg w-40 h-40" />

        </div><div className="pt-2">Among Us</div>
        </div>
        </Link>

        <Link href="Games/CookieClicker"><div className="cursor-pointer w-fit"><div className="w-fit rounded-full hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
          <img src="https://static.wikia.nocookie.net/cookieclicker/images/5/5a/PerfectCookie.png"
            alt="Cookie Clicker" className="rounded-lg w-40 h-40" />

        </div><div className="pt-2">Cookie Clicker</div>
        </div>
        </Link>

        <Link href="Games/HexGL"><div className="cursor-pointer w-fit"><div className="w-fit rounded-[2.5rem] hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
          <img src="https://dl.flathub.org/repo/appstream/x86_64/icons/128x128/org.gnome.HexGL.png"
            alt="HexGL" className="rounded-lg w-40 h-40" />

        </div><div className="pt-2">HexGL</div>
        </div>
        </Link>

        <Link href="Games/RollingSky"><div className="cursor-pointer w-fit"><div className="w-fit rounded-[2.5rem] hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
          <img src="https://static.wikia.nocookie.net/rolling-sky/images/6/64/Rolling_Sky_Switch.png"
            alt="Rolling Sky" className="rounded-lg w-40 h-40" />

        </div><div className="pt-2">Rolling Sky</div>
        </div>
        </Link>

        <Link href="Games/ThereIsNoGame"><div className="cursor-pointer w-fit"><div className="w-fit rounded-[2.5rem] hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
          <img src="https://cdn2.steamgriddb.com/file/sgdb-cdn/logo_thumb/95cbccd215b174ddee376b6eb425975a.png"
            alt="There Is No Game" className="rounded-lg w-40 h-40 p-4" />

        </div><div className="pt-2">There Is No Game</div>
        </div>
        </Link>
      </div>
    </>
  )
}
