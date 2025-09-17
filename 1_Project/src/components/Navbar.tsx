import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex rounded-2xl justify-between items-center bg-white/10 backdrop-blur-xl border border-white/20 mt-4 shadow-lg">
          <motion.h1
            className="text-2xl font-bold text-purple-600
          initial={{opacity: 0, x: -30}}
          animate={{opacity: 1, x:0}}
          transition={{duration: 0.6}}
          "
          >
            Yuvraj
          </motion.h1>

          {/* Links */}
          <ul className="hidden md:flex gap-8 text-white font-medium">
            {[
              { name: "Home", path: "/" },
              { name: "Features", path: "/features" },
              { name: "Pricing", path: "/pricing" },
              { name: "Contact", path: "/contact" },
            ].map((item, i) => (
              <motion.li
                key={item.name}
                className="cursor-pointer hover:text-purple-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={item.path}>{item.name}</Link>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-5 py-2 bg-purple-500/80 text-white rounded-lg font-semibold shadow-lg hover:bg-purple-600/90"
          >
            Get Started
          </motion.button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
