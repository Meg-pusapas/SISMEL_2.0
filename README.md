# Observatorio Trabajo & Salud Mental · 23 ciudades de Colombia

Sitio 100 % estático: no necesita build en Vercel.

## Estructura
- `index.html` — página completa (datos de las 23 ciudades dentro del `<script>`).
- `assets/tailwind.css` — Tailwind ya compilado (no depende del CDN).
- `assets/vendor/` — Chart.js 4.4.7, Leaflet 1.9.4, Leaflet.heat 0.2.0 y Lucide 0.468.0, con versión fija.

## Despliegue
Sube todo el contenido de esta carpeta a la raíz del repositorio. En Vercel deja
"Framework Preset: Other" y sin Build Command ni Output Directory.

## Si cambias clases de Tailwind en index.html
    npm install
    npm run build:css
y sube el `assets/tailwind.css` regenerado.
