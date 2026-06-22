import type { IconName } from "@/lib/data";

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

// One cohesive line-icon family: 24px grid, 1.6 stroke, currentColor.
const paths: Record<IconName, React.ReactNode> = {
  customs: (
    <>
      <path d="M4 9.5 12 4l8 5.5" />
      <path d="M5 10v8m4-8v8m6-8v8m4-8v8" />
      <path d="M3 21h18" />
      <path d="M9 7.5h6" />
    </>
  ),
  ship: (
    <>
      <path d="M3 15.5 4.5 11h15L21 15.5" />
      <path d="M5 11V7h6l3 4" />
      <path d="M9 7V4.5" />
      <path d="M3 18.2c1.2.9 2.2.9 3.4 0 1.2-.9 2.3-.9 3.5 0 1.2.9 2.3.9 3.5 0 1.2-.9 2.2-.9 3.4 0 1.1.8 2.1.9 3.2.2" />
    </>
  ),
  plane: (
    <>
      <path d="M21 14.5 13.5 13 11 21l-2-1 1-6-4 1-1.5 2L2 16l3-3.5L3 9l2-1 3 2.5 6-1.2-3.2-6L13 3l5 6 3 .8c1 .3 1.4 1 1.4 1.8 0 1.4-1.4 2.5-1.4 2.9Z" />
    </>
  ),
  truck: (
    <>
      <path d="M3 6.5h11v9H3z" />
      <path d="M14 9.5h4l3 3v3h-7z" />
      <circle cx="7" cy="17.5" r="1.8" />
      <circle cx="17.5" cy="17.5" r="1.8" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.4 2.9 7.6 7 9 4.1-1.4 7-4.6 7-9V6Z" />
      <path d="m9 11.5 2 2 4-4" />
    </>
  ),
  doc: (
    <>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4" />
      <path d="M9 12h6M9 15.5h6M9 8.5h2" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21c4-4.5 6-7.8 6-11a6 6 0 1 0-12 0c0 3.2 2 6.5 6 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5c2.6 2.4 4 5.4 4 8.5s-1.4 6.1-4 8.5c-2.6-2.4-4-5.4-4-8.5s1.4-6.1 4-8.5Z" />
    </>
  ),
  check: (
    <>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  phone: (
    <>
      <path d="M6.5 3.5 9 4l1 3.5-1.8 1.4a11 11 0 0 0 5 5l1.4-1.8L17 13l.5 2.5a2 2 0 0 1-2 2.3C9.6 17.4 5.4 13.2 4.2 6.5a2 2 0 0 1 2.3-3Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M4 20l1.4-4A8 8 0 1 1 9 19.2Z" />
      <path d="M9 9c0 3 2.5 5.5 5.5 5.5.7 0 1.2-.6 1.2-.6l-1.6-1.2-1.1.7c-1.1-.5-2-1.4-2.5-2.5l.7-1.1L9.9 8s-.6.4-.9 1Z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  box: (
    <>
      <path d="M12 3 4 7v10l8 4 8-4V7Z" />
      <path d="m4 7 8 4 8-4M12 11v10" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="6" r="2" />
      <path d="M8 18h6a4 4 0 0 0 0-8H10a4 4 0 0 1 0-8" opacity="0" />
      <path d="M8 18h5a3 3 0 0 0 3-3V8" />
    </>
  ),
  anchor: (
    <>
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v13" />
      <path d="M5 12a7 7 0 0 0 14 0" />
      <path d="M3.5 12H6m12 0h2.5" />
    </>
  ),
  scale: (
    <>
      <path d="M12 4v16M7 7h10" />
      <path d="M7 7 4 13a3 3 0 0 0 6 0Z" />
      <path d="M17 7l-3 6a3 3 0 0 0 6 0Z" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V10l6 4V10l6 4V6h6v15Z" />
      <path d="M7 17h2m4 0h2m4 0h-2" />
    </>
  ),
};

export default function Icon({ name, size = 22, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
