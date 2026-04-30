export type BookCategory =
  | "aqeedah"
  | "quran"
  | "hadith"
  | "fiqh"
  | "seerah"
  | "raqaiq"
  | "lugha"
  | "fatawa"
  | "rudood"
  | "translated";

export type Book = {
  id: string;
  slug: string;
  title: string;
  author: string;
  category: BookCategory;
  price: number;
  volumes?: number;
  language?: string;
  image?: string | null;
  featured?: boolean;
};

export const CATEGORY_LABELS: Record<BookCategory, string> = {
  aqeedah: "العقيدة",
  quran: "القرآن وعلومه",
  hadith: "الحديث",
  fiqh: "الفقه",
  seerah: "السيرة والتراجم",
  raqaiq: "الرقائق والآداب",
  lugha: "اللغة",
  fatawa: "الرسائل والفتاوى",
  rudood: "الردود",
  translated: "كتب مترجمة",
};

export const ALL_CATEGORIES = Object.keys(CATEGORY_LABELS) as BookCategory[];
