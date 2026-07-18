import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "אהבתי לאשת הפח", template: "%s | אהבתי לאשת הפח" },
  description: "האתר הרשמי של הרומן אהבתי לאשת הפח — על אהבה, אמנות והתחלות חדשות בסביליה.",
};

const nav = [
  ["/", "על הספר"],
  ["/characters", "הדמויות"],
  ["/sample", "פרק לדוגמה"],
  ["/soundtrack", "פסקול"],
  ["/contact", "צור קשר"],
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl">
      <body>
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
