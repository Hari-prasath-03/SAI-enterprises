import { getAQuote } from "../../../assets";
import Button from "../../../components/ui/Button";
import Reveal from "../../../components/ui/Reveal";

const GetAQuote = () => {
  const steps = [
    {
      id: "01",
      title: "Kind Consultation",
      desc: "Etiam ac leo at quam aliquet",
    },
    {
      id: "02",
      title: "Kind Consultation",
      desc: "Etiam ac leo at quam aliquet",
    },
    {
      id: "03",
      title: "Kind Consultation",
      desc: "Etiam ac leo at quam aliquet",
    },
  ];
  return (
    <section id="hero" className="min-h-screen mb-10 sm:mb-14 relative">
      <div
        className="min-h-[90vh] bg-center bg-cover relative overflow-x-hidden flex items-center justify-center flex-col gap-6 text-white"
        style={{ backgroundImage: `url(${getAQuote})` }}
      >
        <Reveal>
          <h3 className="text-3xl">Get a Quote</h3>
        </Reveal>
        <Reveal>
          <h1 className="text-4xl sm:text-5xl font-bold text-center tracking-wider">
            Build Your Future Today
          </h1>
        </Reveal>
        <Reveal className="w-full sm:max-w-1/2 text-center opacity-90 px-1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </Reveal>
        <Button className="bg-red">Appoinment</Button>
      </div>

      <div className="sm:absolute bottom-0 flex sm:gap-6 flex-col w-full justify-center items-center sm:flex-row">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex items-center bg-white border-b border-gray-200 sm:border-0 sm:shadow-lg overflow-hidden w-full sm:w-1/3 p-5 max-w-fit"
          >
            <Reveal className="bg-red text-white text-center p-5">
              <span className="text-2xl md:text-3xl font-bold block">
                {step.id}
              </span>
            </Reveal>

            <Reveal className="ml-4">
              <h3 className="text-lg font-bold text-blue-900 mb-1">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetAQuote;
