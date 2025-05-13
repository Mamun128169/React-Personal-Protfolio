import { useEffect, useState } from "react";
import Hero from "./components/HeroSection/Hero";
import About from "./components/main/About";
import Navbar from "./components/Navbar/Navbar";
import Services_Data from "./assets/services_data";
import Services from "./components/main/Services";
import LatestWork from "./components/main/LatestWork";
import works_data from "./assets/mywork_data";
import Connect from "./components/main/Connect";
import Footer from "./components/main/Footer";

function App() {
  const [services, setServices] = useState([]);
  const [works, setWorks] = useState([]);

  // fetch services with useEffect
  useEffect(() => {
    const fetchData = async () => {
      setServices(Services_Data);
      setWorks(works_data);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#0F0F0F] text white min-h-screen pb-[50px]">
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
        <Services services={services} />
        {/* latest work section */}
        <LatestWork works={works} />
        {/* get in touch section */}
        <Connect />
        {/* footer section */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
