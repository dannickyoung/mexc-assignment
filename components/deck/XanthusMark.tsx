/**
 * The official Xanthus icon mark. SVG sourced from /public/brand/logo_icon.svg
 * (canonical Figma export). Gradient: #FFA319 → #FF600A, top to bottom.
 */
export function XanthusMark({
  size = 200,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const aspectRatio = 148 / 111;
  const height = size;
  const width = height * aspectRatio;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 148 111"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Xanthus mark"
    >
      <path
        d="M146.952 105.368C145.123 108.986 141.505 111 137.784 111C135.996 111 134.167 110.527 132.522 109.541L73.9794 74.4111L47.8531 90.095C43.0842 92.9522 36.6914 91.945 33.5874 87.3406C30.278 82.4278 31.7991 75.8089 36.8147 72.8078L65.6544 55.5L5.38498 19.3428C0.698271 16.5267 -1.43952 10.5244 1.04772 5.63222C2.87718 2.01444 6.49499 0 10.2156 0C12.0039 0 13.8334 0.472778 15.4778 1.45944L74.0206 36.5889L100.147 20.905C104.916 18.0478 111.309 19.055 114.413 23.6594C117.722 28.5722 116.201 35.1911 111.185 38.1922L82.3456 55.5L142.615 91.6572C147.302 94.4733 149.44 100.476 146.952 105.368Z"
        fill="url(#xanthus-mark-gradient)"
      />
      <defs>
        <linearGradient
          id="xanthus-mark-gradient"
          x1="74"
          y1="0"
          x2="74"
          y2="111"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA319" />
          <stop offset="1" stopColor="#FF600A" />
        </linearGradient>
      </defs>
    </svg>
  );
}
