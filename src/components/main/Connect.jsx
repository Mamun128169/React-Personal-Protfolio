import pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Connect = () => {
  return (
    <div className="mt-[100px] mb-[90px]" id="connect">
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

      {/* contact content */}
      <div className="mt-[60px] flex flex-wrap gap-10 md:gap-5 px-5 md:justify-between">
        {/* left side */}
        <div className="space-y-4 basis-full md:basis-[40%]">
          <h2 className="text-5xl md:text-4xl lg:text-6xl font-semibold text-gradient">
            Let's Talk
          </h2>
          <p className="text-base lg:text-lg font-light">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="space-y-4 pt-4">
            <div className="apply-flex">
              <img className="w-6" src={mail_icon} alt="mail-icon" />
              <h4>greatstackdev@gmail.com</h4>
            </div>
            <div className="apply-flex">
              <img className="w-6" src={call_icon} alt="call-icon" />
              <h4>+772-825-524</h4>
            </div>
            <div className="apply-flex">
              <img className="w-6" src={location_icon} alt="location-icon" />
              <h4>CA, United States</h4>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="basis-full md:basis-[50%]">
          <form className="space-y-5" action="#">
            <div className="w-full">
              <label
                htmlFor="name"
                className="block mb-1 text-slate-200 font-medium"
              >
                Your Name
              </label>
              <input
                className="input-field"
                name="username"
                autoComplete="name"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="w-full mb-4">
              <label
                htmlFor="email"
                className="block mb-1 text-slate-200 font-medium"
              >
                Your Email
              </label>
              <input
                className="input-field"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="w-full mb-4">
              <label
                htmlFor="area"
                className="block mb-1 text-slate-200 font-medium "
              >
                Write your message here
              </label>
              <textarea
                id="area"
                name="message"
                rows={5}
                className="input-field resize-none"
                placeholder="Enter your message"
              ></textarea>
            </div>
            {/* submit button */}
            <div>
              <button className="gradient-btn transition-5 hover:scale-105">
                Submit now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Connect;
