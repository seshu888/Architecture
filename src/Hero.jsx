import { motion } from "framer-motion";
import { styles } from "./styles";
import { textVariant, fadeIn, zoomIn, slideIn } from "./motion"; // Import motion variants

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Background Gradient Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] to-[#000]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Main Content */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Left Side - Animated Circle & Gradient Line */}
        <div className="flex flex-col justify-center items-center mt-5">
          {/* Glowing Circle with Shadow */}
          <motion.div variants={zoomIn(0.3, 0.8)} className="relative">
            <div className="w-6 h-6 rounded-full bg-[#915EFF] shadow-[0_0_25px_#915EFF]" />
            {/* Glowing Ring */}
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.4, 0.2, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-10 h-10 rounded-full border-2 border-[#915EFF] opacity-30"
            />
          </motion.div>

          {/* Gradient Line Animation */}
          <motion.div
            variants={slideIn("up", "tween", 0.4, 1)}
            className="w-1 sm:h-80 h-40 violet-gradient"
          />
        </div>

        {/* Right Side - Text Content */}
        <div>
          <motion.h1
            variants={textVariant(0.2)}
            className={`${styles.heroHeadText} text-white`}
          >
            Welcome to{" "}
            <motion.span
              variants={zoomIn(0.5, 0.8)}
              className="text-[#915EFF] inline-block drop-shadow-lg"
            >
              Liviarto
            </motion.span>
          </motion.h1>

          <motion.p
            variants={fadeIn("up", "spring", 0.5, 1)}
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
            Where visionary design meets timeless architecture.
            <br className="sm:block hidden" />
            We craft innovative, functional, and aesthetic spaces.
          </motion.p>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-16 w-full flex justify-center">
        <a href="#about">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-[35px] h-[64px] rounded-3xl border-4 border-[#915EFF] flex justify-center items-start p-2"
          >
            <motion.div className="w-3 h-3 rounded-full bg-[#915EFF] mb-1" />
          </motion.div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
