import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import { profile } from "../data/content";
import SectionHeading from "./SectionHeading";

const infoCards = [
  { icon: FiMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: FiMapPin, label: "Location", value: profile.location, href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: "var(--bg-panel-2)" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading index="09" label="contact" title="Let's build something" description="Open to internships, freelance work, and full-time roles. The form below opens a pre-filled email — or reach me directly." />

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8">
          <div className="space-y-4">
            {infoCards.map((card) => {
              const Content = (
                <div className="reveal card-surface rounded-2xl p-5 flex items-center gap-4 hover:border-[var(--color-coral)] transition-colors">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[var(--color-coral)]/10 text-[var(--color-coral)] shrink-0">
                    <card.icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10.5px]" style={{ color: "var(--text-muted)" }}>{card.label}</p>
                    <p className="text-[13.5px] font-medium truncate text-[var(--text-primary)]">{card.value}</p>
                  </div>
                </div>
              );
              return card.href ? (
                <a key={card.label} href={card.href}>{Content}</a>
              ) : (
                <div key={card.label}>{Content}</div>
              );
            })}

            <div className="reveal flex items-center gap-3 pt-2">
              <a href={profile.github} target="_blank" rel="noreferrer" className="p-3 rounded-full border hover:text-[var(--color-coral)] hover:border-[var(--color-coral)] transition-colors" style={{ borderColor: "var(--line)", color: "var(--text-muted)" }}>
                <FiGithub size={17} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-full border hover:text-[var(--color-coral)] hover:border-[var(--color-coral)] transition-colors" style={{ borderColor: "var(--line)", color: "var(--text-muted)" }}>
                <FiLinkedin size={17} />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="reveal card-surface rounded-2xl p-7 sm:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="font-mono text-[11px]" style={{ color: "var(--text-muted)" }}>Name</label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full rounded-lg px-4 py-2.5 text-[13.5px] outline-none focus:border-[var(--color-coral)]"
                  style={{ backgroundColor: "var(--bg-panel-2)", border: "1px solid var(--line)", color: "var(--text-primary)" }}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-mono text-[11px]" style={{ color: "var(--text-muted)" }}>Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full rounded-lg px-4 py-2.5 text-[13.5px] outline-none focus:border-[var(--color-coral)]"
                  style={{ backgroundColor: "var(--bg-panel-2)", border: "1px solid var(--line)", color: "var(--text-primary)" }}
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="font-mono text-[11px]" style={{ color: "var(--text-muted)" }}>Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full rounded-lg px-4 py-2.5 text-[13.5px] outline-none focus:border-[var(--color-coral)] resize-none"
                style={{ backgroundColor: "var(--bg-panel-2)", border: "1px solid var(--line)", color: "var(--text-primary)" }}
                placeholder="Tell me about the role or project..."
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-coral)] text-white font-mono text-[13px] hover:brightness-110 transition"
            >
              Send Message <FiSend size={14} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
