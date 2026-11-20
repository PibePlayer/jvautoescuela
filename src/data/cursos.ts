/**
 * Catálogo de cursos.
 *
 * ⚠️ PRECIOS DE EJEMPLO: actualizalos con los valores reales.
 * Si `price` es `null`, se muestra "Consultar" y el botón abre WhatsApp.
 *
 * Cada pack tiene un `id` único: está pensado para usarse a futuro como SKU
 * en el carrito / checkout (Mercado Pago) y en la reserva de turnos.
 */

export type Pack = {
  id: string;
  name: string;
  level?: 'Inicial' | 'Intermedio' | 'Avanzado' | 'Profesional';
  classes: number;
  minutesPerClass: number;
  /** Subtítulo opcional (p. ej. "3 horas de práctica"). Si se omite se calcula con classes × minutesPerClass. */
  meta?: string;
  price: number | null;
  /** Precio anterior tachado (opcional, para promos). */
  listPrice?: number;
  featured?: boolean;
  description: string;
  includes: string[];
};

export type Category = {
  slug: string;
  name: string;
  navLabel: string;
  group: 'autos' | 'motos' | 'profesional';
  license: string;
  image: string;
  imageAlt: string;
  short: string;
  intro: string;
  highlights: string[];
  requirements: string[];
  packs: Pack[];
};

const AUTO_INCLUDES = [
  'Auto doble comando con seguro',
  'Instructor/a matriculado/a',
  'Material teórico para el examen',
];

