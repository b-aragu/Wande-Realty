import React from 'react';
import { toast } from 'react-toastify';
import { FaPhoneAlt, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { motion } from "framer-motion";

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "de9d8963-f549-43f7-a74e-9cc80f26bb0d");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message);
            setResult("");
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full p-6 py-20 overflow-hidden text-center lg:px-32"
            id="Contact"
        >
            <h1 className="mb-2 text-2xl font-bold text-center sm:text-4xl">
                Contact{' '}
                <span className="font-light underline underline-offset-4 decoration-1">
                    With Us
                </span>
            </h1>
            <p className="mx-auto mb-12 text-center text-gray-500 max-w-80">
                Ready To Make A Move? Let's Build Your Future Together
            </p>

            {/* Social Media Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center space-x-2">
                    <FaPhoneAlt className="text-lg text-red-500" />
                    <a 
                        href="tel:+254712678334" 
                        className="text-sm text-gray-600 break-words sm:text-base"
                    >
                        +254 712 678 334
                    </a>
                </div>
                <div className="flex items-center space-x-2">
                    <FaInstagram className="text-lg text-red-500" />
                    <a 
                        href="https://www.instagram.com/wanderealty/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm text-gray-600 break-words sm:text-base"
                    >
                        @wanderealty
                    </a>
                </div>
                <div className="flex items-center space-x-2">
                    <FaFacebook className="text-lg text-blue-600" />
                    <a 
                        href="https://www.facebook.com/WandeRealty" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm text-gray-600 break-words sm:text-base"
                    >
                        Wande Realty
                    </a>
                </div>
                <div className="flex items-center space-x-2">
                    <FaTwitter className="text-lg text-blue-400" />
                    <a 
                        href="https://twitter.com/WandeRealty" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm text-gray-600 break-words sm:text-base"
                    >
                        @WandeRealty
                    </a>
                </div>
            </div>

            {/* Contact Form */}
            <form className="max-w-2xl pt-8 mx-auto text-gray-600" onSubmit={onSubmit}>
                <div className="flex flex-wrap">
                    <div className="w-full text-left md:w-1/2">
                        Your Name
                        <input 
                            className="w-full px-4 py-3 mt-2 border border-gray-300 rounded" 
                            type="text" 
                            name="Name" 
                            placeholder="Your Name" 
                            required 
                        />
                    </div>
                    <div className="w-full text-left md:w-1/2 md:pl-4">
                        Your Email
                        <input 
                            className="w-full px-4 py-3 mt-2 border border-gray-300 rounded" 
                            type="email" 
                            name="Email" 
                            placeholder="Your Email" 
                            required 
                        />
                    </div>
                </div>
                <div className="my-6 text-left">
                    Message
                    <textarea 
                        className="w-full h-48 px-4 py-3 mt-2 border border-gray-300 rounded resize-none" 
                        name="Message" 
                        placeholder="Message" 
                        required
                    ></textarea>
                </div>
                <button 
                    className="px-12 py-2 mb-10 text-white bg-blue-600 rounded"
                >
                    {result ? result : "Send Message"}
                </button>
            </form>
        </motion.div>
    );
};

export default Contact;
