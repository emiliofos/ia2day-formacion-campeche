import { Apartar } from "@/components/apartar";
import { evento } from "@/lib/event";

const pasos = [
  {
    n: "01",
    t: "El trabajo a mano",
    d: "Qué se publica, qué se contesta y qué seguimiento se cae cada semana porque depende de alguien con la agenda llena.",
  },
  {
    n: "02",
    t: "Tres agentes",
    d: "Uno atrae. Uno da seguimiento. Uno responde. Cada uno con una instrucción concreta. Ninguno cobra, gasta ni decide solo.",
  },
  {
    n: "03",
    t: "El lunes",
    d: "Sales con el mapa de qué deja de estar en tu cabeza y qué se queda humano: la presencia, el criterio y la firma.",
  },
];

const hechos = [
  { k: "Fecha", v: "30 oct" },
  { k: "Hora", v: "11:00–13:00" },
  { k: "Costo", v: "$350" },
  { k: "Lugar", v: "CCE Campeche" },
];

export function Landing() {
  return (
    <main>
      <section id="inicio" className="px-5 pt-16 pb-20 md:px-10 md:pt-24 md:pb-28">
        <div className="mx-auto flex max-w-5xl flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="sc text-xs text-bronce-texto">Taller · CCE Campeche · {evento.cuando}</p>
            <h1 className="mt-6 max-w-4xl text-balance font-serif text-5xl leading-none font-medium md:text-7xl">
              Tu equipo de marketing y ventas en piloto automático.
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-2xl leading-snug text-tinta-suave">
              Agentes de inteligencia artificial para empresarios de Campeche. Dos horas. Un sistema que sigue
              el lunes, con una persona que aprueba.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <a className="btn" href="#apartar">
                Apartar lugar · $350
              </a>
              <a
                className="border-b border-bronce pb-1 font-serif text-xl text-tinta no-underline"
                href="#programa"
              >
                El programa
              </a>
            </div>
            <p className="mt-8 text-xl text-tinta-suave">
              {evento.hora} · {evento.lugar}
            </p>
            <p className="sc mt-4 text-xs text-bronce-texto">
              {evento.anfitrion} · {evento.casa} · a beneficio de {evento.beneficio}
            </p>
          </div>
          <p className="hidden leading-none text-bronce md:block md:text-right" aria-hidden="true">
            <span className="block font-serif text-8xl">30</span>
            <span className="sc mt-2 block text-xs text-bronce-texto">Octubre</span>
          </p>
        </div>
      </section>

      <section aria-label="Datos del taller" className="border-y border-bronce">
        <dl className="mx-auto grid max-w-5xl grid-cols-2 md:grid-cols-4">
          {hechos.map((h) => (
            <div key={h.k} className="border-t border-bronce px-5 py-6 md:border-t-0 md:px-10">
              <dt className="sc text-xs text-bronce-texto">{h.k}</dt>
              <dd className="mt-2 font-serif text-3xl leading-none">{h.v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="programa" className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="sc text-xs text-bronce-texto">Programa</p>
          <h2 className="mt-4 max-w-3xl text-balance font-serif text-4xl leading-tight font-medium md:text-6xl">
            No es un catálogo de herramientas. Es un reparto de trabajo.
          </h2>
          <ol className="mt-12">
            {pasos.map((p) => (
              <li
                key={p.n}
                className="paso md:gap-8"
              >
                <span className="font-serif text-5xl leading-none text-bronce">{p.n}</span>
                <div>
                  <h3 className="font-serif text-3xl leading-tight font-medium">{p.t}</h3>
                  <p className="mt-3 max-w-2xl text-pretty text-xl leading-snug text-tinta-suave">{p.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="border-t border-bronce pt-8 text-xl text-tinta-suave">
            Los agentes liberan tiempo de operación. No sustituyen la presencia.
          </p>
        </div>
      </section>

      <section className="border-t border-bronce px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <div>
            <p className="sc text-xs text-bronce-texto">Para quién</p>
            <h2 className="mt-4 text-balance font-serif text-4xl leading-tight font-medium md:text-5xl">
              Dueños que venden y publican con el mismo equipo que opera.
            </h2>
          </div>
          <div className="border-t border-bronce pt-6 text-xl leading-snug">
            <p>Quien ya no quiere otra herramienta, y sí un reparto claro.</p>
            <p className="mt-4 text-tinta-suave">
              No hace falta saber de inteligencia artificial. Hace falta tener clientes, y ganas de que el
              seguimiento no dependa de tu memoria.
            </p>
          </div>
        </div>
      </section>

      <section id="ponente" className="border-t border-bronce px-5 py-20 md:px-10 md:py-28">
        <div className="ponente mx-auto grid max-w-5xl items-end gap-12">
          <figure>
            <img
              src="/ponente.webp"
              alt="Emilio de la Peña López de Llergo"
              className="retrato"
            />
          </figure>
          <div>
            <p className="sc text-xs text-bronce-texto">Ponente</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight font-medium md:text-5xl">
              Emilio de la Peña López de Llergo
            </h2>
            <p className="sc mt-3 text-xs text-bronce-texto">Intramuros 10</p>
            <p className="mt-6 max-w-xl text-pretty text-xl leading-snug text-tinta-suave">
              Implementa agentes de inteligencia artificial en ventas, marketing y operación, dirigidos por un
              especialista. Esta es la versión de dos horas, en la sala del CCE, a beneficio de Moda
              Intramuros.
            </p>
          </div>
        </div>
      </section>

      <section id="lugar" className="bg-tinta px-5 py-20 text-hueso md:px-10 md:py-28">
        <div className="mx-auto grid max-w-5xl gap-16 md:grid-cols-2">
          <div>
            <p className="sc text-xs text-bronce-claro">Lugar y beneficio</p>
            <h2 className="mt-4 text-balance font-serif text-4xl leading-tight font-medium md:text-5xl">
              $350 a beneficio de Moda Intramuros.
            </h2>
            <p className="mt-6 max-w-md text-pretty text-xl leading-snug text-hueso-suave">
              {evento.cuando}, de {evento.hora}. {evento.lugar}. La dirección de la sala va en el grupo, para
              quien ya apartó.
            </p>
            <p className="mt-8 border-t border-bronce pt-6 font-serif text-2xl">
              {evento.anfitrion}
              <span className="mt-1 block text-hueso-suave">{evento.casa}</span>
            </p>
          </div>
          <div id="apartar">
            <p className="sc text-xs text-bronce-claro">Apartar</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight font-medium">Tu lugar.</h2>
            <p className="mt-4 max-w-md text-pretty text-xl leading-snug text-hueso-suave">
              Dejas tus datos, pagas y en la página siguiente entras al grupo de WhatsApp del taller. Ahí se
              confirma la asistencia.
            </p>
            <Apartar />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-4xl leading-tight font-medium md:text-5xl">Antes de apartar.</h2>
          <dl className="mt-10">
            {faq.map((item) => (
              <div key={item.q} className="border-t border-bronce py-6">
                <dt className="font-serif text-2xl">{item.q}</dt>
                <dd className="mt-2 max-w-2xl text-xl leading-snug text-tinta-suave">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}

const faq = [
  {
    q: "¿Qué incluye el lugar?",
    a: "Las dos horas, el mapa de los tres agentes y el grupo de WhatsApp del taller.",
  },
  {
    q: "¿Cómo entro al grupo?",
    a: "No está en esta página. Al confirmar el pago llegas a una página con el botón. El grupo pide aprobación: aceptamos a quien ya pagó.",
  },
  {
    q: "¿Dónde es?",
    a: "En las instalaciones del CCE Campeche. La sala exacta se comparte en el grupo.",
  },
  {
    q: "¿A quién beneficia el costo?",
    a: "A Moda Intramuros. El taller lo da Emilio de la Peña López de Llergo, de Intramuros 10, con el CCE Campeche.",
  },
  {
    q: "¿Puede ir alguien de mi equipo?",
    a: "Sí. El lugar es de quien se inscribe. Si cambia el nombre, escribe a contacto@grupodepeller.com.",
  },
];
