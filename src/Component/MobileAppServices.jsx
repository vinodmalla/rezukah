import React from 'react';
import {
  ShieldCheck,
  Smartphone,
  Code,
  Eye,
  CheckCircle,
  Users,
} from 'lucide-react';

const industries = [
  { name: 'Healthcare', img: '/healthcare.webp' },
  { name: 'E-commerce', img: '/E-commerce.jpeg' },
  { name: 'Education', img: '/education.jpeg' },
  { name: 'Travel & Hospitality', img: '/Travel & Hospitality.png' },
  { name: 'Finance', img: '/Finance.jpeg' },
  { name: 'Logistics', img: '/Logistics.jpeg' },
];

const partnerBenefits = [
  { icon: <ShieldCheck className="text-teal-500 w-26 h-26" />, title: 'End-to-End Development' },
  { icon: <Code className="text-teal-500 w-26 h-26" />, title: 'Experienced Developers' },
  { icon: <Smartphone className="text-teal-500 w-26 h-26" />, title: 'Agile Methodology' },
  { icon: <Eye className="text-teal-500 w-26 h-26" />, title: 'Security First' },
  { icon: <Users className="text-teal-500 w-26 h-26" />, title: 'Client-Centric Approach' },
];

const services = [
  {
    title: 'Custom Mobile App Development',
    description: 'We build tailor-made mobile apps that align with your business objectives. Whether you need a consumer-facing app or an enterprise-grade solution, our development process ensures your app is robust, scalable, and aligned with your brand vision.',
    img: '/Custom Mobile App Development.jpeg',
  },
  {
    title: 'iOS & Android App Development',
    description: 'Our team leverages native technologies to create seamless experiences on both iOS and Android platforms. We ensure platform-specific optimization to deliver fast, secure, and reliable mobile applications.',
    img: '/iOS & Android App Development.jpeg',
  },
  {
    title: 'Cross-Platform App Development',
    description: 'Using frameworks like Flutter and React Native, we develop cross-platform apps that work flawlessly across devices—cutting down development time and cost while maintaining performance.',
    img: '/Cross-Platform App Development.jpeg',
  },
  {
    title: 'UI/UX Design for Mobile',
    description: 'Design is at the heart of every app we create. Our UI/UX experts ensure intuitive navigation, engaging interfaces, and user-first experiences that keep your audience coming back.',
    img: '/UIUX Design for Mobile.png',
  },
  {
    title: 'Mobile App Testing & QA',
    description: 'We perform rigorous testing across devices and platforms to ensure your app is bug-free, responsive, and performs under real-world conditions.',
    img: '/Mobile App Testing & QA.jpg',
  },
  {
    title: 'App Maintenance & Support',
    description: 'We don’t stop at deployment. Our dedicated support team offers continuous monitoring, updates, and feature enhancements to keep your app relevant and efficient.',
    img: '/App Maintenance & Support.jpeg',
  },
];

const MobileAppServices = () => {
  return (
    <section className="px-4 py-20 sm:px-8 lg:px-16 xl:px-24 bg-gradient-to-br from-indigo-50 via-white to-teal-50 text-gray-900">
      <div className="text-center mb-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-indigo-600 animate-fade-in">
          Mobile Application Development Services
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto text-gray-600 animate-slide-up">
          Empowering Your Business with Innovative Mobile Solutions
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
              className="w-94 h-44  border-4 border-teal-200/50 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
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

      {/* WHY CHOOSE US */}
      <div className="text-center mt-24 mb-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 animate-slide-up">
          Why Choose Us?
        </h2>
        <p className="text-lg sm:text-xl max-w-4xl mx-auto mb-12 text-gray-600 animate-slide-up delay-100">
          We craft mobile experiences that resonate, innovate, and deliver measurable results.
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
          Tailored mobile solutions designed to meet the unique needs of your industry.
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

      <style >{`
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

export default MobileAppServices;