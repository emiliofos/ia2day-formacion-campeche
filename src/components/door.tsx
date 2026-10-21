export function Door({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 110" aria-hidden="true">
      <line x1="1" y1="0" x2="1" y2="110" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M6 14 A41 41 0 0 1 6 96"
        fill="none"
        className="stroke-bronce"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
