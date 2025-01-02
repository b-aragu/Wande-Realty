import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import { useDropzone } from "react-dropzone";
import {
  assets,
  testimonialsData as initialTestimonialsData,
} from "../assets/assets";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";

const Testimonials = () => {
  const loadTestimonials = () => {
    const savedTestimonials = localStorage.getItem("testimonials");
    return savedTestimonials
      ? JSON.parse(savedTestimonials)
      : initialTestimonialsData;
  };

  const [testimonials, setTestimonials] = useState(loadTestimonials);
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    title: "",
    rating: 5,
    text: "",
    image: "",
    alt: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png, image/gif, image/webp",
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewTestimonial((prevState) => ({
          ...prevState,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    },
  });

  const saveToLocalStorage = (newTestimonials) => {
    localStorage.setItem("testimonials", JSON.stringify(newTestimonials));
  };

  const validateForm = (data) => {
    const validationErrors = {};
    if (!data.name) validationErrors.name = "Name is required";
    if (!data.title) validationErrors.title = "Title is required";
    if (!data.text) validationErrors.text = "Testimonial text is required";
    if (data.text.length < 20)
      validationErrors.text = "Testimonial must be at least 20 characters";
    if (data.rating === 0) validationErrors.rating = "Please select a rating";
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage(""); // Clear success message

    const validationErrors = validateForm(newTestimonial);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    const updatedTestimonials = [...testimonials, newTestimonial];
    setTestimonials(updatedTestimonials);
    saveToLocalStorage(updatedTestimonials);
    setNewTestimonial({
      name: "",
      title: "",
      rating: 5,
      text: "",
      image: "",
      alt: "",
    });

    // Simulate an API request or other async action
    setTimeout(() => {
      setLoading(false);
      setSuccessMessage("Testimonial submitted successfully!");
      toast.success("Testimonial submitted successfully!");
    }, 2000); // Simulate a 2-second delay
  };

  return (
    <div
      className="container w-full py-10 mx-auto overflow-hidden lg:px-32"
      id="Testimonials"
    >
      <h1 className="mb-2 text-2xl font-bold text-center sm:text-4xl">
        What Our{" "}
        <span className="font-light underline underline-offset-4 decoration-1">
          Clients Say
        </span>
      </h1>
      <p className="mx-auto mb-12 text-center text-gray-500 max-w-80">
        Hear directly from our satisfied clients who found their dream
        properties with Wande Realty.
      </p>

      {/* Display Testimonials */}
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.length === 0 ? (
          <div className="flex flex-wrap justify-center gap-8">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="max-w-[340px] border shadow-lg rounded-lg p-6 text-center"
              >
                <Skeleton circle height={96} width={96} className="mb-4" />
                <Skeleton width="60%" height={24} className="mb-4" />
                <Skeleton width="80%" height={12} className="mb-4" />
                <Skeleton width="100%" height={12} />
              </div>
            ))}
          </div>
        ) : (
          testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="max-w-[340px] border shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div className="relative w-24 h-24 mx-auto mb-4 overflow-hidden border-4 border-gray-300 rounded-full shadow-lg">
                <img
                  className="object-cover w-full h-full"
                  src={testimonial.image}
                  alt={testimonial.alt}
                />
              </div>

              <h2 className="text-xl font-medium text-gray-700">
                {testimonial.name}
              </h2>
              <p className="mb-4 text-sm text-gray-500">{testimonial.title}</p>
              <div className="flex justify-center gap-1 mb-4 text-red-500">
                {Array.from({ length: testimonial.rating }, (_, index) => (
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
          ))
        )}
      </div>

      {/* Testimonial Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-12 border-t-4 border-blue-600"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
          Add Your Testimonial
        </h2>

        {successMessage && (
          <div className="mb-4 text-green-600 text-center font-semibold">
            {successMessage}
          </div>
        )}

        <div className="flex items-center justify-center mb-6">
          <div className="w-full md:w-1/2 text-center">
            <h3 className="text-lg font-medium text-gray-600 mb-2">
              Your Rating
            </h3>
            <div className="flex justify-center gap-2 mt-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <span
                  key={rating}
                  className={`cursor-pointer text-xl transition duration-200 ease-in-out transform ${
                    newTestimonial.rating >= rating
                      ? "text-yellow-400 scale-110"
                      : "text-gray-300 hover:text-yellow-400"
                  }`}
                  onClick={() =>
                    setNewTestimonial({ ...newTestimonial, rating })
                  }
                  onMouseEnter={() =>
                    setNewTestimonial({ ...newTestimonial, rating })
                  }
                >
                  ★
                </span>
              ))}
            </div>
            {errors.rating && (
              <p className="text-red-500 text-sm mt-2">{errors.rating}</p>
            )}
          </div>
        </div>

        <input
          type="text"
          name="name"
          value={newTestimonial.name}
          onChange={(e) =>
            setNewTestimonial({ ...newTestimonial, name: e.target.value })
          }
          placeholder="Your Name"
          className={`w-full p-3 border ${
            errors.name ? "border-red-500" : "border-gray-300"
          } rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400`}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <input
          type="text"
          name="title"
          value={newTestimonial.title}
          onChange={(e) =>
            setNewTestimonial({ ...newTestimonial, title: e.target.value })
          }
          placeholder="Your Title (e.g., Client, Homebuyer)"
          className={`w-full p-3 border ${
            errors.title ? "border-red-500" : "border-gray-300"
          } rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400`}
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

        <textarea
          name="text"
          value={newTestimonial.text}
          onChange={(e) =>
            setNewTestimonial({ ...newTestimonial, text: e.target.value })
          }
          placeholder="Share your experience with Wande Realty"
          className={`w-full p-3 border ${
            errors.text ? "border-red-500" : "border-gray-300"
          } rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400`}
          rows="4"
        />
        {errors.text && <p className="text-red-500 text-sm">{errors.text}</p>}

        {/* Image Upload */}
        <div
          {...getRootProps()}
          className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg mb-6 cursor-pointer hover:bg-gray-50 transition duration-200 ease-in-out"
        >
          <input {...getInputProps()} />
          <p className="text-center text-gray-500">
            Drag & drop an image, or click to select one
          </p>
        </div>

        {newTestimonial.image && (
          <div className="mb-6 flex justify-center">
            <img
              src={newTestimonial.image}
              alt="Uploaded"
              className="w-32 h-32 object-cover mx-auto rounded-lg shadow-md"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Testimonial"}
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Testimonials;
