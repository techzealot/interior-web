import HeroPng from "../../assets/hero.png";
import { motion } from "framer-motion";
import { slideUp } from "../../lib/animate";

const Hero = () => {
  return (
    <div className="my-container mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
      <div className="flex flex-col justify-center gap-4 text-center md:max-w-[50%] md:text-left">
        <motion.h1
          variants={slideUp(0.2)}
          initial="initial"
          animate="animate"
          className="text-3xl font-bold"
        >
          SKETCH LUXURY INTERIOR DESIGN
        </motion.h1>
        <motion.p
          variants={slideUp(0.5)}
          initial="initial"
          animate="animate"
          className="text-sm text-gray-500"
        >
          Bring your dream to life with one-on-one design help & hand picked
          products tailored to your style, space and budget.
        </motion.p>
        <div className="space-x-4">
          <motion.button
            variants={slideUp(0.8)}
            initial="initial"
            animate="animate"
            className="primary-btn bg-black uppercase text-white hover:bg-gray-500"
          >
            Get satrted
          </motion.button>
          <motion.button
            variants={slideUp(1.1)}
            initial="initial"
            animate="animate"
            className="primary-btn uppercase"
          >
            Contact Us
          </motion.button>
        </div>
      </div>
      <div>
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="object-contain"
          src={HeroPng}
          alt="hero"
        />
      </div>
    </div>
  );
};

export default Hero;
