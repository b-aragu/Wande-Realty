import { useParams, useNavigate } from 'react-router-dom';
import { assets, PropertiesData } from '../assets/assets';
import { FaBed, FaBath, FaCar, FaHome } from 'react-icons/fa';

const PropertyDetails = () => {
  const { id } = useParams(); // Get the property ID from the URL
  const property = PropertiesData[id]; // Ensure the ID matches the structure of your PropertiesData
  const navigate = useNavigate(); // Use navigate to go back or forward

  if (!property) {
    return <p className="text-xl font-bold text-center text-gray-800">Property not found!</p>;
  }

  // Destructuring the property data
  const { title, price, location, image, status, features, description } = property;
  const { bedrooms, bathrooms, size, parking, yearBuilt } = features || {};

  // Related properties sample data
  const relatedProperties = PropertiesData.slice(0, 3);

  return (
    <div className="container px-8 py-16 mx-auto shadow-lg bg-gradient-to-r from-blue-50 via-blue-100 to-white rounded-xl">
      {/* Back Button */}
      <button
        onClick={() => {
          navigate(-1);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="flex items-center px-6 py-2 mb-8 text-sm font-semibold text-white transition-all transform rounded-lg shadow-lg bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black hover:scale-105"
      >
        <img src={assets.goBack} alt="Go Back Icon" className="w-5 h-5 mr-2" />
        Go Back
      </button>

      {/* Property Title & Image */}
      <h1 className="mt-6 text-4xl font-extrabold text-center text-gray-900 md:text-5xl">{title}</h1>
      <div className="flex flex-col justify-between mt-10 md:flex-row">
        <div className="relative w-full md:w-1/2">
          <img
            src={image}
            alt={title}
            className="object-cover w-full mb-6 transition-all transform shadow-xl h-96 rounded-xl hover:scale-105"
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
              <h3 className="text-xl font-semibold text-gray-800">Property Features</h3>
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
                    <span className="text-gray-700">{parking} Parking Spaces</span>
                  </div>
                )}
              </div>
              {description && (
                <div className="p-6 mt-8 rounded-lg shadow-lg bg-gray-50">
                  <h3 className="mb-4 text-xl font-semibold text-gray-800">Description</h3>
                  <p className="text-gray-600">{description}</p>
                </div>
              )}
            </div>

            {/* Agent Information Section */}
            <AgentInformation agentName="Michael Wande" agentContact="0712678334" />
          </div>

          {/* Related Properties Section */}
          <div className="mt-16">
            <h3 className="mb-6 text-2xl font-semibold text-gray-900">Related Properties</h3>
            <div className="flex space-x-6 overflow-x-auto">
              {relatedProperties.map((relatedProperty, index) => (
                <div
                  key={index}
                  className="relative p-4 transition-all transform bg-white shadow-md rounded-xl w-72 hover:scale-105 hover:shadow-2xl"
                >
                  <img
                    src={relatedProperty.image}
                    alt={relatedProperty.title}
                    className="object-cover w-full h-48 rounded-t-xl"
                  />
                  <div className="p-4">
                    <h4 className="text-xl font-semibold text-gray-800">{relatedProperty.title}</h4>
                    <p className="text-sm text-gray-600">{relatedProperty.location}</p>
                    <p className="mt-2 text-lg font-bold text-gray-900">{relatedProperty.price}</p>
                    <button
                      className="px-4 py-2 mt-4 text-sm text-white transition-all transform bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105"
                      onClick={() => navigate(`/property/${relatedProperty.id}`)}
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
    </div>
  );
};

// Separate AgentInformation Component
const AgentInformation = ({ agentName, agentContact }) => {
  return (
    <div className="p-6 mt-10 space-y-6 shadow-lg bg-gradient-to-r from-blue-50 via-blue-100 to-white rounded-xl">
      <h3 className="text-xl font-semibold text-gray-800">Agent Information</h3>
      <div className="flex items-center space-x-6">
        {/* Agent Profile Image */}
        <div className="relative">
          <img
            src={assets.agentIcon}
            alt="Agent Icon"
            className="w-16 h-16 border-4 border-blue-500 rounded-full shadow-md"
          />
          {/* Online Status Badge */}
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
        </div>

        {/* Agent Details */}
        <div>
          <p className="text-lg font-medium text-gray-700">
            <strong>Name:</strong> {agentName}
          </p>
          <p className="text-lg text-gray-700">
            <strong>Contact:</strong> {agentContact}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={() => window.open(`tel:${agentContact}`)}
          className="flex items-center px-6 py-2 text-sm font-semibold text-white transition-all transform bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105"
        >
          <img src={assets.call} alt="Call Icon" className="w-5 h-5 mr-2" />
          Call Agent
        </button>

        <button
          onClick={() =>
            window.open(
              `mailto:${agentContact}?subject=Inquiry&body=Hi ${agentName}, I am interested in one of your properties.`
            )
          }
          className="flex items-center px-6 py-2 text-sm font-semibold text-white transition-all transform bg-green-600 rounded-lg shadow-lg hover:bg-green-700 hover:scale-105"
        >
          <img src={assets.email} alt="Email Icon" className="w-5 h-5 mr-2" />
          Email Agent
        </button>
      </div>
    </div>
  );
};

export default PropertyDetails;
