// import { useState, useEffect } from "react"
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Logo from "../../assets/Logo.png"
import Link from "./link/link"
import "../../global-style.css"

type Props = {
  selectedPage: string,
  setSelectedPage: (value: string) => void,
}

export default function Navbar({selectedPage, setSelectedPage}: Props) {
  const flexBetween = "flex items-center justify-between"

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-3`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-24`}>
            <img src={Logo} alt="Logo" />
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} w-4/6 justify-evenly text-sm`}>
                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              </div>
              <div className={`${flexBetween} gap-8`}>
                <p className="text-sm cursor-pointer">Sign In</p>
                <button className="bg-primary-500 px-4 py-2 text-white rounded-full font-medium cursor-pointer">Become a Member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}