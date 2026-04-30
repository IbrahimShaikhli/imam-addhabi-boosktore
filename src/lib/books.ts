import booksData from "@/data/books.json";
import { Book, BookCategory } from "@/types/book";

const books: Book[] = booksData as Book[];

export function getAllBooks(): Book[] {
  return books;
}

export function getBookBySlug(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}

export function getBooksByCategory(category: BookCategory): Book[] {
  return books.filter((b) => b.category === category);
}

export function getFeaturedBooks(): Book[] {
  return books.filter((b) => b.featured);
}

export function searchBooks(query: string): Book[] {
  const q = query.toLowerCase().trim();
  if (!q) return books;
  return books.filter(
    (b) =>
      b.title.includes(q) ||
      b.author.includes(q) ||
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q)
  );
}

export function buildWhatsAppLink(title: string, price: number): string {
  const phone = process.env.NEXT_PUBLIC_WA_NUMBER || "971XXXXXXXXX";
  const message = encodeURIComponent(
    ` السلام عليكم ورحمة الله وبركاته أريد طلب كتاب: ${title} - السعر: ${price} درهم`
  );
  return `https://wa.me/${phone}?text=${message}`;
}
