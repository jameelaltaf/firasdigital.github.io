const platforms = [
  "META", "GOOGLE", "LINKEDIN", "TIKTOK", "SNAPCHAT",
  "PINTEREST", "REDDIT", "TWITTER / X", "SPOTIFY", "PROGRAMMATIC",
  "SEO", "SOCIAL MEDIA", "WEB DESIGN",
];

export default function Ticker() {
  const doubled = [...platforms, ...platforms];
  return (
    <div
      className="bg-surface-container py-5 overflow-hidden border-y border-outline-variant/10"
      aria-hidden="true"
    >
      <div className="animate-scroll whitespace-nowrap flex items-center">
        {doubled.map((name, i) => (
          <span key={i} className="flex items-center">
            <span className="text-sm md:text-base font-black mx-8 text-on-surface-variant/30 uppercase tracking-[0.15em]">
              {name}
            </span>
            <span className="text-secondary/60 text-xs">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
