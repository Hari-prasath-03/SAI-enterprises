import { useState } from "react";
import Button from "../../../components/ui/Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };
  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <input
          type="text"
          name="fullName"
          placeholder="Your Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-red transition-colors"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-red transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-red transition-colors"
        />
        <input
          type="text"
          name="address"
          placeholder="Your Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-red transition-colors"
        />
      </div>

      <div className="mb-6">
        <textarea
          name="message"
          placeholder="Enter Your Message Here..."
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-red transition-colors resize-none"
        />
      </div>

      <Button onClick={handleSubmit} className="bg-red">
        Submit Message
      </Button>
    </div>
  );
};

export default ContactForm;
