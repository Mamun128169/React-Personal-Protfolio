import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../../assets/logo.svg"; // if logo is in src/assets/

const Navbar = () => {
  return (
    <nav className="container mx-auto">
      <div className="navbar bg-transparent pt-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content lg:hidden  rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <AnchorLink href="#home">
                  <a>Home</a>
                </AnchorLink>
              </li>
              <li>
                <AnchorLink offset={"50"} href="#about">
                  <a>About me</a>
                </AnchorLink>
              </li>
              <li>
                <AnchorLink offset={"50"} href="#services">
                  <a>Services</a>
                </AnchorLink>
              </li>
              <li>
                <AnchorLink offset={"50"} href="#latest">
                  <a>Latest works</a>
                </AnchorLink>
              </li>

              <li>
                <AnchorLink offset={"50"} href="#connect">
                  <a>Contact</a>
                </AnchorLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-lg md:text-xl">
            <img src={logo} alt="logo.svg" />
          </a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <AnchorLink href="#home">
                <a>Home</a>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink offset={"50"} href="#about">
                <a>About me</a>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink offset={"50"} href="#services">
                <a>Services</a>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink offset={"50"} href="#latest">
                <a>Latest works</a>
              </AnchorLink>
            </li>

            <li>
              <AnchorLink offset={"50"} href="#connect">
                <a>Contact</a>
              </AnchorLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <AnchorLink offset={"50"} href="#connect">
            <a className="gradient-btn hover:scale-105 transition-5">
              Connect With Me
            </a>
          </AnchorLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
