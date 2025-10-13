import { aboutBanner } from "../../assets";
import PageHeader from "../../components/ui/PageHeader";
import AboutUs from "./sections/AboutUs";
import ContactForm from "./sections/ContactForm";
import GetAQuote from "./sections/GetAQuote";

const About = () => {
  return (
    <div className="page">
      <PageHeader title="about us" banner={aboutBanner} />
      <AboutUs />
      <GetAQuote />
      <ContactForm />
    </div>
  );
};

export default About;
