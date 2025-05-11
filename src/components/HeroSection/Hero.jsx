import profile from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div>
      <div className="hero mt-12">
        <div className="hero-content flex-col text-center space-y-2 md:space-y-4">
          <img
            src={profile}
            className="rounded-lg shadow-2xl [width:180px] md:[width:240px]"
          />
          <div className="space-y-1 md:space-y-3 px-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.75]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-600">
                I'm Alex Bennett,{' '}
              </span>
              frontend developer based in USA.
            </h1>
            <p className="py-6 text-sm md:text-base lg:text-lg px-4 md:px-24 ">
              I am a frontend developer from California, USA with 10 years of
              experience in multiple companies like Microsoft, Tesla and Apple.
            </p>
          </div>
          <div className="flex gap-8">
            <button className="gradient-btn  border-2 border-transparent hover:border-2 hover:border-white transition-5">
              Connect with me
            </button>
            <button className="text-sm md:text-base px-3 md:px-5 py-2 rounded-3xl font-semibold cursor-pointer border-2 hover:border-purple-700">
              My resume
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
