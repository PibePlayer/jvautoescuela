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
        id: 'auto-manual-12',
        name: 'Pack 12 clases',
        level: 'Inicial',
        classes: 12,
        minutesPerClass: 60,
        price: 400000,
        listPrice: 456000,
        featured: true,
        description: 'Para quienes nunca manejaron. Te llevamos de cero a rendir con confianza.',
        includes: [...AUTO_INCLUDES, 'Auto para el examen práctico', 'Simulacro de examen'],
      },
      {
        id: 'auto-manual-8',
        name: 'Pack 8 clases',
        level: 'Intermedio',
        classes: 8,
        minutesPerClass: 60,
        price: 280000,
        description: 'Ya sabés lo básico y necesitás afianzar maniobras y tránsito real.',
        includes: [...AUTO_INCLUDES, 'Simulacro de examen'],
      },
      {
        id: 'auto-manual-4',
        name: 'Pack 4 clases',
        level: 'Avanzado',
        classes: 4,
        minutesPerClass: 60,
        price: 145000,
        description: 'Tenés licencia o experiencia y querés perfeccionar algo puntual.',
        includes: AUTO_INCLUDES,
      },
      {
        id: 'auto-manual-1',
        name: 'Clase individual',
        level: 'Avanzado',
        classes: 1,
        minutesPerClass: 60,
        price: 38000,
        description: 'Una práctica extra antes del examen o para recuperar confianza.',
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
        id: 'auto-automatico-12',
        name: 'Pack 12 clases',
        level: 'Inicial',
        classes: 12,
        minutesPerClass: 60,
        price: 440000,
        listPrice: 504000,
        featured: true,
        description: 'Desde cero hasta el examen, con caja automática.',
        includes: [...AUTO_INCLUDES, 'Auto para el examen práctico', 'Simulacro de examen'],
      },
      {
        id: 'auto-automatico-8',
        name: 'Pack 8 clases',
        level: 'Intermedio',
        classes: 8,
        minutesPerClass: 60,
        price: 305000,
        description: 'Para afianzar seguridad en tránsito real y maniobras.',
        includes: [...AUTO_INCLUDES, 'Simulacro de examen'],
      },
      {
        id: 'auto-automatico-4',
        name: 'Pack 4 clases',
        level: 'Avanzado',
        classes: 4,
        minutesPerClass: 60,
        price: 160000,
        description: 'Perfeccionamiento o pasaje de manual a automático.',
        includes: AUTO_INCLUDES,
      },
    ],
  },
  {
    slug: 'motos',
    name: 'Motos de todas las cilindradas',
    navLabel: 'Motos',
    group: 'motos',
    license: 'Licencia clase A (A.1.1 a A.1.4)',
    image: '/img/moto.webp',
    imageAlt: 'Alumno practicando en moto entre conos con su instructora',
    short: 'Desde ciclomotores hasta motos de alta cilindrada, con equipo de seguridad incluido.',
    intro:
      'Arrancamos en zona controlada con conos y, cuando estás listo, salimos a la calle. Te enseñamos equilibrio, frenado y, sobre todo, a ser visible y anticiparte.',
    highlights: [
      'Equilibrio, slalom y ocho entre conos',
      'Frenado de emergencia y control a baja velocidad',
      'Posicionamiento en el carril y puntos ciegos',
      'Casco y chaleco provistos por la escuela',
    ],
    requirements: [
      'Edad mínima según la subclase y el municipio (consultanos)',
      'DNI vigente',
      'Calzado cerrado y ropa cómoda',
    ],
    packs: [
      {
        id: 'moto-a11-3',
        name: 'Hasta 50 cc',
        level: 'Inicial',
        classes: 3,
        minutesPerClass: 60,
        price: 90000,
        description: 'Ciclomotores. Subclase A.1.1.',
        includes: ['Moto de la escuela', 'Casco y chaleco', 'Práctica de circuito del examen'],
      },
      {
        id: 'moto-a12-4',
        name: 'Hasta 150 cc',
        level: 'Inicial',
        classes: 4,
        minutesPerClass: 60,
        price: 130000,
        featured: true,
        description: 'La más pedida: motos urbanas. Subclase A.1.2.',
        includes: ['Moto de la escuela', 'Casco y chaleco', 'Práctica de circuito del examen'],
      },
      {
        id: 'moto-a13-4',
        name: '150 a 300 cc',
        level: 'Intermedio',
        classes: 4,
        minutesPerClass: 60,
        price: 150000,
        description: 'Motos medianas. Subclase A.1.3.',
        includes: ['Moto de la escuela', 'Casco y chaleco', 'Manejo en avenida'],
      },
      {
        id: 'moto-a14-5',
        name: 'Más de 300 cc',
        level: 'Avanzado',
        classes: 5,
        minutesPerClass: 60,
        price: 195000,
        description: 'Alta cilindrada. Subclase A.1.4.',
        includes: ['Moto de la escuela', 'Casco y chaleco', 'Frenado y curvas avanzadas'],
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
        minutesPerClass: 60,
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
        minutesPerClass: 60,
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
        minutesPerClass: 60,
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
        minutesPerClass: 60,
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
