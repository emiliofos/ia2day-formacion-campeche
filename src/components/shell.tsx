import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Door } from "@/components/door";

const nav = [
  { href: "/#programa", label: "Programa" },
  { href: "/#ponente", label: "Ponente" },
  { href: "/#lugar", label: "Lugar" },
];

export function Shell({
  children,
  barra = false,
}: {
  children: ReactNode;
  barra?: boolean;
}) {
  return (
    <div className={barra ? "pb-24 md:pb-0" : undefined}>
      <header className="sticky top-0 z-30 border-b border-bronce bg-hueso">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-5 py-4 md:px-10">
          <Link to="/" className="flex items-center gap-3 text-tinta no-underline" aria-label="Inicio del taller">
            <Door className="h-10 w-6" />
            <span className="leading-none">
              <span className="sc block text-xs text-bronce-texto">Grupo</span>
              <span className="mt-1 block font-serif text-2xl leading-none">DePeller</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-transparent pb-1 font-serif text-xl text-tinta no-underline hover:border-bronce"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a href="/#apartar" className="btn">
            Apartar
          </a>
        </div>
      </header>
      {children}
      <footer className="bg-tinta text-hueso">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-8 md:flex-row md:flex-wrap md:items-baseline md:justify-between md:px-10">
          <p className="sc text-xs text-bronce-claro">
            Patrimonio con visión. Legado con propósito. Todo en manos de Dios.
          </p>
          <p className="font-serif text-lg text-hueso-suave">Grupo DePeller · México–España</p>
          <a
            className="border-b border-bronce font-serif text-lg text-hueso no-underline"
            href="mailto:contacto@grupodepeller.com"
          >
            contacto@grupodepeller.com
          </a>
          <a
            className="border-b border-bronce font-serif text-lg text-hueso no-underline"
            href="https://grupodepeller.com"
            rel="noreferrer"
          >
            grupodepeller.com
          </a>
        </div>
      </footer>
      {barra ? (
        <div className="barra-movil fixed inset-x-0 bottom-0 z-40 border-t border-bronce bg-hueso md:hidden">
          <div className="flex items-center justify-between gap-4 px-5 py-3">
            <div>
              <p className="sc text-xs text-bronce-texto">30 oct · 11:00</p>
              <p className="font-serif text-3xl leading-none">$350</p>
            </div>
            <a href="/#apartar" className="btn">
              Apartar lugar
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
