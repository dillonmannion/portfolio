import type { SVGProps } from "react";

const Excel = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 17.9 512 476.2">
    <defs>
      <linearGradient id="excel-grad" x1="45.507" x2="216.447" y1="107.969" y2="404.031" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#18884f" />
        <stop offset=".5" stopColor="#117e43" />
        <stop offset="1" stopColor="#0b6631" />
      </linearGradient>
    </defs>
    <path d="m321.5 244.1-202.4-35.7v263.9c0 12.1 9.8 21.8 21.8 21.8h349.3c12.1 0 21.8-9.8 21.8-21.8v-97.2z" fill="#185c37" />
    <path d="M321.5 17.9H140.9c-12.1 0-21.8 9.8-21.8 21.8v97.2L321.5 256l107.2 35.7L512 256V136.9z" fill="#21a366" />
    <path d="M119.1 136.9h202.4V256H119.1z" fill="#107c41" />
    <path d="M490.2 17.9H321.5V137H512V39.7c0-12.1-9.8-21.8-21.8-21.8" fill="#33c481" />
    <path d="M321.5 256H512v119.1H321.5z" fill="#107c41" />
    <path d="M21.8 125h218.3c12.1 0 21.8 9.8 21.8 21.8v218.3c0 12.1-9.8 21.8-21.8 21.8H21.8C9.8 387 0 377.2 0 365.2V146.8c0-12 9.8-21.8 21.8-21.8" fill="url(#excel-grad)" />
    <path d="m67.6 326.9 45.9-71.1L71.4 185h33.8l23 45.2c2.1 4.3 3.6 7.5 4.4 9.6h.3c1.5-3.4 3.1-6.8 4.8-10l24.5-44.8h31.1l-43.1 70.3 44.2 71.5h-33.1l-26.5-49.7c-1.2-2.1-2.3-4.3-3.2-6.6h-.4c-.8 2.3-1.8 4.4-3.1 6.4l-27.3 49.9z" fill="#fff" />
  </svg>
);

export { Excel };
