import { motion } from "framer-motion";
import { useGlobalContext } from "../context/GlobalContext";

const plans = [
  {
    name: "Starter",
    price: { monthly: "Free", yearly: "Free" },
    desc: "Perfect for trying things out.",
    features: ["Basic analytics", "Email support", "Community access"],
    highlight: false,
  },
  {
    name: "Pro",
    price: { monthly: "$29/mo", yearly: "$290/yr" },
    desc: "For growing startups.",
    features: ["Advanced analytics", "Priority support", "Custom integrations"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: { monthly: "Custom", yearly: "Custom" },
    desc: "Tailored solutions for large teams.",
    features: ["Dedicated manager", "Onboarding support", "Unlimited projects"],
    highlight: false,
  },
];

export default function Pricing() {
  const { pricingMode, togglePricingMode } = useGlobalContext();

  return (
    <section
      id="pricing"
      className="scroll-mt-24 relative py-24 bg-gradient-to-b from-purple-950/80 to-purple-900/80 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto mt-12 px-6 text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Simple Pricing
        </motion.h2>

        <motion.p
          className="text-gray-200 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Choose a plan that works for your business. Upgrade anytime.
        </motion.p>

        {/* Pricing Toggle */}
        <div className="flex justify-center items-center gap-4 mb-16">
          <span
            className={`font-medium ${
              pricingMode === "monthly" ? "text-white" : "text-gray-400"
            }`}
          >
            Monthly
          </span>
          <button
            onClick={togglePricingMode}
            className="w-16 h-8 flex items-center rounded-full bg-purple-500 p-1 transition"
          >
            <div
              className={`w-6 h-6 bg-white rounded-full shadow-md transform transition ${
                pricingMode === "yearly" ? "translate-x-8" : ""
              }`}
            />
          </button>
          <span
            className={`font-medium ${
              pricingMode === "yearly" ? "text-white" : "text-gray-400"
            }`}
          >
            Yearly
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`p-8 rounded-2xl border shadow-xl transition-transform hover:scale-105 backdrop-blur-lg ${
                plan.highlight
                  ? "bg-purple-600/80 border-purple-400"
                  : "bg-white/10 border-white/20"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
              <p className="text-gray-300 mt-2">{plan.desc}</p>

              {/* Dynamic Price */}
              <p className="text-4xl font-bold text-white my-6">
                {plan.price[pricingMode]}
              </p>

              <ul className="text-gray-200 mb-6 space-y-2">
                {plan.features.map((f, idx) => (
                  <li key={idx}>✅ {f}</li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-lg font-semibold shadow-lg transition-colors ${
                  plan.highlight
                    ? "bg-white text-purple-600 hover:bg-gray-200"
                    : "bg-purple-500/80 text-white hover:bg-purple-600/90"
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>

            
          ))}
        </div>
      </div>
       <motion.div
      className="p-6 bg-purple-600/80 text-white rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 50 }}         // before visible
      whileInView={{ opacity: 1, y: 0 }}      // when visible
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.8 }}  // triggers once, when 40% visible
    >
      <h3 className="text-xl font-bold">🔥 Scroll Reveal</h3>
      <p>This card animates when scrolled into view.</p>
    </motion.div>
    </section>
  );
}
