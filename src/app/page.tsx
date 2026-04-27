'use client'

import Image from "next/image";
import { ArrowUpRight, Globe, Mail, Link as LinkIcon, MessageSquare, ChevronRight, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const projects = [
    {
      title: "Bailars",
      description: "The premium social platform for the Latin dance community. Connecting dancers, instructors, and organizers worldwide.",
      status: "Live",
      link: "https://bailars.com",
      className: "md:col-span-2 md:row-span-2",
      color: "from-pink-500/20 to-transparent",
    },
    {
      title: "Maboke",
      description: "Streaming Congolese theater and heritage to the world stage.",
      status: "Coming Soon",
      className: "md:col-span-1 md:row-span-1",
      color: "from-blue-500/20 to-transparent",
    },
    {
      title: "Beya Ventures",
      description: "Incubating culture and tech projects.",
      status: "Holding",
      className: "md:col-span-1 md:row-span-1",
      color: "from-foreground/10 to-transparent",
    },
  ];

  if (!mounted) return null;

  return (
    <main className="min-h-screen w-full overflow-hidden bg-background text-foreground selection:bg-foreground/30 flex flex-col items-center p-8 md:p-16 relative transition-colors duration-500">
      {/* Subtle Background Glow */}
      <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] bg-foreground/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[50%] h-[50%] bg-foreground/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Navbar */}
      <nav className="w-full max-w-7xl flex items-center justify-between z-50 mb-auto">
        <div className="flex items-center gap-4 cursor-pointer group">
          <Image 
            src={theme === 'dark' ? '/beya_group_dark.svg' : '/beya_group_light.svg'} 
            alt="Beya Group" 
            width={120} 
            height={40} 
            className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
            priority
          />
          <span className={`font-black text-2xl tracking-[0.1em] uppercase transition-colors duration-500 ${
            theme === 'dark' ? 'text-white' : 'text-[#001B3D]'
          }`}>
            Beya Group
          </span>
        </div>
        
        <div className="flex items-center gap-10">
            <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-3 rounded-full hover:bg-foreground/5 transition-all cursor-pointer"
                aria-label="Toggle Theme"
            >
                {theme === 'dark' ? <Sun size={20} className="text-white/60 hover:text-white" /> : <Moon size={20} className="text-black/60 hover:text-black" />}
            </button>
            <a href="mailto:joel@beyagroup.com" className="hidden md:flex text-xs font-bold opacity-60 hover:opacity-100 transition-opacity items-center gap-3 uppercase tracking-[0.2em]">
              Get in touch <ChevronRight size={14} />
            </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center z-10 my-auto py-16">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-foreground/5 text-[11px] font-black uppercase tracking-[0.3em] mb-10 animate-pulse">
           <span className="w-2 h-2 rounded-full bg-foreground" />
           The Future of Culture
        </div>
        <h1 className="text-7xl md:text-[120px] font-black tracking-[-0.04em] mb-8 leading-[0.85] bg-gradient-to-b from-foreground to-foreground/50 bg-clip-text text-transparent">
          Empowering <br /> Culture.
        </h1>
        <p className="max-w-2xl text-lg md:text-2xl text-foreground/50 font-medium leading-relaxed mb-16">
          Beya Group is a technology holding company dedicated to digitizing and scaling African heritage through modern ecosystems.
        </p>

        {/* Bento Grid - Symphony Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-7xl auto-rows-[220px]">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`bento-card group relative p-8 flex flex-col justify-between overflow-hidden cursor-pointer ${project.className}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="glow-overlay" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest transition-colors ${
                    project.status === 'Live' ? 'bg-foreground text-background' : 'bg-foreground/5 text-foreground/60'
                  }`}>
                    {project.status}
                  </span>
                  {project.link && (
                    <a href={project.link} target="_blank" className="text-foreground/30 group-hover:text-foreground transition-all">
                      <ArrowUpRight size={24} />
                    </a>
                  )}
                </div>
                
                <div className="mt-auto text-left">
                  <h3 className="text-3xl font-black tracking-tighter mb-2">{project.title}</h3>
                  <p className="text-sm text-foreground/50 leading-relaxed max-w-[320px] opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 duration-500">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Quick Action Box */}
          <div className="bento-card md:col-span-1 md:row-span-1 p-8 flex items-center justify-center group cursor-pointer">
             <div className="text-center">
                <div className="text-[11px] font-black uppercase tracking-[0.3em] text-foreground/30 group-hover:text-foreground transition-colors mb-2">Connect</div>
                <div className="text-2xl font-black tracking-tight">Let's build.</div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-7xl flex items-center justify-between z-50 mt-auto py-8">
        <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-30">BEYA GROUP HQ &copy; 2026</span>
        <div className="flex items-center gap-10">
           <a href="/admin" className="text-[10px] font-black uppercase tracking-[0.2em] opacity-30 hover:opacity-100 transition-opacity hover:underline">System Access</a>
           <div className="flex gap-6 opacity-30">
              <LinkIcon size={16} className="cursor-pointer hover:text-foreground hover:opacity-100 transition-all" />
              <MessageSquare size={16} className="cursor-pointer hover:text-foreground hover:opacity-100 transition-all" />
           </div>
        </div>
      </footer>
    </main>
  );
}
