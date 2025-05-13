import pattern from "../../assets/theme_pattern.svg";
import Work from "./work";

const LatestWork = ({ works }) => {
  // console.log(works);
  return (
    <div className="mt-[120px]" id="latest">
      {/* latest work title */}
      <div className="flex flex-col items-center relative">
        <img
          src={pattern}
          className="w-[120px] absolute right-[45%] translate-x-1/2 -bottom-3 z-[0]"
          alt="pattern-icon"
        />
        <h2 className="text-4xl md:text-5xl font-semibold relative ">
          <span className="z-[100]">My Latest Works</span>
        </h2>
      </div>
      {/* works section */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-center mt-[50px] gap-5 md:gap-8 lg:gap-12 px-2 md:px-5 lg:px-20">
        {works.map((work, idx) => (
          <Work key={idx} work={work}></Work>
        ))}
      </div>
      {/* show more button */}
      <div className="mt-[60px] mb-[70px] flex justify-center">
        <button className="text-xl px-4 py-3 rounded-3xl hover:scale-110 transition-5 cursor-pointer font-medium bg-gradient-custom">
          Show More <span> &rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default LatestWork;
