import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="w-full px-4 pt-10 overflow-hidden bg-gray-900 md:px-20 lg:px-32"
      id="Footer"
    >
      <div className="container flex flex-col items-start justify-between mx-auto md:flex-row">
        {/* Logo and Description */}
        <div className="w-full mb-8 md:w-1/3 md:mb-0">
          <img
            src={assets.favicon}
            alt="Wande Realty logo"
            className="h-12 w-auto" // Make sure the logo has a size set
          />
          <p className="mt-4 text-gray-400">
            At Wande Realty, we connect clients to their dream properties.
            Whether you're looking to rent, buy, or sell, our expert team is
            here to help. Your satisfaction is our priority.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="w-full mb-8 md:w-1/5 md:mb-0">
          <h3 className="mb-4 text-lg font-bold text-white">Wande Realty</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li>
              <a
                href="#Header"
                className="hover:text-white"
                aria-label="Go to Home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#About"
                className="hover:text-white"
                aria-label="About Us"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                className="hover:text-white"
                aria-label="Contact Us"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#Properties"
                className="hover:text-white"
                aria-label="View Listings"
              >
                Listings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white"
                aria-label="Privacy Policy"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="w-full md:w-1/3">
          <h3 className="mb-4 text-lg font-bold text-white">
            Subscribe To Our Newsletter
          </h3>
          <p className="mb-4 text-gray-400 max-w-80">
            Stay up to date with the latest properties, real estate trends, and
            company news. Subscribe to our newsletter.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 text-gray-400 bg-gray-800 border border-gray-700 rounded focus:outline-none md:w-auto"
              aria-label="Email for newsletter subscription"
            />
            <button
              className="px-4 py-2 text-white bg-blue-500 rounded"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="py-4 mt-10 text-center text-gray-500 border-t border-gray-700">
        Copyright 2024 &#169; Wande Realty. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
