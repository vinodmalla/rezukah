import React from 'react';
import {
  Server,
  Zap,
  BarChart2,
  Layers,
  Lock,
  Users,
  Cloud,
  MessageSquare,
  Eye,
  Cpu,
  CheckCircle,
  TrendingUp,
  AlertTriangle,
} from 'lucide-react';

const industries = [
  { name: 'Manufacturing', img: '/Manufacture.jpg' },
  { name: 'Healthcare', img: '/healthcare.webp' },
  { name: 'Retail', img: '/Retail.jpeg' },
  { name: 'Finance', img: '/Finance.jpeg' },
  { name: 'Logistics', img: '/Logistics.jpeg' },
  { name: 'Education', img: '/education.jpeg' },
];

const partnerBenefits = [
  { icon: <Users className="text-teal-500 w-26 h-26" />, title: 'Client-Centric Approach' },
  { icon: <Cloud className="text-teal-500 w-26 h-26" />, title: 'Advanced Tech Stack' },
  { icon: <Layers className="text-teal-500 w-26 h-26" />, title: 'Scalable & Sustainable' },
  { icon: <Lock className="text-teal-500 w-26 h-26" />, title: 'Data Security First' },
  { icon: <CheckCircle className="text-teal-500 w-26 h-26" />, title: 'Ongoing Support' },
];

const services = [
  {
    title: 'Custom Enterprise Applications',
    description: 'Built from the ground up to align with your business logic, user roles, and process flows.',
    img: '/Custom Enterprise Applications.jpeg',
    icon: <Server className="text-teal-500 w-8 h-8" />,
  },
  {
    title: 'Process Automation Systems',
    description: 'Automate repetitive tasks and workflows to save time, reduce errors, and improve productivity.',
    img: '/Process Automation Systems.jpg',
    icon: <Zap className="text-teal-500 w-8 h-8" />,
  },
  {
    title: 'Data-Driven Dashboards',
    description: 'Centralized reporting and real-time insights that support data-backed business decisions.',
    img: '/Data-Driven Dashboards.jpeg',
    icon: <BarChart2 className="text-teal-500 w-8 h-8" />,
  },
  {
    title: 'Modular and Scalable Architecture',
    description: 'Our solutions grow with your business, making it easy to adapt and expand functionality.',
    img: '/Modular and Scalable Architecture.jpeg',
    icon: <Layers className="text-teal-500 w-8 h-8" />,
  },
  {
    title: 'Secure Integration',
    description: 'Seamlessly connect with your existing systems, databases, or cloud platforms for full digital continuity.',
    img: '/Secure Integration.jpeg',
    icon: <Lock className="text-teal-500 w-8 h-8" />,
  },
  {
    title: 'AI-Powered Analytics',
    description: 'Turn raw data into strategic insights using intelligent pattern recognition.',
    img: '/AI-Powered Analytics.jpeg',
    icon: <Cpu className="text-teal-500 w-8 h-8" />,
  },
  {
    title: 'Natural Language Processing (NLP)',
    description: 'Power chatbots, virtual assistants, and sentiment analysis tools for smarter customer interactions.',
    img: '/Natural Language Processing (NLP).jpeg',
    icon: <MessageSquare className="text-teal-500 w-8 h-8" />,
  },
  {
    title: 'AI in Operations',
    description: 'Automate and optimize supply chains, resource allocation, and process monitoring with AI-driven decision engines.',
    img: '/AI in Operations.jpeg',
    icon: <Zap className="text-teal-500 w-8 h-8" />,
  },
  {
    title: 'Computer Vision',
    description: 'Enable systems to detect, analyze, and interpret visual data across industries like manufacturing, healthcare, and retail.',
    img: '/Computer Vision.jpeg',
    icon: <Eye className="text-teal-500 w-8 h-8" />,
  },
  {
    title: 'Predictive Analytics',
    description: 'Forecast trends, behaviors, and risks to stay ahead of the curve.',
    img: '/Predictive Analytics.jpeg',
    icon: <TrendingUp className="text-teal-500 w-8 h-8" />,
  },
  {
    title: 'Recommendation Engines',
    description: 'Deliver hyper-personalized content, products, or services based on user behavior.',
    img: '/Recommendation Engines.jpeg',
    icon: <Users className="text-teal-500 w-8 h-8" />,
  },
  {
    title: 'Anomaly Detection',
    description: 'Instantly identify irregular patterns or fraud in financial transactions, security systems, and more.',
    img: '/Anomaly Detection.jpeg',
    icon: <AlertTriangle className="text-teal-500 w-8 h-8" />,
  },
  {
    title: 'Custom Model Development',
    description: 'From supervised learning to deep learning, we build models that fit your business goals and dataset complexity.',
    img: 'Custom Model Development.jpeg',
    icon: <Cpu className="text-teal-500 w-8 h-8" />,
  },
];

const ComplexBusinessApps = () => {
  return (
    <section className="px-4 py-20 sm:px-8 lg:px-16 xl:px-24 bg-gradient-to-br from-indigo-50 via-white to-teal-50 text-gray-900">
      <div className="text-center mb-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-indigo-600 animate-fade-in">
          Complex Business Applications
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto text-gray-600 animate-slide-up">
          Powerful Software Solutions for Evolving Business Needs
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
          We craft solutions that innovate, scale, and deliver measurable results.
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

export default ComplexBusinessApps;