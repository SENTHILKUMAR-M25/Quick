// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-semibold text-white mb-4">Kuwait Indo</h3>
          <p>
            Supplying industrial products with on-time delivery, quality service,
            and trusted partnerships.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about-us" className="hover:underline">About Us</a></li>
            <li><a href="/products" className="hover:underline">Products</a></li>
            <li><a href="/contact-us" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-4">Contact</h3>
          <p>Phone: (+965) 23925736</p>
          <p>Email: info@kuwaitindo.com</p>
          <p>Kuwait, Industrial Area</p>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Kuwait Indo Trading & Contracting Co. W.L.L
      </div>
    </footer>
  );
}
