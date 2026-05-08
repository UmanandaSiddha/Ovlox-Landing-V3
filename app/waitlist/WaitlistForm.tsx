"use client";

import { useState } from "react";

const FORM_ENDPOINT =
  "https://docs.google.com/forms/d/e/1FAIpQLSftE4zzA3SWULOmNc2PYSIuTMWazdAuYAr4IDEv3U6k9psBCw/formResponse";

type Toast = { type: "success" | "error"; message: string } | null;

export default function WaitlistForm() {
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<Toast>(null);

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ type, message });
    window.setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      params.append(key, value as string);
    });

    try {
      await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: params,
        mode: "no-cors",
      });
      form.reset();
      showToast(
        "success",
        "You're on the list. Watch your inbox — we'll be in touch soon."
      );
    } catch {
      showToast(
        "error",
        "Something went wrong. Please double-check your details and try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {toast && (
        <div className={`toast ${toast.type}`} role="status">
          {toast.type === "success" ? (
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path
                d="M17 7L8 16L3 11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 2C5.58 2 2 5.58 2 10C2 14.42 5.58 18 10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z"
                fill="currentColor"
              />
            </svg>
          )}
          <span>{toast.message}</span>
        </div>
      )}

      <form className="wl-stack" onSubmit={handleSubmit}>
        <div className="wl-row">
          <div className="wl-field">
            <label className="wl-label" htmlFor="firstName">
              First name <span className="req">*</span>
            </label>
            <input
              className="wl-input"
              type="text"
              id="firstName"
              name="entry.904232106"
              required
              autoComplete="given-name"
              placeholder="Maya"
            />
          </div>
          <div className="wl-field">
            <label className="wl-label" htmlFor="lastName">
              Last name <span className="req">*</span>
            </label>
            <input
              className="wl-input"
              type="text"
              id="lastName"
              name="entry.1457477832"
              required
              autoComplete="family-name"
              placeholder="Chen"
            />
          </div>
        </div>

        <div className="wl-field">
          <label className="wl-label" htmlFor="email">
            Work email <span className="req">*</span>
          </label>
          <input
            className="wl-input"
            type="email"
            id="email"
            name="entry.1886220119"
            required
            autoComplete="email"
            placeholder="you@company.com"
          />
        </div>

        <div className="wl-field">
          <label className="wl-label" htmlFor="profession">
            What do you do?
          </label>
          <input
            className="wl-input"
            type="text"
            id="profession"
            name="entry.1611774670"
            autoComplete="organization-title"
            placeholder="Founder, Eng Manager, PM..."
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="btn btn-primary btn-lg wl-submit"
        >
          {submitting ? "Joining..." : "Join the waitlist"}
          {!submitting && (
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          )}
        </button>

        <div className="wl-foot">
          <span className="dot" />
          We&apos;ll only email you about Ovlox. No spam. Unsubscribe anytime.
        </div>
      </form>
    </>
  );
}
