import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Q Company</h3>
            <p className="text-gray-300 mb-2">Electrical & Sanitary Solutions</p>
            <div className="space-y-1 text-sm">
              <p>Manqaf - Block 4 - Bldg No 54280</p>
              <p>Ground Floor - Office No 26</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-blue-400">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Electrical Wiring & Installations
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Sanitary Ware Installation
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Plots & Villas Extensions
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Maintenance Contracts
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold mb-4 text-blue-400">Contact Us</h4>
            <div className="space-y-3">
              
                
              
                <div className="flex gap-2 items-center "> <FaPhoneAlt /> <p className="font-medium" tel=''>99693670</p></div>
                 <div className="flex gap-2 items-center ">  <FaWhatsapp /> <p className="text-sm text-gray-400">99693671</p>
                </div>
              
              
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                </svg>
                <span className="text-gray-300">qcompany877@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-2 md:mb-0">
            © {new Date().getFullYear()} Q Company. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <span className="text-gray-400 text-sm">Electrical & Sanitary Experts</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;