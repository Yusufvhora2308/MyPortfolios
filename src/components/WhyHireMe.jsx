import { FiCode, FiSmartphone, FiZap, FiCpu, FiUsers, FiClock } from "react-icons/fi";
import { whyHireMe } from "../data/content";
import SectionHeading from "./SectionHeading";

const icons = [FiCode, FiSmartphone, FiZap, FiCpu, FiUsers, FiClock];

export default function WhyHireMe() {
  return (
    <section id="why-hire-me" className="py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading index="05" label="why hire me" title="Reasons to add me to your team" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyHireMe.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={item.title}
                className="reveal rounded-2xl p-6 relative overflow-hidden group"
                style={{ backgroundColor: "var(--bg-panel-2)", transitionDelay: `${(i % 3) * 60}ms` }}
              >
                <Icon className="text-[var(--color-coral)] mb-4" size={20} />
                <h3 className="font-display font-semibold text-[var(--text-primary)]">{item.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.description}</p>
                <span className="absolute -right-3 -bottom-5 font-display text-7xl font-bold opacity-[0.05] group-hover:opacity-[0.09] transition-opacity select-none">
                  0{i + 1}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
