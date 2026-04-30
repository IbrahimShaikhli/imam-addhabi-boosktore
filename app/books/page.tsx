"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";
import CategoryPills from "@/components/CategoryPills";
import SearchBar from "@/components/SearchBar";
import { getAllBooks } from "@/lib/books";
import { BookCategory, CATEGORY_LABELS, ALL_CATEGORIES } from "@/types/book";

function BooksContent() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("category") as BookCategory) || "all";

  const [activeCategory, setActiveCategory] = useState<BookCategory | "all">(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [showCount, setShowCount] = useState(20);

  const allBooks = getAllBooks();

  const filteredBooks = useMemo(() => {
    let result = allBooks;

    if (activeCategory !== "all") {
      result = result.filter((b) => b.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.trim();
      result = result.filter(
        (b) => b.title.includes(q) || b.author.includes(q)
      );
    }

    return result;
  }, [allBooks, activeCategory, searchQuery]);

  const visibleBooks = filteredBooks.slice(0, showCount);
  const hasMore = showCount < filteredBooks.length;

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 bg-[var(--color-bg)]">
        {/* Page Header */}
        <div className="bg-white border-b border-[var(--color-border)] shadow-sm mb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] mb-3 relative inline-block">
                {activeCategory === "all" ? "مكتبة الإمام الذهبي" : CATEGORY_LABELS[activeCategory]}
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[var(--color-gold)] rounded-full"></div>
              </h1>
              <p className="text-[var(--color-text-muted)] mt-4">
                تصفح {activeCategory === "all" ? "جميع الكتب المتوفرة" : `مجموعة ${CATEGORY_LABELS[activeCategory]}`} ({filteredBooks.length} كتاب)
              </p>
            </div>
            <div className="w-full md:w-80 lg:w-96">
               <SearchBar value={searchQuery} onChange={setSearchQuery} placeholder="ابحث باسم الكتاب أو المؤلف..." />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Desktop */}
            <aside className="lg:w-72 shrink-0">
              <div className="lg:sticky lg:top-28">
                {/* Category filters - Mobile: horizontal pills */}
                <div className="lg:hidden mb-6">
                  <CategoryPills activeCategory={activeCategory} onSelect={setActiveCategory} />
                </div>

                {/* Category filters - Desktop: vertical list */}
                <div className="hidden lg:block bg-white rounded-2xl shadow-sm border border-[var(--color-border-light)] overflow-hidden">
                  <div className="p-4 bg-[var(--color-primary)] text-white font-bold text-lg">
                    التصنيفات
                  </div>
                  <div className="p-2 space-y-1">
                    <button
                      onClick={() => setActiveCategory("all")}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                        activeCategory === "all"
                          ? "bg-[var(--color-gold-bg)] text-[var(--color-gold)]"
                          : "text-[var(--color-primary-light)] hover:bg-gray-50"
                      }`}
                    >
                      <span>الكل</span>
                      <span className={`px-2 py-0.5 rounded-md text-xs ${activeCategory === 'all' ? 'bg-[var(--color-gold)] text-white' : 'bg-gray-100 text-gray-500'}`}>
                        {allBooks.length}
                      </span>
                    </button>
                    {ALL_CATEGORIES.map((cat) => {
                      const count = allBooks.filter((b) => b.category === cat).length;
                      if (count === 0) return null;
                      return (
                        <button
                          key={cat}
                          onClick={() => setActiveCategory(cat)}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                            activeCategory === cat
                              ? "bg-[var(--color-gold-bg)] text-[var(--color-gold)]"
                              : "text-[var(--color-primary-light)] hover:bg-gray-50"
                          }`}
                        >
                          <span>{CATEGORY_LABELS[cat]}</span>
                          <span className={`px-2 py-0.5 rounded-md text-xs ${activeCategory === cat ? 'bg-[var(--color-gold)] text-white' : 'bg-gray-100 text-gray-500'}`}>
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </aside>

            {/* Book Grid */}
            <div className="flex-1">
              {visibleBooks.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-2xl border border-[var(--color-border-light)] shadow-sm">
                  <div className="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <p className="text-xl font-bold text-[var(--color-primary)] mb-2">
                    لم يتم العثور على كتب
                  </p>
                  <p className="text-[var(--color-text-muted)] max-w-md mx-auto">
                    لم نتمكن من العثور على كتب تطابق بحثك. يرجى تجربة كلمات مختلفة أو تصفح جميع الأقسام.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {visibleBooks.map((book) => (
                      <BookCard key={book.id} book={book} />
                    ))}
                  </div>

                  {hasMore && (
                    <div className="text-center mt-12">
                      <button
                        onClick={() => setShowCount((c) => c + 20)}
                        className="px-8 py-3.5 rounded-xl text-[15px] font-bold transition-all hover:-translate-y-1 bg-white border-2 border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold-bg)] shadow-sm"
                      >
                        عرض المزيد من الكتب
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

import { Suspense } from "react";

export default function BooksPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[var(--color-bg)]" />}>
      <BooksContent />
    </Suspense>
  );
}
