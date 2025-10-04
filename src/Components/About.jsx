// src/components/AboutSection.jsx
export default function AboutSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://picsum.photos/id/1019/600/400"
          alt="About Kuwait Indo"
          className="rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Kuwait Indo Trading & Contracting Co. W.L.L is a leading supplier of
            industrial materials in Kuwait, providing fasteners, fittings, and
            mechanical products to multiple industries. With years of experience
            and ISO 9001:2015 certification, we ensure quality and reliability.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to deliver on-time services, maintain customer
            satisfaction, and continue being the most trusted partner for
            industrial solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
