import BannerPng from "../../assets/banner.png";

const Banner1 = () => {
  return (
    <div className="my-container flex flex-col items-center justify-between gap-8 md:flex-row">
      <div>
        <img src={BannerPng} alt="banner 1" className="object-contain" />
      </div>
      <div className="flex flex-col gap-4 md:max-w-[50%] xl:max-w-[30%]">
        <h1 className="text-3xl font-bold">
          We Believe that a team makes any project better
        </h1>
        <p className="text-sm leading-7 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quis
          adipisci? Quidem ab beatae perferendis expedita veniam incidunt odio
          aut, vel labore quisquam voluptatum fugit in, voluptates impedit ipsa
          consequatur!
        </p>
        <div>
          <button className="primary-btn bg-black text-white shadow-md shadow-black">
            Discover Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
