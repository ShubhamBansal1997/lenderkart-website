import { Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="container flex flex-col items-center gap-10 pt-20 sm:gap-14 lg:flex-row pb-14">
      <div className="flex flex-1 flex-col lg:items-start justify-center items-start gap-[20px]">
        <h1 className="max-w-2xl font-heading font-semibold sm:text-5xl lg:text-left sm:leading-snug text-3xl text-left leading-snug">
          Stop Wasting <br/>Valuable Leads
        </h1>
        <p className="max-w-md text-lg text-muted-foreground lg:text-left text-left">
          Our AI-powered decision engine automates lead routing, loan offer matching, and lender
          integrations in real-time.
        </p>
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">Get started quickly with templates.</span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">See your changes in real-time.</span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">Export code for full customization.</span>
          </li>
        </ul>
        <div className="grid grid-cols-2 gap-3">
          <Button size="lg" asChild className="cursor-pointer">
            <Link href="#cta">Contact Us</Link>
          </Button>
        </div>
      </div>
      <div className="relative flex-1">
        <Image
          alt="SaaS Dashboard"
          src="/images/animationoptimizer.svg"
          width={1000}
          height={698}
          priority
          className="rounded-xl border-border"
        />
        <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
      </div>
    </section>
  );
}
