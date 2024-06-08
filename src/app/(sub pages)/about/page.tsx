import Image from "next/image";
import bg from "../../../assets/images/about-background.png"
import RenderModel from "@/components/RenderModel";
import Ufo from "../../../components/Models/Ufo";
import AboutDetails from "@/components/about";



export default function Home() {
  return (
    <>
      <Image src={bg} alt="background image" className="w-[100vw] h-[100vh] fixed top-0 left-0 object-cover object-center -z-20 opacity-30" />
      <div className="w-full h-screen absolute top-1/2 -translate-y-1/2 left-0">
      <RenderModel>
          <Ufo />
      </RenderModel>
      </div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
      <div  className="absolute flex flex-col items-center text-center left-1/2 -translate-x-1/2 -translate-y-1">
        <h1 className="font-bold text-8xl text-accent">DEVSOLARY</h1>
        <p className="font-light text-foreground text-lg">Meet the Tech bro behind this portfolio</p>
      </div>
      </div>
        <AboutDetails />
      </>
  );
}
