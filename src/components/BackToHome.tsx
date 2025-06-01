import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackToHome: React.FC = () => (
  <div className="fixed top-4 left-4 z-50">
    <Link
      to="/"
      className="flex items-center text-purple-700 hover:text-purple-900 transition-colors bg-white rounded-full p-2 shadow"
      aria-label="Back to Home"
    >
      <ArrowLeft className="w-6 h-6 sm:w-7 sm:h-7" />
    </Link>
  </div>
);

export default BackToHome;