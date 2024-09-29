import BannerPng from "../../assets/banner2.png";
import { motion } from "framer-motion";
import { slideLeft, slideUp } from "../../lib/animate";

const Banner2 = () => {
  return (
    <div className="my-container flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
      <div className="flex flex-col gap-4 md:max-w-[50%] xl:max-w-[30%]">
        <motion.h1
          variants={slideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="text-3xl font-bold"
        >
          Simple way to make stylish living room
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
        <motion.div
          variants={slideUp(0.6)}
          initial="initial"
          whileInView="animate"
          className="flex gap-4"
        >
          <div>
            <p className="font-serif text-3xl font-bold">15</p>
            <p className="max-w-[10ch] text-sm text-gray-500">
              Years of Experience
            </p>
          </div>
          <div>
            <p className="font-serif text-3xl font-bold">350</p>
            <p className="max-w-[10ch] text-sm text-gray-500">Happy Clients</p>
          </div>
          <div>
            <p className="font-serif text-3xl font-bold">34</p>
            <p className="max-w-[10ch] text-sm text-gray-500">Award Gained</p>
          </div>
        </motion.div>
        <motion.div
          variants={slideUp(0.8)}
          initial="initial"
          whileInView="animate"
        >
          <button className="primary-btn bg-black font-serif text-white shadow-md shadow-black">
            Contact Us
          </button>
        </motion.div>
      </div>
      <motion.div
        variants={slideLeft(0.2)}
        initial="initial"
        whileInView="animate"
      >
        <img src={BannerPng} alt="banner 2" className="object-contain" />
      </motion.div>
    </div>
  );
};

export default Banner2;
