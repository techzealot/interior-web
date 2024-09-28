import Banner1 from "./components/banner/banner1";
import Banner2 from "./components/banner/banner2";
import Brands from "./components/brands/brands";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import Newsletter from "./components/newsletter/newsletter";
import Services from "./components/services/services";
import Testimonial from "./components/testimonial/testimonial";

const App = () => {
  return (
    <main className="mt-10 flex h-screen flex-col gap-20">
      <Navbar />
      <Hero />
      <Brands />
      <Services />
      <Banner1 />
      <Banner2 />
      <Testimonial />
      <Newsletter />
    </main>
  );
};

export default App;
