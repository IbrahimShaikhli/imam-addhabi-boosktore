import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";
import { getAllBooks } from "@/lib/books";
import { CATEGORY_LABELS, BookCategory } from "@/types/book";

export default function HomePage() {
  const allBooks = getAllBooks();

  // Group books by category for featured rows
  const categoriesWithBooks = (Object.keys(CATEGORY_LABELS) as BookCategory[])
    .map((cat) => ({
      key: cat,
      label: CATEGORY_LABELS[cat],
      books: allBooks.filter((b) => b.category === cat).slice(0, 4),
    }))
    .filter((c) => c.books.length >= 4)
    .slice(0, 4);

  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Premium Hero Section */}
        <section className="relative overflow-hidden min-h-[70vh] flex items-center justify-center text-center">
          {/* Background Image of Abu Dhabi Mosque */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/mosque.jpg"
              alt="Background"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Thin layer / Color Overlay (Similar to Al-Balagh) */}
          <div className="absolute inset-0 z-10 islamic-pattern-overlay mix-blend-overlay opacity-60"></div>
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary)]/80 to-[var(--color-primary)]/50 opacity-95"></div>

          <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full flex flex-col items-center">
            <div className="stagger-children flex flex-col items-center">
              <div className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-[var(--color-gold)]/30 text-[var(--color-gold-light)] font-bold text-sm mb-8 shadow-[0_0_15px_rgba(180,140,74,0.3)]">
                مرحباً بكم في منصة
              </div>
              <div className="relative w-[320px] h-[140px] sm:w-[480px] sm:h-[180px] mb-6 drop-shadow-2xl">
                <Image
                  src="/maktabahthahabi-logo.png"
                  alt="مكتبة الإمام الذهبي"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-lg sm:text-3xl mb-12 text-gray-200 max-w-3xl leading-relaxed font-bold drop-shadow-md text-[var(--color-gold-light)]">
                لبيع الكتب والرسائل والأقراص العلمية النافعة
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/books"
                  className="inline-flex items-center justify-center px-10 py-4 rounded-xl text-[var(--color-primary)] font-bold text-lg transition-all hover:scale-105 bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] shadow-[0_0_20px_rgba(180,140,74,0.4)]"
                >
                  تصفح جميع الكتب
                  <svg className="w-5 h-5 mr-3 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Bar */}
        <div className="bg-white border-b border-[var(--color-border)] shadow-sm relative z-20 -mt-6 mx-4 sm:mx-8 lg:mx-auto max-w-6xl rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-[var(--color-border-light)]">
            <div>
              <div className="w-12 h-12 mx-auto bg-[var(--color-gold-bg)] text-[var(--color-gold)] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h3 className="font-bold text-lg mb-2">تنوع في الكتب</h3>
              <p className="text-sm text-[var(--color-text-muted)]">مجموعة واسعة من شتى العلوم الشرعية</p>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="w-12 h-12 mx-auto bg-[var(--color-gold-bg)] text-[var(--color-gold)] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-bold text-lg mb-2">الجودة والثقة</h3>
              <p className="text-sm text-[var(--color-text-muted)]">إصدارات موثوقة من دور نشر معتمدة</p>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="w-12 h-12 mx-auto bg-[var(--color-gold-bg)] text-[var(--color-gold)] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
              </div>
              <h3 className="font-bold text-lg mb-2">طلب سهل</h3>
              <p className="text-sm text-[var(--color-text-muted)]">اطلب بسهولة وسرعة عبر واتساب</p>
            </div>
          </div>
        </div>

        <div className="h-16"></div>

        {/* Category Rows */}
        {categoriesWithBooks.map((cat, idx) => (
          <section key={cat.key} className={`py-12 ${idx % 2 === 0 ? 'bg-[var(--color-bg)]' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4 border-b border-[var(--color-border-light)] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-8 bg-[var(--color-gold)] rounded-full"></div>
                  <h2 className="text-2xl font-bold text-[var(--color-primary)]">
                    {cat.label}
                  </h2>
                </div>
                <Link
                  href={`/books?category=${cat.key}`}
                  className="inline-flex items-center text-sm font-bold text-[var(--color-gold)] hover:text-[var(--color-gold-light)] transition-colors bg-[var(--color-gold-bg)] px-4 py-2 rounded-lg"
                >
                  عرض المزيد
                  <svg className="w-4 h-4 mr-1 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {cat.books.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </>
  );
}
