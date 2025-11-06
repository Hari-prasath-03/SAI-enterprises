import {
  rightArrow,
  serviceImage1,
  serviceImage2,
  serviceImage3,
  serviceImage4,
} from "../../../assets";
import Reveal from "../../../components/ui/Reveal";

const Service = () => {
  const services = [
    {
      title: "Laser Cutting",
      content:
        "Precision CNC laser cutting produces complex shapes with micron-level accuracy and burr-free edges.",
      image: serviceImage2,
    },
    {
      title: "Metal Fabrication",
      content:
        "Full-spectrum metal fabrication including CNC cutting, press braking, and welding to produce custom components.",
      image: serviceImage3,
    },
    {
      title: "R&D Prototyping",
      content:
        "Rapid prototyping and iterative R&D to create functional metal prototypes for early testing and design validation.",
      image: serviceImage4,
    },
  ];

  return (
    <section id="service" className="py-10 sm:py-20">
      <div className="flex flex-col sm:grid sm:grid-cols-5">
        <div className="hidden sm:block col-span-2">
          <img src={serviceImage1} alt="service" className="w-full h-[120%]" />
        </div>
        {services.map((service, i) => (
          <div
            key={i}
            style={{ backgroundImage: `url(${service.image})` }}
            className="col-span-1 bg-center bg-cover relative pt-8 h-[120%]"
          >
            <div
              className={`absolute inset-0 ${
                i % 2 == 0 ? "bg-[#213d6f]/85" : "bg-[#d03254]/85"
              }`}
            />
            <div className="relative z-10 h-full flex flex-col justify-between p-6 overflow-hidden">
              <div className="flex flex-col text-white gap-7">
                <Reveal>
                  <h3 className="text-3xl font-bold">{service.title}</h3>
                </Reveal>
                <Reveal>
                  <p className="text-white/80 text-sm">{service.content}</p>
                </Reveal>
              </div>
              <Reveal className="self-end">
                <button
                  className={`font-semibold p-3 ${
                    i % 2 !== 0 ? "bg-violet" : "bg-yellow"
                  } mr-3 mb-6`}
                >
                  <img src={rightArrow} className="size-4" alt="right arrow" />
                </button>
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
