import React, { useState } from 'react';

export default function HeroSection() {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-blue-900 text-white py-20 ">
      <div className="container mx-5 text-center">
        <h1 className="text-6xl">Get Ready To Celebrate The Biggest Festival</h1>
        
        <button
          className="bg-yellow-400 text-blue-900 my-5 py-3 px-8 rounded-full font-semibold hover:bg-yellow-400 transition duration-300"
          onClick={() => setShowRegistrationForm(true)}
        >
          Register
        </button>

        {showRegistrationForm && !isSubmitted ? (
          <div className="mx-7 py-4 border rounded-sm">
            <h3 className="text-x py-5 font-semibold">Registration Form</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-2">
                <label htmlFor="name" className="block text-sm font-medium">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="px-4 py-2 border rounded  text-blue-600 "
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="px-4 py-2 border rounded  text-blue-600"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="px-4 py-2 border rounded focus:ring text-blue-600"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        ) : isSubmitted ? (
          <div className="message text-xl font-semibold mt-4">
            Thank you for submitting the form! You are registered.
          </div>
        ) : null}
      </div>
      
    </div>
  );
}
