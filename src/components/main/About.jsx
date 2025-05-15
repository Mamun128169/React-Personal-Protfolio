import pattern from "../../assets/theme_pattern.svg";
import profile from "../../assets/about_profile.svg";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="mt-[90px] md:mt-[100px] container mx-auto flex flex-col items-center px-3 md:px-8"
    >
      {/* about title */}
      <div className="flex flex-col items-center relative">
        <img
          src={pattern}
          className="w-[120px] absolute right-[45%] translate-x-1/2 -bottom-3 z-[0]"
          alt="pattern-icon"
        />
        <h2 className="text-4xl md:text-5xl font-semibold relative ">
          <span className="z-[100]">About me</span>
        </h2>
      </div>

      {/* about content */}
      <div className="mt-[50px] mb-[80px] flex justify-center gap-7 ">
        {/* left */}
        <div className="md:basis-[40%] lg:basis-[25%] hidden md:block">
          <img className="rounded-xl w-full " src={profile} alt="profile-img" />
        </div>
        {/* right */}
        <div className="space-y-10 px-2 md:px-3 basis-full md:basis-[50%] lg:basis-[70%] text-sm md:text-base font-medium">
          <div className="space-y-4">
            <p>
              I am an experienced Frontend Developer with over a decade of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          <div className="flex flex-col mt-[70px] space-y-3 text-base md:text-lg">
            <div className="flex items-center">
              <p className="min-w-[105px] md:min-w-[115px]"> HTML & CSS</p>
              <hr className="progress-bar" style={{ width: "90%" }} />
            </div>
            <div className="flex items-center ">
              <p className="min-w-[105px] md:min-w-[115px]"> React JS</p>
              <hr className="progress-bar" style={{ width: "60%" }} />
            </div>
            <div className="flex items-center">
              <p className="min-w-[105px] md:min-w-[115px]"> Javascript</p>
              <hr className="progress-bar" style={{ width: "70%" }} />
            </div>
            <div className="flex items-center">
              <p className="min-w-[105px] md:min-w-[115px]"> Next JS</p>
              <hr className="progress-bar" style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>

      {/* works */}
      <div className="flex items-center gap-8 md:gap-24 lg:gap-48 text-center mb-[50px] uppercase text-base md:xl lg:2xl font-bold">
        <div className="flex flex-col space-y-3">
          <h2 className="text-2xl md:text-4xl text-gradient font-bold">10+</h2>
          <h4>years of experience</h4>
        </div>
        <div className="flex flex-col space-y-3">
          <h2 className="text-2xl md:text-4xl text-gradient font-bold">90+</h2>
          <h4>projects completed</h4>
        </div>
        <div className="flex flex-col space-y-3">
          <h2 className="text-2xl md:text-4xl text-gradient font-bold">15+</h2>
          <h4>Happy clients</h4>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
