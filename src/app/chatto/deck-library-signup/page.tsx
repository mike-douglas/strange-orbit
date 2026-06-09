"use client";

import { useState } from "react";
import styles from "./page.module.css";

const LOOPS_FORM_ID = "cmj9gn3xi087x0izsc9ufp1cb";

type Status = "idle" | "loading" | "success" | "error";

export default function DeckLibrarySignupPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(
        `https://app.loops.so/api/newsletter-form/${LOOPS_FORM_ID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ email }),
        }
      );

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.badge}>Coming Soon</div>
        <h1 className={styles.heading}>More Decks on the Way</h1>
        <p className={styles.subtext}>
          JLPT vocab, kanji, and more are in the works. Drop your email and
          we&apos;ll let you know when new decks land.
        </p>

        {status === "success" ? (
          <p className={styles.successMessage}>
            You&apos;re on the list — we&apos;ll be in touch!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              disabled={status === "loading"}
            />
            <button
              type="submit"
              className={styles.button}
              disabled={status === "loading"}
            >
              {status === "loading" ? "Submitting…" : "Notify Me"}
            </button>
            {status === "error" && (
              <p className={styles.errorMessage}>
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
