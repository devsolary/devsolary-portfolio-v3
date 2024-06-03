import { projectsDataInterface } from "@/data/ProjectsData"
import ProjectsLayout from "./ProjectsLayout"

const ProjectList = ({projects} : {projects : projectsDataInterface[]}) => {
  return (
    <div className="w-full max-w-4xl px-14 space-y-8 flex flex-col items-center">
        {projects.map((project, i) => {
            return <ProjectsLayout key={i} {...project} />
        })}
    </div>
  )
}

export default ProjectList