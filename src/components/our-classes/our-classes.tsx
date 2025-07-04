import { SelectedPage, type ClassType } from '../../shared/types';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useState, useRef } from "react";
import { Swiper as SwiperClass } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import HeaderText from '../../shared/header-text';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import image5 from '../../assets/image5.png';
import image6 from '../../assets/image6.png';

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export default function OurClasses({ setSelectedPage }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const swiperRef = useRef<SwiperClass | null>(null);
  return (
    <section id="our-classes" className="flex flex-col bg-primary-100 gap-20 2xl:gap-34 py-30">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex flex-col mx-auto w-5/6 gap-4"
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <HeaderText>OUR CLASSES</HeaderText>
        <p className="text-gray-500 lg:w-2/3 text-sm">
          Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
          tellus quam porttitor. Mauris velit euismod elementum arcu neque
          facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
          enim mattis odio in risus nunc.
        </p>
      </motion.div>

      <motion.div
      className="w-full px-6 overflow-x-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
          onMouseLeave={() => swiperRef.current?.autoplay?.start()}
        >
          {classes.map((classItem: ClassType, index: number) => (
            <SwiperSlide
              key={index}
              className="bg-white p-2 rounded-xl relative"
              onMouseEnter={() => {
                setHoveredIndex(index);
                swiperRef.current?.autoplay?.stop();
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
                swiperRef.current?.autoplay?.start();
              }}
            >
              <div className="relative">
                <img
                  src={classItem.image}
                  alt={classItem.name}
                  className="w-full h-64 object-cover rounded-md"
                />
                <motion.div
                  className="absolute rounded-md inset-0 bg-primary-500/80 flex flex-col justify-center items-center text-white p-4 z-10"
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  initial={false}
                  transition={{ duration: 0.3 }}
                  style={{ pointerEvents: hoveredIndex === index ? 'auto' : 'none' }}
                >
                  <h3 className="text-xl font-bold">{classItem.name}</h3>
                  {classItem.description && (
                    <p className="text-sm mt-2 text-center">{classItem.description}</p>
                  )}
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-swiper-pagination mt-6 flex justify-center gap-2"/>
      </motion.div>
    </section>
  );
}
