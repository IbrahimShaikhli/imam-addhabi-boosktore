import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "مكتبة الإمام الذهبي | كتب إسلامية في الإمارات",
  description:
    "مكتبة الإمام الذهبي - متجر الكتب الإسلامية في أبوظبي، الإمارات العربية المتحدة. كتب العقيدة والفقه والحديث والسيرة والتفسير. اطلب عبر واتساب.",
  keywords: "كتب إسلامية, مكتبة, الإمارات, أبوظبي, عقيدة, فقه, حديث, قرآن",
  openGraph: {
    title: "مكتبة الإمام الذهبي",
    description: "متجر الكتب الإسلامية في أبوظبي",
    locale: "ar_AE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
