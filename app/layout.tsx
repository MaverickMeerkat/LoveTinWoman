import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import localFont from "next/font/local";
import { MetaPixel } from "./MetaPixel";
import "./globals.css";

const frankRuhl = localFont({
  src: [
    { path: "../public/fonts/FrankRuhl-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/FrankRuhl-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-frank",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lovetinwoman.co.il"),
  title: { default: "אהבתי לאשת הפח", template: "%s | אהבתי לאשת הפח" },

  description: "הרומן אהבתי לאשת הפח — רומן פסיכולוגי פיוטי על אהבה וחברות",
  icons: {
    icon: "/favicon2.png",
    shortcut: "/favicon2.png",
    apple: "/favicon2.png",
  },

  openGraph: {
    title: "אהבתי לאשת הפח",
    description: "הרומן אהבתי לאשת הפח — רומן פסיכולוגי פיוטי על אהבה וחברות",
    url: "https://lovetinwoman.co.il",
    siteName: "אהבתי לאשת הפח",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 600,
        height: 573,
        alt: "אהבתי לאשת הפח",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "אהבתי לאשת הפח",
    description: "הרומן אהבתי לאשת הפח — רומן פסיכולוגי פיוטי על אהבה וחברות",
    images: ["/opengraph-image.jpg"],
  },

};

const nav = [
  ["/", "על הספר"],
  ["/characters", "הדמויות"],
  ["/sample", "פרק לדוגמה"],
  ["/soundtrack", "פסקול"],
  ["/contact", "צור קשר"],
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() ?? "";
  const validPixelId = /^\d+$/.test(pixelId) ? pixelId : "";
  const bodyStyle = {
    "--background-image": `url("${basePath}/assets/Background.png")`,
  } as CSSProperties;

  return (
    <html lang="he" dir="rtl">
      <body className={frankRuhl.variable} style={bodyStyle}>
        {validPixelId && <MetaPixel pixelId={validPixelId} />}
        <header className="site-header">
          <div className="nav-wrap">
            <Link className="brand" href="/" aria-label="אהבתי לאשת הפח — דף הבית">
              <span>אהבתי לאשת הפח</span><small></small>
            </Link>
            <nav aria-label="ניווט ראשי">
              {nav.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
            </nav>
            <Link className="buy-pill" href="/buy">לרכישה</Link>
          </div>
        </header>
        {children}
        <footer><p>© {new Date().getFullYear()} דוד רפאלי</p><p>התמונות באתר נוצרו באמצעות בינה מלאכותית. הספר לא</p></footer>
      </body>
    </html>
  );
}
