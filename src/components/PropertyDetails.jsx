import { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { assets, PropertiesData } from "../assets/assets";
import {
  FaBed,
  FaBath,
  FaCar,
  FaHome,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import PropTypes from "prop-types";

const PropertyDetails = () => {
  const [touchStart, setTouchStart] = useState(0); // initialize touchStart state
  const [touchEnd, setTouchEnd] = useState(0); // initialize touchEnd state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { id } = useParams(); // Get the property ID from the URL
  const property = PropertiesData[id]; // Ensure the ID matches the structure of your PropertiesData
  const navigate = useNavigate(); // Use navigate to go back or forward
  const titleRef = useRef(null);

  if (!property) {
    return (
      <p className="text-xl font-bold text-center text-gray-800">
        Property not found!
      </p>
    );
  }

  const { title, price, location, image, status, features, description } =
    property;
  const { bedrooms, bathrooms, size, parking } = features || {};

  // State to manage the current image in the carousel

  // Carousel controls
  const nextImage = () => {
    if (currentImageIndex < image.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };
  // Handle touch events
  const isMobile = window.innerWidth <= 768; // Mobile check
  const handleTouchStart = (e) =>
    isMobile && setTouchStart(e.touches[0].clientX);
  const handleTouchMove = (e) => isMobile && setTouchEnd(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (!isMobile) return; // Only handle touch on mobile
    const difference = touchStart - touchEnd;
    if (difference > 50) nextImage(); // Swipe Left
    if (difference < -50) prevImage(); // Swipe Right
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Related properties sample data
  const relatedProperties = PropertiesData;
  const scrollToTitle = () => {
    titleRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="container px-8 py-16 mx-auto shadow-lg bg-gradient-to-r from-blue-50 via-blue-100 to-white rounded-xl">
      {/* Back Button */}
      <button
        onClick={() => {
          navigate(-1);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="flex items-center px-6 py-2 mb-8 text-sm font-semibold text-white transition-all transform rounded-lg shadow-lg bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black hover:scale-105"
      >
        <img src={assets.goBack} alt="Go Back Icon" className="w-5 h-5 mr-2" />
        Go Back
      </button>
      {/* Property Title & Image */}

      <h1
        ref={titleRef}
        className="mt-6 text-4xl font-extrabold text-center text-gray-900 md:text-5xl"
      >
        {title}
      </h1>
      <div className="flex flex-col md:flex-row justify-between mt-10">
        {/* Main Image */}
        <div className="relative w-full md:w-1/2 h-96">
          <img
            src={image && image.length > 0 ? image[0] : undefined}
            alt={title}
            className="object-cover w-full h-full mb-6 transition-all transform shadow-xl rounded-xl hover:scale-105"
          />
          <div className="absolute px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg top-4 left-4">
            {price}
          </div>
          <div className="absolute px-4 py-2 text-sm text-white bg-gray-900 rounded-lg bottom-4 left-4">
            {location}
          </div>
        </div>

        {/* Property Details Section */}
        <div className="w-full md:w-1/2 md:pl-8">
          <div className="space-y-6">
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center p-4 space-x-2 transition-transform bg-white rounded-lg shadow-lg hover:scale-105">
                <img src={assets.money} alt="Price" className="w-6 h-6" />
                <p className="text-lg font-semibold text-gray-800">{price}</p>
              </div>
              <div className="flex items-center p-4 space-x-2 transition-transform bg-white rounded-lg shadow-lg hover:scale-105">
                <img src={assets.location} alt="Location" className="w-6 h-6" />
                <p className="text-lg text-gray-600">{location}</p>
              </div>
              <div className="flex items-center p-4 space-x-2 transition-transform bg-white rounded-lg shadow-lg hover:scale-105">
                <p className="text-lg text-gray-600">{status}</p>
              </div>
            </div>

            {/* Property Features Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Property Features
              </h3>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {bedrooms && (
                  <div className="flex items-center p-4 space-x-2 rounded-lg shadow-lg bg-blue-50">
                    <FaBed className="text-xl text-blue-500" />
                    <span className="text-gray-700">{bedrooms} Bedrooms</span>
                  </div>
                )}
                {bathrooms && (
                  <div className="flex items-center p-4 space-x-2 rounded-lg shadow-lg bg-blue-50">
                    <FaBath className="text-xl text-blue-500" />
                    <span className="text-gray-700">{bathrooms} Bathrooms</span>
                  </div>
                )}
                {size && (
                  <div className="flex items-center p-4 space-x-2 rounded-lg shadow-lg bg-blue-50">
                    <FaHome className="text-xl text-blue-500" />
                    <span className="text-gray-700">{size} sq ft</span>
                  </div>
                )}
                {parking && (
                  <div className="flex items-center p-4 space-x-2 rounded-lg shadow-lg bg-blue-50">
                    <FaCar className="text-xl text-blue-500" />
                    <span className="text-gray-700">
                      {parking} Parking Spaces
                    </span>
                  </div>
                )}
              </div>
              {description && (
                <div className="p-6 mt-8 rounded-lg shadow-lg bg-gray-50">
                  <h3 className="mb-4 text-xl font-semibold text-gray-800">
                    Description
                  </h3>
                  <p className="text-gray-600">{description}</p>
                </div>
              )}
            </div>

            {/* Agent Information Section */}
            <AgentInformation
              agentName="Michael Wande"
              agentContact="+254712678334"
            />
          </div>

          {/* Related Properties Section */}
          <div className="mt-16">
            <h3 className="mb-6 text-2xl font-semibold text-gray-900">
              Related Properties
            </h3>
            <div className="flex space-x-6 overflow-x-auto overflow-y- hidden">
              {relatedProperties.map((relatedProperty, index) => (
                <div
                  key={index}
                  className="relative p-4 transition-all transform bg-white shadow-md rounded-xl w-72 hover:scale-105 hover:shadow-2xl"
                >
                  <img
                    src={relatedProperty.image[0]} // Assuming images are in an array for related properties
                    alt={relatedProperty.title}
                    className="object-cover w-full h-48 rounded-t-xl"
                  />
                  <div className="p-4">
                    <h4 className="text-xl font-semibold text-gray-800">
                      {relatedProperty.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {relatedProperty.location}
                    </p>
                    <p className="mt-2 text-lg font-bold text-gray-900">
                      {relatedProperty.price}
                    </p>
                    <button
                      className="px-4 py-2 mt-4 text-sm text-white transition-all transform bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105"
                      onClick={() => {
                        navigate(`/property/${index}`);
                        setTimeout(() => {
                          scrollToTitle();
                        }, 300);
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Image Carousel Below the Main Image */}
      <div className="mt-10">
        <div className="relative w-full md:w-1/2 transform md:translate-y-[-120%]">
          {/* Title and Description */}
          <h3 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Explore More Views of This Property
          </h3>
          <p className="text-base text-gray-600 mb-10 text-center">
            Browse through multiple images to get a closer look at the unique
            features of this property.{" "}
          </p>
          {/* Image Carousel */}
          {/* Carousel Arrows */}
          <div className="flex justify-end items-center space-x-6 mb-4 pr-4">
            <button
              onClick={prevImage}
              className="p-3 transition bg-gray-200 rounded-full hover:bg-gray-300"
              aria-label="Previous Image"
            >
              <img src={assets.leftArrow} alt="Previous" className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="p-3 transition bg-gray-200 rounded-full hover:bg-gray-300"
              aria-label="Next Image"
            >
              <img src={assets.rightArrow} alt="Next" className="w-6 h-6" />
            </button>
          </div>

          <div
            className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={image[currentImageIndex]}
              alt={title}
              className="object-cover w-full h-full transition-all duration-300 transform hover:scale-105 mt-7"
            />
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm py-1 px-4 rounded-lg opacity-80">
              {currentImageIndex + 1} / {image.length}
            </div>
          </div>
          <div className="mt-6 text-center">
            <h4 className="text-lg font-semibold text-blue-600">
              Spacious Living with Stunning Views
            </h4>
            <p className="text-sm-700 text-gray-500 mt-2">
              Each corner of this property has been thoughtfully designed to
              provide comfort, functionality, and elegance. Don’t miss the
              scenic views captured in these images.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AgentInformation = ({ agentName, agentContact }) => {
  const whatsappLink = `https://wa.me/${agentContact}`;

  return (
    <div
      className=" p-6 mt-10 space-y-6 shadow-lg bg-white border border-gray-200 rounded-xl 
    hover:shadow-2xl hover:border-blue-500 hover:scale-[1.02] transition-all duration-300 
    active:bg-blue-50 active:shadow-inner"
    >
      {/* Section Header */}
      <h3 className="text-2xl font-semibold text-gray-800 text-center">
        Meet Your Agent
      </h3>
      <p className="text-gray-600 text-center text-sm">
        Reach out to {agentName} for more details about this property.
      </p>

      {/* Agent Profile */}
      <div className="flex flex-col items-center space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-6">
        {/* Profile Image */}
        <div className="relative">
          <img
            src={assets.agentIcon}
            alt="Agent Icon"
            className="w-20 h-20 border-4 border-blue-500 rounded-full shadow-md"
          />
          <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
        </div>

        {/* Agent Details */}
        <div className="text-center md:text-left">
          <p className="text-lg font-medium text-gray-800">
            <strong>Name:</strong> {agentName}
          </p>
          <p className="text-lg text-gray-700">
            <strong>Contact:</strong> {agentContact}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {/* Call Button */}
        <button
          onClick={() => window.open(`tel:${agentContact}`)}
          className="flex items-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
        >
          <FaPhone className="w-4 h-4 mr-2" />
          Call Agent
        </button>

        {/* Email Button */}
        <button
          onClick={() =>
            window.open(
              `mailto:wandemichael6@gmail.com?subject=Inquiry&body=Hi ${agentName}, I am interested in one of your properties.`
            )
          }
          className="flex items-center px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700"
        >
          <FaEnvelope className="w-4 h-4 mr-2" />
          Email Agent
        </button>

        {/* WhatsApp Button */}
        <button
          onClick={() => window.open(whatsappLink, "_blank")}
          className="flex items-center px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600"
        >
          <FaWhatsapp className="w-4 h-4 mr-2" />
          WhatsApp Agent
        </button>
      </div>
    </div>
  );
};

AgentInformation.propTypes = {
  agentName: PropTypes.string.isRequired,
  agentContact: PropTypes.string.isRequired,
};
export default PropertyDetails;
