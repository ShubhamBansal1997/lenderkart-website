import Link from "next/link";

import { NavItem } from "@/components/nav-item";
import { Button } from "@/components/ui/button";
import { MobileNavbar } from "@/components/mobile-navbar";

export function Header() {
  return (
    <header className="container flex items-center justify-between gap-10 py-4">
      <Link href="/" className="flex items-center gap-3 flex-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="32" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="6f4e3f8332"><path d="M 4.125 30.15625 L 238.875 30.15625 L 238.875 345 L 4.125 345 Z M 4.125 30.15625 " clip-rule="nonzero"/></clipPath><clipPath id="15e3d81ca3"><path d="M 185.199219 55 L 242 55 L 242 205 L 185.199219 205 Z M 185.199219 55 " clip-rule="nonzero"/></clipPath><clipPath id="824e4ff8a0"><path d="M 253 49.207031 L 371 49.207031 L 371 271 L 253 271 Z M 253 49.207031 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#6f4e3f8332)"><path fill="#7358f9" d="M 96.421875 318.210938 C 63.882812 318.210938 44.226562 282.226562 61.808594 254.847656 L 176.335938 76.507812 C 179.4375 71.675781 181.085938 66.058594 181.085938 60.320312 C 181.085938 43.773438 167.675781 30.363281 151.128906 30.363281 L 43.390625 30.363281 C 21.695312 30.363281 4.109375 47.949219 4.109375 69.640625 L 4.109375 305.410156 C 4.109375 327.105469 21.695312 344.691406 43.390625 344.691406 L 199.1875 344.691406 C 220.871094 344.691406 238.453125 327.121094 238.46875 305.4375 L 238.519531 235.449219 C 238.535156 209.453125 204.636719 199.492188 190.589844 221.363281 L 145.652344 291.320312 C 134.890625 308.082031 116.339844 318.210938 96.421875 318.210938 Z M 96.421875 318.210938 " fill-opacity="1" fill-rule="nonzero"/></g><g clip-path="url(#15e3d81ca3)"><path fill="#7358f9" d="M 241.804688 112.183594 L 241.804688 204.765625 L 241.78125 204.765625 C 210.609375 204.765625 185.320312 179.480469 185.320312 148.3125 L 185.320312 55.695312 L 185.34375 55.695312 C 216.511719 55.695312 241.804688 81.011719 241.804688 112.183594 Z M 241.804688 112.183594 " fill-opacity="1" fill-rule="nonzero"/></g><g clip-path="url(#824e4ff8a0)"><path fill="#7358f9" d="M 364.011719 270.820312 L 282.859375 226.289062 C 263.5 215.660156 253.105469 195.34375 253.871094 174.683594 L 253.871094 149.101562 C 251.582031 127.183594 262.328125 105.007812 282.859375 93.742188 L 364.011719 49.207031 C 379.003906 76.53125 369.007812 110.839844 341.6875 125.839844 L 279.40625 160.015625 L 341.6875 194.195312 C 369.007812 209.1875 379.003906 243.496094 364.011719 270.820312 Z M 364.011719 270.820312 " fill-opacity="1" fill-rule="nonzero"/></g></svg>
        <span className="font-heading text-xl font-bold">LenderKart</span>
      </Link>
      <nav className="hidden items-center gap-10 flex-1 justify-center">
        <NavItem href="/about" label="About" />
        <NavItem href="/docs" label="Docs" />
        <NavItem href="/blog" label="Blog" />
        <NavItem href="/pricing" label="Pricing" />
      </nav>
      <div className="hidden items-center gap-2 md:flex flex-1 justify-end">
        <Button asChild>
          <Link href="#cta" className="cursor-pointer">
            Get Started
          </Link>
        </Button>
      </div>
      <MobileNavbar>
        <div className="rounded-b-lg bg-background py-4 container text-foreground shadow-xl">
          <nav className="flex flex-col gap-1 pt-2">
            <NavItem className="hidden" href="/about" label="About" />
            <NavItem className="hidden" href="/docs" label="Docs" />
            <NavItem className="hidden" href="/blog" label="Blog" />
            <NavItem className="hidden" href="/pricing" label="Pricing" />
            <Button size="lg" asChild className="mt-2 w-full">
              <Link href="#cta" className="cursor-pointer">
                Get Started
              </Link>
            </Button>
          </nav>
        </div>
      </MobileNavbar>
    </header>
  );
}
