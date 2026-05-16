import React from "react";
import { LearningData } from "../assets/assets";

const Learning = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">

      <h2 className="text-3xl font-bold text-center mb-4">
        Learning <span className="text-purple">Journey</span>
      </h2>

      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
        My continuous learning path in frontend development and project building.
      </p>

      {/* Timeline */}
      <div className="relative border-l-2 border-purple pl-6 space-y-10">

        {LearningData.map((item, index) => (
          <div key={index} className="relative">

            {/* Dot */}
            <span className="absolute -left-[34px] top-2 w-4 h-4 bg-purple rounded-full"></span>

            {/* Card */}
            <div className="bg-dark-300 p-6 rounded-2xl shadow-md hover:-translate-y-1 transition duration-300">

              <div className="flex justify-between items-start flex-wrap gap-2">

                <h3 className="text-xl font-semibold text-white">
                  {item.role}
                </h3>

                <span className="text-sm px-3 py-1 rounded-full bg-dark-400 text-purple">
                  {item.duration}
                </span>

              </div>

              <p className="text-gray-400 mt-1">{item.company}</p>

              <p className="text-gray-300 mt-3 leading-relaxed">
                {item.description}
              </p>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Learning;