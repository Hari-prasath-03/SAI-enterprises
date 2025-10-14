import { serviceBanner } from "../../assets";
import PageHeader from "../../components/ui/PageHeader";
import ServicesWithDisc from "./ServicesWithDisc";

const Service = () => {
  return (
    <div className="page">
      <PageHeader title="Services Archive" banner={serviceBanner} />
      <ServicesWithDisc />
    </div>
  );
};

export default Service;
