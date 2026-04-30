"use client";

export default function CopyLinkButton() {
  return (
    <button
      onClick={() => {
        if (typeof navigator !== "undefined") {
           navigator.clipboard.writeText(window.location.href);
           alert("تم نسخ الرابط بنجاح!");
        }
      }}
      className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-[15px] font-bold border-2 transition-all hover:-translate-y-1 bg-white border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] shadow-sm w-full sm:w-auto"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
      </svg>
      نسخ الرابط
    </button>
  );
}
