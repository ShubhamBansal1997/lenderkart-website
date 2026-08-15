import Image from "next/image";
import Link from "next/link";
import LaneField from "@/components/LaneField";
import ExplainerVideo from "@/components/ExplainerVideo";
import CalEmbed from "@/components/CalEmbed";

const STATS = [
  { value: "< 1s", label: "from submit to matched offer" },
  { value: "99.99%", label: "engine uptime" },
  { value: "6 steps", label: "lead to loan, fully automated" },
  { value: "GDPR", label: "compliant by design" },
];

const LEAKS = [
  {
    title: "Leads go cold in a queue",
    body: "By the time an agent calls back, the applicant has already applied somewhere else. The click was paid for; the outcome went to a competitor.",
  },
  {
    title: "One lender, one answer",
    body: "A single hard-coded integration means a single decline. No fallback, no second offer, no reason for the applicant to stay on your site.",
  },
  {
    title: "No line of sight",
    body: "Without partner-level data you cannot tell which lender actually converts, so ad spend keeps flowing to the funnel that leaks hardest.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Capture",
    body: "Applicants fill in the form on your marketing site. Nothing changes about the front end you already run.",
  },
  {
    n: "02",
    title: "Decide",
    body: "The engine reads every input against your rules and scoring, then picks the lender most likely to say yes to that profile.",
  },
  {
    n: "03",
    title: "Call",
    body: "Lender APIs are called in the priority order you set, live, while the applicant is still on the page.",
  },
  {
    n: "04",
    title: "Fall through",
    body: "No offer from the first partner? The engine moves to the next one automatically, or forwards the lead rather than dropping it.",
  },
  {
    n: "05",
    title: "Redirect",
    body: "The applicant lands on a matched offer page with no break in the journey and no dead end.",
  },
  {
    n: "06",
    title: "Sync",
    body: "The lead is pushed to your CRM and your partners' CRMs at the same moment, with the full decision trail attached.",
  },
];

const PROOF = [
  {
    title: "Enterprise-grade security and compliance",
    body: "Applicant data is encrypted in transit and at rest, handled under GDPR, and never leaves the systems you have approved.",
  },
  {
    title: "Proven with leading UK lenders",
    body: "Already routing live traffic for established debt consolidation firms, against real lender panels and real approval criteria.",
  },
  {
    title: "99.99% uptime, sub-second decisions",
    body: "The engine decides while the applicant is still watching the spinner. Campaigns do not pause because a partner is slow.",
  },
  {
    title: "Full transparency, no black box",
    body: "You see every decision and control which partners are enabled, prioritised or switched off. Change the panel yourself, in seconds.",
  },
  {
    title: "Dedicated onboarding and support",
    body: "We integrate alongside your team rather than handing over a login, so the funnel earns from the first week rather than the first quarter.",
  },
];

const SETUP = [
  {
    title: "Marketing site and funnel",
    body: "Designed and built for the enquiry you actually want, not a template with your logo dropped in.",
  },
  {
    title: "Decision engine integration",
    body: "Rules, scoring and the lender panel configured around your commercials and your approval data.",
  },
  {
    title: "CRM and partner management",
    body: "Every lead, decision and handover in one place, wired to the systems your agents and partners already use.",
  },
];

