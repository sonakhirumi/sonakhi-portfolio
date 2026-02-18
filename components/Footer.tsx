
import React from 'react';
import { Linkedin, Instagram, Facebook, Link2, Calendar, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sonakhi-malla-rumi', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/sonakhi_rumi', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/sonakhi.rumi', label: 'Facebook' },
    { icon: Link2, href: 'https://linktr.ee/sonakhirumi', label: 'Linktree' },
    { icon: Calendar, href: 'https://topmate.io/sonakhirumi', label: 'Topmate' },
  ];

  const navigationLinks = [
    { name: 'Home', href: '#/' },
    { name: 'About Me', href: '#about' },
    { name: 'Writings', href: '#/writings' },
    { name: 'Topmate', href: 'https://topmate.io/sonakhirumi', isExternal: true },
  ];

  return (
    <footer id="contact" className="bg-[#1a1a1a] text-stone-400 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16 mb-20">


          {/* Column 2: Navigation */}
          <div className="md:col-span-5 space-y-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em]">Navigation</h4>
            <nav className="flex flex-col space-y-4">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-colors flex items-center gap-2 text-sm"
                  {...(link.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {link.name}
                  {link.isExternal && <ExternalLink className="w-3 h-3 opacity-40" />}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Get in Touch & Socials */}
          <div className="md:col-span-7 space-y-8">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em]">Get in Touch</h4>
            <div className="space-y-6">
              <p className="text-sm leading-relaxed">
                Interested in collaborating on editorial features, creative scripts, or brand storytelling? Let's connect across the digital landscape.
              </p>

              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 border border-stone-800 rounded-full text-stone-500 hover:text-white hover:border-stone-500 transition-all duration-300 bg-stone-900/50"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-stone-800 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="https://topmate.io/sonakhirumi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-white font-bold text-xs uppercase tracking-widest border-b border-stone-700 hover:border-white transition-colors pb-1"
                >
                  <span>Book a Consultation</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-stone-800/50 flex flex-col items-center gap-6 text-[11px] font-medium uppercase tracking-widest text-stone-600">
          <p>© {new Date().getFullYear()} <a href="#about" className="hover:text-stone-400 transition-colors">Sonakhi Malla (Rumi)</a>. Crafted for narratives.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
