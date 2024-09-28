import { FaVectorSquare } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { BiSolidDollarCircle } from "react-icons/bi";

const serviceCards = [
  {
    id: 1,
    title: "Luxury Facilities",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur",
    icon: <FaVectorSquare />,
    link: "#",
  },
  {
    id: 2,
    title: "Quality Products",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur",
    icon: <FaPenToSquare />,
    link: "#",
  },
  {
    id: 3,
    title: "Affordable Price",
    description:
      "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,consectetur adipiscing elit",
    icon: <BiSolidDollarCircle />,
    link: "#",
  },
];
const Services = () => {
  return (
    <div className="my-container flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-3xl font-bold">What we provide</h1>
        <p className="text-center text-base text-gray-600">
          Bring your dream home to life with one-on-one design
          <br />
          help & hand picked products
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
        {serviceCards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col gap-4 border border-black p-4 duration-300 hover:bg-black hover:text-white hover:shadow-2xl hover:shadow-black"
          >
            <div>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
