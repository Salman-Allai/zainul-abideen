import React from 'react';
import BackToHome from '../components/BackToHome';

const About: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-white px-2 py-6 sm:py-10">
    <BackToHome />

    <main className="w-full max-w-5xl mx-auto flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-700 text-center mb-8 sm:mb-10">
        About Us
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-black text-center font-semibold mb-8 sm:mb-12 max-w-4xl">
        <span className="text-purple-700 font-bold">
          ZAINUL ABIDEEN TECHNICAL TRAINING CENTRE
        </span>{' '}
        (An Institute of Technology, Management & Skill Development) is a premier and fast-growing institution established in 1999. We have earned a reputation for providing quality and timely Information Technology training, Management education, and skill enhancement for IT-enabled services.
      </p>

      <section className="mb-8 sm:mb-12 w-full">
        <h2 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-3 sm:mb-4 text-center">Our Vision</h2>
        <p className="text-base sm:text-xl text-black font-medium text-center">
          We aspire to contribute to society by delivering quality IT training, education, and services that meet the global standards of the corporate industry. Our mission is to empower individuals with the skills and knowledge needed to excel in today’s digital world.
        </p>
      </section>

      <section className="mb-8 sm:mb-12 w-full">
        <h2 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-3 sm:mb-4 text-center">Accreditations & Affiliations</h2>
        <ul className="list-disc list-inside text-base sm:text-xl text-black font-medium space-y-2 max-w-2xl mx-auto">
          <li>Accredited by National Institute of Electronics and Information Technology (NIELIT), Govt. of India</li>
          <li>Approved Vocational Training Provider (VTP) by Director General of Employment and Training (DGE&T)</li>

        </ul>
      </section>

      <section className="mb-8 sm:mb-12 w-full">
        <h2 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-3 sm:mb-4 text-center">What Sets Us Apart?</h2>
        <ul className="list-disc list-inside text-base sm:text-xl text-black font-medium space-y-2 max-w-2xl mx-auto">
          <li>Globally competitive manpower through skill enhancement</li>
          <li>Focus on spreading education among the poor and socially backward sections</li>
          <li>Promoted by professionals with strong industry ties</li>
          <li>Regular placement drives, job fairs, and career support</li>
        </ul>
      </section>

      <section className="mb-8 sm:mb-12 w-full">
        <h2 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-3 sm:mb-4 text-center">Our Achievements</h2>
        <p className="text-base sm:text-xl text-black font-medium text-center mb-3">
          Over the last decade, we have successfully trained more than <span className="font-bold text-purple-700">4000 candidates</span>, many of whom are now employed in government, semi-government, and private sector organizations.
        </p>
        <p className="text-base sm:text-xl text-black font-medium text-center">
          We have provided specialized IT training to officials from Doordarshan, Radio Kashmir, Srinagar Municipal Corporation, Health and Medical Education, Planning and Development, Accountant General’s Office, and more.
        </p>
        <p className="text-base sm:text-xl text-black font-medium text-center mt-3">
          Our commitment to social upliftment is reflected in our job-oriented programs for underprivileged candidates, helping them build confidence, prepare for interviews, and secure employment.
        </p>
      </section>

      <section className="mb-8 sm:mb-12 w-full">
        <h2 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-3 sm:mb-4 text-center">Join the Revolution</h2>
        <p className="text-base sm:text-xl text-black font-medium text-center">
          In today’s world, high-quality information handling skills are essential for career success. We bridge the gap between demand and supply of quality IT and management professionals by offering top-notch training, education, and solutions. Become part of this revolution and stay ahead with <span className="text-purple-700 font-bold">Zainul Abideen Technical Training Centre</span>.
        </p>
      </section>
    </main>
  </div>
);

export default About;