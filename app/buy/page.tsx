import type { Metadata } from "next";
export const metadata: Metadata = { title: "לרכישה" };
export default function Buy() {
    return <main className="inner-page page-shell buy-page">
        <section className="paper-panel">
            <header className="page-heading">
                <p className="eyebrow">העותק שלכם מחכה</p>
                <h1>ספר עם הקדשה אישית</h1>
            </header>
            <p>באפשרותכם לרכוש עותק עם הקדשה אישית ומשלוח ישירות מהסופר בעלות של 100 ש"ח. הגעה תוך 10 ימי עסקים.</p>
            <p>הזמינו ושלמו דרך מערכת גרו (Grow): לחצו על הכפתור או סרקו את קוד ה-QR </p>
            
            <div className="purchase-page-actions">
                <a className="button button-secondary2" href="https://pay.grow.link/OTk5NDQ~e6a9b1b655dc57fd2f4f68112c32026e-MzcxMzAwNQ" target="_blank" rel="noreferrer">לרכישת עותק  עם הקדשה אישית</a>
            </div>

            <div className="purchase-qr">
                <img
                    src="/assets/GrowQRLink.png"
                    alt="לינק לתשלום"
                    width="250"
                    height="250"
                    fetchPriority="high"
                />
            </div>
            


            <div className="purchase-page-actions">
                <a className="button button-secondary2" href="https://bookpod.co.il/product/%D7%90%D7%94%D7%91%D7%AA%D7%99-%D7%9C%D7%90%D7%A9%D7%AA-%D7%94%D7%A4%D7%97/" target="_blank" rel="noreferrer">לרכישה בבוקפוד</a>
                <a className="button button-secondary2" href="https://simania.co.il/bookdetails.php?item_id=1028117" target="_blank" rel="noreferrer">לעמוד בסימניה</a>
            </div>
        </section>
    </main>;


}
