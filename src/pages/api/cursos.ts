import type { APIRoute } from 'astro';
import { categories } from '../../data/cursos';

/**
 * GET /api/cursos — catálogo en JSON, servido dinámicamente por el Worker.
 * Base para futuras integraciones: checkout (Mercado Pago), reserva de turnos
 * y sincronización con Google Calendar.
 */
export const prerender = false;

export const GET: APIRoute = () => {
  const data = categories.map((c) => ({
    slug: c.slug,
    name: c.name,
    license: c.license,
    packs: c.packs.map((p) => ({
      id: p.id,
      name: p.name,
      classes: p.classes,
      minutesPerClass: p.minutesPerClass,
      price: p.price,
      currency: 'ARS',
    })),
  }));

  return new Response(JSON.stringify({ updatedAt: new Date().toISOString(), categories: data }), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=300',
    },
  });
};
