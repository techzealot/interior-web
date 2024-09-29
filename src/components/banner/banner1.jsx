import BannerPng from "../../assets/banner.png";
import { motion } from "framer-motion";
import { slideRight, slideUp } from "../../lib/animate";

const Banner1 = () => {
  return (
    <div className="my-container flex flex-col items-center justify-between gap-8 md:flex-row">
      <motion.div
        variants={slideRight(0.2)}
        initial="initial"
        whileInView="animate"
      >
        <img src={BannerPng} alt="banner 1" className="object-contain" />
      </motion.div>
      <div className="flex flex-col gap-4 md:max-w-[50%] xl:max-w-[30%]">
        <motion.h1
          variants={slideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="text-3xl font-bold"
        >
          We Believe that a team makes any project better
        </motion.h1>
        <motion.p
          variants={slideUp(0.4)}
          initial="initial"
          whileInView="animate"
          className="text-sm leading-7 text-gray-500"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quis
          adipisci? Quidem ab beatae perferendis expedita veniam incidunt odio
          aut, vel labore quisquam voluptatum fugit in, voluptates impedit ipsa
          consequatur!
        </motion.p>
        <div>
          <motion.button
            variants={slideUp(0.6)}
            initial="initial"
            whileInView="animate"
            className="primary-btn bg-black text-white shadow-md shadow-black"
          >
            Discover Now
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
