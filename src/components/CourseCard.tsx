import React from 'react';

interface CourseCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, icon, description, color }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 sm:p-5 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
      {/* Icon */}
      <div className={`text-xl sm:text-2xl mb-2 ${color}`}>
        {icon}
      </div>
      
      {/* Content */}
      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-purple-700 mb-1">{title}</h3>
      <p className="text-xs sm:text-sm md:text-base text-gray-700">{description}</p>
    </div>
  );
};

export default CourseCard;