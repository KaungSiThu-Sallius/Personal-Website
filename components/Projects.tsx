
import React, { useState, useEffect, useMemo } from 'react';
import { PROJECTS, PROJECT_CATEGORIES } from '../constants';
import { Github, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const ITEMS_PER_PAGE = 4;

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter projects first - useMemo for performance
  const filteredProjects = useMemo(() => {
    // Create a copy and reverse it to show newest projects (added last in constants) first
    const sortedProjects = [...PROJECTS].reverse();

    return activeCategory === "All"
      ? sortedProjects
      : sortedProjects.filter(project => project.category === activeCategory || project.tags.includes(activeCategory));
  }, [activeCategory]);

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // Calculate pagination
  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / ITEMS_PER_PAGE));

  // Safeguard: Ensure currentPage isn't out of bounds after filtering
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      // Optional: Scroll to top of section smoothly
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-24 bg-white relative border-t border-slate-200">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-sage-400 mx-auto rounded-full mb-8"></div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {PROJECT_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                  ? 'bg-sage-600 text-white shadow-md'
                  : 'bg-slate-50 text-slate-600 border border-slate-200 hover:border-sage-300 hover:text-sage-600'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 min-h-[500px]">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col group h-full"
            >
              <div className="relative overflow-hidden h-64 flex-shrink-0">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-slate-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {project.category}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif font-bold text-slate-800 mb-3 group-hover:text-sage-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-slate-100 mt-auto">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-slate-600 hover:text-slate-900 font-medium transition-colors text-sm"
                    >
                      <Github size={18} className="mr-2" />
                      View Code
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sage-600 hover:text-sage-800 font-medium transition-colors text-sm ml-auto"
                    >
                      {project.demoLabel || "View Live"}
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            <p>No projects found in this category.</p>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-16 gap-2">
            <button
              onClick={() => handlePageChange(safeCurrentPage - 1)}
              disabled={safeCurrentPage === 1}
              className={`p-2 rounded-full border ${safeCurrentPage === 1 ? 'border-slate-100 text-slate-300 cursor-not-allowed' : 'border-slate-300 text-slate-600 hover:bg-slate-50 hover:text-sage-600'}`}
            >
              <ChevronLeft size={20} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-full font-medium transition-all ${safeCurrentPage === page
                  ? 'bg-sage-600 text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-50'
                  }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(safeCurrentPage + 1)}
              disabled={safeCurrentPage === totalPages}
              className={`p-2 rounded-full border ${safeCurrentPage === totalPages ? 'border-slate-100 text-slate-300 cursor-not-allowed' : 'border-slate-300 text-slate-600 hover:bg-slate-50 hover:text-sage-600'}`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
