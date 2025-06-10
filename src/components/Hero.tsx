import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const [showImageModal, setShowImageModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [form, setForm] = useState({
    name: '',
    fatherName: '',
    motherName: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    occupation: '',
    gender: '',
    category: '',
    maritalStatus: '',
    dob: '',
  });

  return (
    <>
      <section className="pt-4 sm:pt-6 md:pt-10 pb-8 md:pb-16 lg:pt-10 lg:pb-24 px-2 sm:px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Hero Text */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 mt-0 sm:mt-0">
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
                  View new courses
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
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-16 sm:mt-20">
              <div className="relative">
                <div className="absolute top-4 -right-4 w-56 h-56 sm:w-72 sm:h-72 bg-purple-600 rounded-tr-3xl rounded-bl-3xl z-0"></div>
                <img
                  src="/assets/admission.jpg"
                  alt="Student with laptop"
                  className="w-56 xs:w-72 sm:w-80 md:w-96 lg:w-[28rem] h-auto object-cover rounded-xl shadow-xl z-10 relative border-4 border-white cursor-pointer"
                  style={{ background: '#fff' }}
                  onClick={() => setShowImageModal(true)}
                />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 bg-indigo-200 rounded-full opacity-70 z-0"></div>
              </div>
            </div>
          </div>

          {/* Admissions Banner */}
          <div className="w-full flex justify-center z-30 relative">
            <button
              className="bg-green-600 text-white font-bold px-6 py-2 rounded-full shadow-lg animate-bounce mt-4 focus:outline-none"
              onClick={() => setShowFormModal(true)}
              type="button"
            >
              Admissions Open for 2025 – Apply Now!
            </button>
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

      {/* Form Modal */}
      {showFormModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-start justify-center z-50"
          style={{ paddingTop: '110px' }} // Increased padding for mobile
          onClick={() => setShowFormModal(false)}
        >
          <form
            className="bg-white rounded-xl p-4 sm:p-6 w-[98vw] max-w-sm shadow-2xl flex flex-col gap-4 max-h-[calc(100vh-110px)] overflow-y-auto mt-0"
            onClick={e => e.stopPropagation()}
            onSubmit={e => {
              e.preventDefault();
              const phoneNumber = "917006280132";
              const text =
                `Admission Enquiry:%0A` +
                `Name: ${form.name}%0A` +
                `Father's Name: ${form.fatherName}%0A` +
                `Mother's Name: ${form.motherName}%0A` +
                `Email: ${form.email}%0A` +
                `Phone: ${form.phone}%0A` +
                `Address: ${form.address}%0A` +
                `Education: ${form.education}%0A` +
                `Gender: ${form.gender}%0A` +
                `Category: ${form.category}%0A` +
                `Marital Status: ${form.maritalStatus}%0A` +
                `DOB: ${form.dob}`;
              window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
              setShowFormModal(false);
            }}
          >
            <h2 className="text-lg font-bold mb-2 text-purple-900 text-center">Admission Enquiry</h2>
            <input
              type="text"
              placeholder="Your Name"
              className="border rounded px-3 py-2"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Father's Name"
              className="border rounded px-3 py-2"
              value={form.fatherName}
              onChange={e => setForm({ ...form, fatherName: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Mother's Name"
              className="border rounded px-3 py-2"
              value={form.motherName}
              onChange={e => setForm({ ...form, motherName: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="border rounded px-3 py-2"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border rounded px-3 py-2"
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Address"
              className="border rounded px-3 py-2"
              value={form.address}
              onChange={e => setForm({ ...form, address: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Educational Qualification"
              className="border rounded px-3 py-2"
              value={form.education}
              onChange={e => setForm({ ...form, education: e.target.value })}
              required
            />
            <select
              className="border rounded px-3 py-2"
              value={form.gender}
              onChange={e => setForm({ ...form, gender: e.target.value })}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <select
              className="border rounded px-3 py-2"
              value={form.category}
              onChange={e => setForm({ ...form, category: e.target.value })}
              required
            >
              <option value="">Select Category</option>
              <option value="General">General</option>
              <option value="OBC">OBC</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
              <option value="Other">Other</option>
            </select>
            <select
              className="border rounded px-3 py-2"
              value={form.maritalStatus}
              onChange={e => setForm({ ...form, maritalStatus: e.target.value })}
              required
            >
              <option value="">Marital Status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="date"
              placeholder="Date of Birth"
              className="border rounded px-3 py-2"
              value={form.dob}
              onChange={e => setForm({ ...form, dob: e.target.value })}
              required
            />
            <div className="flex flex-col sm:flex-row justify-end gap-2">
              <button
                type="button"
                className="px-4 py-2 rounded bg-gray-200 text-gray-700"
                onClick={() => setShowFormModal(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded bg-green-600 text-white font-bold hover:bg-green-700"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Hero;