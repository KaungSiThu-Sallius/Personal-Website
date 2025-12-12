
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-slate-800 mb-4">Academic Journey</h2>
          <div className="w-20 h-1 bg-sage-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Building a strong theoretical foundation for practical data science applications.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line (Desktop only) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200 top-0"></div>
          
          {/* Vertical Line (Mobile) */}
          <div className="md:hidden absolute left-6 h-full w-0.5 bg-slate-200 top-0"></div>

          <div className="space-y-12">
            {EDUCATION.map((edu, index) => (
              <div 
                key={edu.id} 
                className={`relative flex flex-col md:flex-row items-center md:justify-between ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                
                {/* Mobile Dot */}
                <div className="md:hidden absolute left-6 transform -translate-x-1/2 w-4 h-4 bg-sage-400 rounded-full border-4 border-white shadow-sm z-10 top-0"></div>

                {/* Content Side */}
                <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
                   <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative">
                      {/* Desktop Dot */}
                      <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-sage-400 rounded-full border-4 border-slate-50 shadow-sm z-10 
                        ${index % 2 !== 0 ? '-left-[11.5%] lg:-left-[12.5%]' : '-right-[11.5%] lg:-right-[12.5%]'}`}>
                      </div>

                      <div className={`flex items-center text-sage-500 mb-2 text-sm font-medium ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                        <GraduationCap size={16} className="mr-2" />
                        {edu.institution}
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 mb-1">{edu.degree}</h3>
                      <div className={`flex items-center text-slate-400 text-sm mb-4 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                        <Calendar size={14} className="mr-2" />
                        {edu.period}
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {edu.description}
                      </p>
                   </div>
                </div>

                {/* Empty Spacer Side */}
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
