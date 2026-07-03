"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, User, Briefcase, Mail, BookOpen, Code, FileDown } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { href: "/about", label: "About", icon: User },
  { href: "/education", label: "Education", icon: BookOpen },
  { href: "/skills", label: "Skills", icon: Code },
  { href: "/projects", label: "Projects", icon: Briefcase },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, duration: 0.8 }}
        className="flex items-center gap-2 p-2 rounded-full bg-zinc-950/80 backdrop-blur-lg border border-white/10 shadow-[0_0_40px_-10px_rgba(245,158,11,0.2)]"
      >
        <Link 
          href="/" 
          className={cn(
            "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300",
            pathname === "/" ? "bg-amber-500 text-zinc-950 shadow-[0_0_20px_rgba(245,158,11,0.5)]" : "bg-amber-500/10 text-amber-500 hover:bg-amber-500 hover:text-zinc-950 hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] hover:scale-110"
          )}
        >
          <Home className="w-5 h-5" />
        </Link>

        {links.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-2 group",
                isActive 
                  ? "text-white" 
                  : "text-zinc-400 hover:text-white"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-zinc-800 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <Icon className={cn("w-4 h-4 transition-transform duration-300", !isActive && "group-hover:scale-110 group-hover:text-amber-500")} />
              <span className="hidden sm:inline">{link.label}</span>
            </Link>
          );
        })}

        {/* Resume Button */}
        <div className="pl-2 ml-2 border-l border-white/10 hidden sm:block">
          <a
            href="https://drive.google.com/file/d/1xxKMbb3fXVYUBEzaev51qa-VK1OVnu9P/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-amber-500 rounded-full border border-amber-500/30 hover:bg-amber-500 hover:text-zinc-950 transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.15)] hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] group"
          >
            <FileDown className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            Resume
          </a>
        </div>
      </motion.nav>
    </div>
  );
}
