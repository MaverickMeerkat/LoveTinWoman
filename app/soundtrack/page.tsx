import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "פסקול",
  description: "הפסקול של הספר אהבתי לאשת הפח.",
};

export default function Soundtrack() {
  return (
    <main className="inner-page page-shell soundtrack-page">
      <section className="paper-panel soundtrack-panel">
        <p className="soundtrack-notes" aria-hidden="true">♪ ♫ ♪</p>
        <header className="page-heading">
          <h1>פסקול הספר</h1>
          <p>מאיפה להתחיל?</p><p>
אנדרס קלמרו. "רזונת". כל סיפור אהבה צריך פסקול. ובשבילי, זה השיר שלנו. רוק ארגנטינאי מלנכולי של שנות התשעים. שיר על אהבה נכזבת: רזונת, אל תנסי לפגוע בי. הניסיונות שלך לא יצליחו. השארתי את האביבים הנשכחים שלנו בקופסה בתחתית הארון. זמנים זהובים, של עבר טוב יותר. אבל רחוק־רחוק, עמוק באדמה, השורשים של האהבה ממשיכים לצמוח.
</p>
        </header>
        <a
          className="button soundtrack-button"
          href="https://www.tunemymusic.com/share/3fCNG7K7Oj"
          target="_blank"
          rel="noreferrer"
        >
          להאזנה לפסקול
        </a>

        <ol className="track-list">
          <li>רזונת – אנדרס קלמרו <span lang="es">(Flaca – Andrés Calamaro)</span></li>
          <li>כמה יפה היא טריאנה – מלצ׳ורה אורטגה <span lang="es">(Qué bonita está Triana – Melchora Ortega)</span></li>
          <li>לסביליה הייתה ילדה – אל פּאלי <span lang="es">(Sevilla tuvo una niña – El Pali)</span></li>
          <li>לבתולה של רוסריו – לה פרלה דה קדיס <span lang="es">(A la virgen del Rosario – La Perla De Cadiz)</span></li>
          <li>לסביליה יש צבע מיוחד – לוס דל ריו <span lang="es">(Sevilla tiene un color especial – Los Del Rio)</span></li>
          <li>האחרים – קנט <span lang="sv">(Dom Andra – Kent)</span></li>
          <li>משהו איתך – ריטה פאייס ואליזבת׳ רומא <span lang="es">(Algo contigo – Rita Payés &amp; Elisabeth Roma)</span></li>
          <li>הנשיקות שנתתי לך – פלי פּרחון <span lang="es">(Los besos que yo te dí – Fely Perejón)</span></li>
          <li>נץ ויונה – מריה דל מונטה <span lang="es">(Un halcón y una paloma – María del Monte)</span></li>
          <li>הפרידה – אמיגוס דה חינס <span lang="es">(El adiós – Amigos de Gines)</span></li>
          <li>לעגון ברציף – מוניקה צטרלונד <span lang="sv">(Att angöra en brygga – Monica Zetterlund)</span></li>
          <li>יציבה כמו סלע – אלה פיצג׳רלד <span lang="en">(Solid as a rock – Ella Fitzgerald)</span></li>
          <li>הבחורה המושלמת – מארו <span lang="en">(The perfect girl – Mareux)</span></li>
          <li>ואלס הדקה – פרדריק שופן <span lang="en">(Waltz in D-flat major, Op. 64, No. 1 – Frédéric Chopin)</span></li>
          <li>את חירותי – ז׳ורז׳ מוסטקי <span lang="fr">(Ma liberté – George Moustaki)</span></li>
          <li>טוב, בסדר, ניצחת – קאונט בייסי וג׳ו ויליאמס <span lang="en">(Alright, okay, you win – Count Basie &amp; Joe Williams)</span></li>
          <li>גאווה של רוסיירו – אל פּאלי <span lang="es">(Orgullo rociero – El Pali)</span></li>
          <li>ציור שמן של אישה עם כובע – סילביו רודריגז <span lang="es">(Óleo de mujer con sombrero – Silvio Rodríguez)</span></li>
          <li>אבק בשקית – בילי סטרינגס <span lang="en">(Dust in a baggie – Billy Strings)</span></li>
          <li>הינה באה השמש – הביטלס <span lang="en">(Here comes the sun – The Beatles)</span></li>
          <li>אני אוהבת אותך... גם אני לא – סרז׳ גינזבורג וג׳יין בירקין <span lang="fr">(Je t&apos;aime… moi non plus – Serge Gainsbourg &amp; Jane Birkin)</span></li>
          <li>כשאמות – אל פאלי <span lang="es">(Cuando yo muera – El Pali)</span></li>
          <li>בדרכי שלי – פרנק סינטרה <span lang="en">(My way – Frank Sinatra)</span></li>
          <li>בבקשה תהיה שלי – ורוניקה מגיו <span lang="sv">(Snälla bli min – Veronica Maggio)</span></li>
          <li>לבדנר כחול (דילי דילי) – סלאמברלנד <span lang="en">(Lavender&apos;s Blue (Dilly Dilly) – Slumberland)</span></li>
          <li>שני צלבים – חוזה פליסיאנו <span lang="es">(Dos cruces – José Feliciano)</span></li>
        </ol>
      </section>
    </main>
  );
}
