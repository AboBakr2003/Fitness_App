import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import HeaderText from "../../shared/header-text";
import ContactUsImage from "../../assets/ContactUsPageGraphic.png";
import EvolveText from "../../assets/EvolveText.png";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import useMediaQuery from "../../hooks/useMediaQuery";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUsSchema = z.object({
  name: z.string().min(1, "Name is required *"),
  email: z.string().email("Invalid email *"),
  message: z.string().min(1, "Message is required *"),
});

type ContactFormData = z.infer<typeof ContactUsSchema>;

export default function ContactUs({ setSelectedPage }: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactUsSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
  };

  return (
    <section id="contact-us" className="flex flex-col mx-auto pt-22 pb-14 lg:pt-24 lg:pb-16 2xl:pt-26 2xl:pb-22 gap-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex flex-col mx-auto w-5/6 gap-1 lg:gap-4"
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <HeaderText><span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE</HeaderText>
        <p className="text-gray-500 lg:w-2/3 text-sm">
          Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
          sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
          adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
        </p>
      </motion.div>
      <div className="flex flex-col lg:flex-row gap-10 w-5/6 mx-auto relative">
        <form
        className="flex flex-col gap-4 items-start grow-1" 
        onSubmit={handleSubmit(onSubmit)}>
          <motion.div
          className="flex flex-col gap-1 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 300 },
            visible: { opacity: 1, y: 0 },
          }}
          >
          <input 
            className="w-full p-2 lg:p-3 border-0 outline-0 placeholder:text-gray-20 text-gray-20 bg-primary-300 rounded-md" 
            type="text" 
            placeholder="NAME" 
            {...register("name")}
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
          </motion.div>
          <motion.div
          className="flex flex-col gap-1 w-full"
          initial="hidden"
          whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 250 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <input 
            className="w-full p-2 lg:p-3 border-0 outline-0 placeholder:text-gray-20 text-gray-20 bg-primary-300 rounded-md" 
            type="email" 
            placeholder="EMAIL" 
            {...register("email")}
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
          </motion.div>
          <motion.div
          className="flex flex-col gap-1 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 120 },
            visible: { opacity: 1, y: 0 },
          }}
          >
          <textarea
            className="w-full p-2 lg:p-3 border-0 outline-0 placeholder:text-gray-20 text-gray-20 bg-primary-300 rounded-md" 
            placeholder="MESSAGE"
            rows={4}
            {...register("message")}
          ></textarea>
          {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
          </motion.div>
          <motion.button
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            type="submit"
            className="md:text-sm text-xs w-full md:w-fit lg:px-14 text-gray-500 rounded-md bg-secondary-500 px-6 py-2 hover:bg-primary-500 hover:text-white transition duration-200"
            disabled={isSubmitting}
          >
            SUBMIT
          </motion.button>
          {isSubmitting && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Loader2 className="animate-spin" />
            </div>
          )}
        </form>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="lg:w-xs 2xl:w-auto"
        >
          <img
            src={ContactUsImage}
            alt="contact-us"
            className="w-full"
          />
          {isAboveMediumScreens && (
            <motion.img 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 1, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, scale: 0},
              visible: { opacity: 1, scale: 1},
            }}
            src={EvolveText} 
            alt="evolve-text"
            className="absolute lg:w-md lg:-translate-x-15 lg:-translate-y-10 2xl:w-lg transform 2xl:-translate-x-12 2xl:-translate-y-12"
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
