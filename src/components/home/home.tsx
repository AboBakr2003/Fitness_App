import { SelectedPage } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../../shared/action-button";
import EvolveText from "../../assets/EvolveText.png";
import HomePageText from "../../assets/HomePageText.png";
import HomePageGraphic from "../../assets/HomePageGraphic.png";
import SponsorRedBull from "../../assets/SponsorRedBull.png";
import SponsorForbes from "../../assets/SponsorForbes.png";
import SponsorFortune from "../../assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

export default function Home({ setSelectedPage }: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");
  return (
    <section id="home" className="flex flex-col pt-22 lg:pt-26 2xl:pt-32 justify-center lg:justify-end lg:gap-16.5 2xl:gap-27.5">
      {/* MAIN HEADER AND IMAGE */}
      <motion.div 
        className="flex flex-col mx-auto w-5/6 gap-12 lg:gap-0 justify-between lg:flex-row"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="flex flex-col 2xl:gap-8 lg:gap-6 gap-8 items-start justify-center lg:w-1/2">
          {/* HEADINGS */}
          <motion.div   
            className="flex flex-col gap-8 lg:gap-5 2xl:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              {isAboveMediumScreens && (
                  <motion.img
                  className="absolute 2xl:w-8/10 lg:w-7/10 2xl:-translate-y-14 2xl:-translate-x-8 lg:-translate-y-10 lg:-translate-x-6 "
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    alt="evolve-text" src={EvolveText}/>
              )}
              <div className="relative z-1 w-4/6 lg:w-6/10">
                <img alt="home-text" src={HomePageText}/>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>
          {/* ACTIONS */}
          <motion.div 
            className="flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
            <AnchorLink 
              className="lg:text-sm text-xs font-semibold underline text-primary-500 hover:text-secondary-500 transition duration-200"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              Learn More
            </AnchorLink>
          </motion.div>
        </div>
        {/* IMAGE */}
        <motion.div
          className="flex lg:justify-end justify-center lg:w-1/2 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="lg:w-4/6">
            <img alt="home-graphic" src={HomePageGraphic}/>
          </div>
        </motion.div>
      </motion.div>
      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className=" w-full bg-primary-100">
          <div className="flex justify-start items-center gap-60 w-5/6 mx-auto lg:py-6">
            <div className="lg:w-[80px]"><img alt="redbull-sponsor" src={SponsorRedBull}/></div>
            <div className="lg:w-[80px]"><img alt="forbes-sponsor" src={SponsorForbes}/></div>
            <div className="lg:w-[80px]"><img alt="fortune-sponsor" src={SponsorFortune}/></div>
          </div>
        </div>
      )}
    </section>
  )
}

