import profile from "../../assets/Tanzilhossain.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "motion/react";

// import icons
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="hero mt-12">
        <div className="hero-content flex-col text-center space-y-3 md:space-y-6">
          <img
            src={profile}
            className="rounded-full shadow-2xl [width:180px] md:[width:240px]"
          />
          <div className="space-y-2 md:space-y-3 px-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: 2,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold md:leading-[1.15] "
            >
              <span className="text-gradient">I'm Tanjil Hossain, </span>
              professional digital marketer
            </motion.h1>
            <p className="py-6 text-sm md:text-base lg:text-lg px-4 md:px-24 ">
              I’m an AI-powered, data-driven digital marketer based worldwide,
              helping businesses grow online.
            </p>
            {/* social icons */}
            <div className="flex justify-center gap-2 md:gap-6 lg:gap10 overflow-hidden">
              <a href="#">
                <FaFacebook className="text-5xl hover:bg-gradient-to-r from-orange-900 to-purple-900 px-2 py-1 rounded-lg cursor-pointer" />
              </a>
              <a href="#">
                <FaLinkedin className="text-5xl hover:bg-gradient-to-r from-orange-900 to-purple-900 px-2 py-1 rounded-lg cursor-pointer" />
              </a>
              <a href="#">
                <FaTwitterSquare className="text-5xl hover:bg-gradient-to-r from-orange-900 to-purple-900 px-2 py-1 rounded-lg cursor-pointer" />
              </a>
              <a href="#">
                <FaInstagramSquare className="text-5xl hover:bg-gradient-to-r from-orange-900 to-purple-900 px-2 py-1 rounded-lg cursor-pointer" />
              </a>
            </div>
          </div>
          <div className="flex gap-8">
            <AnchorLink offset={"50"} href="#connect">
              <button className="gradient-btn  border-2 border-transparent hover:border-2 hover:border-white transition-5">
                Connect with me
              </button>
            </AnchorLink>
            <button className="text-sm md:text-base px-3 md:px-5 py-2 rounded-3xl font-semibold cursor-pointer border-2 hover:border-purple-700">
              My resume
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
