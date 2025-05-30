import Navbar from "./components/navbar/navbar"
import { useState } from "react"

export default function App() {
  const [selectedPage, setSelectedPage] = useState<string>("Home")
  return (
    <div className="app bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  )
}