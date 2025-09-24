import { motion } from "framer-motion";
import {
  FaRocket,
  FaShieldAlt,
  FaBolt,
  FaUsers,
  FaServer,
  FaCogs,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRocket className="text-purple-400 text-4xl mb-4" />,
    title: "Fast Performance",
    desc: "Experience blazing fast load times with optimized code and modern tech stack.",
  },
  {
    icon: <FaShieldAlt className="text-purple-400 text-4xl mb-4" />,
    title: "Secure by Design",
    desc: "Your data is safe with end-to-end encryption and enterprise-grade security.",
  },
  {
    icon: <FaBolt className="text-purple-400 text-4xl mb-4" />,
    title: "Instant Deployment",
    desc: "Ship your project live in seconds with one-click deployment to the cloud.",
  },
  {
    icon: <FaServer className="text-purple-400 text-4xl mb-4" />,
    title: "Cloud Powered",
    desc: "Scale effortlessly with cloud-native infrastructure that grows with your needs.",
  },
  {
    icon: <FaUsers className="text-purple-400 text-4xl mb-4" />,
    title: "Collaboration Ready",
    desc: "Work seamlessly with your team using real-time sync and shared workflows.",
  },
  {
    icon: <FaCogs className="text-purple-400 text-4xl mb-4" />,
    title: "Smart Automation",
    desc: "Save time with AI-driven automation handling the repetitive stuff for you.",
  },
];

export default function Feature() {
  return (
    <section
      id="features"
      className="scroll-mt-24 relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900/60 to-purple-950/80 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Powerful Features
        </motion.h2>
        <motion.p
          className="text-gray-300 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Everything you need to launch, scale, and grow your startup without
          the hassle.
        </motion.p>

        <div className="grid gap-10 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              {f.icon}
              <h3 className="text-xl font-semibold text-white mb-2">
                {f.title}
              </h3>
              <p className="text-gray-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
