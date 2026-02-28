
import React from 'react';
import { Linkedin, Instagram, Facebook, ExternalLink, Mail } from 'lucide-react';

const LinktreeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m13.73635 5.85251 4.00467-4.11665 2.3248 2.3808-4.20064 4.00466h5.9085v3.30473h-5.9365l4.22865 4.10766-2.3248 2.3338L12.0005 12.099l-5.74052 5.76852-2.3248-2.3248 4.22864-4.10766h-5.9375V8.12132h5.9085L3.93417 4.11666l2.3248-2.3808 4.00468 4.11665V0h3.4727zm-3.4727 10.30614h3.4727V24h-3.4727z" />
  </svg>
);

const TopmateIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 47 46"
    fill="currentColor"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle r="22.5" transform="matrix(1 0 0 -1 23.6152 23)" fill="currentColor" />
    <path d="M33.0038 29.6411C31.5707 31.6672 29.5206 33.1752 27.1598 33.9401C24.7989 34.705 22.254 34.6857 19.905 33.8851C17.5561 33.0844 15.5291 31.5454 14.1269 29.4978C12.7247 27.4503 12.0225 25.0041 12.1251 22.5246C12.2277 20.045 13.1296 17.6652 14.6962 15.7405C16.2627 13.8158 18.4099 12.4495 20.817 11.8456C23.224 11.2418 25.7619 11.4328 28.0515 12.3901C30.341 13.3474 32.2595 15.0197 33.5204 17.1572L23.6152 23L33.0038 29.6411Z" fill="#faf9f6" />
  </svg>
);

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sonakhi-malla-rumi', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/sonakhi_rumi', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/sonakhi.rumi', label: 'Facebook' },
    { icon: LinktreeIcon, href: 'https://linktr.ee/sonakhirumi', label: 'Linktree' },
    { icon: Mail, href: 'mailto:sonakhirumi@gmail.com', label: 'Email' },
  ];

  const navigationLinks: { name: string; href: string; isExternal?: boolean }[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'My Archive', href: '/my-archive' },
    { name: 'Happy Periods', href: '/happy-periods' },
    { name: 'Copyright', href: '/copyright' },
    { name: 'Contact', href: '/contact' },
  ];


  return (
    <footer className="bg-[#1a1a1a] text-stone-400 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 mb-12">

          {/* Column 2: Navigation */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em]">Navigation</h4>
            <nav className="flex flex-col space-y-4">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-colors flex items-center gap-2 text-sm ${link.name === 'Happy Periods'
                    ? 'text-[#880808] hover:opacity-80 font-bold'
                    : 'hover:text-white'
                    }`}
                  {...(link.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {link.name}
                  {link.isExternal && <ExternalLink className="w-3 h-3 opacity-40" />}
                </a>

              ))}
            </nav>
          </div>

          {/* Column 3: Get in Touch & Socials */}
          <div className="md:col-span-7 space-y-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em]">Get in Touch</h4>
            <div className="space-y-4">
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

              <div className="pt-2 flex flex-col gap-4 items-start">
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



        <div className="pt-8 border-t border-stone-800/50 flex flex-col items-center gap-6 text-[11px] font-medium uppercase tracking-widest text-stone-600">
          <p className="text-center hover:text-stone-400 transition-colors cursor-pointer">
            <a href="/copyright" className="flex flex-col sm:flex-row items-center gap-1">
              <span>© {new Date().getFullYear()} Sonakhi Malla (Rumi).</span>
              <span>All rights reserved.</span>
            </a>
          </p>
        </div>

      </div>
    </footer >
  );
};

export default Footer;
