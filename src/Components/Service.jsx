import { useState } from "react";

// EnquiryForm Component
function EnquiryForm({ service, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    contactNumber: "",
    serviceType: service,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(`Enquiry submitted for: ${service}`);
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      contactNumber: "",
      serviceType: service,
      message: "",
    });
    onClose(); // close modal after submission
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">
          Enquire About: {service}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Company / Organization</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}

// Services Data
const SERVICES = [
  { name: "Trading of Materials for the Oil & Gas Sector", description: "Supply of essential materials tailored for the oil and gas industry.", icon: "🛢️" },
  { name: "Mechanical & Civil Work", description: "Execution of mechanical and civil engineering projects with skilled manpower.", icon: "🏗️" },
  { name: "Electrical & HVAC", description: "Installation and maintenance of electrical systems and HVAC units.", icon: "💡" },
  { name: "Medical Equipment & Paramedical Staff", description: "Provision of medical equipment and staffing solutions for healthcare facilities.", icon: "🩺" },
  { name: "Water & Wastewater Treatment Plant", description: "End-to-end solutions for water and wastewater treatment plants.", icon: "🚰" },
  { name: "Fasteners, Pipe Supports & Conduit Accessories", description: "Distribution of essential components for construction and industrial projects.", icon: "🔧" },
  { name: "Equipment Rental Division", description: "Rental services for various construction and industrial equipment.", icon: "🚜" },
  { name: "Sponsorship Services", description: "Assistance with sponsorship requirements for businesses and individuals.", icon: "📝" },
  { name: "Overseas Recruitment", description: "Recruitment services to source skilled labor from overseas.", icon: "🌐" },
  { name: "Catering", description: "Provision of catering services for various events and projects.", icon: "🍽️" },
  { name: "Food & Accommodation", description: "Supply of food and accommodation services for workers and staff.", icon: "🏨" },
  { name: "Event Management", description: "Comprehensive event planning and management services.", icon: "🎉" },
];

// Services Page Component
export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Our Services
      </h1>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service) => (
          <div
            key={service.name}
            className="border rounded-lg p-6 shadow hover:shadow-lg transition cursor-pointer hover:bg-gray-50"
            onClick={() => setSelectedService(service.name)}
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Enquiry Form Modal */}
      {selectedService && (
        <EnquiryForm
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
}
