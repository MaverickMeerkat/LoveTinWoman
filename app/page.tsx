import Link from "next/link";

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return (
    <main>
      <section className="hero page-shell" aria-labelledby="book-title">
        <div className="hero-copy">
          <p className="eyebrow">רומן פסיכולוגי פיוטי על אהבה וחברות</p>
          <h1 id="book-title">אהבתי לאשת הפח</h1>
          <p className="lead">
ברוכים הבאים לסביליה, בירת אנדלוסיה. עיר מכשפת, מלאת שמחת חיים, טיפוסים ססגוניים,
ריח פריחת הדרים, ומוסיקת פלמנקו.
אחזו חזק בנשמתכם, העיר הזאת עלולה לחטוף אותה!
          </p>
          <div className="hero-actions">
            <Link className="button" href="/buy">לרכישת הספר</Link>
            <Link className="text-link" href="/sample">לקריאת פרק לדוגמה <span aria-hidden="true">←</span></Link>
          </div>
        </div>
        <figure className="hero-image framed-image">
          <img
            src={`${basePath}/assets/All together 6.png`}
            alt="חבורת גיבורי הספר באלמדה של סביליה"
            width="1536"
            height="1024"
            fetchPriority="high"
          />
          <figcaption>לחיי החברוּת!</figcaption>
        </figure>
      </section>

      <section className="book-summary page-shell" aria-label="תקציר הספר">
        <p>
          סיפור על אהבה יוצאת דופן בין בחור רגשן ובחורה מוזרה על רקע שיר אהבה לעיר. דן הוא ישראלי שמוצא את עצמו חוזר שוב ושוב לסביליה – עיר אנדלוסית מלאת מסתורין וטיפוסים ססגוניים. בכתב ההגנה שהוא פורש בפני הקורא, הוא מתאר ברגישות את סיפור אהבתו הסבוכה לאֶמה, שוודית קרה ועצמאית, מנסה לרדת לעומקה ולפענח את החידה שגלומה בה. בדרך הוא מתוודע לשורת דמויות מרתקות וצבעוניות: ארתורו האוטיסט השנון וחובב הסמים, רפאל המשורר רודף השמלות, קלרה הפסיכולוגית היפיפייה, מרסדס ההיפית החושנית – ועוד רבים אחרים. אט־אט מתגלה שהדברים אינם תמיד כפי שהם מוצגים בתחילה, והמורכבות הטבועה בהכרת האחר ואהבתו הולכת ונפרשת בפני הקורא בשפה עשירה וקולחת.
        </p>
      </section>

      <section className="purchase-band page-shell" id="purchase" aria-labelledby="purchase-title">
        <div>
          <p className="eyebrow">הספר מחכה לכם</p>
          <h2 id="purchase-title">הצטרפו למסע</h2>
          <p>הזמינו עותק אישי, או גלו מה קוראים אחרים חשבו על הספר.</p>
        </div>
        <div className="purchase-links">
          <Link className="button" href="/buy">לרכישת עותק עם הקדשה</Link>
          <a className="button button-secondary" href="https://bookpod.co.il/product/%D7%90%D7%94%D7%91%D7%AA%D7%99-%D7%9C%D7%90%D7%A9%D7%AA-%D7%94%D7%A4%D7%97/" target="_blank" rel="noreferrer">לרכישה בבוקפוד</a>
          <a className="button button-secondary" href="https://simania.co.il/bookdetails.php?item_id=1028117" target="_blank" rel="noreferrer">לעמוד בסימניה</a>
        </div>
      </section>
    </main>
  );
}
