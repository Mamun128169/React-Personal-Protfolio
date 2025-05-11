import Hero from './components/HeroSection/Hero'
import About from './components/main/About'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div>
      {/* header */}
      <header className="container mx-auto">
        <Navbar />
        <Hero />
      </header>
      {/* main */}
      <main className="container mx-auto ">
        {/* about section */}
        <About />
      </main>
    </div>
  )
}

export default App
