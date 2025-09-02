// src/components/skills/SkillCard.js
import React from "react";

const SkillCard = ({ category }) => {
  const colorMap = {
    blue: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
    green: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400",
    purple: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400",
    orange: "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400",
    yellow: "bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400",
    cyan: "bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-400",
    red: "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400",
    gray: "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
  };

  const renderIcon = (icon, size = "text-2xl") => {
    if (React.isValidElement(icon)) {
      return React.cloneElement(icon, { className: `${size} text-inherit` });
    }
    return null;
  };

  return (
    <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg hover-lift border border-gray-200 dark:border-gray-700">
      <div className="text-center mb-6">
        <div
          className={`${colorMap[category.color]} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}
        >
          {renderIcon(category.icon, "text-3xl")}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {category.title}
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {category.skills.map((skill, index) => (
          <div key={index} className="skill-item text-center">
            <div
              className={`tech-icon ${colorMap[skill.color]} rounded-lg p-3 mb-2 flex items-center justify-center`}
            >
              {renderIcon(skill.icon)}
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
