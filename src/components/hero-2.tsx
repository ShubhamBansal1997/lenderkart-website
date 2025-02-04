import Image from "next/image";
import { Check } from "lucide-react";

export function Hero2() {
  return (
    <section className="container flex flex-col items-center gap-10 pb-28 pt-20 sm:gap-14 lg:flex-row">
      <div className="relative flex-1">
        <Image
          alt="SaaS Dashboard"
          src="/images/illustration-representing-360-degree-solution-for-.svg"
          width={1000}
          height={698}
          priority
          className="rounded-xl border-border"
        />
        <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
      </div>
      <div className="flex flex-1 flex-col items-center lg:items-start gap-5">
        <span className="font-bold uppercase text-primary text-center">
          Need a Complete Debt Solution Setup?
        </span>
        <h1 className="max-w-2xl text-center font-heading text-4xl font-semibold sm:text-5xl lg:text-left sm:leading-snug">
          Go Live Fast with Our Full-Service Setup!
        </h1>
        <p className="max-w-md text-center text-lg text-muted-foreground lg:text-left">
          We don’t just provide software – we help build your entire lead-to-loan funnel.
        </p>
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">
              {" "}
              Custom Website &amp; Marketing Funnel Setup{" "}
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">AI-Powered Decision Engine Integration</span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground"> CRM &amp; Partner Management System</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
