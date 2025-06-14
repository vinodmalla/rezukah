import React from 'react';
import {
  ShieldCheck,
  Cpu,
  Smartphone,
  Search,
  Users,
} from 'lucide-react';

const industries = [
  { name: 'Real Estate', img: '/RealEstate.webp' },
  { name: 'Education', img: '/education.jpeg' },
  { name: 'Healthcare', img: '/healthcare.webp' },
  { name: 'Finance', img: '/Finance.jpeg' },
  { name: 'Retail', img: '/Retail.jpeg' },
  //{ name: 'Non-profits', img: 'https://source.unsplash.com/100x100/?nonprofit' },
];

const partnerBenefits = [
  { icon: <ShieldCheck className="text-teal-500 w-26 h-26" />, title: 'Custom-Built Solutions' },
  { icon: <Cpu className="text-teal-500 w-26 h-26" />, title: 'Cutting-Edge Tech' },
  { icon: <Smartphone className="text-teal-500 w-26 h-26" />, title: 'Responsive Design' },
  { icon: <Search className="text-teal-500 w-26 h-26" />, title: 'SEO Optimized' },
  { icon: <Users className="text-teal-500 w-26 h-26" />, title: 'Client-Centric Approach' },
];

const services = [
  {
    title: 'Custom Website Development',
    description: 'Crafting fast, responsive, and SEO-optimized websites tailored to your brand, from sleek informational pages to dynamic portals that drive engagement.',
    img: '/CWD.webp',
  },
  {
    title: 'Web Application Development',
    description: 'Building scalable, high-performance web apps using React, Angular, Node.js, and Django to solve business challenges and boost productivity.',
    img: '/WAD.jpeg',
  },
  {
    title: 'E-commerce Development',
    description: 'Creating secure, user-friendly e-commerce platforms with Shopify, WooCommerce, Magento, or custom solutions to elevate your online sales.',
    img: 'E-commerce Development.jpeg',
  },
  {
    title: 'CMS Development',
    description: 'Empowering you with intuitive CMS solutions like WordPress, Drupal, or headless CMS for seamless content management.',
    img: '/CMS Development.jpeg',
  },
  {
    title: 'Progressive Web Apps (PWAs)',
    description: 'Delivering fast, reliable PWAs that blend web reach with native app performance, even in offline or low-network scenarios.',
    img: 'Progressive Web Apps (PWAs).jpeg',
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive, visually stunning interfaces that enhance user satisfaction and retention through exceptional UX/UI practices.',
    img: '/UIUX.jpeg',
  },
  {
    title: 'Website Maintenance & Support',
    description: 'Providing ongoing support, optimization, updates, and security monitoring to keep your digital presence robust and secure.',
    img: 'website-maintenance.webp',
  },
];

const WebDevServices = () => {
  return (
    <section className="px-4 py-22 sm:px-8 lg:px-16 xl:px-24 bg-gradient-to-br from-indigo-50 via-white to-teal-50 text-gray-900">
      <div className="text-center mb-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-indigo-600 animate-fade-in">
          Web & App Development Services
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto text-gray-600 animate-slide-up">
          Turning your vision into scalable, high-impact digital solutions with world-class design and technology.
        </p>
      </div>

      <div className="grid gap-8 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative flex flex-col bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-teal-100/50"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-94 h-44   border-4 border-teal-200/50 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
            />
            <h2 className="text-xl sm:text-2xl font-bold mb-3 text-center text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
              {service.title}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* WHY PARTNER WITH US */}
      <div className="text-center mt-24 mb-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 animate-slide-up">
          Why Choose Us?
        </h2>
        <p className="text-lg sm:text-xl max-w-4xl mx-auto mb-12 text-gray-600 animate-slide-up delay-100">
          We craft digital experiences that resonate, innovate, and deliver measurable results.
        </p>

        <div className="grid gap-6 max-w-6xl mx-auto sm:grid-cols-2 lg:grid-cols-5">
          {partnerBenefits.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-teal-100/30"
            >
              <div className="mb-4 animate-pulse-on-hover" aria-hidden="true">
                {item.icon}
              </div>
              <p className="text-gray-800 font-semibold text-sm sm:text-base text-center">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* INDUSTRIES WE SERVE */}
      <div className="text-center mb-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 animate-slide-up">
          Industries We Serve
        </h2>
        <p className="text-lg sm:text-xl max-w-4xl mx-auto mb-12 text-gray-600 animate-slide-up delay-100">
          Tailored solutions designed to meet the unique needs of your industry.
        </p>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10">
          {industries.map((industry, i) => (
            <div
              key={i}
              className="flex flex-col items-center w-32 sm:w-36 transform hover:scale-110 transition-all duration-300"
            >
              <img
                src={industry.img}
                alt={industry.name}
                className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-full border-4 border-teal-200/50 shadow-md hover:shadow-lg transition-shadow duration-300"
              />
              <span className="mt-4 text-sm sm:text-base font-semibold text-gray-800">
                {industry.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes pulse-on-hover {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        .animate-pulse-on-hover:hover {
          animation: pulse-on-hover 0.6s ease-in-out;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
      `}</style>
    </section>
  );
};

export default WebDevServices;