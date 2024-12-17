// Import all images
import aboutBanner1 from './about-banner-1.png';
import aboutBanner2 from './about-banner-2.jpg';
import property6 from './property6.png';
import property7 from './property7.jpg';
import property8 from './property8.jpg';
import favicon from './favicon.svg';
import property5 from './property-5.png';
import logo from './logo.png';
import property1 from './property-1.jpg';
import property2 from './property-2.jpg';
import property3 from './property-3.jpg';
import property4 from './property-4.png';
import reactLogo from './react.svg';
import service1 from './service-1.png';
import service2 from './service-2.png';
import service3 from './service-3.png';
import profile1 from './profile1.png';
import profile2 from './profile2.jpeg';
import profile3 from './profile3.jpeg';
import landing from './landing.jpg';
import menuIcon from './menu.png';
import close from './close.png';
import rightArrow from './right-arrow.png';
import leftArrow from './left-arrow.png';
import star from './star.png'; // Like Icon
import searchIcon from './searchIcon.png'; // Location Icon
import location from './location.png';
import saleBadge from './sale-badge.png'; // Badge for sale
import rentBadge from './rent-badge.png'; // Badge for rent
import instagramIcon from './instagram.png';
import agentIcon from './agentIcon.jpeg';
import money from './money.png';
import goBack from './goBack.svg';
import call from './call.svg';
import email from './email.svg';

// Create an object to export
export const assets = {
  aboutBanner1,
  goBack,
  email,
  call,
  aboutBanner2,
  searchIcon,
  agentIcon,
  money,
  instagramIcon,
  leftArrow,
  rightArrow,
  menuIcon,
  close,
  property6,
  property7,
  property8,
  favicon,
  landing,
  property5,
  logo,
  property1,
  property2,
  property3,
  property4,
  reactLogo,
  service1,
  service2,
  service3,
  profile1,
  profile2,
  profile3,
  star,
  location,
  saleBadge,
  rentBadge
};

// Properties details
export const PropertiesData = [
  {
    title: "Villa",
    price: "KES 120,000,000",
    location: "Karen, Nairobi",
    image: [property1, property6, property8],
    status: "For Sale",
    badge: saleBadge,
    features: {
      bedrooms: 5,
      bathrooms: 4,
      size: "5000 sqft",
      parking: "2 spaces",
      agentContact: "Michael Wande, 0712678334",
    },
  },
  {
    title: "Penthouse",
    price: "KES 75,000,000",
    location: "Westlands, Nairobi",
    image: [property2, property7],
    status: "For Rent",
    badge: rentBadge,
    features: {
      bedrooms: 3,
      bathrooms: 2,
      size: "3000 sqft",
      parking: "1 space",
    },
  },
  {
    title: "Mansion",
    price: "KES 200,000,000",
    location: "Runda, Nairobi",
    image: [property3],
    status: "For Sale",
    badge: saleBadge,
    features: {
      bedrooms: 7,
      bathrooms: 6,
      size: "8000 sqft",
      parking: "5 spaces",
    },
  },
  {
    title: "Townhouse",
    price: "KES 60,000,000",
    location: "Kileleshwa, Nairobi",
    image: [property4],
    status: "For Rent",
    badge: rentBadge,
    features: {
      bedrooms: 3,
      bathrooms: 7,
      size: "8000 sqft",
      parking: "5 spaces",
    },
  },
  {
    title: "4bd Mansion",
    price: "KES 64,000,000",
    location: "Lavington, Nairobi",
    image: [property5],
    status: "For Sale",
    badge: saleBadge,
    features: {
      bedrooms: 4,
      bathrooms: 6,
      size: "8000 sqft",
      parking: "5 spaces",
    },
  },
  // More properties...
];


export const testimonialsData = [
  {
    name: "Anthony Baragu",
    title: "Real Estate Investor",
    image: profile1,
    alt: "Anthony Baragu profile picture",
    rating: 5,
    text: "Wande Realty helped me secure my dream property in Karen with unmatched professionalism. Their attention to detail and customer care is outstanding.",
  },
  {
    name: "Michael Wande",
    title: "Luxury Property Developer",
    image: profile2,
    alt: "Michael Wande profile picture",
    rating: 4.5,
    text: "As a developer, I appreciate how Wande Realty connects the right buyers with our high-end Properties. Their team is proactive and dependable.",
  },
  {
    name: "Max Mwangi",
    title: "Business Consultant",
    image: profile3,
    alt: "Max Mwangi profile picture",
    rating: 5,
    text: "From the initial consultation to closing, Wande Realty made the process seamless. Their insights into the market are top-notch!",
  },
];