import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || "971XXXXXXXXX";

  return (
    <footer id="footer" className="mt-auto relative overflow-hidden bg-[var(--color-primary)] text-white islamic-pattern-bg">
      <div className="absolute inset-0 bg-black/40"></div> {/* Dark overlay for pattern */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Store Info */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-white p-1 rounded-xl shadow-lg border-2 border-[var(--color-gold)]">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image src="/maktabahthahabi-logo.png" alt="مكتبة الإمام الذهبي" fill className="object-cover" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-2xl text-white">مكتبة الإمام الذهبي</h3>
                <p className="text-[var(--color-gold)] text-sm font-bold">للعلوم الشرعية</p>
              </div>
            </div>
            <p className="text-gray-300 text-[15px] leading-loose max-w-md">
              منصة متخصصة في توفير أفضل الإصدارات العلمية والكتب الإسلامية الموثوقة من دور النشر المعتمدة. نسعى لخدمة طالب العلم ونشر المعرفة الصحيحة.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="font-bold text-xl mb-6 text-white border-b-2 border-[var(--color-gold)] inline-block pb-2">
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              {[
                { label: "الرئيسية", href: "/" },
                { label: "تصفح جميع الكتب", href: "/books" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[var(--color-gold)] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[var(--color-gold)] text-xs">◀</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-5">
            <h3 className="font-bold text-xl mb-6 text-white border-b-2 border-[var(--color-gold)] inline-block pb-2">
              تواصل معنا
            </h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Baniyas West 2<br />أبوظبي، الإمارات العربية المتحدة
                </p>
              </div>

            </div>
            {/* Google Map Embed */}
            <div className="rounded-xl overflow-hidden shadow-md border border-white/10 h-48 w-full bg-white/5 relative">
              <iframe
                src="https://maps.google.com/maps?q=مكتبة%20الإمام%20الذهبي,%20أبوظبي&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} مكتبة الإمام الذهبي. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
