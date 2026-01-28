
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../assets/logo11.png'
/* =========================
   ENQUIRY FORM MODAL
========================= */
function EnquiryForm({ service, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const adminNumber = "96599693670"; 
    const whatsappMessage = `Hello Sir/Madam,%0A📌 New Enquiry%0A🛠 Service: ${service}%0A👤 Name: ${formData.fullName}%0A🏢 Company: ${formData.companyName}%0A📧 Email: ${formData.email}%0A📞 Contact: ${formData.contactNumber}%0A💬 Message: ${formData.message}`;
    window.open(`https://wa.me/${adminNumber}?text=${whatsappMessage}`, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-2xl w-full max-w-md p-8 relative shadow-2xl border border-slate-100"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-2xl">×</button>
          <h2 className="text-2xl font-bold mb-6 text-slate-800 border-b pb-2">Enquire: <span className="text-blue-600">{service}</span></h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {["fullName", "companyName", "email", "contactNumber"].map((field) => (
              <input
                key={field}
                type={field === "email" ? "email" : field === "contactNumber" ? "tel" : "text"}
                name={field}
                placeholder={field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                required
                onChange={handleChange}
                className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all"
              />
            ))}
            <textarea
              name="message"
              rows="3"
              placeholder="How can we help you?"
              required
              onChange={handleChange}
              className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-3 rounded-lg shadow-lg transition-transform active:scale-95">
              📲 Send via WhatsApp
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* =========================
   DATA
========================= */
const CAPABILITIES = [
  { title: "Oil & Gas Industrial", icon: "🛢️" },
  { title: "Piping Works", icon: "🧵" },
  { title: "Infrastructure", icon: "🏗️" },
  { title: "Commercial", icon: "🏢" },
  { title: "Electro-Mechanical", icon: "⚙️" },
  { title: "Maintenance", icon: "🧑‍🔧" },
];

const SERVICES = [
  { name: "Electrical Wiring", icon: "⚡", description: "Professional wiring services for residential and commercial projects." },
  { name: "Electrical Installations", icon: "💡", description: "Complete electrical installations following safety standards." },
  { name: "Sanitary Ware Installation", icon: "🚿", description: "Quality installation of sanitary and plumbing fixtures." },
  { name: "Plots & Villas Work", icon: "🏠", description: "Electrical and sanitary services for villas and developments." },
  { name: "Electrical Extension", icon: "🔌", description: "Electrical system extensions for existing buildings." },
  { name: "Sanitary Extension", icon: "🚰", description: "Sanitary system expansion and modifications." },
  { name: "Maintenance Contracts", icon: "🛠️", description: "Annual maintenance contracts with fast response support." },
];

/* =========================
   MAIN PAGE
========================= */
export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="bg-white min-h-screen text-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* HERO SECTION */}
        <section className="mb-20 flex flex-col items-center text-center">
          <img src={logo} alt="Logo" className="h-32 mb-8 object-contain" />
          <h1 className="text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-500">
            PROTECTING YOUR ROI
          </h1>
          <h2 className="text-xl font-medium text-slate-500 mt-2 uppercase tracking-widest">
            Turnkey Engineering Solutions
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mt-6 rounded-full"></div>
        </section>

        {/* CAPABILITIES SECTION */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Capabilities</h2>
            <div className="flex-1 h-px bg-slate-100"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {CAPABILITIES.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="group flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-transparent hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-inner text-3xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <p className="font-bold text-sm text-blue-900 leading-tight">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* OPTIMIZATION SECTION */}
        <section className="mb-24 p-10 rounded-3xl bg-gradient-to-br from-blue-900 to-slate-900 text-white relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-extrabold mb-4">Optimization <span className="text-cyan-400">of Assets</span></h2>
              <p className="text-blue-100 mb-8 leading-relaxed">
                KRH offers integrated facilities management (IFM) ensuring full operational efficiency and technical precision across diverse sectors.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm">
                {["Airports & Mega Projects", "Commercial Buildings", "Medical Facilities", "Military Buildings", "Food Halls", "Residential Units"].map(list => (
                  <li key={list} className="flex items-center gap-2">
                    <span className="text-cyan-400">✔</span> {list}
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden md:flex justify-center">
               <div className="w-64 h-64 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-cyan-400/20 border border-cyan-400/30 animate-pulse"></div>
               </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900">Our Services</h2>
            <p className="text-slate-500 mt-2">Tailored engineering excellence for every requirement</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="group border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-2xl cursor-pointer bg-white transition-all"
                onClick={() => setSelectedService(service.name)}
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 text-blue-600 font-semibold text-sm flex items-center gap-2">
                  Enquire Now <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* MODAL */}
        <AnimatePresence>
          {selectedService && (
            <EnquiryForm
              service={selectedService}
              onClose={() => setSelectedService(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}