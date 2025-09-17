import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-purple-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Build Your{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Startup
              </span>{" "}
              Smarter
            </h1>

            <p className="text-lg text-gray-300 max-w-md">
              Launch your product faster with our modern platform. Designed with
              elegance, powered by performance.
            </p>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-purple-500/80 hover:bg-purple-600/90 text-white font-semibold rounded-xl shadow-lg backdrop-blur-md"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-xl shadow-lg backdrop-blur-md"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-full h-80 md:h-[28rem] bg-white/10 border border-white/20 rounded-white/20 rounded-3xl brackdrop-blur-lg shadow-2xl flex items-center justify-center">
              <span className="text-2xl text-gray-">[Hero Image]</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