export const categories: Category[] = [
  {
    slug: 'auto-manual',
    name: 'Auto con caja manual',
    navLabel: 'Auto manual',
    group: 'autos',
    license: 'Licencia clase B1',
    image: '/img/clase-auto.webp',
    imageAlt: 'Instructora de JV Autoescuela guiando a un alumno durante una clase en auto manual',
    short: 'Embrague, cambios y arranque en pendiente: dominá el auto de verdad.',
    intro:
      'El curso más elegido. Aprendés desde cero —o retomás después de años— en tránsito real por Hurlingham, con un auto doble comando y un instructor dedicado sólo a vos.',
    highlights: [
      'Manejo del embrague y arranque en pendiente',
      'Estacionamiento en paralelo y a 45°',
      'Circulación en avenidas, rotondas y pasos a nivel',
      'Simulacro del recorrido del examen práctico',
    ],
    requirements: [
      'Desde los 17 años con autorización de madre, padre o tutor',
      'DNI vigente',
      'No hace falta tener licencia para empezar a practicar',
    ],
    packs: [
      {
        id: 'auto-manual-10',
        name: 'Curso completo · 10 clases',
        level: 'Inicial',
        classes: 10,
        minutesPerClass: 45,
        price: 300000,
        featured: true,
        description: 'Curso completo para principiantes. Te llevamos de cero a rendir con confianza.',
        includes: [...AUTO_INCLUDES, 'Simulacro de examen'],
      },
      {
        id: 'auto-manual-5',
        name: 'Pack 5 clases',
        level: 'Intermedio',
        classes: 5,
        minutesPerClass: 45,
        price: null,
        description: 'Ya sabés lo básico y necesitás afianzar maniobras, estacionamiento y tránsito real.',
        includes: [...AUTO_INCLUDES, 'Simulacro de examen'],
      },
      {
        id: 'auto-manual-1',
        name: 'Clase individual / personalizada',
        level: 'Avanzado',
        classes: 1,
        minutesPerClass: 45,
        price: null,
        description: 'Una práctica puntual antes del examen, para retomar confianza o perfeccionar una maniobra.',
        includes: ['Auto doble comando con seguro', 'Instructor/a matriculado/a'],
      },
    ],
  },
  {
    slug: 'auto-automatico',
    name: 'Auto con caja automática',
    navLabel: 'Auto automático',
    group: 'autos',
    license: 'Licencia clase B1',
    image: '/img/automatico.webp',
    imageAlt: 'Alumna practicando con un auto de caja automática junto a su instructor',
    short: 'Sin embrague: ideal para concentrarte en el tránsito desde el primer día.',
    intro:
      'Cada vez más gente elige la caja automática. Aprendés más rápido, con menos estrés, y te enfocás en lo importante: leer el tránsito y anticiparte.',
    highlights: [
      'Uso correcto del selector P-R-N-D',
      'Control de velocidad y distancia de frenado',
      'Estacionamiento con referencias',
      'Manejo defensivo en avenidas y autopista',
    ],
    requirements: [
      'Desde los 17 años con autorización de madre, padre o tutor',
      'DNI vigente',
      'Consultá si tu municipio restringe la licencia a vehículos automáticos',
    ],
    packs: [
      {
        id: 'auto-automatico-10',
        name: 'Curso completo · 10 clases',
        level: 'Inicial',
        classes: 10,
        minutesPerClass: 45,
        price: null,
        featured: true,
        description: 'Curso completo para principiantes, desde cero hasta el examen con caja automática.',
        includes: [...AUTO_INCLUDES, 'Simulacro de examen'],
      },
      {
        id: 'auto-automatico-5',
        name: 'Pack 5 clases',
        level: 'Intermedio',
        classes: 5,
        minutesPerClass: 45,
        price: null,
        description: 'Para afianzar seguridad en tránsito real y maniobras de estacionamiento.',
        includes: [...AUTO_INCLUDES, 'Simulacro de examen'],
      },
      {
        id: 'auto-automatico-1',
        name: 'Clase individual / personalizada',
        level: 'Avanzado',
        classes: 1,
        minutesPerClass: 45,
        price: null,
        description: 'Práctica a medida, repaso previo al examen o adaptación de manual a automático.',
        includes: ['Auto doble comando con seguro', 'Instructor/a matriculado/a'],
      },
    ],
  },
  {
    slug: 'motos',
    name: 'Motos de todas las cilindradas',
    navLabel: 'Motos',
    group: 'motos',
    license: 'Licencia clase A (todas las cilindradas)',
    image: '/img/moto.webp',
    imageAlt: 'Alumno practicando en moto entre conos con su instructora',
    short: 'Desde ciclomotores hasta motos de alta cilindrada, con equipo de seguridad incluido.',
    intro:
      'Arrancamos en zona controlada con conos y, cuando estás listo, salimos a la calle. Te enseñamos equilibrio, frenado y el circuito completo del examen práctico.',
    highlights: [
      'Equilibrio, slalom y ocho entre conos',
      'Frenado de emergencia y control a baja velocidad',
      'Posicionamiento en el carril y puntos ciegos',
      'Casco y chaleco provistos por la escuela',
    ],
    requirements: [
      'Edad mínima según la cilindrada y el municipio (consultanos)',
      'DNI vigente',
      'Calzado cerrado y ropa cómoda',
    ],
    packs: [
      {
        id: 'moto-5hs',
        name: 'Pack 5 horas',
        level: 'Inicial',
        classes: 5,
        minutesPerClass: 45,
        meta: '5 horas de práctica',
        price: 200000,
        featured: true,
        description: 'Curso completo para principiantes: desde el equilibrio inicial hasta dominar el circuito del examen.',
        includes: ['Moto de la escuela', 'Casco y chaleco', 'Práctica completa del circuito de examen'],
      },
      {
        id: 'moto-3hs',
        name: 'Pack 3 horas',
        level: 'Intermedio',
        classes: 3,
        minutesPerClass: 45,
        meta: '3 horas de práctica',
        price: 135000,
        description: 'Para quienes ya andan en bici o tienen noción y quieren preparar las maniobras del examen.',
        includes: ['Moto de la escuela', 'Casco y chaleco', 'Práctica de circuito del examen'],
      },
      {
        id: 'moto-1-rendir',
        name: '1 clase + ir a rendir',
        level: 'Avanzado',
        classes: 1,
        minutesPerClass: 45,
        meta: '1 clase de práctica + acompañamiento al examen',
        price: 100000,
        description: 'Practicás el circuito antes de rendir y te llevamos la moto al examen práctico.',
        includes: ['1 clase previa de repaso', 'Moto para rendir el examen', 'Casco y chaleco'],
      },
      {
        id: 'moto-1',
        name: 'Clase individual',
        level: 'Avanzado',
        classes: 1,
        minutesPerClass: 45,
        meta: '1 clase personalizada',
        price: 50000,
        description: 'Una clase suelta para practicar conos, sacarte dudas o probar la cilindrada con la que vas a rendir.',
        includes: ['Moto de la escuela', 'Casco y chaleco', 'Instructor/a dedicado/a'],
      },
    ],
  },
  {
    slug: 'camiones',
    name: 'Camiones',
    navLabel: 'Camiones',
    group: 'profesional',
    license: 'Licencias profesionales C y E',
    image: '/img/camion.webp',
    imageAlt: 'Alumna subiendo a la cabina de un camión de práctica con su instructor',
    short: 'Rígidos y articulados. Preparación para la licencia profesional.',
    intro:
      'Salí a trabajar con la licencia profesional. Practicás con camión de gran porte, maniobras de marcha atrás con referencias y circulación segura con carga.',
    highlights: [
      'Revisión previa del vehículo y seguridad',
      'Marcha atrás, dársenas y maniobras en espacios reducidos',
      'Uso de caja de cambios y freno motor',
      'Puntos ciegos y espejos en vehículos largos',
    ],
    requirements: [
      'Tener 21 años o más',
      'Licencia B1 con antigüedad mínima (según normativa vigente)',
      'Apto psicofísico profesional',
    ],
    packs: [
      {
        id: 'camion-c-6',
        name: 'Camión rígido',
        level: 'Profesional',
        classes: 6,
        minutesPerClass: 45,
        price: 420000,
        featured: true,
        description: 'Preparación para licencia clase C.',
        includes: ['Camión de práctica', 'Instructor profesional', 'Simulacro de examen'],
      },
      {
        id: 'camion-e-8',
        name: 'Camión con acoplado / articulado',
        level: 'Profesional',
        classes: 8,
        minutesPerClass: 45,
        price: null,
        description: 'Preparación para licencia clase E. Cupos limitados.',
        includes: ['Vehículo articulado', 'Instructor profesional', 'Maniobras de enganche'],
      },
    ],
  },
  {
    slug: 'colectivos',
    name: 'Colectivos y gran porte',
    navLabel: 'Colectivos',
    group: 'profesional',
    license: 'Licencia profesional D',
    image: '/img/colectivo.webp',
    imageAlt: 'Alumna practicando al volante de un colectivo acompañada por su instructor',
    short: 'Transporte de pasajeros: la salida laboral con más demanda.',
    intro:
      'Te preparamos para manejar colectivos y vehículos de pasajeros con criterio profesional: confort del pasajero, paradas, giros amplios y manejo preventivo.',
    highlights: [
      'Giros amplios y ocupación de carril',
      'Detención en paradas y ascenso seguro',
      'Manejo suave pensando en el pasajero',
      'Normativa de transporte de pasajeros',
    ],
    requirements: [
      'Tener 21 años o más',
      'Licencia B1 con antigüedad mínima (según normativa vigente)',
      'Apto psicofísico profesional',
    ],
    packs: [
      {
        id: 'colectivo-d-8',
        name: 'Curso colectivo',
        level: 'Profesional',
        classes: 8,
        minutesPerClass: 45,
        price: 600000,
        featured: true,
        description: 'Preparación integral para licencia clase D.',
        includes: ['Vehículo de gran porte', 'Instructor profesional', 'Simulacro de examen'],
      },
      {
        id: 'colectivo-perfeccionamiento-4',
        name: 'Perfeccionamiento para choferes',
        level: 'Profesional',
        classes: 4,
        minutesPerClass: 45,
        price: null,
        description: 'Para choferes con licencia que quieren sumar seguridad o para empresas.',
        includes: ['Vehículo de gran porte', 'Evaluación de manejo', 'Informe de mejoras'],
      },
    ],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

export const groupLabels: Record<Category['group'], string> = {
  autos: 'Autos',
  motos: 'Motos',
  profesional: 'Camiones y colectivos',
};

/** Precio "desde" de una categoría (ignora packs sin precio). */
export function fromPrice(cat: Category): number | null {
  const prices = cat.packs.map((p) => p.price).filter((p): p is number => p !== null);
  return prices.length ? Math.min(...prices) : null;
}
