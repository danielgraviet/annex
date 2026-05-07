"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function Waitlist() {
  const [mode, setMode] = useState<"tenant" | "host">("tenant");
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    location: "",
    spaceType: "",
    spaceDetails: "",
  });

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Valid email required";
    if (!form.company.trim()) e.company = "Required";
    if (!form.location.trim()) e.location = "Required";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setState("submitting");
    await new Promise((r) => setTimeout(r, 1000));
    setState("success");
  };

  const field = (
    id: keyof typeof form,
    label: string,
    placeholder: string,
    type = "text"
  ) => (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-mono tracking-widest text-[#6b7280] uppercase mb-2"
      >
        {label}
        {["name", "email", "company", "location"].includes(id) && (
          <span className="text-[#e07b39] ml-1">*</span>
        )}
      </label>
      <input
        id={id}
        type={type}
        value={form[id]}
        onChange={(ev) => setForm({ ...form, [id]: ev.target.value })}
        placeholder={placeholder}
        className={`w-full bg-[#111] border text-[#f0ebe3] placeholder-[#3a3a3a] px-4 py-3 text-sm outline-none focus:border-[#e07b39] transition-colors ${
          errors[id] ? "border-red-500/60" : "border-[#2a2a2a]"
        }`}
      />
      {errors[id] && (
        <p className="mt-1 text-xs text-red-400 font-mono">{errors[id]}</p>
      )}
    </div>
  );

  return (
    <section
      id="waitlist"
      className="py-28 bg-[#0f0f0f] border-t border-[#1a1a1a]"
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="block font-mono text-xs tracking-widest text-[#e07b39] uppercase mb-4">
            Get Early Access
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f0ebe3] mb-5 text-balance">
            Find your next workspace before everyone else does.
          </h2>
          <p className="text-[#a09890] text-lg leading-relaxed max-w-xl mx-auto">
            Annex is starting with a curated set of unique industrial and
            commercial spaces. Join the waitlist for early access.
          </p>
        </div>

        {/* Mode toggle */}
        <div className="flex border border-[#2a2a2a] mb-10">
          {(["tenant", "host"] as const).map((m) => (
            <button
              key={m}
              onClick={() => { setMode(m); setState("idle"); }}
              className={`flex-1 py-3 text-sm font-mono tracking-widest uppercase transition-colors ${
                mode === m
                  ? "bg-[#1a1a1a] text-[#f0ebe3]"
                  : "text-[#6b7280] hover:text-[#a09890]"
              }`}
            >
              {m === "tenant" ? "I need space" : "I have space"}
            </button>
          ))}
        </div>

        {state === "success" ? (
          <div className="text-center py-16 border border-[#2a2a2a] bg-[#111]">
            <div className="w-12 h-12 border-2 border-[#e07b39] flex items-center justify-center mx-auto mb-6">
              <span className="text-[#e07b39] text-xl">✓</span>
            </div>
            <h3 className="text-[#f0ebe3] font-bold text-xl mb-3">
              You're on the list.
            </h3>
            <p className="text-[#6b7280] text-sm leading-relaxed max-w-sm mx-auto">
              We'll be in touch when spaces in your area open up. Expect
              something worth showing up to.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              {field("name", "Name", "Your name")}
              {field("email", "Email", "you@company.com", "email")}
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {field("company", "Company", "Company name")}
              {field("location", "Location", "City or metro area")}
            </div>

            {mode === "tenant" ? (
              <div>
                <label
                  htmlFor="spaceType"
                  className="block text-xs font-mono tracking-widest text-[#6b7280] uppercase mb-2"
                >
                  What kind of space?
                </label>
                <select
                  id="spaceType"
                  value={form.spaceType}
                  onChange={(e) => setForm({ ...form, spaceType: e.target.value })}
                  className="w-full bg-[#111] border border-[#2a2a2a] text-[#f0ebe3] px-4 py-3 text-sm outline-none focus:border-[#e07b39] transition-colors appearance-none"
                >
                  <option value="" className="text-[#6b7280]">Select one…</option>
                  <option>Hangar / Aviation</option>
                  <option>Warehouse / Industrial</option>
                  <option>Fabrication / Workshop</option>
                  <option>Campus / Multi-tenant</option>
                  <option>Other / Open to ideas</option>
                </select>
              </div>
            ) : (
              <div>
                <label
                  htmlFor="spaceDetails"
                  className="block text-xs font-mono tracking-widest text-[#6b7280] uppercase mb-2"
                >
                  Tell us about your space
                </label>
                <textarea
                  id="spaceDetails"
                  rows={4}
                  value={form.spaceDetails}
                  onChange={(e) => setForm({ ...form, spaceDetails: e.target.value })}
                  placeholder="Type, size, availability, location…"
                  className="w-full bg-[#111] border border-[#2a2a2a] text-[#f0ebe3] placeholder-[#3a3a3a] px-4 py-3 text-sm outline-none focus:border-[#e07b39] transition-colors resize-none"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={state === "submitting"}
              className="w-full bg-[#e07b39] hover:bg-[#c96a2a] disabled:opacity-60 text-white font-bold py-4 text-sm tracking-widest uppercase transition-colors"
            >
              {state === "submitting"
                ? "Submitting…"
                : mode === "tenant"
                ? "Join the Waitlist"
                : "List My Space"}
            </button>

            <p className="text-center text-xs text-[#3a3a3a] font-mono">
              No spam. No brokers. No beige.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
