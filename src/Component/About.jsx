import React from 'react';

const About = () => {
  return (
    <section className="bg-cream py-22 px-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">About Us</h2>
        <p className="text-lg md:text-xl text-navy max-w-2xl mx-auto">
          At Rezukah, we don’t just follow digital trends — we create them.
        </p>
      </div>

      {/* Section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
        <div className="rounded-lg overflow-hidden md:mx-auto max-h-64 md:max-h-72">
          <img
            src="/image1.jpg"
            alt="Young professional analyzing data with charts on a laptop"
            className="object-cover w-90 h-96"
          />
        </div>
        <div className="flex flex-col justify-center text-navy">
          <p className="leading-relaxed mb-4">
            As a full-spectrum digital marketing agency, we empower businesses to thrive in the digital age
            through cutting-edge solutions and forward-thinking strategies. Our expertise spans a wide range
            of services:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>AI-driven marketing</li>
            <li>Website development</li>
            <li>Content creation & graphic design</li>
            <li>Machine learning & eCommerce development</li>
            <li>CMS solutions, progressive web apps, and UI design</li>
          </ul>
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
        <div className="rounded-lg overflow-hidden md:mx-auto max-h-64 md:max-h-72 md:order-2">
          <img
            src="/image2.jpg"
            alt="Smiling professional representing customer success"
            className="object-cover w-96 h-100"
          />
        </div>
        <div className="flex flex-col justify-center text-navy">
          <p className="leading-relaxed mb-4">
            We believe in innovation with purpose. From building visually stunning websites to crafting
            compelling content and developing intelligent systems, every service we offer is designed to
            elevate your brand and deliver measurable results.
          </p>
          <p className="leading-relaxed">
            Whether you’re a startup aiming to build your digital footprint or an established brand looking
            to scale, Rezukah is your trusted partner for long-term digital success.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="rounded-lg overflow-hidden md:mx-auto max-h-64 md:max-h-72">
          <img
            src="/image3.jpg"
            alt="Team collaborating on a project with digital screens"
            className="object-cover w-96 h-full"
          />
        </div>
        <div className="flex flex-col justify-center text-navy">
          <p className="leading-relaxed mb-4">
            With a dedicated team of strategists, developers, designers, and AI experts, we’re committed to
            providing seamless experiences and ongoing support.
          </p>
          <p className="leading-relaxed">
            Our website maintenance and support services ensure that your digital presence stays sharp,
            secure, and ahead of the competition.
          </p>
        </div>
      </div>

      {/* Additional Related Content */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-navy mb-4">
          Ready to Elevate Your Brand?
        </h3>
        <p className="text-lg text-navy mb-6 max-w-2xl mx-auto">
          Connect with us today to discuss how Rezukah can transform your digital strategy and drive
          sustainable growth for your business.
        </p>
      
      </div>
    </section>
  );
};

export default About;
