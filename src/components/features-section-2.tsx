import { Frame, Download, Globe, Sparkles, LayoutPanelLeft, Bot } from "lucide-react";

import { FeatureCard2 } from "@/components/feature-card2";

export function Features2() {
  return (
    <section className="container flex flex-col items-center gap-6 sm:gap-7 py-14">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-left">What Sets Us Apart?</span>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-left sm:text-center">
          Leading Debt Consolidation Agencies Trust Us
        </h2>
      </div>
      <p className="text-lg text-muted-foreground text-balance text-left sm:text-center max-w-xxl">
        Our platform is designed with security, compliance, and reliability at its core, ensuring
        that your leads are processed with precision and your partnerships remain seamless and
        profitable.
      </p>
      <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard2
          icon={Frame}
          title="Enterprise-Grade Security & Compliance "
          description="Your data is protected with industry-standard encryption & GDPR compliance."
        />
        <FeatureCard2
          icon={Download}
          title=" Proven Results with Leading UK Lenders"
          description="Trusted by top debt consolidation firms for higher conversion rates & efficiency.
"
        />
        <FeatureCard2
          icon={Globe}
          title="99.99% Uptime & Lightning-Fast Processing"
          description="Our AI-driven engine ensures instant decision-making, with zero downtime disrupting operations.
"
        />
        <FeatureCard2
          icon={Sparkles}
          title="Full Transparency & Control "
          description="Unlike black-box solutions, you control which partners to enable, prioritize, or disable at any time."
        />
        <FeatureCard2
          icon={LayoutPanelLeft}
          title="Dedicated Support & Onboarding"
          description="We work closely with your team to ensure smooth integration and maximum ROI from day one."
        />
        <FeatureCard2
          icon={Bot}
          title="Your leads. Your rules. Your success."
          description="We’re not just another SaaS tool—we’re your long-term growth partner.
"
        />
      </div>
    </section>
  );
}
