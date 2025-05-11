import pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div className="mt-[90px] md:mt-[100px] ">
      {/* about title */}
      <div className="flex flex-col items-center relative">
        <img
          src={pattern}
          className="w-[120px] absolute right-[40%] translate-x-1/2 -bottom-1 z-[0]"
          alt="pattern-icon"
        />
        <h2 className="text-4xl md:text-5xl font-semibold relative ">
          <span className="z-[100]">About me</span>
        </h2>
      </div>

      {/* about content */}
    </div>
  )
}

export default About
