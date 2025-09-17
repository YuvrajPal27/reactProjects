import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Feature from "./components/Feature";
// import Pricing from "./components/Pricing";
// import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Single page with all sections */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Feature />
              {/* <Pricing /> */}
              {/* <Contact /> */}
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
