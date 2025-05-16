import pattern from "../../assets/theme_pattern.svg";
import profile from "../../assets/Tanzilhossain.jpg";
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
      {/* About Section */}
      <div className="mt-[50px] mb-[50px] flex flex-col md:flex-row justify-center gap-6 md:gap-10 px-4">
        {/* Left - Profile Image */}
        <div className="md:basis-[40%] lg:basis-[25%] hidden md:block">
          <img
            className="rounded-xl w-full h-auto object-cover"
            src={profile}
            alt="profile-img"
          />
        </div>

        {/* Right - About Content */}
        <div className="space-y-12 basis-full md:basis-[60%] lg:basis-[70%] text-sm md:text-base font-medium">
          <div className="space-y-4">
            <p>
              I’m Tanzil Hossain — an AI-powered, data-driven Digital Marketer
              with 3 years of experience. I’ve worked with brands in Bangladesh
              and abroad, driving growth through effective Facebook & Google
              Ads, SEO, Email Marketing, and Web Analytics.
            </p>
            <p>
              My passion for digital marketing is reflected in the results I
              deliver and the strategic thinking I bring to every campaign. I'm
              focused on measurable outcomes, blending creativity with data to
              help brands grow smarter.
            </p>
          </div>
          {/* skills section on large device */}
          <div className="space-y-4 w-full mb-12 hidden lg:block">
            {[
              { label: "Facebook Marketing", width: "67%" },
              { label: "Google Marketing", width: "70%" },
              { label: "Web Analytics", width: "65%" },
              { label: "SEO", width: "55%" },
              { label: "Social Media Marketing", width: "75%" },
            ].map((skill, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 md:gap-5 lg:gap-8"
              >
                <p className="min-w-[110px] md:min-w-[185px] text-xs md:text-lg">
                  {skill.label}
                </p>
                <hr
                  className="h-2 rounded-full bg-gradient-to-r from-orange-500 to-purple-700 border-none"
                  style={{ width: skill.width }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="space-y-4 px-4 w-full mb-12 lg:hidden">
        {[
          { label: "Facebook Marketing", width: "67%" },
          { label: "Google Marketing", width: "70%" },
          { label: "Web Analytics", width: "65%" },
          { label: "SEO", width: "55%" },
          { label: "Social Media Marketing", width: "75%" },
        ].map((skill, idx) => (
          <div key={idx} className="flex items-center gap-2 md:gap-5 lg:gap-8">
            <p className="min-w-[110px] md:min-w-[185px] text-xs md:text-lg">
              {skill.label}
            </p>
            <hr
              className="h-2 rounded-full bg-gradient-to-r from-orange-500 to-purple-700 border-none"
              style={{ width: skill.width }}
            />
          </div>
        ))}
      </div>

      {/* works */}
      <div className="flex items-center gap-8 md:gap-24 lg:gap-48 text-center mb-[50px] uppercase text-base md:xl lg:2xl font-bold">
        <div className="flex flex-col space-y-3">
          <h2 className="text-2xl md:text-4xl text-gradient font-bold">3+</h2>
          <h4>years of experience</h4>
        </div>
        <div className="flex flex-col space-y-3">
          <h2 className="text-2xl md:text-4xl text-gradient font-bold">90+</h2>
          <h4>projects completed</h4>
        </div>
        <div className="flex flex-col space-y-3">
          <h2 className="text-2xl md:text-4xl text-gradient font-bold">25+</h2>
          <h4>Happy clients</h4>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
