import Image from "next/image";
import bg from "../../../assets/images/about-background.png"
import RenderModel from "@/components/RenderModel";
import Ufo from "../../../components/Models/Ufo";



export default function Home() {
  return (
    <>
      <Image src={bg} alt="backgroung image" className="w-[100vw] h-[100vh] fixed top-0 left-0 object-cover object-center -z-20 opacity-30" />
      <div className="absolute flex item-center justify-center top-20 left-0 h-screen">
      <RenderModel>
          <Ufo />
      </RenderModel>
      </div>
      </>
  );
}
