import Hero from "./sections/Hero";
import About from "./sections/About";
import Service from "./sections/Service";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Testimonials from "./sections/Testimonials";
import FinalVideo from "./sections/FinalVideo";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Service />
      <Projects />
      <Contact />
      <Testimonials />
      <FinalVideo />
    </div>
  );
};

export default Home;
