/**
 * Dos enlaces que cierran la inscripción.
 * Pégalos aquí cuando los tengas (tienen que empezar con https://).
 *
 * paymentUrl — link de pago de Mercado Pago, $350 MXN, solo tarjeta.
 *   En el link, la URL de retorno debe ser la ruta /listo de este sitio.
 * whatsappGroupUrl — invitación del grupo (chat.whatsapp.com/…).
 *   En el grupo: aprobar participantes nuevos.
 */
export const paymentUrl = "https://mpago.la/2EmhW1e";

export const whatsappGroupUrl =
  "https://chat.whatsapp.com/DSkH7ukezdBBAnRqFBHFmR";

export const precio = 350;

export const evento = {
  dia: "30",
  mes: "octubre",
  cuando: "Viernes 30 de octubre",
  hora: "11:00 a 13:00",
  lugar: "Instalaciones del CCE Campeche",
  beneficio: "Moda Intramuros",
  anfitrion: "CCE Campeche",
  casa: "Intramuros 10",
};

export function pagoConectado() {
  return paymentUrl.startsWith("https://");
}

export function grupoConectado() {
  return whatsappGroupUrl.startsWith("https://");
}
