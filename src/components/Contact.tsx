import { FormEvent, useState } from "react";
import SectionShell from "./SectionShell";
import Button from "./Button";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "error" | "sent">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name")?.toString().trim();
    const email = data.get("email")?.toString().trim();
    const message = data.get("message")?.toString().trim();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    // Placeholder submit: connect to API / email service here.
    setStatus("sent");
    form.reset();
  };

  return (
    <SectionShell
      id="contact"
      title="Contact"
      description="Vertel kort wat je zoekt. Ik reageer binnen één werkdag."
    >
      <form
        onSubmit={onSubmit}
        className="grid gap-5 rounded-3xl border border-soft bg-white p-6 shadow-soft sm:p-8"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-medium text-slate-700 space-y-2">
            Naam
            <input
              name="name"
              type="text"
              required
              className="w-full rounded-xl border border-soft bg-mist px-3 py-2 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
          </label>
          <label className="text-sm font-medium text-slate-700 space-y-2">
            E-mail
            <input
              name="email"
              type="email"
              required
              className="w-full rounded-xl border border-soft bg-mist px-3 py-2 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
          </label>
        </div>
        <label className="text-sm font-medium text-slate-700 space-y-2">
          Bericht
          <textarea
            name="message"
            required
            rows={5}
            className="w-full rounded-xl border border-soft bg-mist px-3 py-2 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </label>
        <div className="flex flex-wrap items-center gap-4">
          <Button type="submit">Verstuur bericht</Button>
          {status === "error" && (
            <span className="text-sm text-red-500">Vul alle velden in.</span>
          )}
          {status === "sent" && (
            <span className="text-sm text-green-600">Bedankt! Ik neem contact op.</span>
          )}
        </div>
      </form>
    </SectionShell>
  );
};

export default Contact;
