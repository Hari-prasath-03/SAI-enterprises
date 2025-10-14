import { contactBanner, map } from "../../assets";
import PageHeader from "../../components/ui/PageHeader";
import ContactForm from "./sections/ContactForm";
import ContactInfo from "./sections/ContactInfo";

const Contact = () => {
  return (
    <div className="page">
      <PageHeader title="Contacts" banner={contactBanner} />
      <div className="page pt-30 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <ContactForm />

          <div className="mb-8">
            <img
              src={map}
              alt="Location map"
              className="w-full h-80 object-cover rounded-lg shadow-md"
            />
          </div>

          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;
