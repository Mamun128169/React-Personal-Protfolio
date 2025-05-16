import Hero from "./components/HeroSection/Hero";
import About from "./components/main/About";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/main/Services";
import LatestWork from "./components/main/LatestWork";
import Connect from "./components/main/Connect";
import Footer from "./components/main/Footer";
import WhatsAppButton from "./components/main/WhatsAppButton";

// for showing toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="bg-[#0F0F0F] text-white min-h-screen pb-[50px] pt-1">
      {/* header */}
      <header className="container mx-auto">
        <Navbar />
        <Hero />
      </header>
      {/* main */}
      <main className="container mx-auto ">
        {/* about section */}
        <About />
        {/* services section */}
        <Services />
        {/* latest work section */}
        <LatestWork />
        {/* get in touch section */}
        <Connect />
        {/* footer section */}
        <Footer />
        {/* Toast container */}
        <ToastContainer />
        {/* call to action(whatsapp button) */}
        <WhatsAppButton />
      </main>
    </div>
  );
}

export default App;
