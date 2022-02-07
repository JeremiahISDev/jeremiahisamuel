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

        <Link href="Games/ShootR"><div className="cursor-pointer w-fit"><div className="w-fit rounded-[2.5rem] hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
          <img src="https://shootr.azurewebsites.net/Images/favicon.ico"
            alt="ShootR" className="rounded-lg w-40 h-40" />

        </div><div className="pt-2">ShootR</div>
        </div>
        </Link>

        <Link href="Games/2048"><div className="cursor-pointer w-fit"><div className="w-fit rounded-[2.5rem] hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
          <img src="https://icons.iconarchive.com/icons/alecive/flatwoken/512/Apps-2048-icon.png"
            alt="2048" className="rounded-lg w-40 h-40" />

        </div><div className="pt-2">2048</div>
        </div>
        </Link>

        <Link href="Games/CrossCode"><div className="cursor-pointer w-fit"><div className="w-fit rounded-[2.5rem] hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/677af80a-4f37-4a8c-8228-1dc57a31cf6f/dcnfqz6-3627e0d4-5a9e-4245-8b17-4804b8450947.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY3N2FmODBhLTRmMzctNGE4Yy04MjI4LTFkYzU3YTMxY2Y2ZlwvZGNuZnF6Ni0zNjI3ZTBkNC01YTllLTQyNDUtOGIxNy00ODA0Yjg0NTA5NDcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.t4hW_ubp0OTgtTHia70aDaeC1rEc6IngE4t_QOBguOU"
            alt="CrossCode" className="rounded-full w-40 h-40" />

        </div><div className="pt-2">CrossCode</div>
        </div>
        </Link>

        <Link href="Games/BeatThat"><div className="cursor-pointer w-fit"><div className="w-fit rounded-[2.5rem] hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
          <img src="https://freepngimg.com/download/acura/2-2-acura-png-file.png"
            alt="Acura Beat That" className="rounded-lg w-40 h-40" />

        </div><div className="pt-2">Acura Beat That</div>
        </div>
        </Link>

        <Link href="Games/MotoPool"><div className="cursor-pointer w-fit"><div className="w-fit rounded-[2.5rem] hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
          <img src="https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/0235b530eec4f17ad60137f6b245a988.jpeg"
            alt="Moto X3M Pool Party" className="rounded-lg w-40 h-40" />

        </div><div className="pt-2">Moto X3M Pool Party</div>
        </div>
        </Link>

      </div>
    </>
  )
}
