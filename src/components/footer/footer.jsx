import { FaMessage, FaPhone } from "react-icons/fa6";
import Logo from "../../assets/Logo.png";
import { motion } from "framer-motion";
import { slideLeft } from "../../lib/animate";

const Footer = () => {
  return (
    <motion.footer
      className="my-container"
      variants={slideLeft(0.2)}
      initial="initial"
      whileInView={"animate"}
    >
      <div className="grid grid-cols-1 items-start justify-between gap-8 md:grid-cols-3">
        <div className="space-y-4 font-bold">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="logo" className="w-6" />
            <p className="text-xl">Interior</p>
          </div>
          <p>Greater Noida, Uttar Pradesh, India</p>
          <p>@ 2024 TCJ All rights reserved</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h1 className="text-xl font-bold">About us</h1>
            <ul className="mt-4 space-y-4">
              <li className="text-gray-500">
                <a href="#">Our Story</a>
              </li>
              <li className="text-gray-500">
                <a href="#">Designer</a>
              </li>
              <li className="text-gray-500">
                <a href="#">Craftmanship</a>
              </li>
              <li className="text-gray-500">
                <a href="#">Sustainability</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-bold">Support</h1>
            <ul className="mt-4 space-y-4">
              <li className="text-gray-500">
                <a href="#">FAQ's</a>
              </li>
              <li className="text-gray-500">
                <a href="#">Shipping & Returns</a>
              </li>
              <li className="text-gray-500">
                <a href="#">Care Guide</a>
              </li>
              <li className="text-gray-500">
                <a href="#">Guaranty</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold">Contact us</h1>
          <ul className="mt-4 space-y-4">
            <li className="flex items-center gap-2">
              <FaPhone />
              <a href="tel:123456789">+91 123456789</a>
            </li>
            <li className="flex items-center gap-2">
              <FaMessage />
              <a href="mailto:test@example.com">EMAIL</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4 border-t border-gray-300 py-4">
        <p className="text-center font-bold">
          © 2023 TCJ. All rights reserved
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
