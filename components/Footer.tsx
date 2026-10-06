import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="gutter-x border-t border-white/8 pt-12 pb-10">
      <div className="mx-auto flex max-w-[1160px] flex-wrap justify-between gap-x-12 gap-y-6 text-sm text-steel">
        <div className="flex flex-col gap-2">
          <span className="font-display flex items-center gap-2.5 text-base font-extrabold text-fg">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-amber" />
            {site.name}
          </span>
          <span>{site.licence}</span>
          <span>{site.serviceArea}</span>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap items-start gap-x-6 gap-y-2">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-fg-2 hover:text-amber">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex w-full flex-wrap justify-between gap-x-6 gap-y-2 border-t border-white/6 pt-6 text-[13px]">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span>
            Hosted and Maintained by{" "}
            <a
              href={site.maintainer.url}
              target="_blank"
              rel="noopener"
              className="text-fg-2 underline decoration-white/20 underline-offset-4 transition-colors hover:text-amber hover:decoration-amber"
            >
              {site.maintainer.name}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
