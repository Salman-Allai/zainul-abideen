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
      {/* Main Navbar with equal padding and margin on all sides */}
      <div
        className={`transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
        style={{
          padding: '24px', // Equal padding on all sides
          margin: '16px',  // Equal margin on all sides
        }}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo and Institute Name */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-white border-2 border-purple-700 rounded-md flex items-center justify-center shadow-lg">
              <img
                src="/assets/logo.ico"
                alt="Institute Logo"
                className="w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 object-contain" // Match parent div size for all screens
              />
            </div>
            <span
              className="whitespace-normal text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-purple-900 leading-tight text-center"
              style={{
                overflow: 'visible',
                textOverflow: 'unset',
                maxWidth: 'none',
                display: 'inline',
              }}
              title="Zainul Abideen Technical Training Centre"
            >
              Zainul Abideen Technical Training Centre
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5">
            <Link
              to="/"
              className="px-3 py-2 border-2 border-purple-700 text-black rounded-lg text-xs xs:text-sm sm:text-base md:text-lg font-medium hover:bg-purple-700 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              to="/courses"
              className="px-3 py-2 border-2 border-purple-700 text-black rounded-lg text-xs xs:text-sm sm:text-base md:text-lg font-medium hover:bg-purple-700 hover:text-white transition-colors"
            >
              Courses
            </Link>
            <Link
              to="/gallery"
              className="px-3 py-2 border-2 border-purple-700 text-black rounded-lg text-xs xs:text-sm sm:text-base md:text-lg font-medium hover:bg-purple-700 hover:text-white transition-colors"
            >
              Gallery
            </Link>
            <Link
              to="/about"
              className="px-3 py-2 border-2 border-purple-700 text-black rounded-lg text-xs xs:text-sm sm:text-base md:text-lg font-medium hover:bg-purple-700 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="px-3 py-2 border-2 border-purple-700 text-black rounded-lg text-xs xs:text-sm sm:text-base md:text-lg font-medium hover:bg-purple-700 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 px-3 py-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed top-4 right-4 z-50 bg-white rounded-lg shadow-lg p-4 flex flex-col items-start"
          style={{ minWidth: 200 }}
        >
          {/* Cross Button */}
          <button
            className="mb-2 text-gray-700 self-end hover:text-purple-700 transition-colors"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          {/* Navigation Links ONLY */}
          <Link
            to="/"
            className="text-base xs:text-lg sm:text-xl font-normal px-3 py-2 w-full text-left border-b-2 border-purple-300 block hover:text-purple-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/courses"
            className="text-base xs:text-lg sm:text-xl font-normal px-3 py-2 w-full text-left border-b-2 border-purple-300 block hover:text-purple-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Courses
          </Link>
          <Link
            to="/gallery"
            className="text-base xs:text-lg sm:text-xl font-normal px-3 py-2 w-full text-left border-b-2 border-purple-300 block hover:text-purple-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link
            to="/about"
            className="text-base xs:text-lg sm:text-xl font-normal px-3 py-2 w-full text-left border-b-2 border-purple-300 block hover:text-purple-700"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-base xs:text-lg sm:text-xl font-normal px-3 py-2 w-full text-left block hover:text-purple-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
