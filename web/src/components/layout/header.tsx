"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { primaryNav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = React.useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    if (open) setOpen(false);
  }

  return (
    <header className="border-border bg-background/85 supports-[backdrop-filter]:bg-background/70 sticky top-0 z-50 border-b backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6 lg:h-20">
          <Link href="/" aria-label={site.shortName}>
            <Image
              src="/logo/huxridge-logo.svg"
              alt={site.shortName}
              width={240}
              height={72}
              priority
              className="h-16 w-auto"
            />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden lg:flex lg:items-center lg:gap-1"
          >
            {primaryNav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-secondary-700 hover:bg-secondary-50 hover:text-primary-900 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    active && "text-primary-900",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              <Link href="/book">Book a Consultation</Link>
            </Button>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="text-primary-900 hover:bg-secondary-50 inline-flex h-11 w-11 items-center justify-center rounded-md lg:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile nav */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-border bg-background border-t lg:hidden"
      >
        <Container className="py-4">
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {primaryNav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-secondary-700 hover:bg-secondary-50 hover:text-primary-900 rounded-md px-3 py-3 text-base font-medium",
                    active && "bg-primary-50 text-primary-900",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button asChild variant="primary" size="md" className="mt-3">
              <Link href="/book">Book a Consultation</Link>
            </Button>
          </nav>
        </Container>
      </div>
    </header>
  );
}
