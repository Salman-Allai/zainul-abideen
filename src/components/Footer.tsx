import { FacebookIcon, TwitterIcon, InstagramIcon, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom'; // Add this import

const Footer = () => {
  return (
    <footer className="bg-white pt-10 pb-6 px-2 sm:px-4 border-t border-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="pb-8 lg:pb-0 lg:pr-8 lg:-mt-6">
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src="/assets/logo1.png"
                  alt="Institute Logo"
                  className="w-full h-full rounded-full object-contain"
                  style={{ objectPosition: 'center' }}
                />
              </div>
              <div className="ml-1 flex flex-col">
                <span className="ml-1 text-base sm:text-xl font-bold text-purple-900">
                  Zainul Abideen Technical Training Centre
                </span>
              </div>
            </div>
            <p className="text-black-600 text-sm sm:text-base lg:text-sm mb-3">
              Transforming Kashmir’s Youth Through Quality IT Education.
            </p>
            <div className="flex space-x-2">
              <a
                href="https://www.facebook.com/share/19AsAw23mW/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-purple-100 hover:text-purple-700 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={24} />
              </a>
              <a
                href="https://x.com/NoorMohammadEl1?t=leuczkD-sUK0LKo4lije6Q&s=08"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-purple-100 hover:text-purple-700 transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon size={24} />
              </a>
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-purple-100 hover:text-purple-700 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={24} />
              </a>
              <a
                href="https://in.linkedin.com/in/zainul-abideen-technical-training-centre-43914aa0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-purple-100 hover:text-purple-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="pt-2 lg:pt-0">
            <h3 className="text-base sm:text-lg lg:text-base font-semibold text-gray-900 mb-3">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/about" className="text-black-600 text-sm sm:text-base lg:text-sm hover:text-purple-700 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-black-600 text-sm sm:text-base lg:text-sm hover:text-purple-700 transition-colors">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-black-600 text-sm sm:text-base lg:text-sm hover:text-purple-700 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/" className="text-black-600 text-sm sm:text-base lg:text-sm hover:text-purple-700 transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div className="pt-2 lg:pt-0">
            <h3 className="text-base sm:text-lg lg:text-base font-semibold text-gray-900 mb-3">Support</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-black-600 text-sm sm:text-base lg:text-sm hover:text-purple-700 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-black-600 text-sm sm:text-base lg:text-sm hover:text-purple-700 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-black-600 text-sm sm:text-base lg:text-sm hover:text-purple-700 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-black-600 text-sm sm:text-base lg:text-sm hover:text-purple-700 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-black-600 text-sm sm:text-base lg:text-sm hover:text-purple-700 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="pt-2 lg:pt-0">
            <h3 className="text-base sm:text-lg lg:text-base font-semibold text-gray-900 mb-3">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-purple-700 mr-2 mt-0.5" />
                <span className="text-sm sm:text-base lg:text-sm text-black-600">Shalteng Srinagar (190017), India</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-purple-700 mr-2" />
                <span className="text-base text-black-600">+91 7006280132</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-purple-700 mr-2" />
                <span className="text-base text-black-600">zacvtp@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-4 border-t border-gray-100 text-center">
          <p className="text-base sm:text-lg text-black-500">
            © {new Date().getFullYear()} Zainul Abideen Technical Training  Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;