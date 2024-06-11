"use client"
import { projectsDataInterface } from "@/data/ProjectsData"
import ProjectsLayout from "./ProjectsLayout"
import { motion } from "framer-motion"

const container = {
  hidden: {opacity: 0},
  show: {
      opacity: 1,
      transition: {
          staggerChildren: 0.3,
          delayChildren: 1.5,
      }
  }
}


const ProjectList = ({projects} : {projects : projectsDataInterface[]}) => {
  return (
    <motion.div 
    
    variants={container}
    initial="hidden"
    animate="show"

    className="w-full max-w-auto xl:max-w-4xl px-4 mx-auto lg:px-14 space-y-6 md:space-y-8 flex flex-col items-center">
        {projects.map((project, i) => {
            return <ProjectsLayout key={i} {...project} />
        })}
    </motion.div>
  )
}

export default ProjectList