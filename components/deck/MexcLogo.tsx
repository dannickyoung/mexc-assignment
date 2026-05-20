"use client";

/**
 * The official MEXC logo lockup (mark + wordmark).
 * SVG sourced from MEXC's official brand assets.
 */
export function MexcLogo({
  width = 120,
  className = "",
}: {
  width?: number;
  className?: string;
}) {
  const aspectRatio = 355 / 64;
  const height = width / aspectRatio;
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src="/brand/mexc-logo.svg"
      alt="MEXC"
      width={width}
      height={height}
      className={className}
      style={{ width, height }}
    />
  );
}

/**
 * Just the M mark from the MEXC logo (no wordmark). Useful in corners
 * or pair-lockups where the wordmark is provided separately.
 */
export function MexcMark({
  size = 40,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 86 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="MEXC"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M59.2033 0C63.2082 0.0000422074 67.6353 2.28934 69.5324 7.07617L84.2873 43.8115C88.0814 53.1773 81.1252 63.9999 70.2697 64C64.3679 63.9999 58.5712 60.9821 55.5149 53.5938L42.6662 22.2803L29.8186 53.5938C26.7622 60.9821 20.9655 63.9999 15.0637 64C4.20816 64 -2.74799 53.1774 1.0461 43.8115L15.801 7.07617C17.6981 2.28931 22.1252 0 26.1301 0C30.451 0.000171931 34.2452 2.60215 36.6691 7.70117L42.6662 20.3213L48.6643 7.70117C51.0883 2.60215 54.8823 0.00014057 59.2033 0Z"
        fill="#3378FF"
      />
    </svg>
  );
}
