
import React from 'react';
import { USER_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <span className="font-serif text-lg font-semibold text-slate-700 block">
            {USER_INFO.name}
          </span>
          <p className="text-slate-400 text-sm mt-1">
            Data Scientist & Analyst
          </p>
        </div>

        <div className="text-slate-400 text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
