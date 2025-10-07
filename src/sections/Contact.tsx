import { contactImage, notify, telephon } from "../assets";
import Reveal from "../components/ui/Reveal";

const Contact = () => {
  const socials = [
    {
      name: "Company phone",
      line1: "+ 917338899988",
      line2: " +16347638654",
      image: telephon,
    },
    {
      name: "Destro emails",
      line1: "8E-mail:saienterprisess",
      line2: "@gmail.com",
      image: notify,
    },
  ];
  const address = [
    <p>No: 8640, TNHB, Ayapakkam,</p>,
    <p>Chennai- 600 077</p>,
    <p>410,13th STREET SIDCO INDUS ESTATE AMBATTUR</p>,
    <p>CHENNAI--600098</p>,
  ];
  return (
    <section id="contact" className="py-20">
      <div
        className="min-h-[85vh] bg-center bg-cover relative"
        style={{ backgroundImage: `url(${contactImage})` }}
      />
      <div className="flex justify-center gap-3 ml-10">
        <div className="min-w-[300px] relative">
          <div className="absolute bg-bg right-0 top-1/3 transform -translate-y-1/2 w-[160%] shadow-lg border-t-6 border-yellow p-4 py-6 flex flex-col icems-center justify-center">
            <Reveal>
              <h2 className="uppercase text-base text-black/80 mb-5">
                Company Address
              </h2>
            </Reveal>
            <div className="flex flex-col gap-3.5 text-violet font-semibold">
              {address.map((line, i) => (
                <Reveal key={i}>{line}</Reveal>
              ))}
            </div>
          </div>
        </div>
        {socials.map(({ image, name, line1, line2 }, i) => (
          <div key={i} className="flex flex-col items-center p-6">
            <div className="flex gap-4.5 items-center">
              <Reveal>
                <img
                  src={image}
                  alt={name}
                  className={`size-12 ${i == 0 ? "bg-yellow" : "bg-blue"} p-2`}
                />
              </Reveal>
              <div>
                <Reveal>
                  <h2 className="text-sm font-semibold text-text/80 uppercase mb-2">
                    {name}
                  </h2>
                </Reveal>
                <Reveal className="*:text-text">
                  <p>{line1}</p>
                  <p>{line2}</p>
                </Reveal>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
