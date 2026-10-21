import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Shell } from "@/components/shell";
import { evento, grupoConectado, whatsappGroupUrl } from "@/lib/event";
import { leerFicha, whatsappLegible, type Ficha } from "@/lib/ficha";

export const Route = createFileRoute("/listo")({
  component: Listo,
  head: () => ({
    meta: [
      { title: "Tu lugar · Taller 30 de octubre" },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function Listo() {
  const [ficha, setFicha] = useState<Ficha | null>(null);

  useEffect(() => {
    setFicha(leerFicha());
  }, []);

  const trato = ficha ? ficha.nombre.split(/\s+/)[0] : "";

  return (
    <Shell>
      <main className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-xl">
          <p className="sc text-xs text-bronce-texto">Confirmación</p>
          <h1 className="mt-4 text-balance font-serif text-5xl leading-none font-medium md:text-6xl">
            {trato ? `${trato}, entra al grupo.` : "Entra al grupo."}
          </h1>
          <p className="mt-6 text-pretty text-xl leading-snug text-tinta-suave">
            El lugar del {evento.cuando.toLowerCase()}, de {evento.hora}, queda cerrado cuando entras. Ahí va
            la sala del {evento.anfitrion} y cualquier cambio.
          </p>

          {ficha ? (
            <p className="mt-6 text-xl">
              Te anotamos con el WhatsApp {whatsappLegible(ficha.whatsapp)}, de {ficha.empresa}.
            </p>
          ) : null}

          <div className="mt-10">
            {grupoConectado() ? (
              <a className="btn" href={whatsappGroupUrl} target="_blank" rel="noreferrer">
                Entrar al grupo de WhatsApp
              </a>
            ) : (
              <a className="btn" href="mailto:contacto@grupodepeller.com?subject=Acceso%20al%20grupo%20del%20taller">
                Pedir el acceso
              </a>
            )}
          </div>

          <p className="mt-8 max-w-md border-t border-bronce pt-6 text-lg leading-snug text-tinta-suave">
            {grupoConectado()
              ? "Si el grupo pide aprobación, es el conducto normal. Aceptamos a quien ya pagó."
              : "El enlace del grupo todavía no está conectado. Escribe y te lo enviamos en cuanto el pago quede registrado."}
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-bronce pt-6">
            <div>
              <dt className="sc text-xs text-bronce-texto">Cuándo</dt>
              <dd className="mt-2 font-serif text-2xl leading-tight">30 oct · 11:00</dd>
            </div>
            <div>
              <dt className="sc text-xs text-bronce-texto">Dónde</dt>
              <dd className="mt-2 font-serif text-2xl leading-tight">CCE Campeche</dd>
            </div>
          </dl>

          <p className="mt-10">
            <Link to="/" className="border-b border-bronce pb-1 font-serif text-xl text-tinta no-underline">
              Volver al taller
            </Link>
          </p>
        </div>
      </main>
    </Shell>
  );
}
