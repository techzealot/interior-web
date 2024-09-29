import { motion } from "framer-motion";
import { slideUp } from "../../lib/animate";
const Newsletter = () => {
  return (
    <div className="my-container flex max-w-[80%] flex-col items-center gap-4">
      <motion.h1
        variants={slideUp(0.2)}
        initial="initial"
        whileInView={"animate"}
        className="text-3xl font-bold"
      >
        Subsribe to our Newsletter
      </motion.h1>
      <motion.p
        variants={slideUp(0.4)}
        initial="initial"
        whileInView={"animate"}
        className="text-gray-500"
      >
        Stay up to date with our latest news and offers
      </motion.p>
      <motion.div
        variants={slideUp(0.6)}
        initial="initial"
        whileInView={"animate"}
        className="flex"
      >
        <input
          type="text"
          className="border border-gray-300 p-4 ring-1 ring-gray-300"
          placeholder="Enter your email"
        />
        <button className="bg-black px-6 py-4 uppercase text-white">
          Subscribe
        </button>
      </motion.div>
    </div>
  );
};

export default Newsletter;
