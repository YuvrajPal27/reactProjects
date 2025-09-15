import { motion } from "framer-motion";
function App() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 text-amber-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
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
          <ul className="hidden md:flex gap-8 text-gray-400 font-medium">
            {["Home", "Features", "Pricing", "Contact"].map((item, i) => (
              <motion.li
                key={i}
                className="cursor-pointer hover:text-purple-600"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-5 bg-purple-600 text-white rounded-lg font-semibody shadow-md hover:bg-purple-700"
          >
            Get Started
          </motion.button>
        </div>
      </nav>
    </>
  );
}

export default App;
