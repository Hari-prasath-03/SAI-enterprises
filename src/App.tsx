import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Service from "./sections/Service";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Testimonials from "./sections/Testimonials";
import FinalVideo from "./sections/FinalVideo";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Projects />
      <Contact />
      <Testimonials />
      <FinalVideo />
      <Footer />
    </div>
  ); 
};

export default App;
