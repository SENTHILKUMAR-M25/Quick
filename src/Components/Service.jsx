import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Replace with your Admin WhatsApp Number (with country code, no + or spaces)
    const adminNumber = "918925393946"; 

    const whatsappMessage = `Hello Sir/Madam,%0A
📌 New Enquiry Submission%0A
🛠 Service: ${service}%0A
👤 Full Name: ${formData.fullName}%0A
🏢 Company: ${formData.companyName}%0A
📧 Email: ${formData.email}%0A
📞 Contact: ${formData.contactNumber}%0A
💬 Message: ${formData.message}`;

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${adminNumber}?text=${whatsappMessage}`, "_blank");

    setSuccessMsg(`Enquiry sent for: ${service}`);
    setTimeout(() => setSuccessMsg(""), 3000);

    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      contactNumber: "",
      serviceType: service,
      message: "",
    });

    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <label className="block text-sm font-medium text-gray-700">Company / Organization</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <label className="block text-sm font-medium text-gray-700">Contact Number</label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </motion.div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              📲 Send via WhatsApp
            </motion.button>
          </form>
        </motion.div>
      </motion.div>

      {/* Success Toast */}
      <AnimatePresence>
        {successMsg && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow"
          >
            {successMsg}
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
}

// Services Data
const SERVICES = [
  { name: "Electrical Wiring", description: "Professional wiring services for homes, villas, and commercial projects ensuring safety and efficiency.", icon: "⚡" },
  { name: "Electrical Installations", description: "Expert installation of electrical systems and components with compliance to safety standards.", icon: "💡" },
  { name: "Sanitary Ware Installation", description: "Installation of sanitary fittings and plumbing fixtures with reliable workmanship.", icon: "🚿" },
  { name: "Plots & Villas Work", description: "Complete electrical and sanitary extension services for plots and villas.", icon: "🏠" },
  { name: "Electrical Extension", description: "Electrical extension services tailored to residential and commercial needs.", icon: "🔌" },
  { name: "Sanitary Extension", description: "Expansion and modification of sanitary systems for existing and new projects.", icon: "🚰" },
  { name: "Maintenance Contracts", description: "Long-term maintenance solutions for electrical and sanitary systems with quick response support.", icon: "🛠️" },
];

// Services Page Component
export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        className="text-3xl font-bold text-gray-900 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Our Services
      </motion.h1>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.name}
            className="border rounded-lg p-6 shadow hover:shadow-lg transition cursor-pointer bg-white"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setSelectedService(service.name)}
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Enquiry Form Modal */}
      <AnimatePresence>
        {selectedService && (
          <EnquiryForm
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
