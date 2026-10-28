# Observatorio del Mercado Laboral & Salud Mental en Colombia
> **Foco Territorial en Pasto (Nariño) y Análisis Comparativo sobre 23 Ciudades**

Este proyecto integra tres enfoques analíticos de datos socioeconómicos y de salud pública en Colombia:
1. **Mercado Laboral GEIH (DANE):** Clasificación por clústeres K-Means y Proyección PCA sobre calidad contractual e informalidad.
2. **Registros Médico-Legales INMLCF (2015–2026):** Mapeo geográfico de lesiones fatales con detonante económico/laboral.
3. **Pipeline SISMEL Machine Learning:** Clasificación supervisada (Random Forest y Gradient Boosting) de perfiles de riesgo psicosocial.

---

## 🎨 Estructura del Sitio Web
- **Diseño Editorial:** Paleta en tonos Crema (`#f7f4ed`), Granate (`#9b2c2c`) y Ámbar.
- **Carga Asíncrona:** Interfaz desacoplada alimentada dinámicamente desde `cityData.json`.
- **Módulos Interactivos:**
  - Selector de ciudades sincronizado.
  - Mapa geográfico con capa Leaflet Heat.
  - Gráficos combinados de series temporales (2015–2026).
  - Desglose de causas médico-legales y correlación de Spearman.
  - Métricas e importancia de variables del modelo de Machine Learning.
  - Matriz interactiva de datos con búsqueda y filtros por clúster.

---

## 🚀 Despliegue Local
Para ejecutar la aplicación en tu máquina local:

```bash
# Servidor HTTP simple de Python
python -m http.server 8000


## Correcciones de recuperación
- La configuración de Tailwind se declara antes de cargar su CDN.
- El mapa tiene una altura CSS de respaldo independiente de Tailwind.
- La inicialización del mapa comprueba que Leaflet y el contenedor existan y recalcula el tamaño tras el renderizado.
