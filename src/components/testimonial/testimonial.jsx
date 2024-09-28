const testimonials = [
  {
    id: 1,
    name: "Anderson",
    role: "Manager",
    avatar: "https://placehold.co/64x64?text=A",
    starNumer: 5,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique magnam obcaecati adipisci a odio officia, sit nostrum libero molestias laborum vitae id, eius ex atque illum cupiditate assumenda quam nihil!",
  },
  {
    id: 2,
    name: "John",
    role: "CEO",
    avatar: "https://placehold.co/64x64?text=J",
    starNumer: 4,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
  },
  {
    id: 3,
    name: "Sarah",
    role: "Marketing",
    avatar: "https://placehold.co/64x64?text=S",
    starNumer: 3,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi nderit in voluptate",
  },
];

const Testimonial = () => {
  return (
    <div className="flex flex-col items-stretch gap-8">
      <div className="my-container flex flex-col items-center gap-4">
        <h1 className="font-serif text-3xl font-bold">
          Words from our coustomers
        </h1>
        <p className="max-w-[42ch] text-center text-sm text-gray-500">
          Bring your dream home to life with one-on-one design help & hand
          picked products
        </p>
      </div>
      <div className="min-w-[var(--min-container-width)] bg-black">
        <div className="my-container flex flex-col items-stretch justify-between gap-8 px-10 py-10 md:flex-row">
          {testimonials.map((item) => (
            <div
              className="group flex flex-col items-start gap-4 border border-gray-500 p-10 text-gray-500 hover:bg-white"
              key={item.id}
            >
              <div className="flex w-full items-center gap-4 border-b border-gray-500 pb-4">
                <img src={item.avatar} alt="" className="rounded-full" />
                <div className="">
                  <p className="text-lg font-bold text-white group-hover:text-black">
                    {item.name}
                  </p>
                  <p className="group-hover:text-black">{item.role}</p>
                  <p className="flex items-center gap-0.5">
                    {Array(item.starNumer)
                      .fill()
                      .map((_, index) => (
                        <span key={index} className="text-yellow-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      ))}
                  </p>
                </div>
              </div>
              <div>
                <p className="max-w-[40ch] text-base group-hover:text-black">
                  {item.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
