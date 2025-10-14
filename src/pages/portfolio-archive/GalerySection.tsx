import {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  galleryRed,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  plus,
} from "../../assets";
import Reveal from "../../components/ui/Reveal";

const GalerySection = () => {
  const images = [
    { src: gallery1, alt: "Construction site with crane" },
    { src: gallery2, alt: "Excavator at work" },
    { src: gallery3, alt: "Workers at construction site" },
    { src: gallery4, alt: "Building under construction with cranes" },
    { src: galleryRed, alt: "Benoit Architecture - Commercial" },
    { src: gallery6, alt: "Modern architecture with cross detail" },
    { src: gallery7, alt: "Concrete structure in progress" },
    { src: gallery8, alt: "Steel framework construction" },
    { src: gallery9, alt: "Workers on rebar structure" },
  ];
  return (
    <section className="py-40 overflow-x-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {images.map((image, i) => (
            <div
              key={i}
              className="relative overflow-hidden group cursor-pointer aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {i === 4 && (
                <div className="absolute z-10 inset-0 flex flex-col items-center justify-center gap-3">
                  <Reveal className="text-white text-base font-semibold">
                    Commercial
                  </Reveal>
                  <Reveal className="text-white text-lg font-semibold">
                    Benoit Architecture
                  </Reveal>
                  <Reveal>
                    <button className="size-10 bg-white flex items-center justify-center cursor-pointer mt-3">
                      <img src={plus} alt="plus" />
                    </button>
                  </Reveal>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalerySection;
