"use client"
import { motion } from 'framer-motion'
import { Home } from 'lucide-react'
import Link from 'next/link'


const NavLink = motion(Link)

const HomeBtn = () => {
  return (
    <NavLink
    initial={{scale: 0}}
    animate={{scale: 1}}
    transition={{delay: 1}}
    href={"/"} target={"_self"} 
    className=" cursor-pointer text-foreground rounded-full flex items-center justify-center custom-bg fixed top-4 left-4 w-fit self-start z-50" aria-label={"home"} >
        <span className="relative w-12 h-12 p-4 group-hover:text-accent">
            <Home className='w-full h-auto' strokeWidth={1.5}/>
            <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"/>
        <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
            Home
        </span>
        </span>
    </NavLink>
  )
}

export default HomeBtn