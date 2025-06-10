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
        bg-[#f0f4f8]
      `}
      style={{ transition: 'opacity 0.4s' }}
    >
      {/* Main Navbar */}
      <div className="transition-all duration-300">
        <div className="container mx-auto flex justify-between items-center py-1 px-2 sm:py-2 sm:px-4 md:py-2 md:px-6">
          {/* Logo and Institute Name - LEFT */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="/assets/logo1.png"
                alt="Institute Logo"
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-contain"
                style={{ objectPosition: 'center' }}
              />
            </div>
            <span
              className="
                text-sm xs:text-base sm:text-lg md:text-xl font-bold text-purple-900 leading-tight text-center
                flex flex-row items-center
              "
              style={{
                overflow: 'visible',
                textOverflow: 'unset',
                maxWidth: 'none',
                display: 'flex',
                alignItems: 'center',
                letterSpacing: '0.5px',
              }}
              title="Zainul Abideen Technical Training Centre"
            >
              Zainul Abideen Technical Training Centre
            </span>
          </div>

          {/* Desktop Navigation - RIGHT */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/"
              className="px-3 py-1.5 border border-purple-700 text-black rounded text-sm font-medium hover:bg-purple-700 hover:text-white transition-colors"
              style={{ minWidth: 64, textAlign: 'center' }}
            >
              Home
            </Link>
            <Link
              to="/courses"
              className="px-3 py-1.5 border border-purple-700 text-black rounded text-sm font-medium hover:bg-purple-700 hover:text-white transition-colors"
              style={{ minWidth: 64, textAlign: 'center' }}
            >
              Courses
            </Link>
            <Link
              to="/gallery"
              className="px-3 py-1.5 border border-purple-700 text-black rounded text-sm font-medium hover:bg-purple-700 hover:text-white transition-colors"
              style={{ minWidth: 64, textAlign: 'center' }}
            >
              Gallery
            </Link>
            <Link
              to="/about"
              className="px-3 py-1.5 border border-purple-700 text-black rounded text-sm font-medium hover:bg-purple-700 hover:text-white transition-colors"
              style={{ minWidth: 64, textAlign: 'center' }}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="px-3 py-1.5 border border-purple-700 text-black rounded text-sm font-medium hover:bg-purple-700 hover:text-white transition-colors"
              style={{ minWidth: 64, textAlign: 'center' }}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button - RIGHT */}
          <button
            className="md:hidden text-gray-700 px-2 py-2"
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
          className="md:hidden fixed top-0 right-0 h-full w-[70vw] max-w-xs z-50 bg-[#f0f4f8] shadow-lg flex flex-col items-start transition-transform duration-300"
          style={{ transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)' }}
        >
          {/* Cross Button */}
          <button
            className="mt-4 mb-4 mr-4 ml-auto text-gray-700 hover:text-purple-700 transition-colors"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          {/* Navigation Links ONLY */}
          <nav className="flex flex-col w-full">
            <Link
              to="/"
              className="text-xs font-normal px-4 py-3 border-b border-purple-200 hover:text-purple-700 w-full text-left"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/courses"
              className="text-xs font-normal px-4 py-3 border-b border-purple-200 hover:text-purple-700 w-full text-left"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              to="/gallery"
              className="text-xs font-normal px-4 py-3 border-b border-purple-200 hover:text-purple-700 w-full text-left"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/about"
              className="text-xs font-normal px-4 py-3 border-b border-purple-200 hover:text-purple-700 w-full text-left"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-xs font-normal px-4 py-3 hover:text-purple-700 w-full text-left"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;