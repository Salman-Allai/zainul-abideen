import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Replace this with your email sending logic (e.g., EmailJS, Formspree, or backend API)
    // Example using EmailJS:
    emailjs.send(
      'service_s1ibxni',
      'template_4wlx5pn',
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        to_email: 'salmanallaie@gmail.com', // Add this line
      },
      'XGR8l6OrIwqnQxzwN'
    ).then(
      () => {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
      },
      () => setStatus('error')
    );
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[60vh] bg-white pt-2 px-2 sm:px-4">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-900 mb-4 mt-8 text-center">Contact us</h1>
      <p className="text-sm sm:text-base md:text-lg text-black-700 mb-8 text-center max-w-xl">
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
          <span className="font-bold text-sm sm:text-base text-black">Address:</span>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Zainul+Abideen+Technical+Training+Centre,+Near+Baghdadi+Restaurant,+Shalteng,+Srinagar,+Jammu+and+Kashmir+190017,+India"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm sm:text-base text-purple-700 hover:text-purple-900 underline mt-1"
          >
            View on Google Maps
          </a>
          <div className="text-black text-sm sm:text-base mt-1">
            Zainul Abideen Technical Training Centre,<br />
            Near Baghdadi Restaurant, Shalteng,<br />
            Srinagar, Jammu and Kashmir 190017, India
          </div>
        </div>
        <div className="mb-2">
          <span className="font-bold text-black text-sm sm:text-base">Phone:</span>
          <a
            href="tel:+917006280132"
            className="ml-2 text-sm sm:text-base text-purple-700 hover:text-purple-900 underline"
          >
            +91 7006280132
          </a>
        </div>
        <div>
          <span className="font-bold text-black text-sm sm:text-base">Email:</span>
          <a
            href="mailto:zacvtp@gmail.com"
            className="ml-2 text-sm sm:text-base text-purple-700 hover:text-purple-900 underline"
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
              className="w-full h-32 sm:h-40 object-cover rounded-lg border cursor-pointer"
              style={{ minHeight: 100 }}
              onError={e => (e.currentTarget.style.display = 'none')}
            />
          </a>
        </div>
      </div>

      <form
        className="w-full max-w-sm bg-gray-50 p-3 sm:p-4 rounded-lg shadow space-y-3 mt-[-24px]"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="block text-black-700 font-medium mb-2 text-xs sm:text-sm" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-2 py-1.5 sm:px-3 sm:py-2 border-2 border-purple-700 rounded focus:outline-none focus:border-purple-900 transition-colors text-xs sm:text-sm"
            type="text"
            id="name"
            placeholder="Your Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block text-black-700 font-medium mb-2 text-xs sm:text-sm" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-2 py-1.5 sm:px-3 sm:py-2 border-2 border-purple-700 rounded focus:outline-none focus:border-purple-900 transition-colors text-xs sm:text-sm"
            type="email"
            id="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block text-black-700 font-medium mb-2 text-xs sm:text-sm" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full px-2 py-1.5 sm:px-3 sm:py-2 border-2 border-purple-700 rounded focus:outline-none focus:border-purple-900 transition-colors text-xs sm:text-sm"
            id="message"
            rows={4}
            placeholder="Your message"
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-1.5 sm:py-2 bg-purple-700 text-white font-bold rounded-lg hover:bg-purple-900 transition-colors text-xs sm:text-sm"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
        {status === 'sent' && (
          <div className="text-green-600 text-center mt-2 text-xs">Message sent successfully!</div>
        )}
        {status === 'error' && (
          <div className="text-red-600 text-center mt-2 text-xs">Failed to send message. Please try again.</div>
        )}
      </form>
    </div>
  );
};

export default Contact;