// src/components/HeroSlider.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightCircle, ChevronLeft, ChevronRight, Download } from "lucide-react";
import logo from "../assets/logo.webp"
import ContactForm from "./Contact";
const SLIDES = [
  {
    id: 1,
    title: "Promising On Time",
    subtitle: "Quality Service",
    image: "https://picsum.photos/id/1015/1920/800", // replace with real hero images
  },
  {
    id: 2,
    title: "Our Team",
    subtitle: "Strong and Dedicated",
    image: "https://picsum.photos/id/1016/1920/800",
  },
  {
    id: 3,
    title: "Our Mission",
    subtitle: "Excellence in Every Project",
    image: "https://picsum.photos/id/1018/1920/800",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <div>
    <section className="relative w-full h-[80vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={SLIDES[index].id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={SLIDES[index].image}
            alt={SLIDES[index].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {SLIDES[index].title}
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {SLIDES[index].subtitle}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full shadow"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full shadow"
      >
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
    <section className="w-full py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={logo}
            alt="Kuwait Indo Logo"
            className="w-32 h-32 object-contain"
          />
        </div>

        {/* Arabic Title */}
        <h2 className="text-xl font-semibold mb-2">
          شركة كويت اندو للتجارة العامة (ذ.م.م)
        </h2>

        {/* English Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Kuwait Indo General Trading Company W.L.L
        </h1>

        {/* Tagline */}
        <p className="text-red-600 italic text-lg font-serif mb-8">
          “We do!!! Only our Best!!!”
        </p>

        {/* Description */}
        <p className="text-gray-700 text-base leading-relaxed mb-6">
          Kuwait Indo was established in 2007 and is actively engaged in the
          field of Oil and Gas sector, General Trading, Recruitment services,
          Facilities Management, Medical and Health Care Services, Safety
          Training policy and Development, Civil works and Electromechanical
          works, Dealership of all kinds of hardware, pipe fittings and any
          kinds of Industrial materials, Water and Waste Water treatment, Solar
          Panels. In electrical industrial field, we provide low voltage cables,
          high voltage cables and all other electrical fittings. Our Company is
          engaged in rendering executive search services and provide manpower in
          the most effective and efficient manner.
        </p>

        <p className="text-gray-700 text-base leading-relaxed">
          Kuwait Indo is an ISO 9001:2015 certified company and registered in
          KOC E-Business vendor list. We are an approved contractor for various
          activities in the Kuwait Government, Health sector and various private
          sector companies in Kuwait.
        </p>
      </div>
    </section>
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-800">
        
        {/* Our Mission */}
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Our mission is to build on our reputation for integrity, excellence, experience and leadership.</li>
            <li>Continuously improving the quality of works and services.</li>
            <li>Continuously striving to exceed the client’s expectations.</li>
            <li>Maintaining our dedications to the highest moral principles.</li>
            <li>Providing our people with a challenging, secure and safe environment in which they can achieve personal career goals.</li>
          </ul>
          <button className="mt-6 inline-flex items-center justify-center bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600 transition">
            <ArrowRightCircle className="mr-2" size={18} />
            About Us
          </button>
        </div>

        {/* Our Values */}
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Our Values</h2>
          <p className="text-gray-700 leading-relaxed">
            We aim to make sure that the expectations of the client, engineer and all stakeholders are fully complied with and that projects are delivered with a high standard of workmanship in a timely manner. We always use products and materials that meet or exceed the requirements of the contract documents and ensure our staff are adequately trained.
          </p>
          <button className="mt-6 inline-flex items-center justify-center bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600 transition">
            <Download className="mr-2" size={18} />
            Company Profile
          </button>
        </div>

        {/* Our Promises */}
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Our Promises</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>We demand excellence, deliver on our promises and continuously search for new and better ways to provide the best solutions for our customers and all stakeholders.</li>
            <li>To foster continuous improvement through teamwork and integrity while seeing new standards for quality.</li>
            <li>Satisfaction of our clients which is important to us for future business relations.</li>
            <li>To create a strong long term business bond with our valued client.</li>
          </ul>
          <button className="mt-6 inline-flex items-center justify-center bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600 transition">
            <Download className="mr-2" size={18} />
            Medical Profile
          </button>
        </div>
      </div>
    </section>
    <ContactForm />
    </div>
  );
}
