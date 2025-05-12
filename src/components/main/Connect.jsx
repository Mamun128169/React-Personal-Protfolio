import pattern from "../../assets/theme_pattern.svg";

const Connect = () => {
  return (
    <div className="mt-[100px] mb-[90px]">
      {/*Get in touch title */}
      <div className="flex flex-col items-center relative">
        <img
          src={pattern}
          className="w-[120px] absolute right-[45%] translate-x-1/2 -bottom-3 z-[0]"
          alt="pattern-icon"
        />
        <h2 className="text-4xl md:text-5xl font-semibold relative ">
          <span className="z-[100]">Get in touch</span>
        </h2>
      </div>
    </div>
  );
};

export default Connect;
