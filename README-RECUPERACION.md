# Recuperación del Observatorio en Vercel

Esta carpeta conserva el dashboard original y sus datos. `index.html` ya contiene los datos de las ciudades en el propio JavaScript; `cityData.json` se conserva como archivo de datos independiente, pero la página actual no lo solicita mediante `fetch()`.

## Qué se cambió
- Se conservó el `index.html` original para no perder el diseño ni las funcionalidades.
- Se simplificó `vercel.json` para que Vercel publique los archivos estáticos con su comportamiento predeterminado y no reescriba todas las rutas a `index.html`.

## Cómo desplegar
1. Descomprime esta carpeta.
2. En el repositorio GitHub conectado a Vercel, reemplaza los archivos de la raíz por estos archivos (`index.html`, `cityData.json`, `vercel.json`). No subas la carpeta contenedora como subcarpeta si Vercel tiene configurada la raíz del proyecto en `/`.
3. Haz commit y push a la rama conectada a producción.
4. En Vercel abre el proyecto → Deployments y confirma que el nuevo commit terminó en **Ready**.
5. Abre la URL de producción en una ventana incógnita o con Ctrl+F5.

## Si sigue en blanco
- En Vercel → Deployments → abre el último deployment y confirma el commit y la carpeta raíz.
- En la página en blanco pulsa F12 → Console y copia el primer error rojo.
- En F12 → Network recarga la página y revisa si `index.html` devuelve 200 y si los recursos externos (CDN) fallan.

No se puede confirmar el estado del deployment en vivo sin acceso al proyecto de Vercel. Si persiste el problema, el error de Console y el estado del último deployment permitirán localizar la causa exacta.
