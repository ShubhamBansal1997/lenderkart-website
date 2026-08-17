import Link from "next/link";
import Logo from "./Logo";

export default function SiteFooter() {
  return (
    <footer className="border-t hairline bg-ink">
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo className="h-[24px] w-auto" />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/55">
              The decision engine behind lending and debt-advice funnels. Where
              leads find their way.
            </p>
            <p className="mt-6 text-[14px] text-white/40">Delhi, India</p>
          </div>

          <nav aria-label="Product">
            <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.14em] text-white/40">
              Product
            </h2>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li>
                <Link href="/#how-it-works" className="text-white/70 hover:text-lime">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/#why" className="text-white/70 hover:text-lime">
                  Why LenderKart
                </Link>
              </li>
              <li>
                <Link href="/#setup" className="text-white/70 hover:text-lime">
                  Full-service setup
                </Link>
              </li>
              <li>
                <Link href="/#summit" className="text-white/70 hover:text-lime">
                  Web Summit 2026
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.14em] text-white/40">
              Company
            </h2>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li>
                <Link href="/#contact" className="text-white/70 hover:text-lime">
                  Book an intro call
                </Link>
              </li>
              <li>
                <a
                  href="mailto:aanand@lenderkart.com"
                  className="text-white/70 hover:text-lime"
                >
                  aanand@lenderkart.com
                </a>
              </li>
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-lime">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t hairline pt-7 text-[13px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} LenderKart. All rights reserved.</p>
          <p>Built by MediaMen Services.</p>
        </div>
      </div>
    </footer>
  );
}
