import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = { title: "צור קשר" };

export default function Contact() {
  return (
    <main className="inner-page page-shell">
      <header className="page-heading">
        <p className="eyebrow">נשמח לשמוע מכם</p>
        <h1>צור קשר</h1>
        <p>לשאלות, אירועים, מפגשי סופר או פשוט כדי לספר לנו מה חשבתם.</p>
      </header>
      <div className="contact-grid">
        <aside className="contact-aside">
          <h2>בואו נדבר</h2>
          <p>ההודעה שלכם תגיע ישירות לצוות הספר. נשתדל לחזור אליכם בהקדם.</p>
        </aside>
        <ContactForm />
      </div>
    </main>
  );
}
