/**
 * Datos generales del negocio.
 * Editá este archivo para cambiar teléfono, dirección, horarios, promos, etc.
 */

export const site = {
  name: 'JV Autoescuela',
  shortName: 'JV.',
  tagline: 'Aprendé a manejar con los que más saben en Hurlingham',
  url: 'https://jvautoescuela.com.ar', // TODO: reemplazar por el dominio final
  description:
    'Autoescuela habilitada en Hurlingham. Clases de manejo en auto manual y automático, motos de todas las cilindradas, camiones y colectivos. Instructores profesionales, autos doble comando y acompañamiento al examen.',

  whatsapp: {
    number: '5491168172577', // formato internacional sin "+" para wa.me
    display: '11 6817-2577',
    defaultMessage: '¡Hola JV Autoescuela! Quiero información sobre los cursos de manejo.',
  },
  phone: '+5491168172577',

  address: {
    street: 'Av. Gobernador Vergara 3855',
    locality: 'Hurlingham',
    neighborhood: 'William C. Morris',
    region: 'Provincia de Buenos Aires',
    postalCode: 'B1686',
    country: 'AR',
    mapsUrl: 'https://maps.google.com/?q=JV+Autoescuela+Av.+Gobernador+Vergara+3855+Hurlingham',
    embedUrl:
      'https://www.google.com/maps?q=Av.+Gobernador+Vergara+3855,+Hurlingham,+Buenos+Aires&output=embed',
  },

  hours: [
    { days: 'Lunes a viernes', time: '8 a 18 h', schema: 'Mo-Fr 08:00-18:00' },
    { days: 'Sábados', time: '9 a 13 h', schema: 'Sa 09:00-13:00' },
    { days: 'Domingos', time: 'Cerrado', schema: '' },
  ],

  google: {
    rating: 4.8,
    reviews: 255,
    reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=JV+Autoescuela+Hurlingham',
  },

  social: {
    youtube: 'https://www.youtube.com/@jvautoescuela3516',
    instagram: '', // TODO: completar
    facebook: '', // TODO: completar
  },
} as const;

/** Arma un link de WhatsApp con mensaje precargado. */
export function waLink(message: string = site.whatsapp.defaultMessage): string {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

/** Formatea precios en pesos argentinos. */
export function ars(value: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(value);
}

/**
 * Promociones del carrusel principal (estilo Driver's School).
 * Son de EJEMPLO: ajustalas a las promos reales vigentes.
 */
export const promos = [
  {
    id: 'cuotas',
    kicker: 'Facilidades de pago',
    title: 'Hasta 6 cuotas sin interés',
    text: 'Pagá tu curso con tarjeta de crédito bancaria. También aceptamos efectivo, transferencia y Mercado Pago.',
    cta: 'Consultar cuotas',
    message: 'Hola! Quiero consultar por las cuotas sin interés.',
  },
  {
    id: 'domicilio',
    kicker: 'Comodidad',
    title: 'Te buscamos por tu casa',
    text: 'Coordinamos el punto de encuentro en Hurlingham y alrededores para que no pierdas tiempo.',
    cta: 'Quiero coordinar',
    message: 'Hola! Quiero saber si me pueden buscar por mi casa para las clases.',
  },
  {
    id: 'sabados',
    kicker: 'Horarios',
    title: 'Clases también los sábados',
    text: 'Si trabajás o estudiás en la semana, aprovechá los sábados por la mañana.',
    cta: 'Ver horarios',
    message: 'Hola! Quiero consultar horarios de clases para los sábados.',
  },
  {
    id: 'examen',
    kicker: 'Examen práctico',
    title: 'Rendí con el auto que ya conocés',
    text: 'Te acompañamos al examen con el mismo vehículo doble comando con el que practicaste.',
    cta: 'Reservar acompañamiento',
    message: 'Hola! Quiero reservar el auto para rendir el examen práctico.',
  },
] as const;
