"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { SiLeetcode } from "react-icons/si";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(form);
    formData.append("access_key", "d4bef7ca-16f5-4a80-980c-4c0a82ad180d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: json
      });

      if (response.ok) {
        setSubmitStatus("success");
        form.reset();
      } else {
        console.error("Web3Forms Response Error:", await response.text());
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Web3Forms Catch Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-start">

        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-12"
        >
          <div>
            <p className="text-amber-500 font-bold tracking-widest text-sm uppercase mb-4">
              Let's Connect
            </p>
            <h1 className="text-5xl sm:text-6xl font-serif font-bold text-white mb-6">
              Contact Me
            </h1>
            <div className="w-full h-0.5 bg-amber-500 max-w-[200px]"></div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
            <div className="space-y-6">
              <a href="mailto:rbalavignesh06@gmail.com" className="flex items-center gap-4 text-zinc-300 hover:text-amber-500 transition-colors group">
                <Mail className="w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform" />
                <span>rbalavignesh06@gmail.com</span>
              </a>
              <a href="tel:+918838191612" className="flex items-center gap-4 text-zinc-300 hover:text-amber-500 transition-colors group">
                <Phone className="w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform" />
                <span>+91 8838191612</span>
              </a>
              <div className="flex items-center gap-4 text-zinc-300">
                <MapPin className="w-5 h-5 text-amber-500" />
                <span>Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/balavignesh16" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-amber-500 hover:text-zinc-950 transition-all duration-300 hover:-translate-y-1">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/balavignesh16/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-amber-500 hover:text-zinc-950 transition-all duration-300 hover:-translate-y-1">
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a href="https://leetcode.com/u/balavignesh16/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-amber-500 hover:text-zinc-950 transition-all duration-300 hover:-translate-y-1">
              <SiLeetcode className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="bg-zinc-900 rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/5">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-zinc-400">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-400">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-400">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Your message here..."
                  className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed text-zinc-950 font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? "Sending..." : submitStatus === "success" ? "Message Sent!" : "Send Message"}
                {!isSubmitting && submitStatus !== "success" && (
                  <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                )}
              </button>

              {submitStatus === "success" && (
                <p className="text-green-500 text-sm text-center">Your message has been sent successfully! I'll get back to you soon.</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-500 text-sm text-center">Something went wrong. Please try again or email me directly.</p>
              )}
            </form>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
