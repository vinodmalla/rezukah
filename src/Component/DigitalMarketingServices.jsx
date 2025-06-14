import React from 'react';
import {
  Search,
  DollarSign,
  Share2,
  FileText,
  Mail,
  Star,
  BarChart2,
  CheckCircle,
  Users,
  Target,
  MessageSquare,
} from 'lucide-react';

const industries = [
  { name: 'E-commerce', img: '/E-commerce.jpeg' },
  { name: 'Healthcare', img: '/healthcare.webp' },
  { name: 'Education', img: '/education.jpeg' },
  { name: 'Real Estate', img: '/RealEstate.webp' },
  { name: 'Finance', img: '/Finance.jpeg' },
  { name: 'Technology', img: '/Technology.jpeg' },
];

const partnerBenefits = [
  { icon: <Target className="text-teal-500 w-26 h-26" />, title: 'Customized Strategies' },
  { icon: <Users className="text-teal-500 w-26 h-26" />, title: 'Experienced Team' },
  { icon: <CheckCircle className="text-teal-500 w-26 h-26" />, title: 'Full-Funnel Focus' },
  { icon: <MessageSquare className="text-teal-500 w-26 h-26" />, title: 'Transparent Communication' },
  { icon: <BarChart2 className="text-teal-500 w-26 h-26" />, title: 'Proven Results' },
];

const services = [
  {
    title: 'Search Engine Optimization (SEO)',
    description: 'Climb to the top of search engine results with on-page, off-page, and technical SEO. We optimize your content, structure, and site performance to boost organic visibility and bring in high-quality traffic.',
    img: '/Search Engine Optimization (SEO).jpeg',
    icon: <Search className="text-teal-500 w-8 h-8" />,
  },
  {
    title: 'Pay-Per-Click Advertising (PPC)',
    description: 'Maximize your ROI with carefully crafted PPC campaigns on Google, Bing, and social platforms. We manage every detail—from keyword research and ad creation to A/B testing and budget optimization.',
    img: '/Pay-Per-Click Advertising (PPC).jpeg',
    icon: <DollarSign className="text-teal-500 w-8 h-8" />,
  },
  {
    title: 'Social Media Marketing (SMM)',
    description: 'Build lasting relationships with your audience on platforms like Facebook, Instagram, LinkedIn, and Twitter. Our team creates engaging content, manages your community, and runs targeted ads that drive awareness and action.',
    img: '/Social Media Marketing (SMM).jpeg',
    icon: <Share2 className="text-teal-500 w-8 h-8" />,
  },
  {
    title: 'Content Marketing',
    description: 'Great content tells your story, builds trust, and drives action. We develop blogs, articles, infographics, videos, and more to support SEO, social, and email strategies—all aligned with your brand voice.',
    img: '/Content Marketing.jpeg',
    icon: <FileText className="text-teal-500 w-8 h-8" />,
  },
  {
    title: 'Email Marketing & Automation',
    description: 'From nurturing leads to retaining customers, our personalized email campaigns are designed to inform, engage, and convert. We use automation tools to deliver the right message at the right time.',
    img: '/Email Marketing & Automation.jpeg',
    icon: <Mail className="text-teal-500 w-8 h-8" />,
  },
  {
    title: 'Online Reputation Management',
    description: 'What people say about you online matters. We monitor reviews, respond strategically, and implement reputation-building practices to enhance your brand’s credibility and trust.',
    img: '/Online Reputation Management.jpeg',
    icon: <Star className="text-teal-500 w-8 h-8" />,
  },
  {
    title: 'Analytics & Reporting',
    description: 'We provide clear, actionable insights into how your campaigns are performing. Track KPIs, user behavior, and ROI with regular reports that empower smarter business decisions.',
    img: '/Analytics & Reporting.jpeg',
    icon: <BarChart2 className="text-teal-500 w-8 h-8" />,
  },
];

const DigitalMarketingServices = () => {
  return (
    <section className="px-4 py-20 sm:px-8 lg:px-16 xl:px-24 bg-gradient-to-br from-indigo-50 via-white to-teal-50 text-gray-900">
      <div className="text-center mb-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-indigo-600 animate-fade-in">
          Digital Marketing Services
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto text-gray-600 animate-slide-up">
          Accelerate Your Business Growth with Strategic Digital Marketing
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
                className="w-94 h-44 border-4 border-teal-200/50 group-hover:scale-110 transition-transform duration-300"
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
          We craft digital marketing campaigns that engage, convert, and deliver measurable results.
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
          Tailored digital marketing strategies designed to meet the unique needs of your industry.
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

export default DigitalMarketingServices;