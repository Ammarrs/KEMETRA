import React from 'react';

export function LogoMark({ className = '' }) {
  return (
    <svg
      viewBox="0 0 28 26"
      className={className}
      fill="none"
      stroke="#C69C4D"
      strokeWidth="1.5"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 1.2 26.6 24.8H1.4Z" />
      <path d="M14 12.4 20.2 23.6H7.8Z" />
    </svg>
  );
}

export default function Logo({ size = 'nav' }) {
  const big = size === 'footer';
  return (
    <a href="#top" className="inline-flex items-center gap-[15px]" aria-label="KEMETRA home">
      <LogoMark className={big ? 'ml-0.5 h-[28px] w-[30px]' : 'ml-0.5 h-[26px] w-7'} />
      <span
        className={`font-display font-semibold text-background ${
          big ? 'text-[30px] leading-[40px]' : 'text-[24px] leading-none'
        }`}
      >
        KEMETRA
      </span>
    </a>
  );
}
