import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";
import CopyLinkButton from "@/components/CopyLinkButton";
import { getAllBooks, getBookBySlug, getBooksByCategory, buildWhatsAppLink } from "@/lib/books";
import { CATEGORY_LABELS } from "@/types/book";

export async function generateStaticParams() {
  const books = getAllBooks();
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) return { title: "كتاب غير موجود" };
  return {
    title: `${book.title} | مكتبة الإمام الذهبي`,
    description: `${book.title} - ${book.author} - ${book.price} درهم. اطلب الآن عبر واتساب من مكتبة الإمام الذهبي.`,
  };
}

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) notFound();

  const relatedBooks = getBooksByCategory(book.category)
    .filter((b) => b.id !== book.id)
    .slice(0, 4);

  const waLink = buildWhatsAppLink(book.title, book.price);

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-14 bg-[var(--color-bg)]">
        
        {/* Elegant Top Banner */}
        <div className="bg-[var(--color-primary)] text-white islamic-pattern-bg py-8">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-gray-300">
                <Link href="/" className="hover:text-[var(--color-gold)] transition-colors">الرئيسية</Link>
                <span>/</span>
                <Link href="/books" className="hover:text-[var(--color-gold)] transition-colors">الكتب</Link>
                <span>/</span>
                <Link href={`/books?category=${book.category}`} className="hover:text-[var(--color-gold)] transition-colors">
                  {CATEGORY_LABELS[book.category]}
                </Link>
                <span>/</span>
                <span className="text-[var(--color-gold)] font-medium truncate">{book.title}</span>
              </nav>
           </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Book Detail Container */}
          <div className="bg-white rounded-3xl shadow-sm border border-[var(--color-border-light)] p-6 md:p-10 mb-16 relative overflow-hidden">
             
            <div className="flex flex-col md:flex-row gap-10 md:gap-14 relative z-10">
              {/* Cover Image */}
              <div className="md:w-1/3 lg:w-1/4 shrink-0 mx-auto md:mx-0">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                  {book.image ? (
                    <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="book-cover-placeholder w-full h-full bg-gradient-to-br from-gray-50 to-gray-200">
                      <div className="text-center px-6">
                        <svg className="w-20 h-20 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <p className="text-[15px] font-bold text-gray-400">{book.title}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Book Info */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="inline-block px-4 py-1.5 rounded-lg text-sm font-bold bg-[var(--color-gold-bg)] text-[var(--color-gold)] mb-4">
                    {CATEGORY_LABELS[book.category]}
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4 text-[var(--color-primary)]">
                    {book.title}
                  </h1>
                  <p className="text-xl font-medium text-[var(--color-text-muted)] flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    {book.author}
                  </p>
                </div>

                <hr className="my-8 border-[var(--color-border-light)]" />

                {/* Metadata Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <p className="text-sm text-gray-500 mb-1">السعر</p>
                    <p className="text-2xl font-bold text-[var(--color-gold)]">{book.price} <span className="text-base font-medium">درهم</span></p>
                  </div>
                  
                  {book.volumes && (
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <p className="text-sm text-gray-500 mb-1">عدد المجلدات</p>
                      <p className="text-lg font-bold text-[var(--color-primary)]">{book.volumes} <span className="text-sm font-normal">مجلد</span></p>
                    </div>
                  )}
                  {book.language && (
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <p className="text-sm text-gray-500 mb-1">اللغة</p>
                      <p className="text-lg font-bold text-[var(--color-primary)]">{book.language}</p>
                    </div>
                  )}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-white text-lg font-bold shadow-lg shadow-green-500/30 transition-all hover:-translate-y-1 whatsapp-pulse bg-[#25D366] hover:bg-[#1EBE5A]"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    اطلب الكتاب عبر واتساب
                  </a>
                  <CopyLinkButton />
                </div>
              </div>
            </div>
          </div>

          {/* Related Books */}
          {relatedBooks.length > 0 && (
            <section className="pt-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-8 bg-[var(--color-gold)] rounded-full"></div>
                <h2 className="text-2xl font-bold text-[var(--color-primary)]">
                  كتب من نفس التصنيف
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {relatedBooks.map((b) => (
                  <BookCard key={b.id} book={b} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
