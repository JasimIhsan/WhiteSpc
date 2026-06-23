import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        "paper-deep": "var(--paper-deep)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "var(--line)",
        sage: "var(--sage)",
        blue: "var(--blue)",
        clay: "var(--clay)",
        acid: "var(--acid)",
        white: "var(--white)",
      },
      fontFamily: {
        display: "var(--display)",
        body: "var(--body)",
      },
      boxShadow: {
        custom: "var(--shadow)",
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 700ms both",
      },
    },
  },
  plugins: [],
};

export default config;
