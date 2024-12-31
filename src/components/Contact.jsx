import React from 'react';

const Contact = () => {
  return (
    <div className="bg-black contact text-white min-h-screen flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-gray-300 mb-8 text-center">
        We'd love to hear from you! Feel free to reach out with any questions or feedback.
      </p>

      <form className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 "
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 "
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
          <textarea
            id="message"
            rows="4"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 "
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 py-2 rounded text-white font-bold hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-10 text-center">
        <p className="text-gray-400">Email: support@shoeshop.com</p>
        <p className="text-gray-400">Phone: +1 234 567 890</p>
      </div>
    </div>
  );
};

export default Contact;
