import React from 'react';
import { assets, testimonialsData } from '../assets/assets';
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container w-full py-10 mx-auto overflow-hidden lg:px-32"
      id="Testimonials"
    >
      <h1 className="mb-2 text-2xl font-bold text-center sm:text-4xl">
        What Our{' '}
        <span className="font-light underline underline-offset-4 decoration-1">
          Clients Say
        </span>
      </h1>
      <p className="mx-auto mb-12 text-center text-gray-500 max-w-80">
        Hear directly from our satisfied clients who found their dream properties with Wande Realty.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-[340px] border shadow-lg rounded-lg px-8 py-12 text-center hover:shadow-xl transition-shadow"
          >
            {/* Enhanced Profile Image */}
            <div className="relative w-24 h-24 mx-auto mb-4 overflow-hidden border-4 border-gray-300 rounded-full shadow-lg">
              <img
                className="object-cover w-full h-full"
                src={testimonial.image}
                alt={testimonial.alt}
              />
            </div>

            <h2 className="text-xl font-medium text-gray-700">{testimonial.name}</h2>
            <p className="mb-4 text-sm text-gray-500">{testimonial.title}</p>
            <div className="flex justify-center gap-1 mb-4 text-red-500">
              {Array.from({ length: testimonial.rating }, (item, index) => (
                <img
                  className="w-4 h-4"
                  key={index}
                  src={assets.star}
                  alt="star"
                />
              ))}
            </div>
            <p className="text-gray-600">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
