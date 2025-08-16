import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <header className="text-center p-8 bg-blue-100">
        <h2 className="text-3xl font-bold text-blue-900">Contact Us</h2>
        <p className="text-gray-600 mt-2">We’d love to hear from you! Reach out with any questions or inquiries.</p>
      </header>
      <div className="container mx-auto flex gap-8 p-4 max-lg:flex-col">
        <div className="flex-1 bg-white p-6 rounded-lg shadow">
          <div>
            <label className="block font-bold mb-1">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <label className="block font-bold mb-1">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <label className="block font-bold mb-1">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              required
              className="w-full p-2 border border-gray-300 rounded mb-4 h-32"
            ></textarea>
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition-colors"
            >
              Send Message
            </button>
          </div>
        </div>
        <aside className="w-1/3 max-lg:w-full bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Our Contact Info</h3>
          <p><strong>Phone:</strong> 0312-xxxxxxx</p>
          <p><strong>Email:</strong> info@talhadoors.com</p>
          <p><strong>Address:</strong> 123 Main Street, Haripur, Pakistan</p>
        </aside>
      </div>
    </div>
  );
}

export default Contact;