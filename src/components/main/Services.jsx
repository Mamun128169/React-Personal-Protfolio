import pattern from "../../assets/theme_pattern.svg";
import Service from "./Service";
import { motion } from "motion/react";

const Services = ({ services }) => {
  return (
    <motion.div
      id="services"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mt-[70px] space-y-20 mb-[60px]"
    >
      {/* services title */}
      <div className="flex flex-col items-center relative">
        <img
          src={pattern}
          className="w-[120px] absolute right-[45%] translate-x-1/2 -bottom-3 z-[0]"
          alt="pattern-icon"
        />
        <h2 className="text-4xl md:text-5xl font-semibold relative ">
          <span className="z-[100]">My Services</span>
        </h2>
      </div>

      {/* services section */}
      <div className="grid grid-cols-2 gap-2 px-2 md:grid-cols-3 md:gap-10 md:px-4 lg:px-24">
        {services.map((service, idx) => (
          <Service key={idx} service={service}></Service>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
