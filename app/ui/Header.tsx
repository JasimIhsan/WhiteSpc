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
    <header className="sticky top-0 z-20 flex items-center justify-between w-[min(1180px,calc(100%-40px))] max-[940px]:w-[min(100%-28px,760px)] min-h-[78px] max-[620px]:min-h-[68px] mx-auto py-4 bg-[#f8f7f2]/84 max-[940px]:bg-paper border-b border-[#161615]/10 backdrop-blur-[18px] max-[940px]:backdrop-blur-none">
      <a className="inline-flex items-center gap-3 font-display text-[clamp(1.25rem,1.8vw,1.6rem)] tracking-normal" href="#top" aria-label="WhiteSpc home" onClick={() => setOpen(false)}>
        <span className="grid w-[38px] h-[38px] max-[620px]:w-[34px] max-[620px]:h-[34px] place-items-center bg-ink text-paper font-body text-[0.92rem] font-bold" aria-hidden="true">
          W
        </span>
        <span>WhiteSpc</span>
      </a>

      <button
        className="hidden max-[940px]:block relative z-[25] w-[44px] h-[44px] p-0 bg-ink border-0 cursor-pointer"
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">Open navigation</span>
        <span className={`block w-[20px] h-[2px] mx-auto my-[5px] bg-paper transition-transform duration-200 ease-out ${open ? 'translate-y-[4px] rotate-45' : ''}`} aria-hidden="true" />
        <span className={`block w-[20px] h-[2px] mx-auto my-[5px] bg-paper transition-transform duration-200 ease-out ${open ? '-translate-y-[3px] -rotate-45' : ''}`} aria-hidden="true" />
      </button>

      <nav className={`flex items-center gap-[clamp(18px,3vw,38px)] text-muted text-[0.82rem] font-bold tracking-[0.08em] uppercase max-[940px]:fixed max-[940px]:inset-0 max-[940px]:z-[19] max-[940px]:flex-col max-[940px]:justify-center max-[940px]:bg-ink max-[940px]:text-paper max-[940px]:text-[clamp(2rem,11vw,5rem)] max-[940px]:font-display max-[940px]:font-medium max-[940px]:tracking-normal max-[940px]:normal-case transition-transform duration-300 ease-out ${open ? 'max-[940px]:translate-y-0' : 'max-[940px]:-translate-y-full'}`} id="site-nav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a className="relative py-2 group" href={href} key={href} onClick={() => setOpen(false)}>
            {label}
            <span className="absolute right-0 bottom-1 left-0 h-[1px] bg-ink max-[940px]:bg-paper scale-x-0 origin-right transition-transform duration-200 ease-out group-hover:scale-x-100 group-hover:origin-left focus-visible:scale-x-100 focus-visible:origin-left" />
          </a>
        ))}
      </nav>
    </header>
  );
}
