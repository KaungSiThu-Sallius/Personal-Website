
import React, { useState } from 'react';
import { Download, ChevronDown, X, BarChart2, BrainCircuit } from 'lucide-react';
import { USER_INFO } from '../constants';

const ResumeModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8"
        style={{ animation: 'modalFadeIn 0.25s ease-out' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal header */}
        <div className="text-center mb-7">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sage-100 mb-4">
            <Download className="text-sage-500 h-7 w-7" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-800 mb-1">Download Resume</h2>
          <p className="text-slate-500 text-sm">Choose the resume that fits your needs</p>
        </div>

        {/* Resume options */}
        <div className="flex flex-col gap-4">
          <a
            href="/Data Analyst Resume (Kaung Si Thu).pdf"
            download="Data Analyst Resume - Kaung Si Thu.pdf"
            className="group flex items-center gap-4 p-4 rounded-xl border-2 border-slate-200 hover:border-sage-400 hover:bg-sage-50 transition-all duration-200 cursor-pointer"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
              <BarChart2 className="h-6 w-6 text-blue-500" />
            </div>
            <div className="flex-1 text-left">
              <p className="font-semibold text-slate-800 group-hover:text-sage-600 transition-colors">Data Analyst Resume</p>
              <p className="text-xs text-slate-400 mt-0.5">Analytics, SQL, dashboards & insights</p>
            </div>
            <Download className="h-4 w-4 text-slate-300 group-hover:text-sage-400 transition-colors flex-shrink-0" />
          </a>

          <a
            href="/Data Science Resume (Kaung Si Thu).pdf"
            download="Data Science Resume - Kaung Si Thu.pdf"
            className="group flex items-center gap-4 p-4 rounded-xl border-2 border-slate-200 hover:border-sage-400 hover:bg-sage-50 transition-all duration-200 cursor-pointer"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-50 group-hover:bg-purple-100 flex items-center justify-center transition-colors">
              <BrainCircuit className="h-6 w-6 text-purple-500" />
            </div>
            <div className="flex-1 text-left">
              <p className="font-semibold text-slate-800 group-hover:text-sage-600 transition-colors">Data Scientist Resume</p>
              <p className="text-xs text-slate-400 mt-0.5">ML, deep learning, modeling & research</p>
            </div>
            <Download className="h-4 w-4 text-slate-300 group-hover:text-sage-400 transition-colors flex-shrink-0" />
          </a>
        </div>

        <p className="text-center text-xs text-slate-400 mt-6">Click outside to close</p>
      </div>

      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; transform: scale(0.95) translateY(-8px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
};

const Hero: React.FC = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);

  return (
    <>
      {showResumeModal && <ResumeModal onClose={() => setShowResumeModal(false)} />}

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
              <button
                onClick={() => setShowResumeModal(true)}
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-sage-400 hover:bg-sage-500 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </button>
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
    </>
  );
};

export default Hero;
