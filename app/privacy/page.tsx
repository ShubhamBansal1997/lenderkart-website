import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How LenderKart collects, uses and protects personal information, both on this website and inside the decision engine we operate for our clients.",
  alternates: { canonical: "https://lenderkart.com/privacy" },
};

const LAST_UPDATED = "15 August 2026";

export default function PrivacyPage() {
  return (
    <>
      <header className="relative isolate overflow-hidden pt-[68px]">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_50%_0%,#2a0a52_0%,#150029_60%)]" />
        <div className="mx-auto max-w-[820px] px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-28">
          <p className="font-display text-[13px] font-bold uppercase tracking-[0.18em] text-lime">
            Legal
          </p>
          <h1 className="mt-5 font-display text-[clamp(2.3rem,6vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.035em]">
            Privacy policy
          </h1>
          <p className="mt-6 text-[17px] leading-relaxed text-white/60">
            How LenderKart collects, uses and protects personal information, both
            on this website and inside the decision engine we operate for our
            clients.
          </p>
          <p className="mt-6 text-[14px] text-white/40">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </header>

      <div className="border-t hairline">
        <div className="mx-auto max-w-[820px] px-5 py-16 sm:px-8 sm:py-20">
          <nav
            aria-label="On this page"
            className="mb-16 rounded-card border hairline bg-white/[0.03] p-7"
          >
            <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-white/40">
              On this page
            </h2>
            <ol className="mt-4 grid gap-x-8 gap-y-2 text-[15px] sm:grid-cols-2">
              {SECTIONS.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-white/65 transition-colors hover:text-lime"
                  >
                    <span className="tabular-nums text-white/35">
                      {String(i + 1).padStart(2, "0")}.
                    </span>{" "}
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-16">
            {SECTIONS.map((section, i) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="font-display text-[clamp(1.35rem,3vw,1.75rem)] font-extrabold leading-tight tracking-[-0.02em]">
                  <span className="mr-3 tabular-nums text-violet-bright">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {section.title}
                </h2>
                <div className="mt-5 space-y-4 text-[16px] leading-[1.75] text-white/65">
                  {section.body}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-20 rounded-card border hairline bg-gradient-to-br from-violet/30 to-plum/40 p-8">
            <h2 className="font-display text-[20px] font-extrabold tracking-tight">
              Questions about your data?
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-white/70">
              Write to us and we will respond within 30 days, or sooner where the
              law requires it.
            </p>
            <a
              href="mailto:privacy@lenderkart.com"
              className="mt-6 inline-flex rounded-full bg-lime px-7 py-3.5 font-semibold text-plum-deep transition-transform duration-200 hover:-translate-y-0.5"
            >
              privacy@lenderkart.com
            </a>
          </div>

          <p className="mt-12 text-[15px]">
            <Link href="/" className="text-white/50 hover:text-lime">
              ← Back to lenderkart.com
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------------- */

const Ul = ({ items }: { items: string[] }) => (
  <ul className="space-y-2.5 pl-1">
    {items.map((item) => (
      <li key={item} className="flex gap-3">
        <span
          aria-hidden="true"
          className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-lime"
        />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const SECTIONS: { id: string; title: string; body: React.ReactNode }[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          LenderKart (&ldquo;LenderKart&rdquo;, &ldquo;we&rdquo;,
          &ldquo;our&rdquo; or &ldquo;us&rdquo;) is a decision engine for lending
          and debt-advice funnels. We are operated from Delhi, India by MediaMen
          Services, and we provide our software to agencies, brokers and lenders
          who use it to score and route loan enquiries.
        </p>
        <p>
          This policy explains what we do with personal information when you
          visit lenderkart.com, when you contact us, and when personal
          information passes through the decision engine we run for a client.
        </p>
      </>
    ),
  },
  {
    id: "roles",
    title: "Controller and processor: which one we are",
    body: (
      <>
        <p>
          The distinction matters, because it decides who you should contact
          about your data.
        </p>
        <p>
          <strong className="font-semibold text-white">
            We are the controller
          </strong>{" "}
          for information about this website, our marketing and our client
          relationships. That means the enquiries you send us, the emails you
          exchange with our team and the analytics we collect on lenderkart.com.
        </p>
        <p>
          <strong className="font-semibold text-white">
            We are a processor
          </strong>{" "}
          for the loan applicant data that flows through the engine. When you
          complete a form on a client&rsquo;s website and that enquiry is scored
          and routed by LenderKart, the client, not LenderKart, decides why and
          how that data is used. We act only on their documented instructions
          under a data processing agreement. If you are an applicant asking about
          your enquiry, contact the company whose website you applied on. If you
          are not sure who that is, write to us and we will point you to them.
        </p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    title: "Information we collect",
    body: (
      <>
        <p className="font-semibold text-white">
          From visitors and prospective clients
        </p>
        <Ul
          items={[
            "Contact details you give us: name, work email, phone number, company and role.",
            "The content of your enquiry and any subsequent correspondence with our team.",
            "Technical and usage data: IP address, browser and device type, referring page, pages viewed and time on page.",
          ]}
        />
        <p className="pt-2 font-semibold text-white">
          From our clients, as a processor
        </p>
        <Ul
          items={[
            "Applicant details submitted to a client's form: name, contact details, address, date of birth, employment and income details, and the loan or debt amounts relevant to the enquiry.",
            "Decision data generated by the engine: scores, rule outcomes, which lenders were called, the offers returned and the route the lead took.",
            "Campaign metadata: lead source, campaign identifiers and timestamps.",
          ]}
        />
        <p>
          Financial-circumstance data of this kind is sensitive in practice even
          where it is not a special category under data protection law, and we
          treat it accordingly. We do not knowingly ask for special category data
          such as health information, and clients should not send it to the
          engine.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use information",
    body: (
      <>
        <p>As a controller, we use personal information to:</p>
        <Ul
          items={[
            "Reply to your enquiry and run the commercial conversation that follows.",
            "Provide, support and improve the LenderKart platform for our clients.",
            "Keep the website secure, diagnose faults and understand which pages are useful.",
            "Meet our legal, regulatory, accounting and contractual obligations.",
          ]}
        />
        <p>
          Our lawful bases are: <em>legitimate interests</em> in running and
          marketing a business-to-business software product;{" "}
          <em>performance of a contract</em> where you are a client;{" "}
          <em>consent</em> for any non-essential cookies and marketing email,
          which you can withdraw at any time; and{" "}
          <em>legal obligation</em> where a law requires us to keep or disclose
          records.
        </p>
        <p>
          As a processor, we use applicant data solely to run the routing our
          client has configured: scoring the enquiry, calling the lender panel,
          returning offers and syncing the result to the systems the client has
          nominated. We do not use applicant data to train models for other
          clients, we do not sell it, and we do not use it for our own marketing.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Who we share information with",
    body: (
      <>
        <p>We never sell or rent personal information. We share it only:</p>
        <Ul
          items={[
            "With lenders and partners on a client's panel, where routing an enquiry to them is the whole point of the request.",
            "With the CRM and marketing systems a client has connected to their account.",
            "With service providers who host, secure, monitor or support the platform, under contracts that bind them to equivalent protections.",
            "With professional advisers such as auditors and lawyers, where necessary.",
            "Where the law requires it, or to establish, exercise or defend legal claims.",
          ]}
        />
      </>
    ),
  },
  {
    id: "transfers",
    title: "International transfers",
    body: (
      <p>
        We operate from India and serve clients in the United Kingdom, the
        European Economic Area and elsewhere, so personal information may be
        transferred across borders. Where data is transferred out of the UK or
        the EEA, we rely on appropriate safeguards, including the UK
        International Data Transfer Addendum or the European Commission&rsquo;s
        Standard Contractual Clauses, together with technical measures such as
        encryption. Clients can ask us for details of the safeguards applying to
        their account.
      </p>
    ),
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: (
      <>
        <p>
          We keep information only as long as we have a reason to, then delete it
          or anonymise it.
        </p>
        <Ul
          items={[
            "Website enquiries and marketing correspondence: up to 24 months after the last contact.",
            "Client account and contract records: for the life of the contract, then up to 7 years for tax and audit purposes.",
            "Applicant and decision data processed on a client's behalf: for the retention period that client sets in their configuration, and deleted or returned on termination of their contract.",
            "Server and security logs: typically 90 days.",
          ]}
        />
      </>
    ),
  },
  {
    id: "security",
    title: "How we protect it",
    body: (
      <p>
        Data is encrypted in transit with TLS and at rest in our databases.
        Access is restricted to the people who need it, protected by
        role-based permissions and multi-factor authentication, and logged.
        Environments are separated, credentials are rotated, and changes to the
        platform go through review before release. No system is perfectly
        secure, so we also maintain an incident response process and will notify
        affected clients and, where required, the relevant regulator without
        undue delay.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and analytics",
    body: (
      <>
        <p>
          lenderkart.com uses a small number of cookies and similar technologies.
          Strictly necessary ones keep the site working and secure. Analytics
          cookies help us understand which pages people read, in aggregate.
        </p>
        <p>
          You can block or delete cookies in your browser settings. Blocking
          strictly necessary cookies may stop parts of the site working. Where
          non-essential cookies are used, we ask for your consent first and you
          can withdraw it at any time.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <p>
          Depending on where you live, you may have the right to ask us to:
        </p>
        <Ul
          items={[
            "Give you a copy of the personal information we hold about you.",
            "Correct information that is inaccurate or incomplete.",
            "Delete information where we no longer need it.",
            "Restrict or object to how we use it, including for direct marketing.",
            "Receive it in a portable format, or have it sent to another provider.",
            "Withdraw consent you have given, without affecting what we did before you withdrew it.",
          ]}
        />
        <p>
          To exercise any of these, email{" "}
          <a
            href="mailto:privacy@lenderkart.com"
            className="text-lime underline underline-offset-4"
          >
            privacy@lenderkart.com
          </a>
          . We may need to verify your identity first. If your request concerns
          an enquiry you submitted on a client&rsquo;s website, we will pass it
          to that client, who is the controller for it, and support them in
          answering you.
        </p>
        <p>
          If you are in the UK you can complain to the Information
          Commissioner&rsquo;s Office at ico.org.uk. In the EEA you can complain
          to your national supervisory authority. In India you may contact the
          Data Protection Board. We would rather hear from you first, so please
          give us a chance to put things right.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <p>
        LenderKart is a business product and the funnels it supports are for
        adults seeking credit or debt advice. We do not direct our services to
        anyone under 18 and we do not knowingly collect their personal
        information. If you believe a child&rsquo;s data has reached us, tell us
        and we will delete it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We update this policy when our product or our obligations change. The
        date at the top always reflects the current version. If a change
        materially affects how we handle your information, we will tell affected
        clients directly rather than relying on you to notice.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <>
        <p>
          For anything in this policy, including data protection requests and
          processing agreements:
        </p>
        <Ul
          items={[
            "Privacy: privacy@lenderkart.com",
            "General enquiries: hello@lenderkart.com",
            "Postal: LenderKart, Delhi, India",
          ]}
        />
      </>
    ),
  },
];
