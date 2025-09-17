import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Feature from "./components/Feature";
import Pricing from "./components/Pricing";
// import Contact from "./components/Contact";

function App() {
  return (
        <Router>
      <div className="font-sans text-white bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950">
        <Navbar />
        <main>
          <section id="hero">
            <HeroSection />
          </section>
          <section id="features">
            <Feature />
          </section>
          {/* Future sections */}
          <section id="pricing"><Pricing/></section>
          {/* <section id="contact"><Contact /></section> */}
        </main>
      </div>
    </Router>
  );
}

export default App;
