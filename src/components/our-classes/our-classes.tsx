import { SelectedPage } from '../../shared/types'
import { motion } from 'framer-motion'
import HeaderText from '../../shared/header-text'

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

export default function OurClasses({ setSelectedPage }: Props) {
  return (
    <section id="our-classes" className="flex flex-col bg-primary-100 gap-14 py-24">
      <motion.div className="flex flex-col mx-auto w-5/6 gap-4">
        <HeaderText>OUR CLASSES</HeaderText>
        <p className=" text-gray-500 lg:w-2/3 text-sm">
          Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
          tellus quam porttitor. Mauris velit euismod elementum arcu neque
          facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
          enim mattis odio in risus nunc.
        </p>
      </motion.div>
      <motion.div></motion.div>
    </section>
  )
}

