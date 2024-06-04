import Image from "next/image";
import bg from "../../../assets/images/projects-background.png"
import ProjectList from "@/components/projects";
import { projectsData } from "@/data/ProjectsData";
import RenderModel from "@/components/RenderModel";
import Weapon from "../../../components/Models/Weapon";



export default function Home() {
  return (
    <>
      <Image src={bg} alt="backgroung image" className="w-[100vw] h-[100vh] fixed top-0 left-0 object-cover object-center -z-20 opacity-30" />
      <ProjectList projects={projectsData} />
      <div className="absolute flex item-center justify-center top-20 left-0 h-screen">
      <RenderModel>
          <Weapon />
      </RenderModel>
      </div>
      <div className="absolute flex item-center justify-center top-20 right-0 h-screen">
      <RenderModel>
          <Weapon />
      </RenderModel>
      </div>
      </>
  );
}
