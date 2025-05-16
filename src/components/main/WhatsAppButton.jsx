import { toast } from "react-toastify";

const WhatsAppButton = () => {
  const phoneNumber = "15551234567"; // Replace with your number
  const message = "Hi there, I'm interested in your services!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const toastId = "whatsapp-hover-toast";

  const handleMouseEnter = () => {
    if (!toast.isActive(toastId)) {
      toast.info("Connect to WhatsApp", {
        toastId, // prevent duplicates
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

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 rounded-full p-3 shadow-lg transition-transform transform hover:scale-110"
      onMouseEnter={handleMouseEnter}
    >
      <img
        src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
        alt="Chat on WhatsApp"
        className="w-8 h-8"
      />
    </a>
  );
};

export default WhatsAppButton;
