import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { services } from "@/data/services";
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

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-card border-t border-dark-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <SunfloLogo />
            <p className="mt-6 text-sm text-gray-400 leading-relaxed">
              South Florida&apos;s trusted auto detailing experts since 2017.
              Passionate about paint, precision, and perfection.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-dark-border flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-500 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold tracking-widest text-xs uppercase mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold tracking-widest text-xs uppercase mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href="/services"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold tracking-widest text-xs uppercase mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={16} className="text-brand-500 mt-0.5 shrink-0" />
                <span>{contact.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone size={16} className="text-brand-500 shrink-0" />
                <a
                  href={contact.phoneHref}
                  className="hover:text-white transition-colors"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail size={16} className="text-brand-500 shrink-0" />
                <a
                  href={contact.emailHref}
                  className="hover:text-white transition-colors"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <InstagramIcon size={16} />
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {contact.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {year} Sunflo Detailing. All rights reserved.</p>
          <p>Serving Oakland Park &amp; South Florida · Est. 2017</p>
        </div>
      </div>
    </footer>
  );
}
