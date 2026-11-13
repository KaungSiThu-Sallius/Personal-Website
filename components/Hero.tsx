
import React, { useState, useEffect, useRef } from 'react';
import { Download, ChevronDown, X, BarChart2, BrainCircuit, ArrowRight } from 'lucide-react';
import { USER_INFO } from '../constants';
import { PortfolioTrack } from '../types';

const ResumeModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previousActiveElement = document.activeElement;
    const dialog = dialogRef.current;
    const focusableElements = dialog?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    focusableElements?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (previousActiveElement instanceof HTMLElement) previousActiveElement.focus();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8"
        style={{ animation: 'modalFadeIn 0.25s ease-out' }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-dialog-title"
      >
        {/* Close button */}
        <button
          type="button"
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
          <h2 id="resume-dialog-title" className="text-2xl font-serif font-bold text-slate-800 mb-1">Download Resume</h2>
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

        <p className="text-center text-xs text-slate-400 mt-6">Press Escape or click outside to close</p>
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

const Hero: React.FC<{ onSelectTrack: (track: PortfolioTrack) => void }> = ({ onSelectTrack }) => {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const selectTrack = (track: PortfolioTrack) => {
    onSelectTrack(track);
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

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
                width="1122"
                height="1402"
                fetchPriority="high"
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-800 mb-4 tracking-tight">
              Hi, I'm {USER_INFO.name}.
            </h1>

            <p className="text-xl md:text-2xl text-slate-500 mb-6 font-light max-w-4xl mx-auto">
              Data Analyst <span aria-hidden="true">·</span> Data Scientist
            </p>

            <p className="text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Turning complex data into useful insights—from SQL analysis and dashboards to predictive models and machine learning.
            </p>

            <div className="grid w-full max-w-4xl grid-cols-1 gap-4 text-left md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <BarChart2 aria-hidden="true" size={22} />
                  </span>
                  <div>
                    <h2 className="font-semibold text-slate-800">Data Analyst</h2>
                    <p className="text-sm text-slate-500">SQL · Tableau · Excel</p>
                  </div>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-slate-600">Explore dashboards, business analysis, and data-driven insights.</p>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => selectTrack('analyst')}
                    className="inline-flex items-center font-semibold text-sage-700 hover:text-sage-900"
                  >
                    Explore analyst projects <ArrowRight aria-hidden="true" size={16} className="ml-1" />
                  </button>
                  <a
                    href="/Data Analyst Resume (Kaung Si Thu).pdf"
                    download="Data Analyst Resume - Kaung Si Thu.pdf"
                    className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-sage-700"
                  >
                    <Download aria-hidden="true" size={15} className="mr-1" /> Resume
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                    <BrainCircuit aria-hidden="true" size={22} />
                  </span>
                  <div>
                    <h2 className="font-semibold text-slate-800">Data Scientist</h2>
                    <p className="text-sm text-slate-500">Python · ML · AI</p>
                  </div>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-slate-600">Explore predictive modeling, machine learning, and data products.</p>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => selectTrack('scientist')}
                    className="inline-flex items-center font-semibold text-sage-700 hover:text-sage-900"
                  >
                    Explore data science projects <ArrowRight aria-hidden="true" size={16} className="ml-1" />
                  </button>
                  <a
                    href="/Data Science Resume (Kaung Si Thu).pdf"
                    download="Data Science Resume - Kaung Si Thu.pdf"
                    className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-sage-700"
                  >
                    <Download aria-hidden="true" size={15} className="mr-1" /> Resume
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-slate-500">
              <span>Currently pursuing an MSc in Data Science</span>
              <span aria-hidden="true" className="hidden sm:inline">·</span>
              <a href="#contact" className="font-medium text-sage-700 hover:text-sage-900">Available to connect</a>
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
