import Image from "next/image";
import bg from "../../assets/images/projects-background.png"
import ProjectList from "@/components/projects";
import { projectsData } from "@/data/ProjectsData";
import RenderModel from "@/components/RenderModel";
import Weapon from "../../components/Models/Weapon";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt="backgroung image" fill className="w-[100vw] h-[100vh] object-cover object-center -z-20 opacity-30" />
      <ProjectList projects={projectsData} />
      <div className="flex item-center justify-center top-20 left-0 h-screen">
      <RenderModel>
          <Weapon />
      </RenderModel>
      </div>
    </main>
  );
}
