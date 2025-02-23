import React from 'react';
import { Link } from 'react-router-dom';
import BG from '../components/BG';

const signup = () => {
  return (
    <>
    <BG />
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-sm p-8 bg-transparent shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
        
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-black to-gray-800 text-white font-semibold rounded-md hover:from-gray-800 hover:to-black transition"
          >
            Sign Up
          </button>
        <div className="mt-4 text-center">
          <p>Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Log In</Link></p>
        </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default signup;
