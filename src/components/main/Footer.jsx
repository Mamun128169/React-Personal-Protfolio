import logo from "../../assets/Tanzilhossain.jpg";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="mt-[120px] "
    >
      <div className="flex flex-wrap items-center justify-between mb-5 gap-6 md:gap-2 px-3 lg:px-5">
        {/* left side */}
        <div className=" basis-full md:basis-[45%]">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <img
                className="w-[40px] h-[40px] rounded-full"
                src={logo}
                alt="logo-image"
              />
              <h2 className="uppercase text-lg md:text-xl lg:text-2xl">
                Tanzil Hossain
              </h2>
            </div>
            <p className="md:text-sm lg:text-base text-xs">
              I’m Tanjil Hossain, an AI-powered, data-driven digital marketer
              based worldwide, helping businesses grow online.
            </p>
          </div>
        </div>
        {/* right side */}
        <div className=" basis-full md:basis-[50%]">
          <form action="#">
            <input
              name="subscribe"
              className="input-field w-full"
              type="text"
              placeholder="Enter your email to subscribe"
            />
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="gradient-btn mt-[14px]"
            >
              Subscribe
            </motion.button>
          </form>
        </div>
      </div>
      <hr />
      <div className="mt-4 apply-flex flex-wrap px-3 justify-between">
        <h3>&copy; 2025 Tanzil Hossain. All rights reserved.</h3>
        <div className="apply-flex gap">
          <h4>Term of Services</h4>
          <h4>Privacy Policy</h4>
          <h4>connect with me</h4>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
