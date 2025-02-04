import {
  TextCursorInput,
  Search,
  GitPullRequestDraft,
  Workflow,
  ListChecks,
  PartyPopper,
} from "lucide-react";

import { FeatureCard } from "@/components/feature-card";

export function Features() {
  return (
    <section className="container flex flex-col items-center gap-6 sm:gap-7 py-[50px]">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-left sm:text-center">
          How it Works?
        </span>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-left sm:text-center">
          From Leads to Loans in Seconds
        </h2>
      </div>
      <p className="text-lg text-muted-foreground text-balance max-w-xxl text-left sm:text-center">
        Get full control over your partners, lead flow, and analytics – all in one platform.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 mt-10">
        <FeatureCard
          icon={TextCursorInput}
          title="Step 2"
          description="Users fill out forms on your marketing websites."
        />
        <FeatureCard
          icon={Search}
          title="Step 2"
          description="Our decision engine analyzes user inputs and selects the right loan partner."
        />
        <FeatureCard
          icon={GitPullRequestDraft}
          title="Step 3"
          description="The system calls priority-based lender APIs to fetch the best offers."
        />
        <FeatureCard
          icon={Workflow}
          title="Step 4"
          description="If no offer is available, it automatically moves to the next partner or forwards the lead."
        />
        <FeatureCard
          icon={ListChecks}
          title="Step 5"
          description="Users are redirected to a loan offer page, ensuring a seamless experience."
        />
        <FeatureCard
          icon={PartyPopper}
          title="Step 6"
          description="Leads are forwarded to agency CRM and partner CRMs. "
        />
      </div>
    </section>
  );
}
