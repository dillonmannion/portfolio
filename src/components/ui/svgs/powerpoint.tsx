import type { SVGProps } from "react";

const Powerpoint = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 17.8 512 476.3">
    <defs>
      <linearGradient id="ppt-grad" x1="45.507" x2="216.447" y1="107.969" y2="404.031" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#ca4c28" />
        <stop offset=".5" stopColor="#c5401e" />
        <stop offset="1" stopColor="#b62f14" />
      </linearGradient>
    </defs>
    <path d="m309.6 279.8-35.7-262h-2.7c-129.9.4-235.1 105.6-235.5 235.5v2.7z" fill="#ed6c47" />
    <path d="M276.5 17.9h-2.7V256l119.1 47.6L512 256v-2.7c-.4-129.9-105.6-235.1-235.5-235.4" fill="#ff8f6b" />
    <path d="M512 256v2.6c-.4 129.9-105.6 235.1-235.5 235.5h-5.2c-130-.3-235.2-105.6-235.6-235.5V256z" fill="#d35230" />
    <path d="M21.8 125h218.3c12.1 0 21.8 9.8 21.8 21.8v218.3c0 12.1-9.8 21.8-21.8 21.8H21.8C9.8 387 0 377.2 0 365.2V146.8c0-12 9.8-21.8 21.8-21.8" fill="url(#ppt-grad)" />
    <path d="M133.4 183.2c14.2-1 28.3 3.2 39.7 11.6 9.5 8.5 14.6 21 13.8 33.7.2 8.9-2.2 17.6-6.8 25.2-4.7 7.5-11.4 13.4-19.4 17.1-9.1 4.2-19.1 6.3-29.1 6.1H104v51.3H75.7v-145zM104 254.9h24.3c7.7.6 15.4-1.7 21.5-6.4 5.1-4.9 7.7-11.8 7.3-18.8q0-24-27.9-24H104z" fill="#fff" />
  </svg>
);

export { Powerpoint };
