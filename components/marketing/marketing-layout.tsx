import type { ReactNode } from "react";

import { SiteFooter } from "./footer";
import { SiteHeader } from "./header";

export function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full flex-col bg-[#03060c] text-slate-200">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-sky-500 focus:px-4 focus:py-2 focus:text-slate-950"
      >
        Skip to main content
      </a>
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
