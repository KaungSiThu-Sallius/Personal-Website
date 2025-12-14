
import React from 'react';
import { Download, ChevronDown } from 'lucide-react';
import { USER_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative flex items-center justify-center pt-32 pb-24 md:pb-32 lg:min-h-screen overflow-hidden border-b border-slate-200 bg-slate-50/50">

      {/* Soft Background Gradient Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-sage-200/20 rounded-full blur-3xl transform translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-slate-200/30 rounded-full blur-3xl transform -translate-x-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex flex-col items-center">
          {/* Profile Image Wrapper */}
          <div className="relative mb-8 group">
            <div className="absolute inset-0 bg-sage-400 rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <img
              src={USER_INFO.profileImage}
              alt={USER_INFO.name}
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-800 mb-4 tracking-tight">
            Hi, I'm {USER_INFO.name}.
          </h1>

          <p className="text-xl md:text-2xl text-slate-500 mb-6 font-light max-w-4xl mx-auto">
            {USER_INFO.title}
          </p>

          <p className="text-slate-600 mb-10 max-w-xl mx-auto leading-relaxed">
            {USER_INFO.about}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={USER_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-sage-400 hover:bg-sage-500 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 border border-slate-300 text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 transition-all shadow-sm hover:shadow-md"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400">
        <ChevronDown size={28} />
      </div>
    </section>
  );
};

export default Hero;
