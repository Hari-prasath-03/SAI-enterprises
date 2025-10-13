import { aboutImage1, aboutImage2, play } from "../../../assets";
import Button from "../../../components/ui/Button";
import Reveal from "../../../components/ui/Reveal";

const About = () => {
  return (
    <section id="about" className="py-10 sm:py-20">
      <div className="container">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row">
          {/* Left */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="space-y-2">
              <Reveal>
                <h3 className="text-yellow uppercase text-lg font-semibold">
                  About us
                </h3>
              </Reveal>
              <Reveal>
                <h1 className="text-text text-4xl sm:text-5xl font-bold tracking-tight">
                  With our knowledge we guarantee success
                </h1>
              </Reveal>
            </div>
            <Reveal>
              <p className="text-violet text-base">
                Fusce id hendrerit lectus. Morbi vitae tortor sed turpis feugiat
                congue
              </p>
            </Reveal>
            <Reveal>
              <p className="text-base text-black/80 leading-7">
                Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus
                rutrum leo consectetur accumsan. Vivamus viverra ante turpis,
                dignissim condimentum elit egestas sit amet. Phasellus faucibus
                pellentesque
              </p>
            </Reveal>
            <Button className="bg-violet">Learn more</Button>
          </div>
          {/* Right */}
          <div className="hidden flex-1 sm:flex justify-center">
            <div className="h-full w-4/5 relative">
              <div className="absolute z-10 -top-20 right-10 border-[12px] border-white shadow-md">
                <img
                  src={aboutImage2}
                  alt="about 2"
                  className="h-72 object-cover"
                />
              </div>
              <div className="absolute z-20 top-16 border-[12px] border-white shadow-md">
                <img
                  src={aboutImage1}
                  alt="about 1"
                  className="h-80 object-cover"
                />
              </div>
              <div className="absolute z-30 top-12 left-30 size-16 bg-blue flex items-center justify-center shadow-lg">
                <img src={play} alt="play" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
