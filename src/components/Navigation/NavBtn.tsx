import { Home, User, Palette, Phone, Github, Linkedin, Twitter, Instagram, Facebook, MessageCircle, Notebook  } from "lucide-react"
import Link from "next/link"

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

const NavBtn = ({x, y, label, link, icon, newTab} : {x:string, y:string, label:string, link:string, icon:string, newTab:boolean}) => {
  return (
    <button className="absolute cursor-pointer z-50"
    style={{
        transform: `translate(${x}, ${y}`
    }}
    >
    <Link href={link} target={newTab ? "_blank" : "_self"} className="text-foreground group rounded-full flex items-center justify-center bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-sm" aria-label={label} >
        <span className="relative w-12 h-12 p-4 animate-spin-slow-reverse group-hover:text-accent">
            {getIcon(icon)}
        </span>
    </Link>
    </button>
  )
}

export default NavBtn