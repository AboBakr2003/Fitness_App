import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
}

export default function Card({ icon, title, description, setSelectedPage }: Props) {
  return (
    <motion.div
      className="h-full w-full flex flex-col items-center justify-center gap-4 border-2 border-gray-100 p-6 rounded-lg"
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      <div className="w-12 h-12 bg-primary-100 rounded-full border-2 border-gray-100 flex items-center justify-center">{icon}</div>
      <h2 className="font-bold">{title}</h2>
      <p className="text-sm text-gray-500 text-center">{description}</p>
      <AnchorLink 
        className="text-xs font-semibold underline text-primary-500 hover:text-secondary-500 transition duration-200"
        href={`#${SelectedPage.ContactUs}`}
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      >Learn More</AnchorLink>
    </motion.div>
  )
}