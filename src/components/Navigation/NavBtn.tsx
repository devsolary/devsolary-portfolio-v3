import { Home, User, Palette, Phone, Github, Linkedin, Twitter, Instagram, Facebook, MessageCircle, Notebook  } from "lucide-react"
import Link from "next/link"
import ResponsiveComponents from "../ResponsiveComponents"
import clsx from "clsx"
import { motion } from 'framer-motion'

const getIcon = (icon:string) => {
    switch (icon) {
        case "home":
            return <Home className="w-full h-auto" strokeWidth={1.5} />
            break
        case "about":
            return <User className="w-full h-auto" strokeWidth={1.5} />
            break
        case "projects":
            return <Palette className="w-full h-auto" strokeWidth={1.5} />
            break
        case "contact":
            return <Phone className="w-full h-auto" strokeWidth={1.5} />
            break
        case "github":
            return <Github className="w-full h-auto" strokeWidth={1.5} />
            break
        case "linkedin":
            return <Linkedin className="w-full h-auto" strokeWidth={1.5} />
            break
        case "instagram":
            return <Instagram className="w-full h-auto" strokeWidth={1.5} />
            break
        case "whatSapp":
            return <MessageCircle className="w-full h-auto" strokeWidth={1.5} />
            break
        case "twitter":
            return <Twitter className="w-full h-auto" strokeWidth={1.5} />
            break
        case "facebook":
            return <Facebook className="w-full h-auto" strokeWidth={1.5} />
            break
        default:
            return <Home  className="w-full h-auto" strokeWidth={1.5} />
    }
}

const item = {
    hidden: {scale: 0},
    show: {scale: 1}
}

const NavLink = motion(Link)

const NavBtn = ({x, y, label, link, icon, newTab, labelDirection="right"} : {x:string, y:string, label:string, link:string, icon:string, newTab:boolean, labelDirection:string}) => {
  return (
    <ResponsiveComponents>
{({size}) => {
    return size && size >= 480 ? <button className="absolute cursor-pointer"
    style={{
        transform: `translate(${x}, ${y}`
    }}
    >
    <NavLink 
    variants={item}


    href={link} target={newTab ? "_blank" : "_self"} className="text-foreground rounded-full flex items-center justify-center custom-bg" aria-label={label} >
        <span className="relative w-12 h-12 p-4 animate-spin-slow-reverse group-hover:pause group-hover:text-accent">
            {getIcon(icon)}
            <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"/>
        <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
            {label}
        </span>
        </span>
    </NavLink>
    </button> : <button className="w-fit cursor-pointer"
    >
    <NavLink href={link} target={newTab ? "_blank" : "_self"} className="text-foreground rounded-full flex items-center justify-center custom-bg" aria-label={label} >
        <span className="relative w-10 h-10 xs:w-12 xs:h-12 p-2.5 xs:p-4  group-hover:text-accent">
            {getIcon(icon)}
            <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"/>
        <span className={clsx("absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap", labelDirection === "left" ? "right-full left-auto" : "")}>
            {label}
        </span>
        </span>
    </NavLink>
    </button>
}}
    </ResponsiveComponents>
  )
}

export default NavBtn