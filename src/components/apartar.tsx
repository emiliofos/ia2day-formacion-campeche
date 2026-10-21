import { useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { guardarFicha, soloDigitos } from "@/lib/ficha";

export function Apartar() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [correo, setCorreo] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [acepta, setAcepta] = useState(false);
  const [error, setError] = useState("");

  function enviar(e: FormEvent) {
    e.preventDefault();
    const tel = soloDigitos(whatsapp);
    if (nombre.trim().length < 2) {
      setError("Escribe tu nombre.");
      return;
    }
    if (empresa.trim().length < 2) {
      setError("Escribe la empresa.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.trim())) {
      setError("El correo no está completo.");
      return;
    }
    if (tel.length !== 10) {
      setError("El WhatsApp son 10 dígitos.");
      return;
    }
    if (!acepta) {
      setError("Falta confirmar que el lugar se aparta con el pago.");
      return;
    }
    guardarFicha({
      nombre: nombre.trim(),
      empresa: empresa.trim(),
      correo: correo.trim(),
      whatsapp: tel,
    });
    setError("");
    void navigate({ to: "/pago" });
  }

  return (
    <form onSubmit={enviar} className="mt-10" noValidate>
      <div className="grid gap-8 md:grid-cols-2">
        <label className="campo">
          <span className="sc text-xs">Nombre</span>
          <input
            name="nombre"
            autoComplete="name"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            maxLength={120}
          />
        </label>
        <label className="campo">
          <span className="sc text-xs">Empresa</span>
          <input
            name="empresa"
            autoComplete="organization"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
            maxLength={140}
          />
        </label>
        <label className="campo">
          <span className="sc text-xs">Correo</span>
          <input
            name="correo"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            maxLength={160}
          />
        </label>
        <label className="campo">
          <span className="sc text-xs">WhatsApp</span>
          <input
            name="whatsapp"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="10 dígitos"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            maxLength={20}
          />
        </label>
      </div>
      <label className="mt-8 flex items-start gap-3 font-serif text-lg text-hueso-suave">
        <input
          type="checkbox"
          className="mt-1 h-5 w-5 accent-bronce"
          checked={acepta}
          onChange={(e) => setAcepta(e.target.checked)}
        />
        <span>El lugar se confirma con el pago de $350. Después entro al grupo de WhatsApp.</span>
      </label>
      {error ? (
        <p className="mt-6 text-bronce-claro" role="alert">
          {error}
        </p>
      ) : null}
      <button className="btn btn-claro mt-8" type="submit">
        Continuar al pago
      </button>
    </form>
  );
}
