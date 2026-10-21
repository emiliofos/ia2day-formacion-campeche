import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Shell } from "@/components/shell";
import { evento, pagoConectado, paymentUrl, precio } from "@/lib/event";
import { leerFicha, whatsappLegible, type Ficha } from "@/lib/ficha";

export const Route = createFileRoute("/pago")({
  component: Pago,
  head: () => ({
    meta: [
      { title: "Pago · Taller 30 de octubre" },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function Pago() {
  const [ficha, setFicha] = useState<Ficha | null>(null);
  const [lista, setLista] = useState(false);

  useEffect(() => {
    setFicha(leerFicha());
    setLista(true);
  }, []);

  return (
    <Shell>
      <main className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-xl">
          <p className="sc text-xs text-bronce-texto">Pago</p>
          <h1 className="mt-4 font-serif text-5xl leading-none font-medium md:text-6xl">${precio}</h1>
          <p className="mt-4 text-xl text-tinta-suave">
            MXN · a beneficio de {evento.beneficio}. {evento.cuando}, {evento.hora}.
          </p>

          {!lista ? null : ficha ? (
            <dl className="mt-10 border-t border-bronce">
              <Fila k="Nombre" v={ficha.nombre} />
              <Fila k="Empresa" v={ficha.empresa} />
              <Fila k="Correo" v={ficha.correo} />
              <Fila k="WhatsApp" v={whatsappLegible(ficha.whatsapp)} />
            </dl>
          ) : (
            <p className="mt-10 border-t border-bronce pt-6 text-xl">
              Falta tu ficha.{" "}
              <Link to="/" hash="apartar" className="border-b border-bronce text-tinta no-underline">
                Volver a apartar
              </Link>
              .
            </p>
          )}

          <div className="mt-10 flex flex-col items-start gap-6">
            {pagoConectado() ? (
              <a className="btn" href={paymentUrl}>
                Pagar ${precio} en Mercado Pago
              </a>
            ) : (
              <button className="btn" type="button" disabled>
                Pagar ${precio} en Mercado Pago
              </button>
            )}
            {pagoConectado() ? (
              <Link to="/listo" className="border-b border-bronce pb-1 font-serif text-xl text-tinta no-underline">
                Ya pagué · entrar al grupo
              </Link>
            ) : (
              <p className="max-w-md text-lg leading-snug text-tinta-suave">
                El cobro abre Mercado Pago. Cuando el pago queda aprobado, el siguiente paso es el grupo de
                WhatsApp. El link de cobro todavía no está puesto.
              </p>
            )}
            <Link to="/" hash="apartar" className="font-serif text-lg text-bronce-texto no-underline">
              Corregir datos
            </Link>
          </div>
        </div>
      </main>
    </Shell>
  );
}

function Fila({ k, v }: { k: string; v: string }) {
  return (
    <div className="fila">
      <dt className="sc text-xs text-bronce-texto">{k}</dt>
      <dd className="text-xl break-words">{v}</dd>
    </div>
  );
}
