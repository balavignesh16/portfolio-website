"use client";

import { motion } from "framer-motion";
import {
  SiGo, SiC, SiPython, SiCplusplus, SiJavascript,
  SiSpringboot,
  SiGit, SiGithub,
  SiPostgresql, SiSqlite
} from "react-icons/si";
import { FaDatabase, FaServer, FaShieldAlt, FaJava } from "react-icons/fa";
import { BiNetworkChart } from "react-icons/bi";

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger: any = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const badgeVariants: any = {
  rest: { scale: 1, y: 0, boxShadow: "0 0 0px rgba(0,0,0,0)", backgroundColor: "rgba(0,0,0,0.5)" },
  hover: {
    scale: 1.08,
    y: -4,
    boxShadow: "0 10px 20px -5px rgba(245, 158, 11, 0.25)",
    backgroundColor: "rgba(24,24,27,0.9)", // slightly lighter zinc on hover
    borderColor: "rgba(245,158,11,0.3)",
    transition: { type: "spring", stiffness: 400, damping: 15 }
  }
};

const iconMotion: any = {
  rest: { rotate: 0 },
  hover: { rotate: [0, -15, 15, -15, 0], transition: { duration: 0.5, ease: "easeInOut" } }
};

const categories = [
  {
    title: "Languages",
    skills: [
      { name: "Go", icon: SiGo, color: "text-[#00ADD8]" },
      { name: "Java", icon: FaJava, color: "text-[#007396]" },
      { name: "C", icon: SiC, color: "text-[#A8B9CC]" },
      { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
      { name: "C++", icon: SiCplusplus, color: "text-[#00599C]" },
      //{ name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
      { name: "SQL", icon: FaDatabase, color: "text-sky-400" },
    ]
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Spring Boot", icon: SiSpringboot, color: "text-[#6DB33F]" },
    ]
  },
  {
    title: "Technologies",
    skills: [
      { name: "REST APIs", icon: FaServer, color: "text-amber-500" },
      { name: "WebSocket", icon: BiNetworkChart, color: "text-teal-400" },
      { name: "Git", icon: SiGit, color: "text-[#F05032]" },
      { name: "GitHub", icon: SiGithub, color: "text-white" },
      { name: "AES-256", icon: FaShieldAlt, color: "text-blue-500" },
      { name: "MTD", icon: FaShieldAlt, color: "text-zinc-400" },
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
      { name: "SQLite", icon: SiSqlite, color: "text-[#003B57]" },
    ]
  }
];

export default function Skills() {
  return (
    <motion.div
      initial="hidden" animate="visible" variants={stagger}
      className="max-w-6xl mx-auto px-4 py-24 sm:px-6 lg:px-8"
    >
      <motion.h1 variants={fadeUp} className="text-4xl font-bold mb-16 border-b border-white/10 pb-4 inline-block">
        Technical <span className="text-amber-500">Skills</span>
      </motion.h1>

      <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {categories.map((category) => (
          <motion.div
            key={category.title}
            variants={fadeUp}
            className="glass-panel p-8 md:p-10 border-b-4 border-b-amber-500/50 hover:bg-zinc-900/80 transition-colors group relative overflow-hidden shadow-lg"
          >
            {/* Background glowing orb */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-colors duration-700 pointer-events-none"></div>

            <h3 className="text-2xl font-bold mb-8 text-white group-hover:text-amber-400 transition-colors flex items-center gap-3">
              <span className="w-2 h-8 bg-amber-500 rounded-full"></span> {category.title}
            </h3>

            <div className="flex flex-wrap gap-4">
              {category.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    variants={badgeVariants}
                    initial="rest"
                    whileHover="hover"
                    className="flex flex-col items-center justify-center w-28 h-28 border border-white/5 rounded-2xl cursor-default group/badge"
                  >
                    <motion.div variants={iconMotion} className="mb-3">
                      <Icon className={`w-10 h-10 ${skill.color} drop-shadow-md`} />
                    </motion.div>
                    <span className="text-zinc-400 text-xs font-semibold tracking-wide text-center group-hover/badge:text-white transition-colors">{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
