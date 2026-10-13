'use client';
import { useRef, useState } from 'react';

type Details = { name: string; email: string; type: string; message: string };

export default function Contact() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [details, setDetails] = useState<Details | null>(null);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    setDetails({
      name: String(values.get('name') ?? '').trim(),
      email: String(values.get('email') ?? '').trim(),
      type: String(values.get('type') ?? ''),
      message: String(values.get('message') ?? '').trim(),
    });
    dialog.current?.showModal();
  }

  return (
    <main className="page section">
      <p className="eyebrow">CONTACT</p>
      <div className="contact-grid">
        <div>
          <h1>
            Your story
            <br />
            <em>starts here.</em>
          </h1>
          <p className="page-description">
            Tell me what you want to remember. An idea, a place, a feeling — a
            few words are all it takes.
          </p>
        </div>
        <form onSubmit={submit}>
          <label>
            Your name
            <input
              name="name"
              placeholder="What should I call you?"
              required
              minLength={2}
              maxLength={100}
              autoComplete="name"
            />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              maxLength={254}
              autoComplete="email"
            />
          </label>
          <label>
            Session type
            <select name="type">
              <option>Portrait session</option>
              <option>Couples session</option>
              <option>Brand photography</option>
              <option>Something else</option>
            </select>
          </label>
          <label>
            Your idea
            <textarea
              name="message"
              placeholder="Tell me about your session, dates, and ideas…"
              required
              minLength={10}
              maxLength={5000}
              rows={4}
            />
          </label>
          <button className="button" type="submit">
            Submit ↗
          </button>
        </form>
      </div>
      <dialog
        ref={dialog}
        className="thank-you-dialog"
        aria-labelledby="thank-you-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <button
          className="close"
          type="button"
          aria-label="Close popup"
          onClick={() => dialog.current?.close()}
        >
          ×
        </button>
        <p className="eyebrow">YOUR STORY MATTERS</p>
        <h2 id="thank-you-title">Thank you!</h2>
        <p className="thank-you-intro">
          Thanks for sharing your idea. Here are the details you entered:
        </p>
        {details && (
          <dl className="submission-details">
            <div>
              <dt>Name</dt>
              <dd>{details.name}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>{details.email}</dd>
            </div>
            <div>
              <dt>Session type</dt>
              <dd>{details.type}</dd>
            </div>
            <div>
              <dt>Message</dt>
              <dd>{details.message}</dd>
            </div>
          </dl>
        )}
        <button
          type="button"
          className="button"
          onClick={() => dialog.current?.close()}
        >
          Close ↗
        </button>
      </dialog>
    </main>
  );
}
