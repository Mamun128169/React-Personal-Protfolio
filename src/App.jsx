import Hero from './components/HeroSection/Hero'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div>
      {/* header */}
      <header>
        <Navbar />
        <Hero />
      </header>
    </div>
  )
}

export default App
