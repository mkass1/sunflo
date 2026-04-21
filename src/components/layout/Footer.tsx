import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { services } from "@/data/services";
import { cityPages } from "@/data/city-pages";
import { contact } from "@/data/contact";
import SunfloLogo from "./SunfloLogo";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.3-1.5 1.6-1.5h1.7V3.4C16.5 3.4 15.5 3.3 14.4 3.3c-2.3 0-3.9 1.4-3.9 4v2.5H7.8V13h2.7v8h3z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0c0c0e]">

      {/* Editorial top band */}
      <div className="border-t-[3px] border-brand-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p
            className="text-[1.9rem] sm:text-[3.8rem] lg:text-[5.2rem] font-black uppercase leading-[0.88] tracking-tight select-none"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="block sm:inline text-white">Passionate</span>
            <span className="hidden sm:inline text-brand-500 mx-2 sm:mx-5">·</span>
            <span
              className="block sm:inline"
              style={{
                WebkitTextStroke: "1.5px rgba(255,255,255,0.28)",
                color: "transparent",
              }}
            >
              Professional
            </span>
            <span className="hidden sm:inline text-brand-500 mx-2 sm:mx-5">·</span>
            <span className="block sm:inline text-white">Perfection</span>
            <span className="text-brand-500">.</span>
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Logo + tagline row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12 pb-10 border-b border-white/[0.06]">
          <SunfloLogo variant="wide" size="lg" />
          <p className="text-[11px] font-medium tracking-[0.15em] text-gray-400 uppercase">
            South Florida&apos;s Detail Experts&nbsp;&nbsp;·&nbsp;&nbsp;Est. 2017
          </p>
        </div>

        {/* 4-column grid: Links, Services, Area, Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Quick Links */}
          <div>
            <h3
              className="text-white/60 font-semibold text-[11px] uppercase tracking-[0.15em] mb-6"
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-white/60 font-semibold text-[11px] uppercase tracking-[0.15em] mb-6"
            >
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={s.slug ? `/services/${s.slug}` : "/services"}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-150"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li className="pt-3 mt-1 border-t border-white/[0.04]">
                <Link
                  href="/services"
                  className="text-sm text-brand-400 hover:text-brand-300 font-semibold transition-colors duration-150 inline-flex items-center gap-1.5"
                >
                  View All Services
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h3
              className="text-white/60 font-semibold text-[11px] uppercase tracking-[0.15em] mb-6"
            >
              Service Area
            </h3>
            <ul className="space-y-3">
              {cityPages.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/locations/${c.slug}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-150"
                  >
                    {c.city}
                  </Link>
                </li>
              ))}
              <li className="pt-3 mt-1 border-t border-white/[0.04]">
                <span className="text-sm text-gray-600">Oakland Park <span className="text-brand-500">(home base)</span></span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-white/60 font-semibold text-[11px] uppercase tracking-[0.15em] mb-6"
            >
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={15} className="text-brand-500 mt-0.5 shrink-0" />
                <span>{contact.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone size={15} className="text-brand-500 shrink-0" />
                <a href={contact.phoneHref} className="hover:text-white transition-colors duration-150">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail size={15} className="text-brand-500 shrink-0" />
                <a href={contact.emailHref} className="hover:text-white transition-colors duration-150">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <InstagramIcon size={15} />
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-150"
                >
                  {contact.instagramHandle}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <FacebookIcon size={15} />
                <a
                  href={contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-150"
                >
                  {contact.facebookHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-gray-400">© {year} Sunflo Detailing. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-400 transition-colors duration-150"
              aria-label="Instagram"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href={contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-400 transition-colors duration-150"
              aria-label="Facebook"
            >
              <FacebookIcon size={16} />
            </a>
          </div>
          <p className="text-xs text-gray-400">Oakland Park · Fort Lauderdale · Wilton Manors · Pompano Beach · South Florida</p>
        </div>
      </div>
    </footer>
  );
}
