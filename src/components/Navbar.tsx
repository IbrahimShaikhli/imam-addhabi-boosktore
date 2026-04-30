"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);

    // Hijri date string for the announcement bar
    try {
      const today = new Date();
      const hijriFormatter = new Intl.DateTimeFormat('ar-SA-u-ca-islamic', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
      setDateStr(hijriFormatter.format(today));
    } catch (e) {
      setDateStr(""); // Fallback
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "الرئيسية", href: "/" },
    { label: "جميع الكتب", href: "/books" },
    { label: "تواصل معنا", href: "#footer" },
  ];

  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || "971XXXXXXXXX";

  return (
    <>
      {/* Announcement Bar (Top Bar) */}
      <div className="bg-[var(--color-primary)] text-white/90 text-[13px] py-1.5 sm:py-1 relative z-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 sm:h-8">

          {/* Date & Location */}
          <div className="flex items-center justify-center w-full sm:w-auto gap-4 shrink-0 bg-[var(--color-primary)] z-10 sm:pr-2">
            <span className="flex items-center gap-1.5 font-medium">
              <svg className="w-3.5 h-3.5 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              {dateStr}
            </span>
          </div>

          {/* Marquee Center */}
          <div className="w-full sm:flex-1 relative mx-0 sm:mx-4 flex items-center h-full font-medium marquee-container">
            <div className="marquee-content whitespace-nowrap transition-colors hover:text-[var(--color-gold)]">
              📢 جديد الكتب: مدارج السالكين - للإمام ابن القيم الجوزية، مصحف القيام حجمين، القرآن تدبر وعمل حجمين 💡 قال العلامة ابن عثيمين رحمه الله: ينبغي لطالب العلم أن يحرص على جمع الكتب، ولكن يبدأ بالأهم فالأهم 📚 وقال رحمه الله: الكتب غذاء للروح كالطعام والشراب للبدن 📢
            </div>
          </div>


          {/* Social Icons */}
          <div className="flex items-center justify-center w-full sm:w-auto gap-3 shrink-0 bg-[var(--color-primary)] z-10 sm:pl-2">
            <span className="mr-2 text-white/60 text-xs">تابعنا على:</span>
            <a href="#" className="hover:text-[var(--color-gold)] transition-colors"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg></a>
            <a href="#" className="hover:text-[var(--color-gold)] transition-colors"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg></a>
            <a href="#" className="hover:text-[var(--color-gold)] transition-colors"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg></a>
            <a href="#" className="hover:text-[var(--color-gold)] transition-colors"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.8-5.46-.4-2.52.48-5.13 2.31-6.84 1.2-1.12 2.82-1.81 4.5-1.92.01 1.34-.01 2.67.02 4.01-.84.11-1.66.45-2.27 1.07-.63.63-.98 1.5-.96 2.4.01 1.13.56 2.21 1.46 2.84 1.15.82 2.8.96 4.08.33.91-.45 1.55-1.31 1.71-2.31.04-.33.02-.67.03-1.01-.01-5.64-.01-11.28 0-16.92h-4.38z" /></svg></a>
          </div>
        </div>
      </div>

      <nav
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 bg-white ${scrolled ? "shadow-md py-4" : "py-4"}`}
        style={{ borderBottom: scrolled ? "none" : "1px solid var(--color-border)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 shrink-0 group z-10">
              <div className="relative w-52 h-20 overflow-hidden">
                <Image
                  src="/maktabahthahabi-logo.png"
                  alt="مكتبة الإمام الذهبي"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-bold text-xl leading-tight" style={{ color: "var(--color-primary)" }}>
                  مكتبة الإمام الذهبي
                </span>
                <span className="text-xs font-medium" style={{ color: "var(--color-gold)" }}>
                  في الامارات
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links - Perfectly Centered */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[15px] font-bold relative group pb-1"
                  style={{ color: "var(--color-primary)" }}
                >
                  <span className="group-hover:text-[var(--color-gold)] transition-colors">
                    {link.label}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-gold)] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* WhatsApp Pill + Mobile Hamburger */}
            <div className="flex items-center gap-4 z-10">
              <a
                href={`https://wa.me/${waNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-sm font-bold transition-all"
                style={{ background: "var(--color-whatsapp)" }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                تواصل معنا
              </a>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-lg transition-colors bg-gray-50 hover:bg-gray-100"
                style={{ color: "var(--color-primary)" }}
                aria-label="القائمة"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-b shadow-xl animate-fade-in-up"
            style={{ borderColor: "var(--color-border)" }}
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-lg font-bold text-center"
                  style={{ color: "var(--color-primary)" }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t" style={{ borderColor: "var(--color-border-light)" }}>
                <a
                  href={`https://wa.me/${waNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3.5 rounded-xl text-white font-bold text-lg"
                  style={{ background: "var(--color-whatsapp)" }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  تواصل معنا عبر واتساب
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
