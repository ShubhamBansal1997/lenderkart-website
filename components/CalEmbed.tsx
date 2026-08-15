"use client";

import { useEffect, useState } from "react";

const CAL_LINK = "aanandmadhav/15min";
const NAMESPACE = "15min";

type CalFn = ((...args: unknown[]) => void) & {
  ns?: Record<string, (...args: unknown[]) => void>;
  loaded?: boolean;
  q?: unknown[];
};

declare global {
  interface Window {
    Cal?: CalFn;
  }
}

/**
 * Cal.com's official loader snippet. It defines window.Cal as a queueing stub
 * that injects embed.js on first call, then embed.js replays the queue — so it
 * has to be this exact shape. Guarded by `cal.loaded` against double-injection
 * under StrictMode's double effect.
 */
function installCalLoader() {
  (function (C: Window, A: string, L: string) {
    const p = function (a: { q: unknown[] }, ar: unknown) {
      a.q.push(ar);
    };
    const d = C.document;
    C.Cal =
      C.Cal ||
      function (...args: unknown[]) {
        const cal = C.Cal as CalFn & { q: unknown[]; ns: Record<string, CalFn> };
        const ar = args;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          (d.head.appendChild(d.createElement("script")) as HTMLScriptElement).src =
            A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function (...inner: unknown[]) {
            p(api as unknown as { q: unknown[] }, inner);
          } as CalFn & { q: unknown[] };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = (cal.ns[namespace] || api) as CalFn & {
              q: unknown[];
            };
            p(cal.ns[namespace] as unknown as { q: unknown[] }, ar);
            p(cal, ["initNamespace", namespace]);
          } else {
            p(cal, ar);
          }
          return;
        }
        p(cal, ar);
      };
  })(window, "https://app.cal.com/embed/embed.js", "init");
}

export default function CalEmbed() {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    installCalLoader();

    const Cal = window.Cal;
    if (!Cal) {
      setFailed(true);
      return;
    }

    Cal("init", NAMESPACE, { origin: "https://cal.com" });

    const ns = Cal.ns?.[NAMESPACE];
    if (!ns) {
      setFailed(true);
      return;
    }

    ns("inline", {
      elementOrSelector: "#cal-inline",
      calLink: CAL_LINK,
      config: { layout: "month_view", theme: "dark" },
    });

    ns("ui", {
      theme: "dark",
      cssVarsPerTheme: {
        dark: { "cal-brand": "#74FE5B" },
        light: { "cal-brand": "#6632FF" },
      },
      hideEventTypeDetails: false,
      layout: "month_view",
    });

    // If embed.js is blocked, nothing ever paints into the container.
    const timer = window.setTimeout(() => {
      const host = document.getElementById("cal-inline");
      if (host && host.childElementCount === 0) setFailed(true);
    }, 8000);

    return () => window.clearTimeout(timer);
  }, []);

  if (failed) {
    return (
      <div className="rounded-card border hairline bg-white/[0.04] p-10 text-center">
        <p className="text-[16px] text-white/70">
          The booking calendar could not load.
        </p>
        <a
          href={`https://cal.com/${CAL_LINK}`}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex rounded-full bg-lime px-7 py-3.5 font-semibold text-plum-deep"
        >
          Open the calendar in a new tab
        </a>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-card border hairline bg-white/[0.04] p-2 sm:p-3">
      <div
        id="cal-inline"
        className="min-h-[560px] w-full overflow-y-auto sm:min-h-[720px]"
        style={{ colorScheme: "dark" }}
      />
      <noscript>
        <a
          href={`https://cal.com/${CAL_LINK}`}
          className="block p-8 text-center text-lime underline"
        >
          Book a 30-minute intro call
        </a>
      </noscript>
    </div>
  );
}
