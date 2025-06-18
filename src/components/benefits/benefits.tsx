import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import type { SelectedPage, BenefitType } from "../../shared/types";
import HeaderText from "../../shared/header-text";
import { motion } from "framer-motion";
import Card from "./card";
import BenefitsImage from "../../assets/BenefitsPageGraphic.png"
import AbstractWaves from "../../assets/AbstractWaves.png"
import Sparkles from "../../assets/Sparkles.png"
import ActionButton from "../../shared/action-button";
import useMediaQuery from "../../hooks/useMediaQuery";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

export default function Benefits({ setSelectedPage }: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");
  
  return (
    <section id="benefits" className="flex flex-col mx-auto w-5/6 min-h-screen pt-24 pb-10 gap-20">
      {/* HEADER AND BENEFITS CARDS */}
      <div className="flex flex-col gap-12">
        {/* HEADER */}
        <motion.div 
          className="flex flex-col gap-4 lg:w-4/6 text-gray-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HeaderText>MORE THAN JUST A GYM.</HeaderText>
          <p className="text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        {/* BENEFITS CARDS */}
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:h-[300px] w-full text-gray-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.3, delayChildren: 0.3 } },
          }}
        >
          {benefits.map((benefit) => (
            <Card 
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </div>
      {/* BENEFITS IMAGE AND DESCRIPTION */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-25">
        {/* BENEFITS IMAGE */}
        <motion.div
          className="flex justify-center lg:justify-start lg:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img className="object-contain" alt="benefits-image" src={BenefitsImage}/>
        </motion.div>
        {/* BENEFITS DESCRIPTION */}
        <motion.div
          className=" relative flex flex-col justify-center gap-2 lg:gap-4 lg:w-4/6 text-gray-500 py-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {isAboveMediumScreens && <motion.img 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.5,
                delay: 1,
            }}
            className="2xl:w-1/8 lg:w-1/7 w-1/8 absolute 2xl:-translate-y-36 lg:-translate-y-45 lg:-translate-x-16" 
            alt="abstract-waves" 
            src={AbstractWaves}/>}
          <div>
            <HeaderText>
              MILLIONS OF HAPPY MEMBERS GETTING{" "}
              <span className="text-primary-500">FIT</span>
            </HeaderText>
            <p className="my-5 text-sm">
              Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
              egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
              fames vitae vitae quis. Quis amet vulputate tincidunt at in
              nulla nec. Consequat sed facilisis dui sit egestas ultrices
            tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
            Felis orci diam odio.
            </p>
            <p className="mb-5 text-sm">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
          {isAboveMediumScreens && <motion.img 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 1,
            }}
            className="w-1/8 absolute 2xl:translate-x-150 2xl:translate-y-30 lg:translate-x-120 lg:translate-y-32" 
            alt="sparkles" 
            src={Sparkles}/>
          }
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 1, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
          </motion.div>
        </motion.div>
      </div>  
    </section>
  )
}