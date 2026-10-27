export default function BrandMark({ className = "" }: { className?: string }) {
  return <svg className={`brand-mark ${className}`} viewBox="0 0 88 48" width="88" height="48" fill="none" aria-hidden="true" focusable="false">
    <g stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M27 17v20M27 27c0-5.8-3.7-10-9.5-10S8 21.2 8 27s3.7 10 9.5 10S27 32.8 27 27Z" />
      <path d="M39 37V17m0 10c0-6.2 2.4-10 7-10s7 3.8 7 10v10m0-10c0-6.2 2.4-10 7-10s7 3.8 7 10v10" />
    </g>
    <path className="brand-terminal" d="M78 29h8l-3 9h-8Z" fill="currentColor" />
  </svg>
}
