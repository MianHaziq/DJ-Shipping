interface StatCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

// Renders the final value (works without JS / SEO); ScrollAnimations animates 0 -> value on view.
export default function StatCounter({
  value,
  prefix = "",
  suffix = "",
  className = "",
}: StatCounterProps) {
  return (
    <span
      data-countup={value}
      data-prefix={prefix}
      data-suffix={suffix}
      className={className}
    >
      {prefix}
      {value.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
