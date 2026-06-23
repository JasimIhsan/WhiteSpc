"use client";

import { useEffect, useState } from "react";

const navItems: [string, string][] = [
  ["Work", "#work"],
  ["Services", "#services"],
  ["Process", "#process"],
  ["Contact", "#contact"]
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="WhiteSpc home" onClick={() => setOpen(false)}>
        <span className="brand-mark" aria-hidden="true">
          W
        </span>
        <span>WhiteSpc</span>
      </a>

      <button
        className="nav-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">Open navigation</span>
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      <nav className="site-nav" id="site-nav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a href={href} key={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
