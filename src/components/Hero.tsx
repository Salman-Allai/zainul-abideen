import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const [showImageModal, setShowImageModal] = useState(false);

  return (
    <>
      {/* Welcome Text */}
      <div className="w-full bg-purple-700 py-3 flex justify-center items-center mb-4 xs:mb-6">
        <h2 className="text-white text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-center">
          Welcome to Zainul Abideen Technical Training Centre
        </h2>
      </div>

      <section className="pt-16 sm:pt-12 md:pt-20 pb-8 md:pb-16 lg:pt-36 lg:pb-24 px-2 sm:px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Hero Text */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 mt-12 sm:mt-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-900 mb-4 leading-tight text-center lg:text-left">
                Learn with our
                <br className="hidden sm:block" /> expert teachers.
              </h1>
              <p
                className="text-black-600 mb-8 max-w-md text-base sm:text-lg md:text-xl text-center lg:text-left"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Lighting the digital spark in the heart of Kashmir.
              </p>

              <div className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-start">
                <button
                  className="bg-purple-700 text-white text-[10px] xs:text-xs sm:text-sm px-3 py-1.5 rounded-md flex items-center justify-center group hover:bg-purple-800 transition-all"
                  onClick={() => {
                    const section = document.getElementById('course-topics');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  View our new courses
                  <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                </button>
                <a
                  href="/assets/courses.pdf"
                  download
                  className="bg-white text-purple-700 border-2 border-purple-700 text-[10px] xs:text-xs sm:text-sm px-3 py-1.5 rounded-md flex items-center justify-center font-semibold hover:bg-purple-700 hover:text-white transition-all"
                  style={{ textDecoration: 'none' }}
                  aria-label="Download Course PDF"
                >
                  Download Course PDF
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
              <div className="relative">
                <div className="absolute top-4 -right-4 w-48 h-48 sm:w-64 sm:h-64 bg-purple-600 rounded-tr-3xl rounded-bl-3xl z-0"></div>
                <img
                  src="/assets/admission.jpg"
                  alt="Student with laptop"
                  className="w-48 xs:w-56 sm:w-72 md:w-80 lg:w-96 h-auto object-cover rounded-xl shadow-xl z-10 relative border-4 border-white cursor-pointer"
                  style={{ background: '#fff' }}
                  onClick={() => setShowImageModal(true)}
                />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 sm:w-32 sm:h-32 bg-indigo-200 rounded-full opacity-70 z-0"></div>
              </div>
            </div>
          </div>

          {/* Admissions Banner */}
          <div className="w-full flex justify-center z-30 relative">
            <div className="bg-green-600 text-white font-bold px-6 py-2 rounded-full shadow-lg animate-bounce mt-4">
              Admissions Open for 2025 – Apply Now!
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {showImageModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setShowImageModal(false)}
        >
          <img
            src="/assets/admission.jpg"
            alt="Student with laptop enlarged"
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl border-4 border-white"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Hero;