"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap, CodeXml, Database, ShieldCheck, Cpu, Server, Lock, Layers } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};


export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full min-h-[90vh] flex items-center justify-center relative overflow-hidden z-10 selection:bg-amber-500/20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] opacity-60"
        ></motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-zinc-700/20 rounded-full blur-[120px] opacity-60"
        ></motion.div>

        <div className="relative mx-auto w-full max-w-7xl px-4 text-center z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-10"
          >
            <div className="space-y-6">
              <motion.h1 variants={fadeUp} className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9]">
                <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-zinc-500 pb-2">
                  Bala Vignesh R
                </span>
              </motion.h1>
              <motion.div variants={fadeUp} className="overflow-hidden py-2">
                <p className="mx-auto max-w-3xl text-sm sm:text-lg md:text-xl text-amber-500 font-medium tracking-wide drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                  Backend Intern & CS Undergrad building scalable backend systems and full-stack applications.
                </p>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-8">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 relative h-12 px-8 rounded-full bg-amber-500 text-zinc-950 hover:bg-amber-400 transition-all text-base font-bold shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_40px_rgba(245,158,11,0.6)] hover:scale-105 group"
              >
                <Zap className="h-5 w-5 transition-transform group-hover:scale-110 group-hover:rotate-12" />
                Explore Work
                <ArrowRight className="h-5 w-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-amber-500/60 backdrop-blur-sm transition-all text-base font-medium text-white shadow-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group hover:scale-105"
              >
                Contact Me
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-2 text-amber-500">→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="py-32 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.03)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="max-w-2xl mx-auto text-center mb-20"
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              Technical Expertise
            </h2>
            <p className="text-xl text-zinc-400 font-light">
              Focused on building secure, scalable, and high-performance solutions.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          >
            <ExpertiseCard
              icon={<Server />}
              title="Backend System Design"
              subtitle="Core Expertise"
              description="Building scalable backend modules using Go, Java, and Spring Boot. Strong understanding of REST APIs, WebSockets, and database schema design with PostgreSQL."
              tags={["Go", "Java", "Spring Boot", "PostgreSQL"]}
            />
            <ExpertiseCard
              icon={<Lock />}
              title="Cloud & Zero-Trust Security"
              subtitle="Specialized"
              description="Implementing Zero-Trust architectures, Shamir's Secret Sharing, AES-256 GCM encryption, and Moving Target Defense for decentralized storage."
              tags={["AES-256", "MTD", "Zero-Trust", "Cryptography"]}
            />
            <ExpertiseCard
              icon={<Layers />}
              title="High-Performance Tooling"
              subtitle="Versatile"
              description="Engineering lightweight, highly-performant utilities and cross-platform mobile applications using Go, C++, and Flutter/Dart."
              tags={["Go", "C++", "Flutter", "Dart"]}
            />
          </motion.div>
        </div>
      </section>

      {/* What I Bring to the Table */}
      <section className="py-32 bg-zinc-950 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="max-w-2xl mx-auto text-center mb-20"
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-white drop-shadow-md">
              What I Bring to the Table
            </h2>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          >
            <FeatureCard
              icon={<Database />}
              title="Scalable Backend Systems"
              description="Designing efficient database schemas and server-side logic in Go and Java, ensuring data integrity and optimizing performance."
            />
            <FeatureCard
              icon={<ShieldCheck />}
              title="Security-First Approach"
              description="Implementing industry-standard authentication (TOTP) and cryptography (AES-256) to ensure user data is protected."
            />
            <FeatureCard
              icon={<Cpu />}
              title="IoT & Real-time Systems"
              description="Building low-latency real-time WebSockets for live telemetry and remote teleoperation of autonomous hardware."
            />
            <FeatureCard
              icon={<CodeXml />}
              title="Clean & Maintainable Code"
              description="Following industry development practices to write modular, testable, and robust codebases."
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ExpertiseCard({ icon, title, subtitle, description, tags }: any) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        scale: 1.05,
        y: -15,
        boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.3)",
        backgroundColor: "rgba(24, 24, 27, 0.8)", // bg-zinc-900/80
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative bg-zinc-900/40 backdrop-blur-lg border border-white/10 rounded-[2rem] p-8 overflow-hidden transition-colors"
    >
      <div className="relative z-10 flex flex-col h-full h-full">
        <div className="absolute -top-4 -right-4 p-8 opacity-5 group-hover:opacity-20 transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-150">
          <div className="w-32 h-32 text-amber-500">
            {icon}
          </div>
        </div>

        <div className="mb-6">
          <span className="inline-flex items-center justify-center rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-500 border-amber-500/30 mb-4 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            {subtitle}
          </span>
          <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">{title}</h3>
        </div>
        <p className="text-zinc-400 mb-8 flex-grow leading-relaxed text-base group-hover:text-zinc-300 transition-colors">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag: string) => (
            <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-black/50 text-zinc-300 border border-white/5 font-semibold group-hover:border-amber-500/30 transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function FeatureCard({ icon, title, description }: any) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ scale: 1.03, rotate: 1 }}
      className="group relative overflow-hidden rounded-[2rem] bg-black border border-white/5 p-8 hover:shadow-[0_0_40px_rgba(245,158,11,0.15)] hover:border-amber-500/30 transition-all duration-500"
    >
      <div className="relative z-10 flex gap-6 items-start">
        <div className="w-16 h-16 shrink-0 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-all duration-500 shadow-xl group-hover:shadow-amber-500/20 group-hover:-translate-y-2">
          <div className="text-amber-500 w-8 h-8 group-hover:scale-110 transition-transform duration-500">{icon}</div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-amber-400 transition-colors duration-300">{title}</h3>
          <p className="text-zinc-400 leading-relaxed text-base group-hover:text-zinc-300 transition-colors">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
