

import React from 'react';
import Heading from '../utils/Heading';
import image1 from '../../assets/barber-shaving-contouring-male-customer-s-beard.jpg';
import image2 from '../../assets/beauty-salon-4043096_1280.jpg';
import image3 from '../../assets/staff1.jpg';

const services = [
  {
    title: 'Groom your beard',
    image: image1,
    description: 'Get your beard professionally trimmed and styled by our experts.',
  },
  {
    title: 'Kids haircut',
    image: image2,
    description: 'Fun, safe, and stylish haircuts for kids of all ages.',
  },
  {
    title: 'Hair styling',
    image: image3,
    description: 'Modern and classic hair styles tailored to your look.',
  },
];

function Services() {
  return (
    <section id="services" className="bg-[#222936] py-16 px-4 text-white">
      <Heading heading="Services" />
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#111827] rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${service.image})` }}
            ></div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-yellow-400">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
