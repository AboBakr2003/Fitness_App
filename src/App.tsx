import Navbar from "./components/navbar/navbar" 
import { SelectedPage } from "./shared/types"
import { useState, useEffect } from "react"
import Home from "./components/home/home"
import Benefits from "./components/benefits/benefits"
import OurClasses from "./components/our-classes/our-classes"

export default function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
      } else {
        setIsTopOfPage(false)
      }
    };
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  },[])
  
  return (
    <div className="app bg-gray-20">
      <Navbar 
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage} 
        isTopOfPage={isTopOfPage}
      />
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage}/>
    </div>
  )
}