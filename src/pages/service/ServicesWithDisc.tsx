import { service1, service2, service3, service4 } from "../../assets";
import Button from "../../components/ui/Button";
import Reveal from "../../components/ui/Reveal";

const ServicesWithDisc = () => {
  const services = [
    {
      image: service1,
      title: "Comprehensive Fabrication Solutions",
      items: [
        "Steel Frames",
        "Roofing",
        "Blasting",
        "All types of fabrication work",
      ],
    },
    {
      image: service2,
      title: "Machining Works",
      items: ["Center Lathes and assembled", "Machine mounted work"],
    },
    {
      image: service3,
      title: "Field Services",
      items: ["Field technician"],
    },
    {
      image: service4,
      title: "R&D and Innovation",
      items: [
        "Development of new welding material",
        "Consultation with technical consultancy knowledge",
      ],
    },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col ">
          {services.map((service, i) => (
            <div
              key={i}
              className={`relative sm:h-80 overflow-hidden flex flex-col ${
                i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover flex-1"
              />

              <div className="flex-1 bg-red text-white">
                <div className="p-8">
                  <Reveal className="text-2xl font-bold mb-6">
                    {service.title}
                  </Reveal>
                  <ul className="mb-8 space-y-2">
                    {service.items.map((item, idx) => (
                      <Reveal key={idx} className="text-sm leading-relaxed">
                        {item}
                      </Reveal>
                    ))}
                  </ul>
                  <Button className="bg-red border border-white">
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesWithDisc;
