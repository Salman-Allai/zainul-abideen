import React from 'react';

interface CourseCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, icon, description, color }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 sm:p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
      {/* Icon */}
      <div className={`text-3xl sm:text-4xl mb-2 ${color}`}>
        {icon}
      </div>
      
      {/* Content */}
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-700 mb-1">{title}</h3>
      <p className="text-base sm:text-lg text-gray-700">{description}</p>
    </div>
  );
};

export default CourseCard;