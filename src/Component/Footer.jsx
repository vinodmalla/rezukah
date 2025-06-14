import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 md:py-10 w-full">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Company Info */}
        <div className="text-center md:text-left">
          <Link to="/">
            <img src="/Rezukah.png" alt="Rezukah Logo" className="w-56 mx-auto md:mx-0 mb-4" />
          </Link>
          <p className="text-sm text-gray-400 font-calibri">
            Empowering businesses with innovative digital solutions, from web and mobile apps to custom software, ERP/CRM, digital marketing, and UI/UX design.
          </p>
        </div>
        <div className="text-center  md:text-left">
          <h3 className="text-lg font-semibold text-white mb-4 font-calibri">Explore</h3>
          <ul className="space-y-2 text-sm font-calibri text-gray-300">
            <li>
              <Link
                to="/"
                className="hover:text-[#fb9511] transition duration-300"
                aria-label="Go to Home page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-[#fb9511] transition duration-300"
                aria-label="Go to About Us page"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-[#fb9511] transition duration-300"
                aria-label="Go to Services page"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="hover:text-[#fb9511] transition duration-300"
                aria-label="Go to Blogs page"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-[#fb9511] transition duration-300"
                aria-label="Go to Contacts page"
              >
                Contact Us
              </Link>
            </li>
            
          </ul>
        </div>

        {/* Services Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-2 font-calibri">Our Services</h3>
          <ul className="text-sm text-gray-300 space-y-1 font-calibri">
            <li>
              <Link
                to="/web"
                className="hover:text-[#fb9511] transition duration-300"
                aria-label="Go to Web Application Development page"
              >
                Web Application Development
              </Link>
            </li>
            <li>
              <Link
                to="/mobile"
                className="hover:text-[#fb9511] transition duration-300"
                aria-label="Go to Mobile Apps Development page"
              >
                Mobile Apps Development
              </Link>
            </li>
            <li>
              <Link
                to="/csd"
                className="hover:text-[#fb9511] transition duration-300"
                aria-label="Go to Custom Software Development page"
              >
                Custom Software Development
              </Link>
            </li>
            <li>
              <Link
                to="/crm"
                className="hover:text-[#fb9511] transition duration-300"
                aria-label="Go to ERP/CRM Development page"
              >
                ERP/CRM Development
              </Link>
            </li>
            <li>
              <Link
                to="/digital"
                className="hover:text-[#fb9511] transition duration-300"
                aria-label="Go to Digital Marketing Services page"
              >
                Digital Marketing Services
              </Link>
            </li>
            <li>
              <Link
                to="/graphics"
                className="hover:text-[#fb9511] transition duration-300"
                aria-label="Go to Graphic Design & UI/UX Design page"
              >
                Graphic Design & UI/UX Design
              </Link>
            </li>
          </ul>
        </div>

        {/* Industries Links */}
       

        {/* Contact & Social Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-2 font-calibri">Contact Us</h3>
          <p className="flex items-center justify-center md:justify-start text-sm text-gray-300 mb-1 font-calibri">
            <Phone className="h-4 w-4 mr-2 text-[#fb9511]" aria-hidden="true" />
            <a
              href="tel:+918340039341"
              className="hover:text-[#fb9511] transition duration-300"
              aria-label="Call +918340039341"
            >
              +91-8340039341
            </a>
          </p>
          <p className="flex items-center justify-center md:justify-start text-sm text-gray-300 mb-4 font-calibri">
            <Mail className="h-4 w-4 mr-2 text-[#fb9511]" aria-hidden="true" />
            <a
              href="mailto:info@rezukah.com"
              className="hover:text-[#fb9511] transition duration-300"
              aria-label="Send email to info@rezukah.com"
            >
              info@rezukah.com
            </a>
          </p>
          <h3 className="text-lg font-semibold text-white mb-2 font-calibri">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#fb9511] transition duration-300"
              aria-label="Visit our Facebook page"
            >
              <FaFacebook className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#fb9511] transition duration-300"
              aria-label="Visit our Twitter page"
            >
              <RiTwitterXLine className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#fb9511] transition duration-300"
              aria-label="Visit our Instagram page"
            >
              <FaInstagram className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#fb9511] transition duration-300"
              aria-label="Visit our LinkedIn page"
            >
              <CiLinkedin className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500 font-calibri">
        © {new Date().getFullYear()} Rezukah. All rights reserved.
      </div>

      <style>{`
        .font-calibri {
          font-family: 'Calibri', sans-serif;
        }
      `}</style>
    </footer>
  );
};

export default Footer;