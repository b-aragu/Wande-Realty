import { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import PropTypes from "prop-types";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500); // Adjust the debounce delay as needed

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (debouncedSearchQuery) {
      console.log("Searching for:", debouncedSearchQuery);
    }
    document
      .getElementById("Properties")
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  useEffect(() => {
    const handleScroll = () => {
      if (showMobileMenu) {
        setShowMobileMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 z-10 w-full">
    <div className="container flex items-center justify-between px-6 py-4 mx-auto bg-transparent md:px-20 lg:px-32 relative">
      
      {/* Logo (Pushed Further Left) */}
      <a href="/" className="flex-shrink-0">
        <img src={assets.favicon} alt="logo" className="w-72 md:w-80 ml-[-60px] md:ml-[-120px]" />
      </a>
  
      {/* Desktop Navbar Links (More Spaced Out) */}
      <ul className="hidden text-white md:flex flex-1 justify-between font-semibold gap-16 mr-32">
        <li><a href="#Header" className="cursor-pointer hover:text-gray-400">Home</a></li>
        <li><a href="#About" className="cursor-pointer hover:text-gray-400">About</a></li>
        <li><a href="#Properties" className="cursor-pointer hover:text-gray-400">Properties</a></li>
        <li><a href="#Contact" className="cursor-pointer hover:text-gray-400">Contact Us</a></li>
        <li><a href="#Testimonials" className="cursor-pointer hover:text-gray-400">Testimonials</a></li>
      </ul>
  
      {/* Desktop Search Bar (Takes Remaining Space) */}
      <form
        className="items-center hidden w-[30%] max-w-lg px-4 py-2 space-x-2 bg-gray-500 border rounded shadow-lg md:flex border-white-5 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-300"
        onSubmit={handleSearchSubmit}
      >
        <input
          type="text"
          placeholder="Search properties..."
          required
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          className="w-full p-2 text-white bg-transparent border-none"
        />
        <img
          src={assets.searchIcon}
          alt="Search"
          className="cursor-pointer w-7"
          onClick={handleSearchSubmit} // Trigger search on click
        />
      </form>
  
      {/* Mobile Menu Icon */}
      <img
        src={assets.menuIcon}
        className="cursor-pointer md:hidden w-7"
        alt="menu icon"
        onClick={() => setShowMobileMenu(true)} // Show menu on click
      />
    </div>

      {/* Mobile Menu */}
      <div
        className={`${
          showMobileMenu
            ? "fixed w-full h-full bg-white z-20 transition-transform duration-300 transform"
            : "hidden"
        } top-0 left-0`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          {/* Close Icon */}
          <img
            src={assets.close}
            className="w-6"
            alt="close icon"
            onClick={() => setShowMobileMenu(false)} // Hide menu on click
          />
        </div>

        {/* Mobile Navbar Links */}
        <ul className="flex flex-col items-center gap-5 mt-10 text-lg font-medium">
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Header"
            className="inline-block px-6 py-2 rounded-full hover:bg-gray-100"
          >
            Home
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#About"
            className="inline-block px-6 py-2 rounded-full hover:bg-gray-100"
          >
            About
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Properties"
            className="inline-block px-6 py-2 rounded-full hover:bg-gray-100"
          >
            Properties
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Contact"
            className="inline-block px-6 py-2 rounded-full hover:bg-gray-100"
          >
            Contact Us
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Testimonials"
            className="inline-block px-6 py-2 rounded-full hover:bg-gray-100"
          >
            Testimonials
          </a>

          {/* Mobile Search Form */}
          <form
            className="flex items-center max-w-lg px-4 py-2 mx-auto mt-6 space-x-2 bg-gray-500 border rounded shadow-lg border-white-5 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-300"
            onSubmit={handleSearchSubmit}
          >
            <input
              type="text"
              placeholder="Search properties..."
              required
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="w-full p-2 bg-transparent border-none rounded"
            />
            <img
              src={assets.searchIcon}
              alt="Search"
              className="cursor-pointer w-7"
              onClick={handleSearchSubmit} // Trigger search on click
            />
          </form>
        </ul>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};

export default Navbar;
