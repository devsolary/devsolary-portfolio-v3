import Image from "next/image";
import bg from "../assets/images/home-background.png"
import RenderModel from "@/components/RenderModel";
import NemoCyborg from "@/components/Models/NemoCyborg";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt="backgroung image" fill className="w-[100vw] h-[100vh] object-cover object-center -z-20 opacity-30" />
      <div className="w-full h-screen">
        {/* navigation and 3d model*/}
        <Navigation />
        <RenderModel>
          <NemoCyborg />
        </RenderModel>
      </div>
    </main>
  );
}
