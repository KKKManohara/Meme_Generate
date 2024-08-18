import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <Hero />
      <Footer />
      </div>
      
      <footer className="mt-10 border-t py-10 border-neutral-700"></footer>
      
    </>
  )
}

export default App
