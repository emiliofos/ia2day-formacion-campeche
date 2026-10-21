export type Ficha = {
  nombre: string;
  empresa: string;
  correo: string;
  whatsapp: string;
};

const KEY = "taller-ficha";

export function guardarFicha(ficha: Ficha) {
  sessionStorage.setItem(KEY, JSON.stringify(ficha));
}

export function leerFicha(): Ficha | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as Partial<Ficha>;
    if (!data.nombre || !data.correo || !data.whatsapp || !data.empresa) return null;
    return {
      nombre: data.nombre,
      empresa: data.empresa,
      correo: data.correo,
      whatsapp: data.whatsapp,
    };
  } catch {
    return null;
  }
}

export function soloDigitos(valor: string) {
  let digitos = valor.replace(/\D/g, "");
  if (digitos.startsWith("521") && digitos.length >= 13) digitos = digitos.slice(3);
  else if (digitos.startsWith("52") && digitos.length >= 12) digitos = digitos.slice(2);
  return digitos.slice(0, 10);
}

export function whatsappLegible(digitos: string) {
  if (digitos.length !== 10) return digitos;
  return `${digitos.slice(0, 3)} ${digitos.slice(3, 6)} ${digitos.slice(6)}`;
}
