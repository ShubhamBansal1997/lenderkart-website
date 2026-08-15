"use client";

import { useRef, useState } from "react";

export default function ExplainerVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const play = () => {
    const el = ref.current;
    if (!el) return;
    setStarted(true);
    el.play().catch(() => setStarted(false));
  };

  return (
    <div className="relative overflow-hidden rounded-[24px] border hairline bg-white shadow-[0_40px_120px_-40px_rgba(102,50,255,0.55)]">
      <video
        ref={ref}
        className="block aspect-video w-full"
        poster="/video/lenderkart-explainer-poster.jpg"
        preload="metadata"
        controls={started}
        playsInline
        onEnded={() => setStarted(false)}
      >
        <source src="/video/lenderkart-explainer.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {!started && (
        <button
          type="button"
          onClick={play}
          className="group absolute inset-0 flex items-center justify-center bg-plum-deep/10 transition-colors hover:bg-plum-deep/20"
          aria-label="Play the LenderKart explainer"
        >
          <span className="flex items-center gap-3 rounded-full bg-plum-deep px-6 py-4 text-[15px] font-semibold text-white shadow-lg transition-transform duration-200 group-hover:scale-105">
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-lime" aria-hidden="true">
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
            Watch the 71-second explainer
          </span>
        </button>
      )}
    </div>
  );
}
