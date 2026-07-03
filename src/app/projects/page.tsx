"use client";

import { ExternalLink, Search, Filter, Code2, Activity, GitCommitHorizontal, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { SiGithub } from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedProject]);

  const allProjects = [
    {
      title: "AIGIS: Autonomous Integrity Guard",
      repo: "aigis",
      stack: ["Python", "SQLite", "AES-256", "Shamir Secret Sharing", "Drive API"],
      github: "https://github.com/balavignesh16/aigis",
      description: "Decentralized Zero-Trust cloud storage system using AES-256 encryption, Secret Sharing, and autonomous Moving Target Defense across multiple cloud providers.",
      fullDescription: [
        "Developed a decentralized Zero-Trust cloud storage system using AES-256 GCM encryption, Shamir's Secret Sharing and Reed-Solomon Erasure Coding.",
        "Distributed encrypted file shards across Google Drive, Dropbox and Mega.nz with an autonomous Moving Target Defense (MTD) mechanism.",
        "Implemented TOTP-based authentication and demonstrated 100% data recovery after complete failure of one cloud provider (K=2, N=3 threshold)."
      ]
    },
    {
      title: "ESP32 Gas Follower Robot",
      repo: "",
      imageFallback: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
      stack: ["ESP32", "C++", "WebSocket", "HTML", "CSS", "JavaScript"],
      github: "",
      description: "Autonomous gas leak localization robot using an ESP32 microcontroller with a real-time WebSocket dashboard for live telemetry and manual teleoperation.",
      fullDescription: [
        "Built an autonomous gas leak localization robot using an ESP32 microcontroller with a three-sensor MQ gas array.",
        "Developed a real-time WebSocket dashboard supporting live telemetry, 2D radar visualization and manual W-A-S-D teleoperation.",
        "Achieved an average communication latency of 42 ms across 1,000 test runs and implemented autonomous danger-state navigation."
      ]
    },
    {
      title: "SNMIDS",
      repo: "SNMIDS",
      stack: ["Node.js", "Express", "Chart.js"],
      github: "https://github.com/balavignesh16/SNMIDS",
      description: "Web-based network monitoring and intrusion detection system featuring real-time traffic visualization and anomaly-based mitigation alerts.",
      fullDescription: [
        "Developed a web-based network monitoring and intrusion detection system for small and medium enterprises.",
        "Implemented real-time traffic visualization, rule-based and anomaly-based intrusion detection with mitigation alerts.",
        "Currently improving monitoring accuracy, server portability and overall system security."
      ]
    },
    {
      title: "NoteShare App",
      repo: "noteshare_app",
      stack: ["Flutter", "Dart", "Firebase"],
      github: "https://github.com/balavignesh16/noteshare_app",
      description: "Cross-platform mobile application utilizing Firebase for real-time note synchronization, secure cloud data storage, and user collaboration.",
      fullDescription: [
        "Developed a cross-platform mobile application allowing users to seamlessly create, share, and collaborate on notes.",
        "Integrated Firebase for real-time note synchronization, secure data storage, and user authentication.",
        "Optimized cross-platform performance for both Android and iOS environments."
      ]
    },
    {
      title: "HotReload",
      repo: "hotreload",
      stack: ["Go", "CLI", "File System"],
      github: "https://github.com/balavignesh16/hotreload",
      description: "Lightweight, highly-performant live-reloading utility written in Go. Implements native file system monitoring for instant server restarts.",
      fullDescription: [
        "Engineered a lightweight and efficient live-reloading utility written in Go for maximum performance.",
        "Implemented native cross-platform file system monitoring to automatically detect changes and restart servers.",
        "Drastically improved development workflows by providing instant feedback loops."
      ]
    },
    {
      title: "EventSphere",
      repo: "eventsphere",
      stack: ["Node.js", "MongoDB", "Express", "HTML/CSS/JS"],
      github: "https://github.com/balavignesh16/eventsphere",
      description: "Dynamic event listing platform with a robust cloud backend on MongoDB Atlas, featuring responsive and interactive UI components.",
      fullDescription: [
        "Designed and developed a dynamic event listing platform with a vibrant front-end user interface.",
        "Built a robust cloud backend utilizing MongoDB Atlas for scalable and reliable data storage.",
        "Implemented interactive UI elements to enhance event discovery and user engagement."
      ]
    }
  ];

  const filteredProjects = allProjects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.stack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase())) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-24 pb-24 sm:px-6 lg:px-8 font-sans">
      <motion.div
        initial="hidden" animate="visible" variants={stagger}
        className="max-w-6xl mx-auto flex flex-col items-center px-4 relative"
      >
        {/* Header Section */}
        <motion.div variants={fadeUp} className="flex flex-col items-center text-center mb-12">
          <div className="flex flex-col sm:flex-row items-center gap-5 mb-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Selected Engineering Projects
            </h1>
            <Link 
              href="https://github.com/balavignesh16" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-amber-500 transition-colors text-zinc-300 shadow-sm"
              title="View all projects on GitHub"
            >
              <SiGithub className="w-6 h-6" />
            </Link>
          </div>

          <p className="max-w-3xl text-zinc-400 text-lg leading-relaxed mb-8">
            A collection of my recent work, open-source contributions, and technical experiments. I focus on building scalable applications with clean architecture and modern technologies. Each project represents a unique challenge and a step forward in my engineering journey.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-zinc-500 mb-10">
            <div className="flex items-center gap-1.5">
              <GitCommitHorizontal className="w-4 h-4" />
              <span>Fetched from GitHub API</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Activity className="w-4 h-4" />
              <span>Updated in real-time</span>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mx-auto mb-16">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="text"
                placeholder="Search projects by name, tech, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0d1117] border border-white/10 rounded-full pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500/50 transition-all text-white placeholder-zinc-500"
              />
            </div>
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#0d1117] border border-white/10 rounded-full text-sm font-medium text-zinc-300 hover:bg-white/5 transition-colors whitespace-nowrap">
              <Filter className="w-4 h-4" />
              <span>Filter by Topic</span>
            </button>
          </div>
        </motion.div>

        {/* Grid Section */}
        <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              onClick={() => setSelectedProject(project)}
              className="flex flex-col bg-[#0d1117] border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/10 cursor-pointer group"
            >
              {/* GitHub Open Graph Image Wrapper */}
              <div className="h-[200px] w-full bg-[#010409] relative overflow-hidden border-b border-white/5">
                <img
                  src={project.repo ? `https://opengraph.githubassets.com/1/balavignesh16/${project.repo}` : project.imageFallback}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Content Wrapper */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-xl font-semibold text-zinc-100 group-hover:text-amber-400 transition-colors line-clamp-1 pr-4">
                    {project.title}
                  </h2>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Tags at bottom */}
                <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.stack.slice(0, 3).map(tech => (
                    <span key={tech} className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-md text-[11px] font-medium text-zinc-300">
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-md text-[11px] font-medium text-zinc-500">
                      +{project.stack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* No Results State */}
          {filteredProjects.length === 0 && (
            <div className="col-span-full py-12 text-center text-zinc-500">
              No projects found matching "{searchQuery}"
            </div>
          )}
        </motion.div>
      </motion.div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0d1117] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col"
            >
              {/* Modal Image */}
              <div className="relative w-full h-48 sm:h-64 bg-[#010409] border-b border-white/5 shrink-0">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white backdrop-blur-md transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <img
                  src={selectedProject.repo ? `https://opengraph.githubassets.com/1/balavignesh16/${selectedProject.repo}` : selectedProject.imageFallback}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6 gap-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    {selectedProject.title}
                  </h2>
                  {selectedProject.github && (
                    <Link
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black rounded-lg text-sm font-semibold transition-colors shrink-0"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="hidden sm:inline">View Source</span>
                    </Link>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.stack.map((tech: string) => (
                    <span key={tech} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-amber-500/90">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-4 text-zinc-300">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">About this project</h3>
                  <ul className="space-y-3">
                    {selectedProject.fullDescription.map((desc: string, i: number) => (
                      <li key={i} className="flex gap-3 leading-relaxed">
                        <span className="text-amber-500 mt-1.5 text-xs">▹</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
