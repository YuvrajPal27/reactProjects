import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 relative py-24 bg-gradient-to-b from-purple-900/80 to-purple-950/90 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto mt-12 px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mv-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-gray-300 max-w-2xl mx-auto mt-4 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Have questions or want to work with us? Fill out the form below and
          we’ll get back to you as soon as possible.
        </motion.p>
        <motion.form
          className="grid gap-6 max-w-3xl mx-auto text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-5 py-5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
          ></input>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
          ></textarea>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-purple-500/80 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-600/90 transition-colors"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
