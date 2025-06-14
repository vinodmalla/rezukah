import React from 'react';
import {
  Brush,
  Smartphone,
  Map,
  MousePointerClick,
  Palette,
  Users,
  MonitorSmartphone,
  CheckCircle,
  Clock,
  Share2,
  FileText,
} from 'lucide-react';

const industries = [
  { name: 'E-commerce', img: '/E-commerce.jpeg' },
  { name: 'Healthcare', img: '/healthcare.webp' },
  { name: 'Education', img: '/education.jpeg' },
  { name: 'Real Estate', img: 'RealEstate.webp' },
  { name: 'Finance', img: '/Finance.jpeg' },
  { name: 'Technology', img: '/Technology.jpeg' },
];

const partnerBenefits = [
  { icon: <CheckCircle className="text-teal-500 w-26 h-26" />, title: 'Creative Meets Strategic' },
  { icon: <MonitorSmartphone className="text-teal-500 w-26 h-26" />, title: 'Pixel-Perfect for All Screens' },
  { icon: <Users className="text-teal-500 w-26 h-26" />, title: 'User-Centric Approach' },
  { icon: <Palette className="text-teal-500 w-26 h-26" />, title: 'Consistent Brand Storytelling' },
  { icon: <Clock className="text-teal-500 w-26 h-26" />, title: 'Fast Turnaround & Quality' },
];

const services = [
  {
    title: 'Logo & Brand Identity Design',
    description: 'Crafting unique logos and cohesive brand identities that reflect your vision and resonate with your audience, ensuring a memorable first impression.',
    img: 'Logo & Brand Identity Design.jpeg',
    icon: <Brush className="text-teal-500 w-8 h-8" />,
  },
  {
    title: 'Social Media Graphics',
    description: 'Creating eye-catching graphics for platforms like Instagram, Facebook, and LinkedIn to boost engagement and strengthen your social presence.',
    img: '/Social Media Graphics.jpeg',
    icon: <Share2 className="text-teal-500 w-8 h-8" />,
  },
  {
    title: 'Infographics & Visual Content',
    description: 'Designing compelling infographics and visual assets that simplify complex information and align with your brand’s storytelling strategy.',
    img: '/Infographics & Visual Content.png',
    icon: <FileText className="text-teal-500 w-8 h-8" />,
  },
  {
    title: 'Digital Ads & Banners',
    description: 'Producing high-impact ad creatives and banners that capture attention and drive clicks across digital platforms.',
    img: '/Digital Ads & Banners.webp',
    icon: <MonitorSmartphone className="text-teal-500 w-8 h-8" />,
  },
  {
    title: 'Wireframing & Prototyping',
    description: 'Building detailed wireframes and interactive prototypes to map out user flows and validate design concepts before development.',
    img: '/Wireframing & Prototyping.png',
    icon: <Map className="text-teal-500 w-8 h-8" />,
  },
  {
    title: 'Web & Mobile App UI Design',
    description: 'Designing intuitive and visually stunning interfaces for web and mobile apps that prioritize user experience and engagement.',
    img: 'Web & Mobile App UI Design.png',
    icon: <Smartphone className="text-teal-500 w-8 h-8" />,
  },
  {
    title: 'User Flow & Journey Mapping',
    description: 'Mapping out user journeys to create seamless, intuitive experiences that guide users toward their goals with ease.',
    img: '/User Flow & Journey Mapping.png',
    icon: <Map className="text-teal-500 w-8 h-8" />,
  },
  {
    title: 'Interaction Design',
    description: 'Crafting dynamic, interactive elements that enhance usability and make digital experiences feel engaging and responsive.',
    img: '/Interaction Design.avif',
    icon: <MousePointerClick className="text-teal-500 w-8 h-8" />,
  },
  {
    title: 'Design Systems & Style Guides',
    description: 'Developing consistent design systems and style guides to ensure cohesive visuals and streamlined development across platforms.',
    img: 'Design Systems & Style Guides.png',
    icon: <Palette className="text-teal-500 w-8 h-8" />,
  },
  {
    title: 'Usability Testing & Iteration',
    description: 'Conducting thorough usability testing to refine designs, ensuring they are intuitive, accessible, and user-friendly.',
    img: '/Usability Testing & Iteration.png',
    icon: <CheckCircle className="text-teal-500 w-8 h-8" />,
  },
  {
    title: 'Responsive Design Across Devices',
    description: 'Creating designs that adapt seamlessly to all screen sizes, from mobile to desktop, for a consistent and optimal user experience.',
    img: '/Responsive Design Across Devices.jpeg',
    icon: <MonitorSmartphone className="text-teal-500 w-8 h-8" />,
  },
];

const GraphicAndUIUXServices = () => {
  return (
    <section className="px-4 py-20 sm:px-8 lg:px-16 xl:px-24 bg-gradient-to-br from-indigo-50 via-white to-teal-50 text-gray-900">
      <div className="text-center mb-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-indigo-600 animate-fade-in">
          Graphic Design & UI/UX Design Services
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto text-gray-600 animate-slide-up">
          Design That Captures Attention. Experiences That Keep Users Coming Back.
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
          We craft designs that resonate, engage, and deliver measurable results.
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
          Tailored design solutions crafted to meet the unique needs of your industry.
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

export default GraphicAndUIUXServices;