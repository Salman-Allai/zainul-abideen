import React from 'react';
import BackToHome from '../components/BackToHome';

const Contact: React.FC = () => (
  <div className="relative flex flex-col items-center justify-center min-h-[60vh] bg-white pt-2 px-2 sm:px-4">
    <BackToHome />
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-900 mb-4 mt-8 text-center">Contact us</h1>
    <p className="text-lg sm:text-xl md:text-2xl text-black-700 mb-8 text-center max-w-xl">
      We'd love to hear from you! Fill out the form below or reach us directly at{' '}
      <a
        href="mailto:zacvtp@gmail.com"
        className="text-purple-700 font-semibold underline hover:text-purple-900"
      >
          info@zainulabideen.in
      </a>
      
    </p>

    {/* Contact Details */}
    <div className="w-full max-w-md bg-gray-100 rounded-lg shadow p-4 sm:p-6 mb-8">
      <div className="mb-4">
        <span className="font-bold text-base sm:text-lg text-black">Address:</span>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Zainul+Abideen+Technical+Training+Centre,+Near+Baghdadi+Restaurant,+Shalteng,+Srinagar,+Jammu+and+Kashmir+190017,+India"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-base sm:text-lg text-purple-700 hover:text-purple-900 underline mt-1"
        >
          View on Google Maps
        </a>
        <div className="text-black text-base sm:text-lg mt-1">
          Zainul Abideen Technical Training Centre,<br />
          Near Baghdadi Restaurant, Shalteng,<br />
          Srinagar, Jammu and Kashmir 190017, India
        </div>
      </div>
      <div className="mb-2">
        <span className="font-bold text-black text-base sm:text-lg">Phone:</span>
        <a
          href="tel:+917006280132"
          className="ml-2 text-base sm:text-lg text-purple-700 hover:text-purple-900 underline"
        >
          +91 7006280132
        </a>
      </div>
      <div>
        <span className="font-bold text-black text-base sm:text-lg">Email:</span>
        <a
          href="mailto:zacvtp@gmail.com"
          className="ml-2 text-base sm:text-lg text-purple-700 hover:text-purple-900 underline"
        >
          zacvtp@gmail.com
        </a>
      </div>
      <div className="mt-4">
        <a
          href="https://www.google.com/maps/search/?api=1&query=Zainul+Abideen+Technical+Training+Centre,+Near+Baghdadi+Restaurant,+Shalteng,+Srinagar,+Jammu+and+Kashmir+190001,+India"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src="https://maps.googleapis.com/maps/api/staticmap?center=34.083658,74.797368&zoom=15&size=600x200&markers=color:purple%7C34.083658,74.797368&key=YOUR_GOOGLE_MAPS_API_KEY"
            alt="Institute Location Map"
            className="w-full h-40 sm:h-48 object-cover rounded-lg border cursor-pointer"
            style={{ minHeight: 120 }}
            onError={e => (e.currentTarget.style.display = 'none')}
          />
        </a>
      </div>
    </div>

    <form className="w-full max-w-md bg-gray-50 p-4 sm:p-6 rounded-lg shadow space-y-4">
      <div>
        <label className="block text-black-700 font-medium mb-2 text-base sm:text-xl" htmlFor="name">
          Name
        </label>
        <input
          className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-purple-700 rounded focus:outline-none focus:border-purple-900 transition-colors text-base sm:text-xl"
          type="text"
          id="name"
          placeholder="Your Name"
        />
      </div>
      <div>
        <label className="block text-black-700 font-medium mb-2 text-base sm:text-xl" htmlFor="email">
          Email
        </label>
        <input
          className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-purple-700 rounded focus:outline-none focus:border-purple-900 transition-colors text-base sm:text-xl"
          type="email"
          id="email"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label className="block text-black-700 font-medium mb-2 text-base sm:text-xl" htmlFor="message">
          Message
        </label>
        <textarea
          className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-purple-700 rounded focus:outline-none focus:border-purple-900 transition-colors text-base sm:text-xl"
          id="message"
          rows={4}
          placeholder="Your message"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 sm:py-2.5 bg-purple-700 text-white font-bold rounded-lg hover:bg-purple-900 transition-colors text-base sm:text-lg"
      >
        Send Message
      </button>
    </form>
  </div>
);

export default Contact;