import { brush, helmet, scrowdrivers } from "../../../assets";
import Button from "../../../components/ui/Button";
import Reveal from "../../../components/ui/Reveal";

const ContactForm = () => {
  const features = [
  {
    icon: <img src={helmet} alt="Helmet" className="size-10" />,
    title: "High-Tolerance Fabrication",
    desc: "We utilize advanced, high-tolerance manufacturing methods such as CNC laser cutting and precision welding.",
  },
  {
    icon: <img src={brush} alt="Brush" className="size-10" />,
    title: "Custom-Engineered Solutions",
    desc: "We deliver custom-engineered components with precise forming, welding, and assembly tailored to client requirements.",
  },
  {
    icon: <img src={scrowdrivers} alt="Screwdrivers" className="size-10" />,
    title: "On-Site Field Services",
    desc: "We provide equipment installation, assembly, alignment, and maintenance at client facilities across industries.",
  },
];

  return (
    <section id="contact-form" className="py-20 overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-20">
        <div>
          <Reveal className="text-sm font-semibold text-red-600 mb-2 tracking-widest uppercase">
            Appoinment
          </Reveal>
          <Reveal className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-8">
            Request a Quote
          </Reveal>

          <form className="space-y-4 sm:min-w-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:border-red-600"
              />
              <input
                type="email"
                placeholder="E - Mail"
                className="w-full border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:border-red-600"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:border-red-600"
              />
              <input
                type="text"
                placeholder="Select Service"
                className="w-full border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:border-red-600"
              />
            </div>

            <textarea
              placeholder="Message"
              rows={4}
              className="w-full border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:border-red-600 resize-none"
            ></textarea>

            <Button className="bg-red">Appointment</Button>
          </form>
        </div>

        <div className="space-y-8 px-3 sm:px-0">
          {features.map((item, i) => (
            <Reveal key={i}>
              <div className="flex items-center gap-4">
                <div>{item.icon}</div>
                <div>
                  <h4 className="font-bold text-blue-950 mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
