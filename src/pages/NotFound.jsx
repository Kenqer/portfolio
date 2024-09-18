import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-white">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-lg">Oops! The page you are looking for doesn't exist.</p>
      <Link to="/" className="mt-6 px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700">
        Go back to Home
      </Link>
      
    </div>
  );
};

export default NotFound;
