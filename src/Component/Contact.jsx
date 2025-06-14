import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic (e.g., API call)
    setFormStatus('Message sent successfully!');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setFormStatus(''), 3000);
  };

  return (
    <section className="bg-gray-50 py-20 md:py-20 w-full">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-calibri">
            Get in Touch
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-calibri">
            We’d love to hear from you! Whether you have a project in mind or just want to connect, reach out to us today.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 font-calibri">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4" role="form" aria-label="Contact form">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 font-calibri">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#fb9511] focus:border-[#fb9511] text-sm font-calibri"
                  placeholder="Your Name"
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-calibri">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#fb9511] focus:border-[#fb9511] text-sm font-calibri"
                  placeholder="Your Email"
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 font-calibri">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#fb9511] focus:border-[#fb9511] text-sm font-calibri"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 font-calibri">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#fb9511] focus:border-[#fb9511] text-sm font-calibri"
                  placeholder="Your Message"
                  aria-required="true"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-800 transition duration-300 font-calibri"
                aria-label="Submit contact form"
              >
                Send Message
              </button>
              {formStatus && (
                <p className="text-sm text-green-600 text-center font-calibri" role="alert">
                  {formStatus}
                </p>
              )}
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="bg-gray-900 text-white  p-6 md:p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-6 font-calibri">Contact Information</h2>
            <ul className="space-y-4  text-sm font-calibri">
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#fb9511]" aria-hidden="true" />
                <a
                  href="tel:+918340039341"
                  className="hover:text-[#fb9511] transition duration-300"
                  aria-label="Call +918340039341"
                >
                 +91-8340039341
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#fb9511]" aria-hidden="true" />
                <a
                  href="mailto:info@rezukah.com"
                  className="hover:text-[#fb9511] transition duration-300"
                  aria-label="Send email to info@rezukah.com"
                >
                  info@rezukah.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#fb9511]" aria-hidden="true" />
                <span>123 Innovation St, Tech City, TX 75001</span>
              </li>
            </ul>
            <h3 className="text-lg font-semibold mt-8 mb-4 font-calibri">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#fb9511] transition duration-300"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#fb9511] transition duration-300"
                aria-label="Visit our Twitter page"
              >
                <Twitter className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#fb9511] transition duration-300"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#fb9511] transition duration-300"
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .font-calibri {
          font-family: 'Calibri', sans-serif;
        }
      `}</style>
    </section>
  );
};

export default Contact;