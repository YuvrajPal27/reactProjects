import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const [active, setActive] = useState("hero");
  const { user, loginWithGoogle, logout } = useAuth();

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // section is "active" when 60% visible
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex rounded-2xl justify-between items-center bg-white/10 backdrop-blur-xl border border-white/20 mt-2 shadow-lg">
        <motion.h1
          className="text-2xl font-bold text-purple-600"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          TechFlow
        </motion.h1>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          {[
            { name: "Home", path: "hero" },
            { name: "Features", path: "features" },
            { name: "Pricing", path: "pricing" },
            { name: "Contact", path: "contact" },
          ].map((item, i) => (
            <motion.li
              key={item.name}
              className={`cursor-pointer ${
                active === item.path
                  ? "text-purple-300"
                  : "hover:text-purple-300"
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <a href={`#${item.path}`}>{item.name}</a>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <motion.button
            onClick={() => (window.location.href = "#pricing")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-5 py-2 bg-purple-500/80 text-white rounded-lg font-semibold shadow-lg hover:bg-purple-600/90"
          >
            Get Started
          </motion.button>
        </div>
      

      {user ? (
        <motion.button
          whileHover="hover"
          whileTap="tap"
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded-md font-medium"
        >
          Logout
        </motion.button>
      ) : (
        <motion.button
          whileHover="hover"
          whileTap="tap"
          onClick={loginWithGoogle}
          className="bg-blue-500 text-white px-4 py-2 rounded-md font-medium"
        >
          Login with Google
        </motion.button>
      )}
      </div>
    </nav>
  );
}

export default Navbar;
