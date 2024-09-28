const Newsletter = () => {
  return (
    <div className="my-container flex max-w-[80%] flex-col items-center gap-4">
      <h1 className="text-3xl font-bold">Subsribe to our Newsletter</h1>
      <p className="text-gray-500">
        Stay up to date with our latest news and offers
      </p>
      <div>
        <input
          type="text"
          className="border border-gray-300 p-4 ring-1 ring-gray-300"
          placeholder="Enter your email"
        />
        <button className="bg-black px-6 py-4 uppercase text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
