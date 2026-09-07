# Hallazgos AS-IS — Producción Colvin

Fecha: 7 de septiembre de 2026 · Estado: PRE-GATE 0 · Solo lectura.

## Hallazgos confirmados
1. **Deriva de despliegue**: README describe Cloud Run; app.yaml y workflow declaran App Engine Python 3.11. Nadie sabe qué corre de verdad.
2. **Secretos en código**: claves de Google API en scripts y notebooks, indexadas en GitHub.
3. **RMA en Azure Functions** sin owner corporativo ni backup probado.
4. **Archivos de 4.000–6.000 líneas** concentrando lógica (reconciliación, orders, app.py).
5. **Código de otros proyectos mezclado con Colvin**: el repositorio contiene restos de desarrollos ajenos a la operación FLIR. Acción: construir el núcleo limpio desde cero, sin heredar deuda.
6. **main y release-prod divergen 330 commits**; ambas ramas sin protección; workflow deshabilitado manualmente.
7. **Permisos Drive**: carpeta maestra con anyone/writer; no se modificaron automáticamente.
8. **Contrato FLIR**: archivo unsigned disponible; no confirma vigencia.

## Acciones inmediatas
- BASE-001: auditoría AS-IS read-only, sin tocar código.
- Rotar secretos expuestos.
- Congelar documentación nueva hasta que el bot responda un lead real.
- Un solo flujo vertical: lead → HubSpot → bot WhatsApp → handoff.
- n8n self-hosted en VPS chileno para datos de conversación.

## No hacer
- No fusionar ramas.
- No reactivar deploy.yml.
- No desplegar sin identificar producción real.
- No mezclar tenants ni verticales ajenas.
