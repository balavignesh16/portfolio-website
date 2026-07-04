import { FileDown } from "lucide-react";

export function ResumeButton() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex">
      <a
        href="https://drive.google.com/file/d/1oERQDI5s28-827fnoUL49KrTqK5nXpsp/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center gap-2 bg-black/30 backdrop-blur-md border border-r-0 border-white/10 p-2 rounded-l-xl shadow-lg overflow-hidden group hover:border-amber-500/50 transition-colors duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="flex flex-col items-center gap-3 py-2 min-h-[100px] justify-center">
          <div>
            <FileDown className="h-5 w-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />
          </div>
          <div className="relative" style={{ writingMode: 'vertical-rl' }}>
            <span className="text-xs font-bold tracking-[0.25em] text-zinc-400 group-hover:text-white transition-colors duration-300 rotate-180 select-none whitespace-nowrap pt-2">
              GET RESUME
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}
