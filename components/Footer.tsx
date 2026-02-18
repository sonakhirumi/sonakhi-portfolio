
import React from 'react';
import { Linkedin, Instagram, Facebook, Link2, Calendar, ExternalLink, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sonakhi-malla-rumi', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/sonakhi_rumi', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/sonakhi.rumi', label: 'Facebook' },
    { icon: Link2, href: 'https://linktr.ee/sonakhirumi', label: 'Linktree' },
    { icon: Calendar, href: 'https://topmate.io/sonakhirumi', label: 'Topmate' },
  ];

  const navigationLinks: { name: string; href: string; isExternal?: boolean }[] = [
    { name: 'Home', href: '#/' },
    { name: 'About', href: '#about' },
    { name: 'Writings', href: '#/writings' },

  ];

  return (
    <footer className="bg-[#1a1a1a] text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <nav className="flex space-x-6">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
              {...(link.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="text-[10px] font-medium uppercase tracking-widest text-stone-600 flex flex-col md:flex-row items-center gap-6">
          <a href="mailto:sonakhirumi@gmail.com" className="flex items-center gap-2 hover:text-stone-400 transition-colors">
            <Mail className="w-4 h-4" />
            <span>sonakhirumi@gmail.com</span>
          </a>
          <p>© {new Date().getFullYear()} <a href="#about" className="hover:text-stone-400 transition-colors">Sonakhi Malla (Rumi)</a>. Crafted for narratives.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
