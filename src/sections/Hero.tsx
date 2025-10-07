import { engineer, heroImage1, ruler, shape } from "../assets";
import CountUp from "../components/CountUp";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";

const Hero = () => {
  const heighlights = [
    {
      heighLight: "Completed Projects",
      count: 147,
      bgColor: "violet",
    },
    {
      heighLight: "Years of Experience",
      count: 25,
      bgColor: "yellow",
    },
  ];

  const specilisations = [
    {
      name: "General Contract",
      content:
        "Quisque condimentum erat ac orci blandit, in sollicitudin vestibulum.",
      icon: engineer,
    },
    {
      name: "Project Planning",
      content: "Nullam commodo tincidunt nisl, nec vehicula dui interdum nec.",
      icon: ruler,
    },
    {
      name: "General Contract",
      content:
        "Sed vitae aliquet ipsum, ut ornare lectus. Proin sed. Sed nunc.",
      icon: shape,
    },
  ];

  return (
    <section id="hero" className="min-h-screen mb-40">
      <div
        className="min-h-[85vh] bg-center bg-cover relative"
        style={{ backgroundImage: `url(${heroImage1})` }}
      >
        <div className="absolute bg-black/15 inset-0" />
        <div className="relative container flex gap-10 flex-col pt-16 lg:pt-20 z-10">
          <Reveal>
            <h1 className="text-7xl font-semibold text-violet">
              Capabilities that set a new industry standard
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-white/90 text-2xl max-w-3xl">
              We delivers high-quality fabrication, machining, and field
              services tailored to your business needs—on time, every time.
            </p>
          </Reveal>
          <Button />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col items-center text-white bg-violet p-8 pr-12">
          <CountUp
            className="text-8xl font-bold"
            targetNumber={heighlights[0].count}
            duration={3500}
          />
          <p className="text-base">{heighlights[0].heighLight}</p>
        </div>
        <div className="flex flex-col items-center text-white bg-yellow p-8 pr-12">
          <CountUp
            className="text-8xl font-bold"
            targetNumber={heighlights[1].count}
            duration={3500}
            showPlusOnAnimationEnd
          />
          <p className="text-base">{heighlights[1].heighLight}</p>
        </div>

        <div className="min-w-[300px] relative">
          <div className="absolute bg-bg left-0 top-1/3 transform -translate-y-1/2 w-[125%] h-[220%] shadow-lg border-t-6 border-blue p-4 flex flex-col icems-center justify-center">
            <Reveal>
              <h1 className="text-2xl font-semibold text-violet text-center">
                We Construct and Manage Places and Infrastructures
              </h1>
            </Reveal>
            <div className="flex flex-col gap-3.5 p-5">
              {specilisations.map(({ name, content, icon }, i) => (
                <Reveal key={i}>
                  <div className="flex gap-4.5 items-center">
                    <img src={icon} alt={name} className="size-12" />
                    <div className="space-y-1">
                      <h2 className="text-lg font-semibold text-violet">
                        {name}
                      </h2>
                      <p className="text-text/80 text-sm">{content}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