const SUMMIT_PHOTOS: {
  src: string;
  alt: string;
  span: string;
  position?: string;
}[] = [
  {
    src: "/images/websummit-stand.jpg",
    alt: "The LenderKart stand at Web Summit Vancouver, showing the 'Where leads find their way' signage above booth A3-17",
    span: "col-span-2 row-span-2",
    position: "object-[50%_22%]",
  },
  {
    src: "/images/websummit-booth-founder.jpg",
    alt: "LenderKart founder Aanand Madhav at the company's Web Summit stand",
    span: "",
  },
  {
    src: "/images/websummit-team.jpg",
    alt: "The LenderKart team meeting founders on the Web Summit exhibition floor",
    span: "",
  },
  {
    src: "/images/websummit-floor.jpg",
    alt: "Conversations with other Alpha-track founders beside the LenderKart signage",
    span: "",
  },
  {
    src: "/images/websummit-meeting.jpg",
    alt: "Meeting attendees in the Web Summit exhibition hall",
    span: "",
  },
];

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative isolate overflow-hidden pt-[68px]">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_50%_0%,#2a0a52_0%,#150029_58%)]" />
        <LaneField className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[85%] w-full" />

        <div className="mx-auto max-w-[1200px] px-5 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28">
          <div className="mx-auto max-w-[860px] text-center">
            <p className="reveal inline-flex items-center gap-2.5 rounded-full border hairline bg-white/[0.04] px-4 py-1.5 text-[13px] font-medium text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              Decision engine for lending and debt-advice funnels
            </p>

            <h1 className="reveal mt-7 font-display text-[clamp(2.6rem,7.2vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.035em] [--reveal-delay:80ms]">
              Where leads
              <br />
              <span className="text-lime">find their way.</span>
            </h1>

            <p className="reveal mx-auto mt-7 max-w-[620px] text-[clamp(1.02rem,1.9vw,1.24rem)] leading-relaxed text-white/65 [--reveal-delay:160ms]">
              LenderKart scores every enquiry, calls your lender panel in priority
              order and routes each applicant to the offer most likely to
              convert. In under a second, with nothing hidden from you.
            </p>

            <div className="reveal mt-10 flex flex-col items-center justify-center gap-3 [--reveal-delay:240ms] sm:flex-row">
              <Link
                href="#contact"
                className="w-full rounded-full bg-lime px-8 py-4 text-center font-semibold text-plum-deep transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
              >
                Book an intro call
              </Link>
              <Link
                href="#how-it-works"
                className="w-full rounded-full border hairline bg-white/[0.04] px-8 py-4 text-center font-semibold text-white transition-colors duration-200 hover:bg-white/[0.09] sm:w-auto"
              >
                See how it works
              </Link>
            </div>
          </div>

          <dl className="reveal mx-auto mt-20 grid max-w-[940px] grid-cols-2 gap-px overflow-hidden rounded-[20px] border hairline bg-white/[0.08] sm:mt-24 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-ink px-6 py-7 text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-display text-[clamp(1.6rem,3vw,2.1rem)] font-extrabold tracking-tight text-lime">
                    {s.value}
                  </span>
                  <span className="mt-1.5 block text-[13px] leading-snug text-white/50">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ------------------------------------------------------------- Problem */}
      <section className="border-y hairline bg-ink-soft/60">
        <div className="mx-auto max-w-[1200px] px-5 py-24 sm:px-8 sm:py-28">
          <div className="max-w-[860px]">
            <SectionLabel>The leak</SectionLabel>
            <h2 className="reveal mt-5 font-display text-[clamp(2rem,4.4vw,3.1rem)] font-extrabold leading-[1.06] tracking-[-0.03em]">
              Every lead you fail to route is revenue you have{" "}
              <span className="text-lime">already paid for.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {LEAKS.map((item) => (
              <article
                key={item.title}
                className="reveal rounded-card border hairline bg-white/[0.03] p-7"
              >
                <h3 className="font-display text-[19px] font-bold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/55">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- How it works */}
      <section id="how-it-works" className="scroll-mt-20">
        <div className="mx-auto max-w-[1200px] px-5 py-24 sm:px-8 sm:py-32">
          <div className="max-w-[760px]">
            <SectionLabel>How it works</SectionLabel>
            <h2 className="reveal mt-5 font-display text-[clamp(2rem,4.4vw,3.1rem)] font-extrabold leading-[1.06] tracking-[-0.03em]">
              From enquiry to loan offer, in six automated moves.
            </h2>
            <p className="reveal mt-5 text-[17px] leading-relaxed text-white/60">
              Full control over your partners, your lead flow and your analytics,
              in one platform you can actually see into.
            </p>
          </div>

          <ol className="mt-16 grid gap-px overflow-hidden rounded-[24px] border hairline bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((step) => (
              <li
                key={step.n}
                className="reveal group relative bg-ink px-7 py-9 transition-colors duration-300 hover:bg-ink-soft"
              >
                <span className="font-display text-[13px] font-bold tracking-[0.18em] text-violet-bright">
                  {step.n}
                </span>
                <h3 className="mt-4 font-display text-[21px] font-bold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/55">
                  {step.body}
                </p>
                <span className="mt-7 block h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-violet to-lime transition-transform duration-500 group-hover:scale-x-100" />
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------------------------------------------------------- Video */}
      <section className="border-y hairline bg-ink-soft/60">
        <div className="mx-auto max-w-[1200px] px-5 py-24 sm:px-8 sm:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionLabel>The engine, explained</SectionLabel>
              <h2 className="reveal mt-5 font-display text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold leading-[1.08] tracking-[-0.03em]">
                Inbound leads are data, not faces.
              </h2>
              <p className="reveal mt-5 text-[17px] leading-relaxed text-white/60">
                No hunches, no inbox triage, no agent guessing which lender to try
                first. Just consistent decisions, made against the same rules
                every time, using the context that actually predicts an approval.
              </p>
            </div>
            <div className="reveal">
              <ExplainerVideo />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ Why */}
      <section id="why" className="scroll-mt-20">
        <div className="mx-auto max-w-[1200px] px-5 py-24 sm:px-8 sm:py-32">
          <div className="max-w-[760px]">
            <SectionLabel>Why LenderKart</SectionLabel>
            <h2 className="reveal mt-5 font-display text-[clamp(2rem,4.4vw,3.1rem)] font-extrabold leading-[1.06] tracking-[-0.03em]">
              Built for the agencies that cannot afford a bad handover.
            </h2>
            <p className="reveal mt-5 text-[17px] leading-relaxed text-white/60">
              Security, compliance and reliability sit at the core, so your leads
              are processed with precision and your partnerships stay profitable.
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROOF.map((item) => (
              <article
                key={item.title}
                className="reveal rounded-card border hairline bg-white/[0.03] p-7"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lime/15">
                  <svg
                    viewBox="0 0 20 20"
                    className="h-4 w-4 fill-lime"
                    aria-hidden="true"
                  >
                    <path d="M7.6 14.3 3.4 10l1.5-1.5 2.7 2.7 7-7L16.1 5.7z" />
                  </svg>
                </span>
                <h3 className="mt-5 font-display text-[18px] font-bold leading-snug tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-white/55">
                  {item.body}
                </p>
              </article>
            ))}

            <aside className="reveal relative flex flex-col justify-between overflow-hidden rounded-card bg-gradient-to-br from-violet to-plum p-8 sm:col-span-2 lg:col-span-1">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-lime/25 blur-3xl" />
              <blockquote className="relative font-display text-[clamp(1.6rem,2.6vw,2.05rem)] font-extrabold leading-[1.08] tracking-[-0.03em]">
                Your leads.
                <br />
                Your rules.
                <br />
                <span className="text-lime">Your success.</span>
              </blockquote>
              <p className="relative mt-8 text-[15px] leading-relaxed text-white/75">
                Not another SaaS licence you renew and forget. We work as the
                routing layer your growth depends on, and we stay close to it.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- Setup */}
      <section
        id="setup"
        className="scroll-mt-20 border-y hairline bg-ink-soft/60"
      >
        <div className="mx-auto max-w-[1200px] px-5 py-24 sm:px-8 sm:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionLabel>Full-service setup</SectionLabel>
              <h2 className="reveal mt-5 font-display text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold leading-[1.08] tracking-[-0.03em]">
                Need the whole funnel, not just the engine?
              </h2>
              <p className="reveal mt-5 text-[17px] leading-relaxed text-white/60">
                We do not only hand over software. We build the entire
                lead-to-loan funnel around it, so you go live fast rather than
                spending a quarter wiring things together.
              </p>
              <Link
                href="#contact"
                className="reveal mt-9 inline-flex rounded-full bg-lime px-7 py-3.5 font-semibold text-plum-deep transition-transform duration-200 hover:-translate-y-0.5"
              >
                Talk through your setup
              </Link>
            </div>

            <ul className="grid gap-4">
              {SETUP.map((item) => (
                <li
                  key={item.title}
                  className="reveal flex gap-5 rounded-card border hairline bg-white/[0.03] p-7"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-b from-violet-bright to-lime"
                  />
                  <div>
                    <h3 className="font-display text-[18px] font-bold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-white/55">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------- Summit */}
      <section id="summit" className="scroll-mt-20">
        <div className="mx-auto max-w-[1200px] px-5 py-24 sm:px-8 sm:py-32">
          <div className="max-w-[760px]">
            <SectionLabel>On the ground</SectionLabel>
            <h2 className="reveal mt-5 font-display text-[clamp(2rem,4.4vw,3.1rem)] font-extrabold leading-[1.06] tracking-[-0.03em]">
              We took the engine to Web Summit.
            </h2>
            <p className="reveal mt-5 text-[17px] leading-relaxed text-white/60">
              LenderKart exhibited on the Alpha track at Web Summit Vancouver,
              stand A3-17, under Fintech and financial services. Days of showing
              lenders, agencies and founders exactly how the routing works, with
              no slide deck between them and the product.
            </p>
          </div>

          <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[210px] sm:grid-cols-4">
            {SUMMIT_PHOTOS.map((photo) => (
              <figure
                key={photo.src}
                className={`reveal relative overflow-hidden rounded-[18px] border hairline ${photo.span}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className={`object-cover ${photo.position ?? "object-center"}`}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- Contact */}
      <section id="contact" className="scroll-mt-20 border-t hairline">
        <div className="relative isolate overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(110%_120%_at_50%_100%,#3a0a72_0%,#150029_62%)]" />
          <LaneField className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-full w-full opacity-60" />

          <div className="mx-auto max-w-[980px] px-5 py-24 sm:px-8 sm:py-28">
            <div className="mx-auto max-w-[620px] text-center">
              <SectionLabel center>Let&rsquo;s talk</SectionLabel>
              <h2 className="reveal mt-5 font-display text-[clamp(2.2rem,5.2vw,3.6rem)] font-extrabold leading-[1.04] tracking-[-0.035em]">
                Book an intro call today.
              </h2>
              <p className="reveal mx-auto mt-6 text-[17px] leading-relaxed text-white/65">
                Every agency has a different panel, different commercials and a
                different definition of a good lead. Pick a 30-minute slot and
                we will show you how the engine would route yours.
              </p>
            </div>

            <div className="reveal mt-12">
              <CalEmbed />
            </div>

            <p className="reveal mt-8 text-center text-[15px] text-white/50">
              Prefer email?{" "}
              <a
                href="mailto:aanand@lenderkart.com?subject=LenderKart%20enquiry"
                className="text-lime underline underline-offset-4"
              >
                aanand@lenderkart.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionLabel({
  children,
  center,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <p
      className={`reveal font-display text-[13px] font-bold uppercase tracking-[0.18em] text-lime ${
        center ? "text-center" : ""
      }`}
    >
      {children}
    </p>
  );
}
