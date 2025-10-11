import Reveal from "./Reveal";

const Heading = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className="mb-10 flex flex-col sm:items-center px-4">
      <Reveal>
        <p className="text-yellow font-semibold uppercase">{title}</p>
      </Reveal>
      <Reveal>
        <h2 className="text-4xl font-bold text-text/90 tracking-wide">
          {subtitle}
        </h2>
      </Reveal>
    </div>
  );
};

export default Heading;
