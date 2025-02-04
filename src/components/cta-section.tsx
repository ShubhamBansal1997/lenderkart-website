"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Contact from "@/components/contact"

export function CtaSection() {
  return (
    <section id="cta" className="container">
      <div className="flex items-center rounded-xl bg-primary px-6 py-24 gap-5 flex-col sm:flex-row">
        <div className="flex flex-col gap-5 w-full sm:w-1/2">
          <span className="font-bold uppercase text-background text-left">Let’s Talk</span>
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance max-w-xl sm:leading-tight text-primary-foreground text-left">
            Get a Custom Quote Today
          </h2>
          <p className="max-w-xl text-lg text-primary-foreground/80 text-left">
            Every agency has unique needs. Let’s discuss how we can tailor our solution for your
            business.
          </p>
        </div>
        <div className="w-full sm:w-1/2">
        <Contact />
          {/* <form className="flex flex-col gap-2 text-background w-full">
            <div>
              <Label>Name</Label>
              <Input />
            </div>
            <div>
              <Label>Email</Label>
              <Input type="email" />
            </div>
            <div>
              <Label>Phone</Label>
              <Input type="tel" />
            </div>
            <Button variant="secondary" className="mt-2">
              Submit
            </Button>
          </form> */}
        </div>
      </div>
    </section>
  );
}
