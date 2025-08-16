function Services() {
  return (
    <div>
      <header className="text-center p-8 bg-blue-100">
        <h2 className="text-3xl font-bold text-blue-900">Our Services</h2>
        <p className="text-gray-600 mt-2">We offer a range of services to meet your door and hardware needs.</p>
      </header>
      <section className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[
          { title: "Custom Door Design", desc: "Design your dream door with our expert craftsmen and materials." },
          { title: "Installation Services", desc: "Professional installation for all types of doors and hardware." },
          { title: "Repair & Maintenance", desc: "Door repairs, refinishing, and regular maintenance for long-lasting quality." },
          { title: "Consultation", desc: "Expert advice on choosing the best doors, materials, and finishes for your space." }
        ].map(service => (
          <div key={service.title} className="bg-white p-4 rounded-lg shadow hover:-translate-y-2 transform transition-all">
            <h3 className="text-lg font-semibold text-blue-900">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Services;