import { toast } from "react-toastify";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  // State to track if we're on a mobile device
  const [isMobile, setIsMobile] = useState(false);

  // Properly access environment variables with import.meta.env.VITE_ prefix
  const phoneNumber = import.meta.env.VITE_WHATSAPP_PHONE || "8801948873556";
  const message = "Hi there, I'm interested in your services!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const toastId = "whatsapp-toast";

  // Detect if we're on a mobile device on component mount
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const mobileRegex =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      setIsMobile(mobileRegex.test(userAgent));
    };

    checkMobile();

    // Re-check on window resize in case of orientation changes
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle desktop mouse enter
  const handleMouseEnter = () => {
    if (!isMobile && !toast.isActive(toastId)) {
      toast.info("Connect to WhatsApp", {
        toastId,
        position: "bottom-left",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "dark",
      });
    }
  };

  // Handle click for both desktop and mobile
  const handleClick = (e) => {
    // For mobile, we don't need to prevent default as we want to follow the link directly
    if (!isMobile) {
      // On desktop, show a toast on click as well (optional)
      if (!toast.isActive(toastId)) {
        toast.info("Opening WhatsApp...", {
          toastId,
          position: "bottom-left",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "dark",
        });
      }
    }
  };

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 active:bg-green-700 rounded-full p-3 shadow-lg transition-transform transform hover:scale-110 active:scale-105"
      onMouseEnter={isMobile ? undefined : handleMouseEnter}
      onClick={handleClick}
      aria-label="Contact via WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8 text-white" />
    </a>
  );
};

export default WhatsAppButton;
