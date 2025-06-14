import React from 'react';
import {
  ShieldCheck,
  Code,
  Cloud,
  RefreshCw,
  Link,
  Monitor,
  Users,
  Clock,
  CheckCircle,
  Rocket,
} from 'lucide-react';

const industries = [
  { name: 'Manufacturing', img: '/Manufacture.jpg' },
  { name: 'Logistics', img: '/Logistics.jpeg' },
  { name: 'Finance', img: '/Finance.jpeg' },
  { name: 'Healthcare', img: '/healthcare.webp' },
  { name: 'Retail', img: '/Retail.jpeg' },
  { name: 'Education', img: '/education.jpeg' },
];

const partnerBenefits = [
  { icon: <Rocket className="text-teal-500 w-26 h-26" />, title: 'Custom-Fit Solutions' },
  { icon: <Code className="text-teal-500 w-26 h-26" />, title: 'Experienced Developers' },
  { icon: <CheckCircle className="text-teal-500 w-26 h-26" />, title: 'Technology Agnostic' },
  { icon: <Clock className="text-teal-500 w-26 h-26" />, title: 'On-Time Delivery' },
  { icon: <Users className="text-teal-500 w-26 h-26" />, title: 'Post-Launch Support' },
];

const services = [
  {
    title: 'End-to-End Software Development',
    description: 'From ideation to deployment, we manage the entire software development lifecycle. Our team works closely with you to understand your goals, define requirements, and deliver tailor-made solutions that solve real-world challenges.',
    img: '/End-to-End Software Development.webp',
    icon: <Code className="text-teal-500 w-8 h-8" />,
  },
  {
    title: 'Enterprise Software Solutions',
    description: 'We develop powerful, scalable software for large enterprises that enhance operations, improve workflow efficiency, and support digital transformation across departments.',
    img: '/Enterprise Software Solutions.webp',
    icon: <Cloud className="text-teal-500 w-8 h-8" />,
  },
  {
    title: 'SaaS Application Development',
    description: 'Looking to launch a cloud-based product? We design and build Software-as-a-Service (SaaS) platforms that are secure, user-friendly, and built to scale with your customer base.',
    img: '/SaaS Application Development.jpeg',
    icon: <ShieldCheck className="text-teal-500 w-8 h-8" />,
  },
  {
    title: 'Legacy System Modernization',
    description: 'Revitalize outdated systems with modern technologies. We help businesses upgrade legacy applications, improve performance, and reduce technical debt without disrupting operations.',
    img: '/Legacy System Modernization.jpg',
    icon: <RefreshCw className="text-teal-500 w-8 h-8" />,
  },
  {
    title: 'System Integration Services',
    description: 'Our custom solutions ensure seamless integration with your existing tools, platforms, and databases—helping you maximize the value of your technology ecosystem.',
    img: '/System Integration Services.jpeg',
    icon: <Link className="text-teal-500 w-8 h-8" />,
  },
  {
    title: 'Cross-Platform Desktop Applications',
    description: 'We build cross-platform desktop apps that perform reliably on Windows, macOS, and Linux using modern frameworks like Electron, .NET, or Java.',
    img: '/Cross-Platform Desktop Applications.jpg',
    icon: <Monitor className="text-teal-500 w-8 h-8" />,
  },
];

const CustomSoftwareServices = () => {
  return (
    <section className="px-4 py-20 sm:px-8 lg:px-16 xl:px-24 bg-gradient-to-br from-indigo-50 via-white to-teal-50 text-gray-900">
      <div className="text-center mb-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-indigo-600 animate-fade-in">
          Custom Software Development Services
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto text-gray-600 animate-slide-up">
          Tailored Software Solutions That Drive Business Success
        </p>
      </div>

      <div className="grid gap-8 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative flex flex-col bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-teal-100/50"
          >
            <div className="flex justify-center mb-4">
              <img
                src={service.img}
                alt={service.title}
                className="w-94 h-44  border-4 border-teal-200/50 group-hover:scale-110 transition-transform duration-300"
              />
              
            </div>
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
          We craft software solutions that innovate, scale, and deliver measurable results.
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
          Tailored software solutions designed to meet the unique needs of your industry.
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

export default CustomSoftwareServices;