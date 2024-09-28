import HeroPng from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className="my-container mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
      <div className="flex flex-col justify-center gap-4 text-center md:max-w-[50%] md:text-left">
        <h1 className="text-3xl font-bold">SKETCH LUXURY INTERIOR DESIGN</h1>
        <p className="text-sm text-gray-500">
          Bring your dream to life with one-on-one design help & hand picked
          products tailored to your style, space and budget.
        </p>
        <div className="space-x-4">
          <button className="primary-btn bg-black uppercase text-white hover:bg-gray-500">
            Get satrted
          </button>
          <button className="primary-btn uppercase">Contact Us</button>
        </div>
      </div>
      <div>
        <img className="object-contain" src={HeroPng} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
