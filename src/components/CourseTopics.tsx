import { 
  LayoutGrid, Globe, Calculator, TrendingUp, Languages, Brain, ClipboardList 
} from 'lucide-react';

const courseCategories = [
  {
    id: 1,
    title: 'Fundamentals of Information Technology',
    icon: <LayoutGrid className="w-6 h-6" />,
    description: 'Build a strong foundation in IT concepts, computer basics, and essential digital skills for all fields.',
    color: 'bg-purple-700 text-white'
  },
  {
    id: 2,
    title: 'Internet Technology and Web Designing',
    icon: <Globe className="w-6 h-6" />,
    description: 'Learn how the internet works and create attractive, responsive websites using modern web technologies.',
    color: 'bg-purple-700 text-white'
  },
  {
    id: 3,
    title: 'Financial Accounting Using Tally & Personality Development',
    icon: <Calculator className="w-6 h-6" />,
    description: 'Master Tally for accounting and enhance your communication and professional skills for the workplace.',
    color: 'bg-purple-700 text-white'
  },
  {
    id: 4,
    title: 'Emerging Trends in IT',
    icon: <TrendingUp className="w-6 h-6" />,
    description: 'Stay updated with the latest advancements and innovations shaping the future of information technology.',
    color: 'bg-purple-700 text-white'
  },
  {
    id: 5,
    title: 'Multilingual DTP',
    icon: <Languages className="w-6 h-6" />,
    description: 'Design and publish documents in multiple languages using advanced desktop publishing tools.',
    color: 'bg-purple-700 text-white'
  },
  {
    id: 6,
    title: 'Artificial Intelligence and Machine Learning Python',
    icon: <Brain className="w-6 h-6" />,
    description: 'Explore AI and ML concepts and get hands-on experience with Python for real-world applications.',
    color: 'bg-purple-700 text-white'
  },
  {
    id: 7,
    title: 'Practical & Project Work',
    icon: <ClipboardList className="w-6 h-6" />,
    description: 'Apply your knowledge through practical assignments and projects to build confidence and expertise.',
    color: 'bg-purple-700 text-white'
  }
];

const CourseTopics = () => {
  return (
    <section id="course-topics" className="py-10 px-2 sm:px-4 md:px-6">
      <div className="container mx-auto">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-800 text-center mb-6">
          Explore Our Course Topics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {courseCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl shadow p-4 sm:p-5 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-xl sm:text-2xl mb-2">{category.icon}</div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-purple-700 mb-1">{category.title}</h3>
              <p className="text-xs sm:text-sm md:text-base text-black-700">{category.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          {/* <button
            onClick={() => {
              const section = document.getElementById('course-topics');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-purple-700 text-white text-base sm:text-lg px-6 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors"
          >
            View Course
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default CourseTopics;
