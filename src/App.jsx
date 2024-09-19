import Brands from "./components/Brands/Brands";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <main className="mt-10 flex h-screen flex-col gap-8">
      <Navbar />
      <Hero />
      <Brands />
    </main>
  );
};

export default App;
