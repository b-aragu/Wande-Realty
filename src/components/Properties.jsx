import { useState, useEffect } from "react";
import { assets, PropertiesData } from "../assets/assets";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaRegHeart,
  FaMapMarkerAlt,
  FaShareAlt,
} from "react-icons/fa";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  XIcon,
  WhatsappIcon,
} from "react-share";
import { Link } from "react-router-dom";

const Properties = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedProperties, setLikedProperties] = useState([]);
  const [shareOptionsVisibility, setShareOptionsVisibility] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProperties, setFilteredProperties] = useState(PropertiesData);
  const [cardsToShow, setCardsToShow] = useState(1); // Default for mobile

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCardsToShow(5); // Desktop
      } else if (width >= 768) {
        setCardsToShow(3); // Tablet
      } else {
        setCardsToShow(3); // Mobile
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const filtered = PropertiesData.filter(
      (property) =>
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProperties(filtered);
  }, [searchQuery]);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = filteredProperties.length - 1;
      return prevIndex === maxIndex ? 0 : prevIndex + 1;
    });
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = filteredProperties.length - 1;
      return prevIndex === 0 ? maxIndex : prevIndex - 1;
    });
  };

  const handleLike = (propertyTitle) => {
    setLikedProperties((prevLikes) =>
      prevLikes.includes(propertyTitle)
        ? prevLikes.filter((title) => title !== propertyTitle)
        : [...prevLikes, propertyTitle]
    );
  };

  const toggleShareOptions = (propertyTitle) => {
    setShareOptionsVisibility((prevVisibility) => ({
      ...prevVisibility,
      [propertyTitle]: !prevVisibility[propertyTitle],
    }));
  };

  const getCardTransform = () => {
    return `translateX(-${currentIndex * (100 / cardsToShow)}%)`;
  };

  const handleInstagramRedirect = (property) => {
    const message = `Check out this property at Wande Realty: ${property.title} - ${property.location}. ${property.image[0]}`;
    window.open(
      `https://www.instagram.com/direct/new?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };
  const handleTwitterRedirect = (property) => {
    const message = `Check out this property at Wande Realty: ${property.title} - ${property.location} ${property.image[0]}`;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        message
      )}&url=${encodeURIComponent(property.image[0])}`,
      "_blank"
    );
  };
  const handleFacebookRedirect = (property) => {
    const message = `Check out this property at Wande Realty: ${property.title} - ${property.location} ${property.image[0]}`;
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        property.image[0]
      )}&quote=${encodeURIComponent(message)}`,
      "_blank"
    );
  };
  const handleWhatsappRedirect = (property) => {
    const message = `Check out this property at Wande Realty: ${property.title} - ${property.location} ${property.image[0]}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");
  };

  // For swipe functionality
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [touchEndY, setTouchEndY] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);
  const SWIPE_THRESHOLD = 50;

  // Handle swipe start
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchStartY(e.touches[0].clientY);
    setTouchEndX(null); // Reset end values
    setTouchEndY(null);
  };

  // Handle swipe move
  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
    setTouchEndY(e.touches[0].clientY);
  };

  // Handle swipe end
  const handleTouchEnd = () => {
    if (touchEndX === null || touchEndY === null) return;

    const deltaX = touchStartX - touchEndX;
    const deltaY = Math.abs(touchStartY - touchEndY); // Vertical movement

    // Ensure significant horizontal movement and minimal vertical movement
    if (Math.abs(deltaX) > SWIPE_THRESHOLD && deltaY < SWIPE_THRESHOLD) {
      if (deltaX > 0) {
        nextProject(); // Swipe Left
      } else {
        prevProject(); // Swipe Right
      }
    }

    // Reset touch state
    setTouchStartX(0);
    setTouchEndX(null);
    setTouchStartY(0);
    setTouchEndY(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container w-full px-6 py-4 pt-20 mx-auto my-20 overflow-hidden md:px-20 lg:px-32"
      id="Properties"
    >
      <h1 className="mb-4 text-2xl font-bold text-center sm:text-4xl">
        Featured{" "}
        <span className="font-light underline underline-offset-4 decoration-1">
          Listings
        </span>
      </h1>
      <p className="max-w-md mx-auto mb-10 text-center text-gray-500">
        Discover the perfect property for you with Wande Realty. Whether for
        rent or sale, we've got you covered.
      </p>

      {/* Search Bar */}
      <div className="flex justify-between mb-8">
        <form className="flex items-center w-3/4 px-4 py-2 bg-gray-200 rounded shadow-lg md:w-2/3">
          <input
            type="text"
            placeholder="Search properties..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 text-gray-700 bg-gray-200 rounded focus:outline-none"
          />
          <img
            src={assets.searchIcon}
            alt="Search"
            className="cursor-pointer w-7"
          />
        </form>
        <div className="flex items-center">
          <button
            onClick={prevProject}
            className="p-3 mr-2 transition bg-gray-200 rounded-full hover:bg-gray-300"
            aria-label="previous project"
          >
            <img src={assets.leftArrow} alt="Previous" className="w-6 h-6" />
          </button>
          <button
            onClick={nextProject}
            className="p-3 transition bg-gray-200 rounded-full hover:bg-gray-300"
            aria-label="next project"
          >
            <img src={assets.rightArrow} alt="Next" className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Property Cards */}
      {filteredProperties.length === 0 ? (
        <p className="text-center text-gray-500">No properties found.</p>
      ) : (
        <div
          className={`flex transition-transform duration-500 ease-in-out`}
          style={{
            transform: getCardTransform(),
            width: `${filteredProperties.length * (100 / cardsToShow)}%`,
          }}
        >
          {filteredProperties.map((property, index) => (
            <div
              key={index}
              className="flex flex-col items-center flex-shrink-0"
              style={{
                width: `${100 / cardsToShow}%`,
                paddingRight: "20px",
                maxWidth: "400px",
              }}
            >
              <div className="relative p-6 bg-gray-100 rounded-lg shadow-md">
                <img
                  src={property.image[0]}
                  alt={property.title}
                  className="object-cover w-full h-64 mb-4 rounded-md shadow-sm"
                />
                {property.badge && (
                  <div className="absolute top-4 left-4">
                    <img
                      src={property.badge}
                      alt={property.status || "Badge"}
                      className="w-12 h-12"
                    />
                  </div>
                )}
                <h2 className="mb-2 text-xl font-semibold text-gray-800">
                  {property.title}
                </h2>
                <p className="mb-2 text-sm text-gray-500">
                  <FaMapMarkerAlt className="inline mr-1 text-red-500" />
                  {property.location}
                </p>
                <p className="mb-4 text-sm text-gray-500">{property.price}</p>

                <div className="flex items-center w-full space-x-12 sm:justify-between sm:space-x-4">
                  <div
                    onClick={() => handleLike(property.title)}
                    className="cursor-pointer"
                  >
                    {likedProperties.includes(property.title) ? (
                      <FaHeart className="text-red-500 hover:scale-110" />
                    ) : (
                      <FaRegHeart className="text-gray-500 hover:scale-110" />
                    )}
                  </div>
                  <div
                    className="relative cursor-pointer"
                    onClick={() => toggleShareOptions(property.title)}
                  >
                    <FaShareAlt className="text-blue-500 hover:scale-110" />
                    {shareOptionsVisibility[property.title] && (
                      <motion.div
                        className="absolute left-0 flex flex-col space-y-2 bottom-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <WhatsappShareButton
                          url={`#`}
                          title={`Check out this property at Wande Realty: ${property.title}`}
                          onClick={() => handleWhatsappRedirect(property)}
                        >
                          <WhatsappIcon size={32} round />
                        </WhatsappShareButton>
                        <TwitterShareButton
                          url={`#`}
                          title={`Check out this property at Wande Realty: ${property.title}`}
                          onClick={() => handleTwitterRedirect(property)}
                        >
                          <XIcon size={32} round />
                        </TwitterShareButton>
                        <FacebookShareButton
                          url={`#`}
                          title={`Check out this property at Wande Realty: ${property.title}`}
                          onClick={() => handleFacebookRedirect(property)}
                        >
                          <FacebookIcon size={32} round />
                        </FacebookShareButton>
                        <div
                          onClick={handleInstagramRedirect}
                          className="relative cursor-pointer"
                        >
                          <img
                            src={assets.instagramIcon} // Instagram icon image imported from assets
                            alt="Instagram"
                            className="w-8 h-8"
                          />
                        </div>
                      </motion.div>
                    )}
                  </div>
                  <button className="px-4 py-2 text-sm text-white transition bg-blue-600 rounded hover:bg-blue-700">
                    <Link to={`/property/${index}`}>View Details</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Properties;
