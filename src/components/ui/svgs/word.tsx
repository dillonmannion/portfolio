import type { SVGProps } from "react";

const Word = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 17.9 512 476.2">
    <defs>
      <linearGradient id="word-grad" x1="45.507" x2="216.447" y1="107.969" y2="404.031" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#2368c4" />
        <stop offset=".5" stopColor="#1a5dbe" />
        <stop offset="1" stopColor="#1146ac" />
      </linearGradient>
    </defs>
    <path d="M490.2 17.9H140.9c-12.1 0-21.8 9.8-21.8 21.8v97.2l202.4 59.5L512 136.9V39.7c0-12.1-9.8-21.8-21.8-21.8" fill="#41a5ee" />
    <path d="M512 136.9H119.1V256l202.4 35.7L512 256z" fill="#2b7cd3" />
    <path d="M119.1 256v119.1l190.5 23.8L512 375.1V256z" fill="#185abd" />
    <path d="M140.9 494.1h349.3c12.1 0 21.8-9.8 21.8-21.8v-97.2H119.1v97.2c0 12.1 9.7 21.8 21.8 21.8" fill="#103f91" />
    <path d="M21.8 125h218.3c12.1 0 21.8 9.8 21.8 21.8v218.3c0 12.1-9.8 21.8-21.8 21.8H21.8C9.8 387 0 377.2 0 365.2V146.8c0-12 9.8-21.8 21.8-21.8" fill="url(#word-grad)" />
    <path d="M89.6 292.4c.4 3.4.7 6.3.8 8.8h.5c.2-2.4.6-5.3 1.2-8.6.6-3.4 1.1-6.2 1.6-8.5l23-99h29.7l23.8 97.6c1.4 6.1 2.4 12.2 3 18.4h.4c.4-6 1.3-12 2.5-17.9l19-98.1h27L188.7 327h-31.6l-22.6-94c-.7-2.7-1.4-6.2-2.2-10.6-.8-4.3-1.3-7.5-1.5-9.5h-.4c-.3 2.3-.8 5.7-1.5 10.3-.8 4.5-1.4 7.9-1.8 10.1L105.8 327H73.6L40 185.1h27.5l20.7 99.2c.5 2 .9 4.8 1.4 8.1" fill="#fff" />
  </svg>
);

export { Word };
