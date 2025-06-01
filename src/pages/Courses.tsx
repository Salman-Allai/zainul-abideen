import React from 'react';
import BackToHome from '../components/BackToHome';

const courseList = [
  {
    title: "Fundamentals of Information Technology",
    description: "Build a strong foundation in IT concepts, computer basics, and essential digital skills for all fields.",
    icon: "💻",
  },
  {
    title: "Internet Technology and Web Designing",
    description: "Learn how the internet works and create attractive, responsive websites using modern web technologies.",
    icon: "🌐",
  },
  {
    title: "Financial Accounting Using Tally & Personality Development",
    description: "Master Tally for accounting and enhance your communication and professional skills for the workplace.",
    icon: "📊",
  },
  {
    title: "Emerging Trends in IT",
    description: "Stay updated with the latest advancements and innovations shaping the future of information technology.",
    icon: "🚀",
  },
  {
    title: "Multilingual DTP",
    description: "Design and publish documents in multiple languages using advanced desktop publishing tools.",
    icon: "📝",
  },
  {
    title: "Artificial Intelligence and Machine Learning Python",
    description: "Explore AI and ML concepts and get hands-on experience with Python for real-world applications.",
    icon: "🤖",
  },
  {
    title: "Practical & Project Work",
    description: "Apply your knowledge through practical assignments and projects to build confidence and expertise.",
    icon: "📁",
  },
];

const Courses: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 via-white to-purple-200 px-2 py-8 sm:py-12">
    <BackToHome />

    <main className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center flex-1">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-800 text-center mb-6 sm:mb-10 drop-shadow-lg">
        Our Courses
      </h1>
      <p className="text-base sm:text-lg md:text-2xl text-gray-800 text-center font-semibold mb-8 sm:mb-12 max-w-2xl">
        Explore our wide range of computer and IT courses designed for all skill levels. Whether you are a beginner or looking to advance your career, we have something for everyone!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
        {courseList.map((course, idx) => (
          <div
            key={idx}
            className="bg-white/90 rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <div className="text-4xl sm:text-5xl mb-3">{course.icon}</div>
            <h2 className="text-xl sm:text-2xl font-bold text-purple-700 mb-1 text-center">{course.title}</h2>
            <p className="text-base sm:text-lg text-black text-center">{course.description}</p>
          </div>
        ))}
      </div>
    </main>
  </div>
);

export default Courses;