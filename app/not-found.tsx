import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary opacity-[0.06] blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-secondary opacity-[0.05] blur-[100px] rounded-full" />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-6 max-w-lg">
        <span className="text-8xl font-black text-primary leading-none">404</span>
        <h1 className="text-3xl md:text-4xl font-black text-on-surface">Page not found.</h1>
        <p className="text-on-surface-variant text-base leading-relaxed">
          This page doesn&apos;t exist — but your growth potential does. Let&apos;s get you back on track.
        </p>
        <div className="flex gap-4 mt-2">
          <Link
            href="/"
            className="px-8 py-4 rounded-full bg-secondary text-on-secondary font-black text-sm hover:brightness-110 transition-all active:scale-95"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full border-2 border-on-surface/20 text-on-surface font-black text-sm hover:border-primary hover:text-primary transition-all active:scale-95"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
