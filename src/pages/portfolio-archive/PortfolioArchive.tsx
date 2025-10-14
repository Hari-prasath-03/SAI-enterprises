import { buildingBanner } from "../../assets";
import PageHeader from "../../components/ui/PageHeader";
import GalerySection from "./GalerySection";

const PortfolioArchive = () => {
  return <div className="page">
    <PageHeader title="Portfolio Archive" banner={buildingBanner} />
    <GalerySection />
  </div>;
};

export default PortfolioArchive;
