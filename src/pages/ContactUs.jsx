import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-white p-8 flex flex-col md:flex-row">
      <div className="md:w-2/3 p-4">
        <h2 className="text-2xl font-bold mb-4 text-red-600">
          Have Questions? Get In Touch!
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-black"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 py-2 px-3 shadow-sm focus:outline-none focus:ring-red-600 focus:border-red-600 sm:text-sm"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 py-2 px-3 shadow-sm focus:outline-none focus:ring-red-600 focus:border-red-600 sm:text-sm"
                placeholder="example@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-black"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 py-2 px-3 shadow-sm focus:outline-none focus:ring-red-600 focus:border-red-600 sm:text-sm"
                placeholder="(123) 456-7890"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-black"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 py-2 px-3 shadow-sm focus:outline-none focus:ring-red-600 focus:border-red-600 sm:text-sm"
                placeholder="Subject"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-black"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 py-2 px-3 shadow-sm focus:outline-none focus:ring-red-600 focus:border-red-600 sm:text-sm"
              placeholder="Your message here..."
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="md:w-1/3 p-4 bg-gray-100 rounded-md shadow-md h-full mt-20">
        <h2 className="text-2xl font-bold mb-4 text-red-600">
          Contact Details
        </h2>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <p className="text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <p className="text-black">Send email</p>
            <a
              href="mailto:support@example.com"
              className="text-red-600 underline"
            >
              Support@example.com
            </a>
          </div>
          <div>
            <p className="text-black">Call anytime</p>
            <a href="tel:(007) 123 456 7890" className="text-red-600 underline">
              (007) 123 456 7890
            </a>
          </div>
        </div>
        <div className="mt-4">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-black hover:text-red-600">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-red-600">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-red-600">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-red-600">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
