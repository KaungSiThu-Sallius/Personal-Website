import React from 'react';
import { Mail, Linkedin, ArrowUpRight, Github } from 'lucide-react';
import { USER_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      {/* Decorative circle */}
      <div className="absolute -right-20 top-20 w-64 h-64 bg-sage-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute -left-20 bottom-20 w-64 h-64 bg-slate-200 rounded-full opacity-30 blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-800 mb-6">
          Let's work together.
        </h2>
        <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto">
          Interested in discussing data strategy, machine learning, or potential opportunities? I'm always open to connecting.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href={`mailto:${USER_INFO.email}`}
            className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-slate-800 text-white rounded-xl font-medium hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl group"
          >
            <Mail className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
            <span>Email Me</span>
          </a>

          <a
            href={USER_INFO.linkedin}
            target="_blank"
            className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-[#0077b5] text-white rounded-xl font-medium hover:bg-[#006399] transition-all shadow-lg hover:shadow-xl group"
          >
            <Linkedin className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
            <span>LinkedIn</span>
            <ArrowUpRight className="ml-2 h-4 w-4 opacity-70" />
          </a>

          <a
            href={USER_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-[#24292e] text-white rounded-xl font-medium hover:bg-[#1b1f23] transition-all shadow-lg hover:shadow-xl group"
          >
            <Github className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
            <span>GitHub</span>
            <ArrowUpRight className="ml-2 h-4 w-4 opacity-70" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
