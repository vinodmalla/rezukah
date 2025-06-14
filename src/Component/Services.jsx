import React from 'react'
import { Link } from 'react-router'

export default function Services() {
    const services=[
        {
            title:"Web application development ",
            discription:"At Rezukah, we design and develop dynamic websites and powerful web applications tailored to meet your business goals. Whether you need a high-performing website to establish your online presence or a custom web app to streamline business operations, we deliver secure, scalable, and engaging digital experiences.",
            image:"/web.png",
            link:"/web"
        },{
            title:"Mobile apps development ",
            discription:"In today’s digital-first world, mobile apps are no longer optional—they are essential. At Rezukah, we specialize in crafting high-performance, user-centric mobile applications that help businesses engage users, streamline operations, and scale new heights in digital transformation.",
            image:"/mobile.jpg",
            link:"/mobile"
        },{
            title:"Custom software development ",
            discription:"At Rezukah, we specialize in building custom software solutions that are perfectly aligned with your unique business needs. Whether you're looking to automate processes, integrate systems, or create entirely new digital experiences, our team delivers reliable, scalable, and future-ready software that empowers growth.",
            image:"/csd.png",
            link:"/csd"

        },{
            title:"ERP/CRM development",
            discription:"At Rezukah, we specialize in developing sophisticated business applications that address the unique operational challenges of modern enterprises. Our custom-built software is designed to support complex workflows, streamlin decision-making, and integrate seamlessly across departments—empowering businesses to operate more efficiently, intelligently, and at scale.",
            image:"/crm.jpg",
            link:"/crm"
        },{
            title:"Digital Marketing Services",
            discription:"In a digital world that never sleeps, your business needs more than just an online presence—it needs a powerful strategy to stand out, engage, and convert. At Rezukah, we offer comprehensive digital marketing services tailored to put your brand in front of the right audience at the right time.",
            image:"/digital.jpg",
            link:"/digital"
        },{
            title:"Graphic Design & UI/UX Design",
            discription:"At Rezukah, we believe design is more than just aesthetics—it’s about creating intuitive, engaging, and impactful experiences. Whether you need standout visual assets or seamless digital interfaces, our team of expert graphic and UI/UX designers delivers creative solutions that resonate with your audience and elevate your brand.",
            image:"/Ux.jpg",
            link:"/graphics"
        }
    ]

  return (
    <div>
    <div className="py-12 mt-14 px-6 text-center bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Join Our Team – Where Innovation Meets Impact in Every Service</h1>
        <p className="text-lg text-gray-600 max-w-4xl md:max-w-6xl mx-auto">At Rezukah, we’re not just building technology—we’re transforming businesses. From web application development and mobile app development to custom software, ERP/CRM solutions, and digital marketing, we empower our clients to thrive in the digital age.<br/>
        When you join Rezukah, you’re not just taking a job; you’re stepping into a culture that values creativity, collaboration, and continuous learning. Here, you’ll have the opportunity to innovate, grow, and make a real difference in shaping the digital future.<br/>
        Together, we build solutions that revolutionize industries, enhance customer experiences, and drive success. Join us and be part of a team where your ideas and skills turn visions into reality.</p>
      </div>
      <div className="py-4 mt-8 px-2 text-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Services</h2>
      </div>
      <div className="grid grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-8">
        {services.map((service,index)=>(
            <div key={index} className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition duration-300">
        <img src={service.image} alt={service.title} className="w-108 md:w-full h-56 md:h-76 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-600 mb-4">
            {service.discription}
          </p>
          <Link
            to={service.link} aria-label={`Read More about ${service.title}`}
            className="inline-block px-4 py-2 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition"
          >
            Read More
          </Link>
        </div>
      </div>
        ))}
      </div>
      
    </div>
  )
}
