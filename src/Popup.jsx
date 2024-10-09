import React, { useState } from 'react';

export default function BookVisit({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    onClose(); // Close the modal on submit
  };

  // Close when background is clicked
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white rounded-lg p-8 shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Book a Visit</h2>
        <p className="text-gray-600 mb-6">Please fill in your details to book a visit, and we'll get in touch with you soon.</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-left block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="text-left block text-gray-700 font-medium mb-2" htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="text-left block text-gray-700 font-medium mb-2" htmlFor="email">Email (Optional)</label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex justify-end mt-6 space-x-4">
            <button
              type="button"
              className="text-gray-700 bg-gray-200 hover:bg-gray-300 font-medium py-2 px-6 rounded-lg shadow-md transition duration-200"
              onClick={onClose}
            >
              Close
            </button>
            <button
              type="submit"
              className="text-white bg-blue-500 hover:bg-blue-700 font-medium py-2 px-6 rounded-lg shadow-md transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
