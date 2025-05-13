const Service = ({ service }) => {
  // console.log(service);
  const { s_no, s_name, s_desc } = service;
  return (
    <div className="border-[2px] border-purple-600 rounded-md px-1 md:px-3 py-3 md:py-5 pb-7 space-y-2 md:space-y-3 hover:bg-gradient-to-r from-orange-900 to-purple-900 cursor-pointer hover:border-white hover:scale-105  md:hover:scale-110 transition-5">
      <h2 className="text-lg md:text-xl font-semibold">{s_no}</h2>
      <h3 className="text-xl md:text-2xl font-bold text-gradient">{s_name}</h3>
      <p className="text-base font-medium">{s_desc}</p>
      <button className="flex items-center gap-2 text-xl font-medium">
        Read More <span className="text-2xl font-bold">&rarr;</span>
      </button>
    </div>
  );
};

export default Service;
