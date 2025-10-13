import Reveal from "./Reveal";

interface PageHeaderProps {
  title: string;
  banner: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, banner }) => {
  return (
    <div className="relative">
      <div
        className="min-h-[35vh] sm:min-h-[50vh] bg-cover overflow-x-hidden"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0  overflow-x-hidden">
          <div className="text-white relative z-10 -right-1/5 p-4 top-1/2 transform -translate-y-1/2 space-y-2 sm:space-y-6">
            <Reveal className="text-4xl md:text-5xl font-bold tracking-wider capitalize">
              {title}
            </Reveal>
            <Reveal className="text-sm md:text-base">Home / {title}</Reveal>
          </div>
        </div>
      </div>
      <div className="absolute right-0 sm:right-1/5 top-4/5 py-5 sm:py-8 px-10 sm:px-12 space-y-2.5 bg-bg border-t-8 border-red max-w-fit shadow-lg *:tracking-wider">
        <Reveal className="text-violet uppercase text-xs">call us today</Reveal>
        <Reveal className="text-xl sm:text-2xl font-bold">+123 456 7890</Reveal>
      </div>
    </div>
  );
};

export default PageHeader;
