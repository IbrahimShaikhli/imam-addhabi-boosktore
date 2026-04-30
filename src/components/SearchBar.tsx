"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder = "ابحث عن كتاب..." }: SearchBarProps) {
  return (
    <div className="relative">
      {/* Search icon */}
      <svg
        className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5"
        style={{ color: "var(--color-text-light)" }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pr-10 pl-10 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2"
        style={{
          borderColor: "var(--color-border)",
          background: "var(--color-bg-card)",
          color: "var(--color-text)",
          // @ts-expect-error CSS custom property
          "--tw-ring-color": "var(--color-gold)",
        }}
      />

      {/* Clear button */}
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute left-3 top-1/2 -translate-y-1/2 p-1 rounded-full transition-colors hover:opacity-70"
          style={{ color: "var(--color-text-muted)" }}
          aria-label="مسح البحث"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}
