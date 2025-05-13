import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="mt-[120px] ">
      <div className="flex flex-wrap items-center justify-between mb-5 gap-6 md:gap-2 px-3">
        {/* left side */}
        <div className=" basis-full md:basis-[45%]">
          <div>
            <img src={logo} alt="logo-image" />
            <p>
              I am a frontend developer from, USA with 10 years of experience in
              companies like Microsoft, Tesla and Apple.
            </p>
          </div>
        </div>
        {/* right side */}
        <div className=" basis-full md:basis-[50%]">
          <form action="#">
            <input
              className="input-field w-full"
              type="text"
              placeholder="Enter your email to subscribe"
            />
            <button className="gradient-btn mt-2">Subscribe</button>
          </form>
        </div>
      </div>
      <hr />
      <div className="mt-4 apply-flex flex-wrap px-3 justify-between">
        <h3>&copy; 2023 Alex Bennett. All rights reserved.</h3>
        <div className="apply-flex gap">
          <h4>Term of Services</h4>
          <h4>Privacy Policy</h4>
          <h4>connect with me</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
