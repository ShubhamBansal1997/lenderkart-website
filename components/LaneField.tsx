/**
 * The brand motif, scaled up: lanes fanning out from a single point, each with
 * the logo's dashed centre-line. Decorative only — it sits behind content, so
 * fills stay low-contrast and the top edge is masked out.
 */
export default function LaneField({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 620"
      /* `meet`, not `slice`: on a narrow viewport a slice-fitted 1200x620
         viewBox zooms until the lanes read as full-height bars. */
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
      focusable="false"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 36%, rgba(0,0,0,0.95) 66%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 36%, rgba(0,0,0,0.95) 66%, transparent 100%)",
      }}
    >
      <defs>
        <linearGradient
          id="lane-fill"
          x1="600"
          y1="620"
          x2="600"
          y2="60"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#74FE5B" stopOpacity="0.24" />
          <stop offset="0.4" stopColor="#6632FF" stopOpacity="0.22" />
          <stop offset="1" stopColor="#6632FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="lane-edge"
          x1="600"
          y1="620"
          x2="600"
          y2="140"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#B6FFA6" stopOpacity="0.55" />
          <stop offset="1" stopColor="#6632FF" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="lane-glow" cx="0.5" cy="1" r="0.7">
          <stop offset="0" stopColor="#74FE5B" stopOpacity="0.16" />
          <stop offset="0.45" stopColor="#6632FF" stopOpacity="0.12" />
          <stop offset="1" stopColor="#6632FF" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="1200" height="620" fill="url(#lane-glow)" />

      <g fill="url(#lane-fill)">
        {/* centre lane */}
        <path d="M572 620V150a6 6 0 0 1 6-6h44a6 6 0 0 1 6 6v470Z" />
        {/* inner pair */}
        <path d="M566 620C548 452 496 356 348 268l-30 34c112 78 152 168 164 318Z" />
        <path d="M634 620c18-168 70-264 218-352l30 34c-112 78-152 168-164 318Z" />
        {/* outer pair */}
        <path d="M500 620c-22-110-62-168-152-218l-28 38c68 42 100 94 120 180Z" />
        <path d="M700 620c22-110 62-168 152-218l28 38c-68 42-100 94-120 180Z" />
      </g>

      <g
        stroke="url(#lane-edge)"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        className="lane-dash"
      >
        <path d="M600 606V170" className="lane-flow" />
        <path
          d="M596 606C582 462 534 366 380 272"
          className="lane-flow"
          style={{ animationDelay: "-1.4s" }}
        />
        <path
          d="M604 606c14-144 62-240 216-334"
          className="lane-flow"
          style={{ animationDelay: "-2.8s" }}
        />
        <path
          d="M538 606c-20-102-58-158-146-206"
          className="lane-flow"
          style={{ animationDelay: "-4.2s" }}
        />
        <path
          d="M662 606c20-102 58-158 146-206"
          className="lane-flow"
          style={{ animationDelay: "-5.6s" }}
        />
      </g>
    </svg>
  );
}
