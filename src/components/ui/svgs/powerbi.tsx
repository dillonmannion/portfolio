import type { SVGProps } from "react";

const Powerbi = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24">
    <defs>
      <mask id="pbi-mask">
        <path d="M13 1a1 1 0 011-1h6a1 1 0 011 1v22a1 1 0 01-1 1H4a1 1 0 01-1-1V13a1 1 0 011-1h4V7a1 1 0 011-1h4V1Z" fill="#fff" />
      </mask>
      <linearGradient id="pbi-a" x1="11.667" x2="22.216" y1="0" y2="22.362" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E6AD10" />
        <stop offset="1" stopColor="#C87E0E" />
      </linearGradient>
      <linearGradient id="pbi-b" x1="8" x2="16.872" y1="6" y2="23.207" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F6D751" />
        <stop offset="1" stopColor="#E6AD10" />
      </linearGradient>
      <linearGradient id="pbi-c" x1="3" x2="7.902" y1="12" y2="23.619" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F9E589" />
        <stop offset="1" stopColor="#F6D751" />
      </linearGradient>
    </defs>
    <g mask="url(#pbi-mask)">
      <path d="M21 0v24h-8V0h8Z" fill="url(#pbi-a)" />
      <path d="M16 7a1 1 0 00-1-1H8v18h8V7Z" fill="url(#pbi-b)" />
      <path d="M3 12v12h8V13a1 1 0 00-1-1H3Z" fill="url(#pbi-c)" />
    </g>
  </svg>
);

export { Powerbi };
