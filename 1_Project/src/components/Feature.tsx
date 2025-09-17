import { motion } from "framer-motion";
import { Lightbulb, Zap, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Fast Performance",
    desc: "Optimized for speed and scalability to launch your startup faster.",
    icon: <Zap className="w-8 h-8 text-purple-400" />,
  },
  {
    title: "Smart Design",
    desc: "Crafted with modern UI/UX practices for maximum impact.",
    icon: <Lightbulb className="w-8 h-8 text-purple-400" />,
  },
  {
    title: "Secure Platform",
    desc: "Built with industry-grade security to keep your data safe.",
    icon: <ShieldCheck className="w-8 h-8 text-purple-400" />,
  },
];

export default function Feature() {
  return (
  <>
    {" "}
    <section
      id="features"
      className="relative py-20 bg-gradient-to-b from-black via-purple-950/40 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Headings */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Choose <span className="text-purple-400">TechFlow?</span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          We provide everything you need to launch, scale, and grow your startup
          — with speed, style, and security.
        </motion.p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>)
}
