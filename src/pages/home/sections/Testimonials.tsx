import { handshake, quote } from "../../../assets";
import Heading from "../../../components/ui/Heading";
import Reveal from "../../../components/ui/Reveal";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white overflow-x-hidden">
      <Heading title="Testimonials" subtitle="Our Clients Say" />
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full">
          <img
            src={handshake}
            alt="Client Handshake"
            className="h-[480px] border-[12px] border-white shadow-lg"
          />
        </div>

        <div className="space-y-4">
          <Reveal>
            <img src={quote} alt="Quote" className="size-12 bg-blue p-2" />
          </Reveal>

          <Reveal>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Suspendisse tortor enim, varius et porttitor sit amet, posuere
              vitae massa. Proin ac quam eu erat semper sagittis in vitae elit.
              Nam neque erat, semper vel ultrices in, finibus eu magna.
              Pellentesque habitant morbi tristique.
            </p>
          </Reveal>

          <Reveal>
            <p className="font-semibold text-gray-800">Katy Grey</p>
            <p className="text-sm text-blue-600">CEO Grey Industries</p>
          </Reveal>

          {/* Pagination Dots */}
          <div className="mt-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-700"></span>
            <span className="w-2 h-2 rounded-full bg-purple-300"></span>
            <span className="w-2 h-2 rounded-full bg-purple-300"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
