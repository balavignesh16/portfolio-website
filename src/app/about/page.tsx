"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Image from "next/image";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);
import Link from "next/link";
import { SiLeetcode } from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
        {/* Left Sidebar (Sticky) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-4 lg:sticky lg:top-32 space-y-8"
        >
          {/* Avatar Profile Picture */}
          <div className="w-full aspect-square max-w-[280px] rounded-[2rem] overflow-hidden relative shadow-[0_0_40px_rgba(245,158,11,0.15)] group border border-white/10 bg-zinc-900/50">
            <Image 
              src="/profilepicture.png"
              alt="Bala Vignesh R"
              fill
              className="object-cover object-top scale-110 origin-top group-hover:scale-[1.15] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay"></div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white drop-shadow-md">
              My Journey in <br />
              <span className="text-amber-500">Software Engineering</span>
            </h1>
            <p className="text-zinc-400 text-lg">Bala Vignesh R | Backend & Security</p>
          </div>

          <div className="flex gap-4 pt-4 border-t border-white/5">
            <a href="https://github.com/balavignesh16" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-amber-500 hover:text-zinc-950 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] hover:-translate-y-1">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/balavignesh16/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-amber-500 hover:text-zinc-950 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] hover:-translate-y-1">
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a href="https://leetcode.com/u/balavignesh16/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-amber-500 hover:text-zinc-950 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] hover:-translate-y-1">
              <SiLeetcode className="w-5 h-5" />
            </a>
            <a href="mailto:rbalavignesh06@gmail.com" className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-amber-500 hover:text-zinc-950 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] hover:-translate-y-1">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          initial="hidden" animate="visible" variants={stagger}
          className="lg:col-span-8 space-y-16"
        >
          {/* Detailed Bio Sections */}
          <motion.section variants={fadeUp} className="space-y-12 bg-zinc-900/30 p-8 sm:p-10 rounded-[2rem] border border-white/5 backdrop-blur-sm">
            
            <div className="space-y-6 text-zinc-300 leading-relaxed text-lg">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Hi, I'm Bala Vignesh R</h2>
              <p>
                I'm a passionate <strong className="text-white">Software Engineer</strong> with hands-on experience in <strong className="text-white font-semibold border-b border-amber-500/30 pb-0.5">Backend System Design</strong>, <strong className="text-white font-semibold border-b border-amber-500/30 pb-0.5">Cloud Security</strong>, and building scalable full-stack applications. I enjoy creating robust, performance-driven solutions that tackle complex, real-world problems.
              </p>
              <p>
                With a strong foundation in languages like <span className="text-amber-500">Go, Java, and Python</span>, and databases such as <span className="text-amber-500">PostgreSQL</span>, I focus on turning ideas into <span className="italic text-white">clean, reliable, and secure solutions</span>. I believe good software is built through thoughtful planning, maintainable architecture, and a security-first mindset.
              </p>
            </div>

            <div className="space-y-6 text-zinc-300 leading-relaxed text-lg">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-6 h-1 bg-amber-500 rounded-full"></span> My Journey
              </h2>
              <p>
                My journey in tech began driven by curiosity—especially the idea that we can transform simple concepts into secure, distributed systems across the internet. That curiosity quickly turned into a deep interest in backend architecture and cryptography, and that's where everything started.
              </p>
              <p>
                For over a year now, I've been consistently learning and upskilling, mapping everything I learn through hands-on practice. From developing Zero-Trust cloud storage systems to building IoT real-time telemetry dashboards, my work reflects <span className="text-white font-medium">discipline, commitment, and a continuous growth mindset</span>.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-6 h-1 bg-amber-500 rounded-full"></span> What I Believe In
              </h2>
              <ul className="space-y-4 text-zinc-300 text-lg list-none pl-2">
                <li className="flex gap-4 items-start"><span className="text-amber-500 font-bold mt-1 text-xl">•</span> <span>Clean, readable, and maintainable code</span></li>
                <li className="flex gap-4 items-start"><span className="text-amber-500 font-bold mt-1 text-xl">•</span> <span>Proper planning and system structure before implementation</span></li>
                <li className="flex gap-4 items-start"><span className="text-amber-500 font-bold mt-1 text-xl">•</span> <span>Security-first design (Zero-Trust principles and applied cryptography)</span></li>
                <li className="flex gap-4 items-start"><span className="text-amber-500 font-bold mt-1 text-xl">•</span> <span>Building scalable solutions rather than quick fixes</span></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-6 h-1 bg-amber-500 rounded-full"></span> Beyond Coding
              </h2>
              <p className="text-zinc-300 text-lg mb-4">Outside of development, I enjoy:</p>
              <ul className="space-y-4 text-zinc-300 text-lg list-none pl-2">
                <li className="flex gap-4 items-start"><span className="text-zinc-500 font-bold mt-1 text-xl">•</span> <span>Exploring new backend frameworks and system architectures</span></li>
                <li className="flex gap-4 items-start"><span className="text-zinc-500 font-bold mt-1 text-xl">•</span> <span>Researching network security and advanced cryptography</span></li>
                <li className="flex gap-4 items-start"><span className="text-zinc-500 font-bold mt-1 text-xl">•</span> <span>Experimenting with IoT and microcontrollers for automation</span></li>
              </ul>
            </div>

          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}
