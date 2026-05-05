import type { SVGProps } from "react";

const Supabase = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 109 113">
    <defs>
      <linearGradient id="supa-a" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#249361" />
        <stop offset="100%" stopColor="#3ECF8E" />
      </linearGradient>
      <linearGradient id="supa-b" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#C8C8C8" />
        <stop offset="100%" stopColor="#C8C8C8" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path
      d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874L63.708 110.284Z"
      fill="url(#supa-a)"
    />
    <path
      d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874L63.708 110.284Z"
      fill="url(#supa-b)"
      fillOpacity=".2"
    />
    <path
      d="M45.317 2.071c2.86-3.601 8.657-1.628 8.726 2.97l.442 67.251H9.83c-8.19 0-12.759-9.46-7.665-15.875L45.317 2.072Z"
      fill="#3ECF8E"
    />
  </svg>
);

export { Supabase };
