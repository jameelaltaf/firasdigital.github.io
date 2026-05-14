import Link from "next/link";

const services = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    iconBg: "bg-background",
    iconColor: "text-white",
    title: "Paid Media",
    description:
      "Dominating the digital landscape across every high-intent platform — precision targeting, relentless optimisation.",
    tags: ["Meta", "Google Ads", "LinkedIn", "TikTok", "Snapchat", "Spotify", "Programmatic"],
    href: "/services/paid-media",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
      </svg>
    ),
    iconBg: "bg-secondary",
    iconColor: "text-on-secondary",
    title: "SEO",
    description:
      "Authority-building strategies that turn organic search into a high-converting revenue channel for long-term dominance.",
    tags: ["Technical SEO", "Content", "Link Building", "Local SEO"],
    href: "/services/seo",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" strokeLinecap="round" />
      </svg>
    ),
    iconBg: "bg-background",
    iconColor: "text-white",
    title: "Web Design & CRO",
    description:
      "Scientific optimisation and world-class design to ensure every click counts — built to convert from day one.",
    tags: ["UI/UX", "Revamp", "CRO", "Landing Pages"],
    href: "/services/web-design-cro",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2z" />
        <circle cx="12" cy="10" r="3" />
        <path d="M7 21v-1a5 5 0 0110 0v1" />
      </svg>
    ),
    iconBg: "bg-primary",
    iconColor: "text-white",
    title: "Social Media Management",
    description:
      "Elevating your brand through community-led growth and viral creative content that stops the scroll.",
    tags: ["Instagram", "Facebook", "LinkedIn", "TikTok", "YouTube"],
    href: "/services/social-media",
  },
];

export default function Services() {
  return (
    <section className="py-32 bg-tertiary relative" id="services">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-background/8 text-background/60 text-xs font-bold uppercase tracking-widest mb-5">
              Our Expertise →
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-background leading-tight">
              Capabilities designed for the{" "}
              <span className="text-primary">next era</span> of growth.
            </h2>
          </div>
          <Link
            href="/contact"
            className="group flex items-center gap-2 text-background/60 font-bold hover:text-primary transition-colors pb-1"
          >
            View all services{" "}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <Link key={i} href={service.href} className="block group">
              <div
                className="fade-up bg-tertiary-container p-10 rounded-3xl flex flex-col gap-6 h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center ${service.iconColor} flex-shrink-0`}
                >
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-background mb-3">
                    {service.title}
                  </h3>
                  <p className="text-on-tertiary text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/50 text-xs font-bold uppercase tracking-tight text-background/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-background/30 group-hover:text-primary group-hover:translate-x-2 transition-all text-xl font-bold flex items-center gap-1">
                  Learn more <span>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
