# JV Autoescuela — Sitio web

Sitio de **JV Autoescuela (Hurlingham)** hecho con [Astro](https://astro.build) y desplegado en **Cloudflare Workers**.

- Páginas estáticas (prerenderizadas) → rapidísimas y con buen SEO.
- Rutas dinámicas en el Worker (`/api/*`) → base para pagos, turnos y Google Calendar.

## Estructura

```
src/
  data/
    site.ts       ← teléfono, dirección, horarios, redes, PROMOS del carrusel
    cursos.ts     ← categorías, packs y PRECIOS (de ejemplo, editar)
    faq.ts        ← preguntas frecuentes
  components/     ← Header, Footer, PackCard, PromoCarousel, Faq, Icon
  layouts/Base.astro  ← SEO, Open Graph, JSON-LD (DrivingSchool), botón WhatsApp
  pages/
    index.astro           ← inicio
    cursos/index.astro    ← todos los cursos y precios
    cursos/[slug].astro   ← detalle por curso (auto manual, automático, motos, camiones, colectivos)
    contacto.astro        ← formulario que arma el mensaje de WhatsApp
    api/cursos.ts         ← GET /api/cursos (JSON, dinámico en el Worker)
public/img/             ← imágenes optimizadas en WebP
```

> Para cambiar precios, promos o datos de contacto **solo hace falta editar `src/data/`**.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # genera dist/
npm run preview    # prueba el build dentro del runtime de Workers (workerd)
```

## Deploy en Cloudflare Workers

```bash
npx wrangler login       # una sola vez
npm run build
npx wrangler deploy
```

- La primera vez Wrangler crea automáticamente el KV `SESSION` (lo usa Astro para sesiones; nos servirá para el carrito).
- Dominio propio: Cloudflare Dashboard → Workers → `jvautoescuela` → *Settings → Domains & Routes*.
- Al definir el dominio final, actualizar `site` en `astro.config.mjs`, `url` en `src/data/site.ts` y `public/robots.txt`.

## Roadmap

| Etapa | Qué | Cómo (en Workers) |
|---|---|---|
| ✅ 1 | Sitio institucional, cursos, precios, WhatsApp | Astro estático |
| 2 | Compra online | `POST /api/checkout` → preferencia de **Mercado Pago**; webhook `/api/mp/webhook`; pedidos en **D1** |
| 3 | Reserva de turnos | Calendario de disponibilidad por instructor/vehículo en D1; `/reservar` con selección de día y hora |
| 4 | Google Calendar | Service account + Calendar API desde el Worker; cada turno crea/actualiza el evento del instructor |
| 5 | Panel interno | Login (Cloudflare Access) para gestionar alumnos, turnos y precios sin tocar código |

Cada pack ya tiene un `id` único (ej. `auto-manual-12`) pensado para usarse como SKU en el checkout.
