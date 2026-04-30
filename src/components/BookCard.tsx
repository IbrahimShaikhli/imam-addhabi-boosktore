"use client";

import Link from "next/link";
import { Book, CATEGORY_LABELS } from "@/types/book";
import { buildWhatsAppLink } from "@/lib/books";

export default function BookCard({ book }: { book: Book }) {
  return (
    <div className="group transition-card rounded-xl overflow-hidden bg-white border h-full flex flex-col" style={{ borderColor: "var(--color-border-light)" }}>
      <Link href={`/books/${book.slug}`} className="block relative aspect-[3/4] overflow-hidden shrink-0">
        {/* Cover */}
        {book.image ? (
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="book-cover-placeholder w-full h-full">
            <div className="text-center px-4">
              <svg className="w-10 h-10 mx-auto mb-2 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <p className="text-xs font-medium opacity-40 line-clamp-2">{book.title}</p>
            </div>
          </div>
        )}
        {/* Category badge */}
        <span
          className="absolute top-2 right-2 text-xs px-2 py-0.5 rounded-full font-medium"
          style={{ background: "var(--color-gold-bg)", color: "var(--color-gold)" }}
        >
          {CATEGORY_LABELS[book.category]}
        </span>
      </Link>

      <div className="flex-1 flex flex-col p-3">
        <Link href={`/books/${book.slug}`} className="flex-1">
          <h3
            className="font-semibold text-sm leading-snug line-clamp-2 mb-1"
            style={{ color: "var(--color-text)" }}
          >
            {book.title}
          </h3>
          <p className="text-xs mb-2 line-clamp-1" style={{ color: "var(--color-text-muted)" }}>
            {book.author}
          </p>
          <div className="flex items-center justify-between mb-3">
            <span className="font-bold text-base" style={{ color: "var(--color-gold)" }}>
              {book.price} درهم
            </span>
            {book.volumes && (
              <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "var(--color-border-light)", color: "var(--color-text-muted)" }}>
                {book.volumes} مجلد
              </span>
            )}
          </div>
        </Link>

        {/* WhatsApp button always at bottom */}
        <div className="mt-auto">
          <a
            href={buildWhatsAppLink(book.title, book.price)}
            target="_blank"
            rel="noopener noreferrer"
            /* Added: px-2 (padding) and leading-tight for better multi-line spacing */
            className="flex items-center justify-center gap-2 w-full py-2 px-2 rounded-full text-white text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.98] leading-tight"
            style={{ background: "var(--color-whatsapp)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Added: shrink-0 to prevent the logo from squishing */}

            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>

            {/* Added: text-center to keep it pretty if it wraps */}
            <span className="text-center">اطلب عبر واتساب</span>
          </a>
        </div>
      </div>
    </div>
  );
}
