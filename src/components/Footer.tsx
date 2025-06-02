import { FacebookIcon, TwitterIcon, InstagramIcon, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="bg-white pt-10 pb-6 px-2 sm:px-4 border-t border-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 bg-white border-2 border-purple-700 rounded-lg flex items-center justify-center mr-3 shadow-lg shadow-purple-200">
                <img
                  src="/assets/favicon/favicon.ico"
                  alt="Institute Logo"
                  className="w-9 h-9 object-contain"
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-purple-900">Zainul Abideen Technical Training Centre</span>
            </div>
            <p className="text-black-600 text-base sm:text-lg mb-3">
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
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="#" className="text-black-600 text-base hover:text-purple-700 transition-colors">About Us</a></li>
              <li><a href="#" className="text-black-600 text-base hover:text-purple-700 transition-colors">Our Courses</a></li>
              <li><a href="#" className="text-black-600 text-base hover:text-purple-700 transition-colors">Gallery</a></li>
              <li><a href="#" className="text-black-600 text-base hover:text-purple-700 transition-colors">Events</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Support</h3>
            <ul className="space-y-1">
              <li><a href="#" className="text-black-600 text-base hover:text-purple-700 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-black-600 text-base hover:text-purple-700 transition-colors">FAQs</a></li>
              <li><a href="#" className="text-black-600 text-base hover:text-purple-700 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-black-600 text-base hover:text-purple-700 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-black-600 text-base hover:text-purple-700 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-purple-700 mr-2 mt-0.5" />
                <span className="text-base text-black-600">Shalteng Srinagar (190017), India</span>
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