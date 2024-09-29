import Brand1 from "../../assets/brand/1.png";
import Brand2 from "../../assets/brand/2.png";
import Brand3 from "../../assets/brand/3.png";
import Brand4 from "../../assets/brand/4.png";
import Brand5 from "../../assets/brand/5.png";
import { slideLeft } from "../../lib/animate";
import { motion } from "framer-motion";

const Brands = () => {
  return (
    <div className="my-container flex flex-wrap items-center justify-around md:justify-between">
      <motion.img
        variants={slideLeft(0.2)}
        initial="initial"
        whileInView="animate"
        src={Brand3}
        alt="Brand3"
        className="max-w-[16rem] object-contain"
      />
      <motion.img
        variants={slideLeft(0.4)}
        initial="initial"
        whileInView="animate"
        src={Brand2}
        alt="Brand2"
        className="max-w-[16rem] object-contain"
      />
      <motion.img
        variants={slideLeft(0.6)}
        initial="initial"
        whileInView="animate"
        src={Brand4}
        alt="Brand4"
        className="max-w-[16rem] object-contain"
      />
      <motion.img
        variants={slideLeft(0.8)}
        initial="initial"
        whileInView="animate"
        src={Brand1}
        alt="Brand1"
        className="max-w-[16rem] object-contain"
      />
      <motion.img
        variants={slideLeft(1.0)}
        initial="initial"
        whileInView="animate"
        src={Brand5}
        alt="Brand5"
        className="max-w-[16rem] object-contain"
      />
    </div>
  );
};

export default Brands;
