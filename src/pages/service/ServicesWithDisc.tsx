import { service1, service2, service3, service4 } from "../../assets";
import Button from "../../components/ui/Button";
import Reveal from "../../components/ui/Reveal";

const ServicesWithDisc = () => {
  const services = [
    {
      image: service1,
      title: "Comprehensive Fabrication Solutions",
      items: [
        "CNC laser cutting and precision welding",
        "Press braking, forming, and assembly work",
        "Structural steel and equipment housings",
        "Custom metal components for diverse industries",
      ],
    },
    {
      image: service2,
      title: "Machining and Shearing Works",
      items: [
        "High-capacity shearing for sheet and plate",
        "Straight, clean cuts with minimal waste",
        "Processing aluminum, steel, and soft metals",
        "Consistent precision for large-volume production",
      ],
    },
    {
      image: service3,
      title: "Field Services and Installation",
      items: [
        "On-site installation, alignment, and maintenance",
        "Certified tradespeople for safe system setup",
        "Machinery erection and commissioning support",
        "Single-point accountability from shop to site",
      ],
    },
    {
      image: service4,
      title: "R&D and Innovation",
      items: [
        "Rapid prototyping and design validation",
        "Functional metal prototypes for early testing",
        "Iterative development to reduce lead times",
        "Support for automotive and energy sectors",
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
