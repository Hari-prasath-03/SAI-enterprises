import {
  plus,
  serviceImage2,
  serviceImage3,
  serviceImage4,
  serviceImage5,
} from "../assets";
import Heading from "../components/ui/Heading";
import Reveal from "../components/ui/Reveal";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <Heading title="OUR WORKS" subtitle="Our Special Projects" />

      <div className="max-w-6xl mx-auto grid grid-cols-3 grid-rows-2 gap-2 px-4">
        <div className="row-span-2">
          <img src={serviceImage2} alt="Project 1" className="object-cover" />
        </div>

        <div>
          <img
            src={serviceImage3}
            alt="Project 2"
            className="object-cover h-full"
          />
        </div>

        <div>
          <img
            src={serviceImage5}
            alt="Project 3"
            className="object-cover h-full"
          />
        </div>

        <div className="relative text-white flex items-center justify-center">
          <img
            src={serviceImage4}
            alt="Overlay"
            className="object-cover h-full"
          />
          <div className="absolute inset-0 bg-blue/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center gap-3">
            <Reveal>
              <p className="text-sm uppercase">Commercial</p>
            </Reveal>
            <Reveal>
              <h3 className="text-lg font-semibold">Benoti Architecture</h3>
            </Reveal>
            <Reveal>
              <button className="size-10 bg-white flex items-center justify-center cursor-pointer mt-3">
                <img src={plus} alt="plus" />
              </button>
            </Reveal>
          </div>
        </div>

        <div>
          <img
            src={serviceImage4}
            alt="Project 5"
            className="object-cover h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
