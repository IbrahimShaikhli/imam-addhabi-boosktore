"use client";

import { BookCategory, CATEGORY_LABELS, ALL_CATEGORIES } from "@/types/book";

interface CategoryPillsProps {
  activeCategory: BookCategory | "all";
  onSelect: (category: BookCategory | "all") => void;
}

export default function CategoryPills({ activeCategory, onSelect }: CategoryPillsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto hide-scrollbar py-1">
      <button
        onClick={() => onSelect("all")}
        className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
          activeCategory === "all" ? "pill-active" : ""
        }`}
        style={
          activeCategory === "all"
            ? { background: "var(--color-gold)", color: "white" }
            : { background: "var(--color-border-light)", color: "var(--color-text-muted)" }
        }
      >
        الكل
      </button>
      {ALL_CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeCategory === cat ? "pill-active" : ""
          }`}
          style={
            activeCategory === cat
              ? { background: "var(--color-gold)", color: "white" }
              : { background: "var(--color-border-light)", color: "var(--color-text-muted)" }
          }
        >
          {CATEGORY_LABELS[cat]}
        </button>
      ))}
    </div>
  );
}
