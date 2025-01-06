import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container flex flex-col items-center justify-center w-full mx-auto overflow-hidden p-14 md:px-20 lg:px-32"
      id="About"
    >
      {/* Title Section */}
      <h1 className="text-3xl font-bold text-center text-gray-800 sm:text-5xl">
        About{" "}
        <span className="underline underline-offset-4 decoration-1">
          Wande Realty
        </span>
      </h1>
      <p className="max-w-2xl mt-4 mb-12 text-center text-gray-600">
        We specialize in connecting you with the right property—whether you're
        buying, renting, or selling, we make real estate easy and accessible.
      </p>

      {/* Services Section */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {/* Service 1: Buy a Home */}
        <div className="relative flex flex-col items-center p-6 text-center transition duration-300 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl group">
          <img
            src={assets.service1}
            alt="Buy a Home"
            className="w-20 h-20 mb-4 rounded-full"
          />
          <h3 className="text-xl font-semibold text-gray-800">Buy a Home</h3>
          <p className="mt-4 text-gray-600">
            Discover thousands of homes for sale tailored to match your
            lifestyle and dreams.
          </p>
          <a
            href="#Properties"
            className="flex items-center mt-4 space-x-1 text-blue-600 group-hover:underline"
          >
            <span>Find a Home</span>
            <span>→</span>
          </a>
          {/* Hover Line */}
          <div className="absolute bottom-0 w-0 h-1 transition-all duration-300 bg-gray-300 left-1/2 group-hover:w-full group-hover:left-0"></div>
        </div>

        {/* Service 2: Rent a Home */}
        <div className="relative flex flex-col items-center p-6 text-center transition duration-300 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl group">
          <img
            src={assets.service2}
            alt="Rent a Home"
            className="w-20 h-20 mb-4 rounded-full"
          />
          <h3 className="text-xl font-semibold text-gray-800">Rent a Home</h3>
          <p className="mt-4 text-gray-600">
            Access the best rental options in Kenya. Let us find your next home
            with ease.
          </p>
          <a
            href="#Properties"
            className="flex items-center mt-4 space-x-1 text-blue-600 group-hover:underline"
          >
            <span>Find a Home</span>
            <span>→</span>
          </a>
          {/* Hover Line */}
          <div className="absolute bottom-0 w-0 h-1 transition-all duration-300 bg-gray-300 left-1/2 group-hover:w-full group-hover:left-0"></div>
        </div>

        {/* Service 3: Sell a Home */}
        <div className="relative flex flex-col items-center p-6 text-center transition duration-300 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl group">
          <img
            src={assets.service3}
            alt="Sell or Rent Your Home with Wande Realty"
            className="w-20 h-20 mb-4 rounded-full"
          />
          <h3 className="text-xl font-semibold text-gray-800">
            Sell or Rent Your Home
          </h3>
          <p className="mt-4 text-gray-600">
            Looking to sell or rent your property in Nairobi or other parts of
            Kenya? At Wande Realty, we ensure your home gets maximum visibility
            with the right audience, delivering a seamless experience from
            listing to closing.
          </p>
          <a
            href="#Contact"
            className="flex items-center mt-4 space-x-1 text-blue-600 group-hover:underline"
            aria-label="Contact Wande Realty to sell or rent your home"
          >
            <span>Get Started</span>
            <span>→</span>
          </a>
          {/* Hover Line */}
          <div className="absolute bottom-0 w-0 h-1 transition-all duration-300 bg-gray-300 left-1/2 group-hover:w-full group-hover:left-0"></div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid w-full grid-cols-1 gap-10 mt-16 text-center text-gray-600 md:grid-cols-4">
        {/* Grid Item 1 */}
        <div>
          <p className="text-4xl font-medium text-gray-800">10+</p>
          <p>Years of Excellence</p>
        </div>
        {/* Grid Item 2 */}
        <div>
          <p className="text-4xl font-medium text-gray-800">15K+</p>
          <p>Happy Clients</p>
        </div>
        {/* Grid Item 3 */}
        <div>
          <p className="text-4xl font-medium text-gray-800">20+</p>
          <p>Properties Delivered</p>
        </div>
        {/* Grid Item 4 */}
        <div>
          <p className="text-4xl font-medium text-gray-800">30+</p>
          <p>Ongoing Projects</p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
