import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [showNav, setShowNav] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hide navbar after scrolling on any page
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Show navbar when mouse moves anywhere on the screen
  useEffect(() => {
    const handleMouseMove = () => {
      setShowNav(true);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [location.pathname]);

  return (
    <nav
      className={`
        fixed top-12 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}
        ${showNav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
      style={{ transition: 'opacity 0.4s' }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo and Institute Name in a Row */}
          <div className="flex items-center space-x-3">
            {/* Logo */}
            <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-white border-2 border-purple-700 rounded-md flex items-center justify-center shadow-lg">
              <img
                src="/assets/logo.ico"
                alt="Institute Logo"
                className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 object-contain"
              />
            </div>
            {/* Institute Name */}
            <span className="text-base xs:text-lg sm:text-xl md:text-2xl font-semibold text-purple-900 leading-tight text-center">
              Zainul Abideen Technical Training Centre
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5">
            <Link
              to="/"
              className="px-1.5 py-0.5 sm:px-2 sm:py-1 border-2 border-purple-700 text-black rounded-lg text-xs xs:text-sm sm:text-base md:text-lg font-medium hover:bg-purple-700 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              to="/courses"
              className="px-1.5 py-0.5 sm:px-2 sm:py-1 border-2 border-purple-700 text-black rounded-lg text-xs xs:text-sm sm:text-base md:text-lg font-medium hover:bg-purple-700 hover:text-white transition-colors"
            >
              Courses
            </Link>
            <Link
              to="/gallery"
              className="px-1.5 py-0.5 sm:px-2 sm:py-1 border-2 border-purple-700 text-black rounded-lg text-xs xs:text-sm sm:text-base md:text-lg font-medium hover:bg-purple-700 hover:text-white transition-colors"
            >
              Gallery
            </Link>
            <Link
              to="/about"
              className="px-1.5 py-0.5 sm:px-2 sm:py-1 border-2 border-purple-700 text-black rounded-lg text-xs xs:text-sm sm:text-base md:text-lg font-medium hover:bg-purple-700 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="px-1.5 py-0.5 sm:px-2 sm:py-1 border-2 border-purple-700 text-black rounded-lg text-xs xs:text-sm sm:text-base md:text-lg font-medium hover:bg-purple-700 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white absolute w-full left-0 right-0 shadow-md transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 py-4' : 'max-h-0 py-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-2 sm:space-y-4">
          {/* Welcome Text */}
          <span className="text-sm xs:text-base sm:text-lg font-semibold text-purple-900 mb-4 block text-center">
            Welcome to Zainul Abideen Technical Training Centre
          </span>

          {/* Logo and Institute Name */}
          <div className="flex items-center space-x-3 mt-10 mb-8">
            <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-white border-2 border-purple-700 rounded-md flex items-center justify-center shadow-lg">
              <img
                src="/assets/logo.ico"
                alt="Institute Logo"
                className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 object-contain"
              />
            </div>
            <span className="text-base xs:text-lg sm:text-xl font-semibold text-purple-900 leading-tight">
              Zainul Abideen Technical Training Centre
            </span>
          </div>

          {/* Navigation Links */}
          <div className="mt-4">
            <Link to="/" className="text-base xs:text-lg sm:text-xl font-normal py-2 border-b border-gray-100 block">
              Home
            </Link>
            <Link to="/courses" className="text-base xs:text-lg sm:text-xl font-normal py-2 border-b border-gray-100 block">
              Courses
            </Link>
            <Link to="/gallery" className="text-base xs:text-lg sm:text-xl font-normal py-2 border-b border-gray-100 block">
              Gallery
            </Link>
            <Link to="/about" className="text-base xs:text-lg sm:text-xl font-normal py-2 border-b border-gray-100 block">
              About
            </Link>
            <Link to="/contact" className="text-base xs:text-lg sm:text-xl font-normal py-2 border-b border-gray-100 block">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;