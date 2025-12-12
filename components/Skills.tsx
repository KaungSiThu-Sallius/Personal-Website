import React from 'react';
import { SKILLS } from '../constants';
import { Database, Code, BarChart3, PieChart } from 'lucide-react';

const Skills: React.FC = () => {
  // Helper to get icon based on category (optional visual enhancement)
  const getIcon = (category: string) => {
    switch (category) {
      case 'Core': return <Code size={16} />;
      case 'Tools': return <Database size={16} />;
      case 'Analysis': return <BarChart3 size={16} />;
      default: return <PieChart size={16} />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-slate-800 mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-sage-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            A comprehensive toolkit designed for end-to-end data science workflows.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {SKILLS.map((skill) => (
              <div 
                key={skill.name}
                className="group relative inline-flex items-center px-6 py-3 rounded-full border border-slate-200 bg-slate-50 hover:border-sage-300 hover:shadow-md transition-all duration-300 cursor-default"
              >
                <span className="text-sage-400 mr-2 group-hover:text-sage-500 transition-colors">
                  {getIcon(skill.category)}
                </span>
                <span className="text-slate-700 font-medium">{skill.name}</span>
                <span className="absolute -top-2 -right-2 w-3 h-3 bg-sage-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;