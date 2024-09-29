import { FaVectorSquare } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { BiSolidDollarCircle } from "react-icons/bi";
import { motion } from "framer-motion";
import { del } from "framer-motion/client";
import { delay } from "framer-motion";
import { slideUp } from "../../lib/animate";

const serviceCards = [
  {
    id: 1,
    title: "Luxury Facilities",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur",
    icon: <FaVectorSquare />,
    link: "#",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Quality Products",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur",
    icon: <FaPenToSquare />,
    link: "#",
    delay: 0.4,
  },
  {
    id: 3,
    title: "Affordable Price",
    description:
      "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,consectetur adipiscing elit",
    icon: <BiSolidDollarCircle />,
    link: "#",
    delay: 0.6,
  },
];
const Services = () => {
  return (
    <div className="my-container flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center justify-center gap-2">
        <motion.h1
          variants={slideUp(0.2)}
          initial="initial"
          animate="animate"
          className="text-3xl font-bold"
        >
          What we provide
        </motion.h1>
        <motion.p
          variants={slideUp(0.4)}
          initial="initial"
          animate="animate"
          className="text-center text-base text-gray-600"
        >
          Bring your dream home to life with one-on-one design
          <br />
          help & hand picked products
        </motion.p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
        {serviceCards.map((card) => (
          <motion.div
            variants={slideUp(card.delay)}
            initial="initial"
            whileInView="animate"
            key={card.id}
            className="flex flex-col gap-4 border border-black p-4 duration-300 hover:bg-black hover:text-white hover:shadow-2xl hover:shadow-black"
          >
            <div>
              {/* 内联元素只能嵌套文字或其他内联元素,不可以嵌套块元素,否则宽度异常,转换为内联块元素可以解决这个问题. */}
              <span className="inline-block rounded-full border border-black p-4 text-xl">
                {card.icon}
              </span>
            </div>
            <h1 className="text-2xl font-bold">{card.title}</h1>
            <p className="text-base">{card.description}</p>
            <div>
              <a
                href={card.link}
                className="border-b-2 border-solid border-black hover:border-white"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
