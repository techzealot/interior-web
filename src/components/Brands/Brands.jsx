import Brand1 from "../../assets/brand/1.png";
import Brand2 from "../../assets/brand/2.png";
import Brand3 from "../../assets/brand/3.png";
import Brand4 from "../../assets/brand/4.png";
import Brand5 from "../../assets/brand/5.png";

const Brands = () => {
  return (
    <div className="my-container flex flex-wrap items-center justify-around md:justify-between">
      <img src={Brand2} alt="Brand2" className="max-w-[16rem] object-contain" />
      <img src={Brand3} alt="Brand3" className="max-w-[16rem] object-contain" />
      <img src={Brand4} alt="Brand4" className="max-w-[16rem] object-contain" />
      <img src={Brand1} alt="Brand1" className="max-w-[16rem] object-contain" />
      <img src={Brand5} alt="Brand5" className="max-w-[16rem] object-contain" />
    </div>
  );
};

export default Brands;
