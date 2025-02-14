"use client";

import { useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Contact from "@/components/contact";

export function CtaSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      (function (C, A, L) { 
        let p = function (a, ar) { a.q.push(ar); }; 
        let d = C.document; 
        C.Cal = C.Cal || function () { 
          let cal = C.Cal; 
          let ar = arguments; 
          if (!cal.loaded) { 
            cal.ns = {}; 
            cal.q = cal.q || []; 
            d.head.appendChild(d.createElement("script")).src = A; 
            cal.loaded = true; 
          } 
          if (ar[0] === L) { 
            const api = function () { p(api, arguments); }; 
            const namespace = ar[1]; 
            api.q = api.q || []; 
            if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} 
            else p(cal, ar); 
            return;
          } 
          p(cal, ar); 
        }; 
      })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "15min", {origin:"https://cal.com"});
      Cal.ns["15min"]("inline", {
        elementOrSelector:"#my-cal-inline",
        config: {"layout":"month_view"},
        calLink: "aanandmadhav/15min",
      });
      Cal.ns["15min"]("ui", {"hideEventTypeDetails":false,"layout":"week_view"});
    `;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="cta" className="container">
      <div className="flex items-center rounded-xl bg-primary px-6 py-24 gap-5 flex-col sm:flex-row">
        <div className="flex flex-col gap-5 w-full sm:w-1/2">
          <span className="font-bold uppercase text-background text-left">Let’s Talk</span>
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance max-w-xl sm:leading-tight text-primary-foreground text-left">
            Book an Intro Call Today
          </h2>
          <p className="max-w-xl text-lg text-primary-foreground/80 text-left">
            Every agency has unique needs. Let’s discuss how we can tailor our solution for your
            business.
          </p>
        </div>
        <div className="w-full sm:w-1/2">
          <div className="w-full h-60vh overflow-y-scroll" id="my-cal-inline"></div>
        </div>
      </div>
    </section>
  );
}