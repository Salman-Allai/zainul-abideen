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
        bg-[#f0f4f8]  // Use the same background as your main page, or set to transparent if your page has no color
      `}
      style={{ transition: 'opacity 0.4s' }}
    >
      {/* Main Navbar with equal padding and margin on all sides */}
      <div
        className="transition-all duration-300"
        style={{}}
      >
        <div className="container mx-auto flex justify-between items-center py-1 px-1 sm:py-2 sm:px-3 md:py-3 md:px-4">
          {/* Logo and Institute Name - LEFT */}
          <div className="flex items-center space-x-3">
            <div className="w-28 h-28 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="/assets/logo1.png"
                alt="Institute Logo"
                className="w-24 h-24 rounded-full object-contain"
                style={{ objectPosition: 'center' }}
              />
            </div>
            <span
              className="
                text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-purple-900 leading-tight text-center
                flex flex-row items-center
              "
              style={{
                overflow: 'visible',
                textOverflow: 'unset',
                maxWidth: 'none',
                display: 'flex',
                alignItems: 'center',
              }}
              title="Zainul Abideen Technical Training Centre"
            >
              Zainul Abideen Technical Training Centre
            </span>
          </div>

          {/* Desktop Navigation - RIGHT */}
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

          {/* Mobile Menu Button - RIGHT */}
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
          className="md:hidden fixed top-0 right-0 h-full w-[40vw] max-w-xs z-50 bg-white shadow-lg flex flex-col items-start transition-transform duration-300"
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
              className="text-base xs:text-lg sm:text-xl font-normal px-6 py-4 border-b border-purple-200 hover:text-purple-700 w-full text-left"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/courses"
              className="text-base xs:text-lg sm:text-xl font-normal px-6 py-4 border-b border-purple-200 hover:text-purple-700 w-full text-left"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              to="/gallery"
              className="text-base xs:text-lg sm:text-xl font-normal px-6 py-4 border-b border-purple-200 hover:text-purple-700 w-full text-left"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/about"
              className="text-base xs:text-lg sm:text-xl font-normal px-6 py-4 border-b border-purple-200 hover:text-purple-700 w-full text-left"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-base xs:text-lg sm:text-xl font-normal px-6 py-4 hover:text-purple-700 w-full text-left"
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