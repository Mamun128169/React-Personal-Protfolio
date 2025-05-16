import React from "react";
import pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const Connect = () => {
  const access_key =
    import.meta.env.VITE_WEB3FORM_ACCESS_KEY ||
    "9225e9ec-e066-43d4-8cfb-7dac8c1a57f5";

  // handle form submit
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", access_key);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
        // clear the form after 2 secs
        setTimeout(() => {
          event.target.reset();
        }, 2000);
      } else {
        console.log(res);
        toast.error("Something went wrong. Please try again.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <motion.div
      id="connect"
      className="mt-[120px] max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
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
              <h4>Tanjildigital@gmail.com</h4>
            </div>
            <div className="apply-flex">
              <img className="w-6" src={call_icon} alt="call-icon" />
              <h4>+8801948873556</h4>
            </div>
            <div className="apply-flex">
              <img className="w-6" src={location_icon} alt="location-icon" />
              <h4>Dhaka, Bangladesh</h4>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="basis-full md:basis-[50%]">
          <form className="space-y-5" onSubmit={onSubmit}>
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
                required
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
                required
              />
            </div>
            <div className="w-full mb-4">
              <label
                htmlFor="area"
                className="block mb-1 text-slate-200 font-medium"
              >
                Write your message here
              </label>
              <textarea
                id="area"
                name="message"
                rows={5}
                className="input-field resize-none"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            {/* submit button */}
            <div>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="gradient-btn"
                type="submit"
              >
                Send Message
              </motion.button>
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Connect;
