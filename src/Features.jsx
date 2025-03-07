import React from "react";
import { motion } from "framer-motion";
import { styles } from "./styles";
import { textVariant } from "./motion";
import { meta, shopify, starbucks, tesla } from "./assets";
import StarWrapper from "./SectionWrapper";

// Features data
const features = [
  {
    title: "Modern Web Solutions",
    company_name: "Seamless Experience",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Fast & Responsive",
    points: ["Crafting high-performance", "Ensuring seamless "],
  },
  {
    title: "Architectural",
    company_name: "Tailored for You",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Bespoke Designs",
    points: ["Highlighting your work ", "Creating customized layouts "],
  },
  {
    title: "Interactive 3D & Visuals",
    company_name: "Next-Gen Experience",
    icon: shopify,
    iconBg: "#383E56",
    date: "Engage Your Audience",
    points: ["Integrating cutting-edge ", "Enhancing engagement  "],
  },
  {
    title: "Scalable & Secure",
    company_name: "Future-Proof Platform",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Reliable & Robust",
    points: ["Building scalable platforms .", "Implementing the latest "],
  },
];

// Feature Card Component
const FeatureCard = ({ feature }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }} // Ensures scale on hover
      className="bg-[#1d1836] text-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center border border-transparent transition-all duration-100 border-[#8c52ff] hover:border-[#66ffcc]"
    >
      {/* Icon */}
      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4">
        <img
          src={feature.icon}
          alt={feature.title}
          className="w-12 h-12 object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-center">{feature.title}</h3>

      {/* Tagline */}
      <p className="text-sm text-gray-400 text-center py-4">
        {feature.company_name}
      </p>
    </motion.div>
  );
};

// Main Features Component
const Features = () => {
  return (
    <div className="inset-0 bg-gradient-to-b from-[#000] to-[#1a1a2e]">
      <div
        className={`${styles.paddingX} max-w-7xl mx-auto min-h-[80vh] py-20`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>
            Elevate Your Architectural Presence
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Features</h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StarWrapper(Features, "features");
