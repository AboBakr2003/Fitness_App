import { SelectedPage } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../../shared/action-button";
import HomePageText from "../../assets/HomePageText.png";
import HomePageGraphic from "../../assets/HomePageGraphic.png";
import SponsorRedBull from "../../assets/SponsorRedBull.png";
import SponsorForbes from "../../assets/SponsorForbes.png";
import SponsorFortune from "../../assets/SponsorFortune.png";
import { motion } from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

export default function Home({selectedPage, setSelectedPage}: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");
  return (
    <section id="home" className="flex flex-col gap-20 bg-gray-20 py-10 md:h-full md:pb-0 md:pt-30">
      {/* MAIN HEADER AND IMAGE */}
      <div className="flex mx-auto w-5/6 md:flex-row flex-col gap-60">
        {/* MAIN HEADER */}
        <div className="flex flex-col md:justify-center md:gap-10">
          <div className="flex flex-col gap-8">
            <div>
              <div className="relative before:absolute md:before:content-evolve-text before:left-0 before:top-0">
                <img alt="home-text" src={HomePageText}/>
              </div>
            </div>
            <p className="text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </div>
          {/* ACTIONS */}
          <div>
            <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
          </div>
        </div>
        {/* IMAGE */}
        <div>
          <div className="w-full md:w-sm">
            <img alt="home-graphic" src={HomePageGraphic}/>
          </div>
        </div>
      </div>
      {/* SPONSORS */}
      <div className=" w-full bg-primary-100">
        <div className="flex justify-start items-center gap-60 w-5/6 mx-auto py-8">
          <div><img alt="redbull-sponsor" src={SponsorRedBull}/></div>
          <div><img alt="forbes-sponsor" src={SponsorForbes}/></div>
          <div><img alt="fortune-sponsor" src={SponsorFortune}/></div>
        </div>
      </div>
    </section>
  )
}

