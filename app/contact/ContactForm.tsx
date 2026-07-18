"use client";

import { useForm, ValidationError } from "@formspree/react";

export function ContactForm() {
  const [state, handleSubmit] = useForm("mrenqppk");

  if (state.succeeded) {
    return (
      <div className="contact-form contact-success" role="status">
        <h2>תודה שכתבתם!</h2>
        <p>ההודעה נשלחה בהצלחה. נחזור אליכם בהקדם.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="contact-name">שם מלא</label>
      <input id="contact-name" name="name" required autoComplete="name" />

      <label htmlFor="contact-email">אימייל</label>
      <input id="contact-email" type="email" name="email" required autoComplete="email" />
      <ValidationError className="form-error" prefix="אימייל" field="email" errors={state.errors} />

      <label htmlFor="contact-message">הודעה</label>
      <textarea id="contact-message" name="message" required />
      <ValidationError className="form-error" prefix="הודעה" field="message" errors={state.errors} />

      <ValidationError className="form-error form-error-general" errors={state.errors} />

      <button className="button" type="submit" disabled={state.submitting}>
        {state.submitting ? "שולחים…" : "שליחת הודעה"}
      </button>
    </form>
  );
}
