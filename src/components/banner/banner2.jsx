import BannerPng from "../../assets/banner2.png";

const Banner2 = () => {
  return (
    <div className="my-container flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
      <div className="flex flex-col gap-4 md:max-w-[50%] xl:max-w-[30%]">
        <h1 className="text-3xl font-bold">
          Simple way to make stylish living room
        </h1>
        <p className="text-sm leading-7 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quis
          adipisci? Quidem ab beatae perferendis expedita veniam incidunt odio
          aut, vel labore quisquam voluptatum fugit in, voluptates impedit ipsa
          consequatur!
        </p>
        <div className="flex gap-4">
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
        </div>
        <div>
          <button className="primary-btn bg-black font-serif text-white shadow-md shadow-black">
            Contact Us
          </button>
        </div>
      </div>
      <div>
        <img src={BannerPng} alt="banner 1" className="object-contain" />
      </div>
    </div>
  );
};

export default Banner2;
