const Work = ({ work }) => {
  //   console.log(work);
  const { w_img } = work;
  return (
    <div className="hover:scale-105 transition-5 cursor-pointer border-[4px] rounded-lg border-transparent hover:border-purple-600">
      <img src={w_img} alt="works-image" />
    </div>
  );
};

export default Work;
