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
      if (typeof window !== 'undefined') {
        if (window.scrollY === 0) {
          setShowNav(true);
        } else {
          setShowNav(false);
        }
        setIsScrolled(window.scrollY > 10);
      }
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
    return;
  }, []);

  useEffect(() => {
    const handleMouseMove = () => {
      setShowNav(true);
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
    return;
  }, []);

  // Optional: Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}
        ${showNav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
      style={{ transition: 'opacity 0.4s' }}
    >
      {/* Welcome Bar */}
      <div className="bg-purple-700 text-white text-center py-2 text-sm sm:text-base font-semibold">
        Welcome to Zainul Abideen Technical Training Centre
      </div>

      {/* Actual Navbar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled ? 'bg-white py-3 shadow-md' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            {/* Logo and Institute Name */}
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-white border-2 border-purple-700 rounded-md flex items-center justify-center shadow-lg">
                <img
                  src="/assets/logo.ico"
                  alt="Institute Logo"
                  className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 object-contain"
                />
              </div>
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
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white absolute w-full left-0 right-0 shadow-md transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 py-4' : 'max-h-0 py-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-2 sm:space-y-4">
          {/* Welcome Text (optional, remove if you want it only in the top bar) */}
          <span
            className="text-sm xs:text-base sm:text-lg font-semibold text-purple-900 mb-4 block text-center whitespace-nowrap overflow-x-auto"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            Welcome to Zainul Abideen Technical Training Centre
          </span>

          {/* Logo and Institute Name */}
          <div className="flex items-center space-x-3 mt-6 mb-8">
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
          <div className="mt-6">
            <Link to="/" className="text-base xs:text-lg sm:text-xl font-normal py-2 border-b border-gray-100 block" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/courses" className="text-base xs:text-lg sm:text-xl font-normal py-2 border-b border-gray-100 block" onClick={() => setIsMenuOpen(false)}>
              Courses
            </Link>
            <Link to="/gallery" className="text-base xs:text-lg sm:text-xl font-normal py-2 border-b border-gray-100 block" onClick={() => setIsMenuOpen(false)}>
              Gallery
            </Link>
            <Link to="/about" className="text-base xs:text-lg sm:text-xl font-normal py-2 border-b border-gray-100 block" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/contact" className="text-base xs:text-lg sm:text-xl font-normal py-2 border-b border-gray-100 block" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;