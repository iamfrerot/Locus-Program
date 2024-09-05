import photo2 from "../assets/photo2.jpg";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const About = () => {
 const aboutRef = useRef(null);
 const isInViewAbout = useInView(aboutRef);
 const aboutControls = useAnimation();
 useEffect(() => {
  if (isInViewAbout) {
   aboutControls.start("visible");
  }
 }, [isInViewAbout]);

 return (
  <section className="lg:max-h-screen w-full flex flex-col lg:flex-row lg:gap-x-20 lg:px-10 lg:items-center justify-center">
   <img
    src={photo2}
    alt="Salim"
    className="sm:max-h-[460px]  lg:max-h-screen object-cover object-top rounded-lg"
   />
   <motion.div
    ref={aboutRef}
    variants={{
     hidden: { opacity: 0, y: 100 },
     visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    animate={aboutControls}
    transition={{ duration: 0.9, delay: 0.2 }}
    className="flex flex-col gap-y-6 p-4 sm:p-10 lg:p-0"
   >
    <p className="opacity-[0.70] text-xl sm:text-2xl">Entrepreneur</p>
    <p className="text-3xl sm:text-5xl uppercase font-bold">Hi! i'm salim</p>
    <p className="opacity-[0.70] text-xl lg:max-w-[390px]">
     For the past 5 years, I have been dedicated to helping businesses and
     successful entrepreneurs start and scale their ventures. My experience
     spans working closely with business leaders to innovate their products,
     streamline operations, and achieve rapid growth. With a deep understanding
     of the challenges and opportunities in today’s market, I am committed to
     empowering others to build successful, sustainable businesses.
    </p>
   </motion.div>
  </section>
 );
};

export default About;
