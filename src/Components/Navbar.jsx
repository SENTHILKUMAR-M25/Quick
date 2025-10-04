import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";

const PRODUCT_CATEGORIES = [
    "Anchor",
    "Fasteners",
    "Fittings",
    "Nut",
    "Screw",
    "Washer",
    "Pipe Support or Conduit Accessories",
    "Unistruct Accessories",
    "General Items",
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [prodOpen, setProdOpen] = useState(false);
    const dropdownRef = useRef();

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setProdOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="w-full bg-white shadow sticky top-0 z-50">
            {/* Desktop Top Strip */}
            <div className="bg-gray-50 text-sm text-gray-700 hidden lg:block">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
                    <span className="font-medium text-gray-800">
                        ISO 9001:2015 Certified Company
                    </span>
                    <div className="flex items-center gap-4">
                        <a href="tel:+96523925736" className="hover:underline">
                            (+965) 23925736
                        </a>
                        <a href="mailto:info@kuwaitindo.com" className="hover:underline">
                            info@kuwaitindo.com
                        </a>
                    </div>
                </div>
            </div>

            {/* Desktop Logo & Certification Section */}
            <div className="w-full bg-white shadow-sm hidden lg:block">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between py-4 px-6">
                    {/* Logo & Company Name */}
                    <div className="flex flex-col items-center text-center lg:text-left lg:flex-row lg:items-center lg:space-x-4">
                        <img src={logo} alt="Logo" className="h-12 w-auto" />
                        <div>
                            <h1 className="text-xl font-bold text-red-600">
                                Kuwait Indo General Trading Co. W.L.L.
                            </h1>
                            <span className="text-sm text-gray-600">
                                شركة كويت اندو للتجارة العامة (ذ. م. م)
                            </span>
                        </div>
                    </div>
                    {/* Certification Logos */}
                    <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                        <img src="/iso.png" alt="ISO" className="h-12" />
                        <img src="/ias.png" alt="IAS" className="h-12" />
                        <img src="/iaf.png" alt="IAF" className="h-12" />
                        <img src="/bqc.png" alt="BQC" className="h-12" />
                    </div>
                </div>
            </div>

            {/* Main nav */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between  items-center py-4">
                    {/* Logo for Mobile & Small Desktop */}
                    <Link to="/" className="flex items-center gap-3 lg:hidden">
                        <div className="h-10 w-10 bg-gray-200 rounded flex items-center justify-center">
                            <img src={logo} alt="Kuwait Indo" className="h-8 w-8 object-contain" />
                        </div>
                        <span className="font-semibold text-lg text-gray-900">Kuwait Indo</span>
                    </Link>

                    {/* Desktop menu */}
                    <nav className="hidden w-full lg:flex justify-center items-center gap-12 bg-red-500 px-4 py-2 relative">
                        <Link
                            to="/"
                            className="py-2 text-white hover:text-blue-200 transition font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            to="/About"
                            className="py-2 text-white hover:text-blue-200 transition font-medium"
                        >
                            About Us
                        </Link>

                        {/* Products dropdown */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setProdOpen(!prodOpen)}
                                className="inline-flex items-center gap-1 py-2 text-white hover:text-blue-200 transition font-medium"
                            >
                                Products <ChevronDown size={16} />
                            </button>
                            {prodOpen && (
                                <div className="absolute top-full left-0 mt-2 bg-white border rounded shadow-lg w-64 z-50">
                                    {PRODUCT_CATEGORIES.map((cat) => (
                                        <Link
                                            key={cat}
                                            to={`/products/${slugify(cat)}`}
                                            className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                                            onClick={() => setProdOpen(false)}
                                        >
                                            {cat}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link
                            to="/services"
                            className="py-2 text-white hover:text-blue-200 transition font-medium"
                        >
                            Services
                        </Link>
                        <Link
                            to="/certificates"
                            className="py-2 text-white hover:text-blue-200 transition font-medium"
                        >
                            Certificates
                        </Link>
                        <Link
                            to="/contact"
                            className="py-2 text-white hover:text-blue-200 transition font-medium"
                        >
                            Contact Us
                        </Link>
                    </nav>


                    {/* Mobile toggle */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setMobileOpen((v) => !v)}
                            aria-label="Toggle menu"
                            className="p-2 rounded-md border"
                        >
                            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="lg:hidden border-t bg-white z-40">
                    {/* Top strip for mobile */}
                    <div className="px-4 py-2 border-b">
                        <span className="block text-sm font-medium text-gray-800 mb-1">
                            ISO 9001:2015 Certified Company
                        </span>
                        <a href="tel:+96523925736" className="block hover:underline">
                            (+965) 23925736
                        </a>
                        <a href="mailto:info@kuwaitindo.com" className="block hover:underline">
                            info@kuwaitindo.com
                        </a>
                    </div>

                    {/* Logo & Company Name for mobile */}
                    <div className="px-4 py-4 border-b flex flex-col items-center">
                        <img src="/logo.png" alt="Logo" className="h-12 mb-2" />
                        <h1 className="text-lg font-bold text-red-600 text-center">
                            Kuwait Indo General Trading Co. W.L.L.
                        </h1>
                        <span className="text-sm text-gray-600 text-center">
                            شركة كويت اندو للتجارة العامة (ذ. م. م)
                        </span>
                    </div>

                    {/* Mobile menu links */}
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        <Link to="/" className="block py-2">Home</Link>
                        <Link to="/About" className="block py-2">About Us</Link>

                        {/* Products collapsible */}
                        <div>
                            <button
                                onClick={() => setProdOpen(!prodOpen)}
                                className="flex justify-between w-full py-2"
                            >
                                Products <ChevronDown size={16} />
                            </button>
                            {prodOpen && (
                                <div className="pl-4">
                                    {PRODUCT_CATEGORIES.map((cat) => (
                                        <Link
                                            key={cat}
                                            to={`/products/${slugify(cat)}`}
                                            className="block py-1"
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            {cat}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link to="/services" className="block py-2">Services</Link>
                        <Link to="/certificates" className="block py-2">Certificates</Link>
                        <Link to="/contact-us" className="block py-2">Contact Us</Link>
                    </div>
                </div>
            )}
        </header>
    );
}

// helper to slugify text
function slugify(text) {
    return text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
}
