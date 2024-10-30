import { Orbit } from "lucide-react"
import { FloatingNav } from "./ui/Floating-nav"

const Navbar = () => {
  const navitem = [
    {
      name: "Home",
      link: "/",
      icon: <Orbit color="#F0ED75"/>,
    },
  ]
  return (
    <nav className="relative">
      <FloatingNav navItems={navitem}/>
    </nav>
  )
}

export default Navbar