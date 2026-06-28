"use client"; // toggles the `.dark` class on <html> and persists the choice

interface ThemeToggleProps {
  /** Styling for the button shell — lets the Navbar adapt it to the
   *  scrolled / over-hero states. */
  className?: string;
}

// Icon visibility is driven purely by the `.dark` class (CSS), not React
// state — so the server and client render identical markup and there is no
// hydration mismatch. The inline script in <head> sets the class pre-paint.
export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      /* localStorage unavailable (private mode, etc.) — toggle still works */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark theme"
      title="Toggle theme"
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${className}`}
    >
      {/* Moon — shown in light mode (click to go dark) */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="block dark:hidden"
      >
        <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.6 6.6 0 0 0 9.8 9.8Z" />
      </svg>
      {/* Sun — shown in dark mode (click to go light) */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="hidden dark:block"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4m11.4-11.4 1.4-1.4" />
      </svg>
    </button>
  );
}
