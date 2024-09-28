import Logo from "../../assets/Logo.png";
import { navLinks } from "../../data";

const Navbar = () => {
  return (
    <nav className="my-container flex items-center justify-between gap-4 bg-white">
      {/* logo section */}
      <div className="min-with-max flex flex-auto items-center gap-3">
        <img src={Logo} alt="logo" className="w-10" />
        <span className="text-2xl font-bold">Interior</span>
      </div>
      {/* link section */}
      <div className="hidden flex-auto md:flex md:justify-between">
        {navLinks.map((link) => (
          <a href={link.link} key={link.id} className="text-lg font-semibold">
            {link.title}
          </a>
        ))}
      </div>
      {/* button section */}
      <div className="flex flex-auto justify-end whitespace-nowrap">
        <button className="primary-btn">Try For Free</button>
      </div>
    </nav>
  );
};

export default Navbar;
