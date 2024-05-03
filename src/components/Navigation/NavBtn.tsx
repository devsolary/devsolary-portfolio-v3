import { Home } from "lucide-react"
import Link from "next/link"

const getIcon = (icon:string) => {
    switch (icon) {
        case "home":
            return <Home className="w-full h-auto" strokeWidth={1.5} />
            break
        default:
            return <Home  className="w-full h-auto" strokeWidth={1.5} />
    }
}

const NavBtn = ({x, y, label, link, icon, newTab} : {x:string, y:string, label:string, link:string, icon:string, newTab:boolean}) => {
  return (
    <div className="absolute cursor-pointer"
    style={{
        transform: `translate(${x}, ${y}`
    }}
    >
    <Link href={link} target={newTab ? "_blank" : "_self"} className="text-foreground rounded-full flex items-center justify-center" aria-label={label} >
        <span className="relative w-14 h-14 p-4">
            {getIcon(icon)}
        </span>
    </Link>
    </div>
  )
}

export default NavBtn