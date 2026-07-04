"use client";

import { motion } from "framer-motion";

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger: any = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Education() {
  return (
    <motion.div 
      initial="hidden" animate="visible" variants={stagger}
      className="max-w-5xl mx-auto px-4 py-24 sm:px-6 lg:px-8"
    >
      <motion.section variants={fadeUp} className="mb-16">
        <h2 className="text-4xl font-bold mb-12 border-b border-white/10 pb-4 inline-block">
          <span className="text-amber-500">Education</span> & Experience
        </h2>
        {/* Education Details */}
        <h3 className="text-3xl font-bold mb-8 text-white flex items-center gap-4">
          <span className="w-10 h-1 bg-amber-500 rounded-full"></span> Education
        </h3>
        <div className="space-y-6 pl-5 border-l-2 border-white/10 ml-5 mb-16">
          <motion.div whileHover={{ x: 5 }} className="glass-panel p-8 relative hover:border-amber-500/30 transition-colors shadow-lg">
            <div className="absolute -left-[39px] top-10 w-4 h-4 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.8)]"></div>
            <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-3">
              <h4 className="text-xl font-bold text-white">Vellore Institute of Technology, Chennai</h4>
              <span className="inline-block w-max px-3 py-1 bg-amber-500/10 text-amber-500 text-sm font-semibold rounded-full mt-2 xl:mt-0 border border-amber-500/20">2023 – 2027</span>
            </div>
            <p className="text-zinc-400 text-lg">B.Tech in Computer Science (CGPA: 8.13)</p>
          </motion.div>
          
          <motion.div whileHover={{ x: 5 }} className="glass-panel p-8 relative hover:border-zinc-500/30 transition-colors">
            <div className="absolute -left-[39px] top-10 w-4 h-4 bg-zinc-600 rounded-full"></div>
            <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-3">
              <h4 className="text-xl font-bold text-white">Aristo Public School, Cuddalore</h4>
              <span className="inline-block w-max px-3 py-1 bg-zinc-800 text-zinc-400 text-sm font-semibold rounded-full mt-2 xl:mt-0">2023</span>
            </div>
            <p className="text-zinc-400 text-lg">Higher Secondary (Class XII) – 86.4%</p>
          </motion.div>
        </div>

        {/* Experience Details */}
        <h3 className="text-3xl font-bold mb-8 text-white flex items-center gap-4">
          <span className="w-10 h-1 bg-amber-500 rounded-full"></span> Experience
        </h3>
        <div className="space-y-6 pl-5 border-l-2 border-white/10 ml-5">
          <motion.div whileHover={{ x: 5 }} className="glass-panel p-8 relative hover:border-amber-500/30 transition-colors shadow-lg">
            <div className="absolute -left-[39px] top-10 w-4 h-4 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.8)] ring-4 ring-zinc-950"></div>
            <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-4">
              <h4 className="text-2xl font-bold text-white">
                Backend Intern <span className="text-zinc-500 font-normal text-lg ml-2">@ Aziro Technologies</span>
              </h4>
              <span className="inline-block w-max px-3 py-1 bg-amber-500/10 text-amber-500 text-sm font-semibold rounded-full mt-2 xl:mt-0 border border-amber-500/20">Jun 2025 – Jul 2025</span>
            </div>
            <ul className="list-none mt-6 space-y-3 text-zinc-300 text-lg">
              <li className="flex gap-3"><span className="text-amber-500 mt-1 font-bold">▹</span>Completed an intensive one-month technical onboarding program focused on Golang and backend software engineering principles.</li>
              <li className="flex gap-3"><span className="text-amber-500 mt-1 font-bold">▹</span>Developed core proficiency in Go syntax, data structures, and standard libraries through structured enterprise curriculum and hands-on exercises.</li>
              <li className="flex gap-3"><span className="text-amber-500 mt-1 font-bold">▹</span>Strengthened algorithmic problem-solving and optimization skills by implementing efficient data structures and algorithms in Go.</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}
