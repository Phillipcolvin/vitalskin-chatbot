# Arranque inmediato — integración real del ecosistema Colvin

Fecha: 7 de septiembre de 2026 · Estado: GATE 0 superado · Documentos vivos, no código.

Principio: no se construye sobre lo que no se conoce. Primero inventariar lo que ya corre, luego conectar lo que falta, sin tocar producción hasta tener sandbox y rollback.

## 1. Inventario AS-IS real (día 1-2, solo lectura)

Plataformas ya integradas (confirmadas por operación, no por documentos):
- Shopify ↔ e-commerce B2C/B2B, Shipit nativo para despacho local.
- HubSpot ↔ CRM, leads, deals, pipeline.
- Bsale ↔ facturación electrónica DTE.
- Banco Santander + Mercado Pago ↔ conciliación de pagos.
- GitHub ↔ dashboard y workflows (rama main / release-prod).
- Portal FLIR ↔ catálogo, precios, lead time (manual hoy).

Plataformas NO integradas aún (pendientes de conectar):
- Mercado Público (API pública, prioridad 1).
- Unilink, SICEP, RedNegocios, Artikos, Senegocia, Wherex (monitoreo por alerta).
- UpKeep ↔ RMA y tickets de servicio técnico.
- Colvin CEP ↔ cursos y certificaciones.
- FedEx ↔ solo internacional: fábrica → aduanas → bodegas Colvin.
- Chilexpress y otros locales ↔ despacho a cliente (además de Shipit).
- Softland ↔ ERP financiero.
- n8n self-hosted ↔ orquestador (no existe aún).

Riesgos abiertos del repo (de HALLAZGOS_AS_IS.md):
- Secretos de Google API indexados en GitHub → rotar YA.
- Deriva Cloud Run vs App Engine → identificar qué corre de verdad.
- main y release-prod divergen 330 commits → no fusionar.
- Código ajeno mezclado → núcleo limpio, sin heredar.
- Permisos Drive anyone/writer → restringir a humano.

## 2. Cinco tareas de la semana 1 (una por agente, sin choque)

| # | Tarea | Agente | Entregable | KPI | Dueño humano |
|---|-------|--------|------------|-----|---------------|
| 1 | Rotar secretos expuestos y auditar qué corre en producción | Claude Code | Lista de secretos rotados + mapa de despliegue real | Cero secretos en repo | TI |
| 2 | Diseñar el conector Mercado Público → HubSpot (arquitectura + pseudocódigo) | Grok Bot | Diagrama de flujo + contrato de datos del conector | Flujo documentado en < 3 días | Comercial |
| 3 | Redactar el contrato de interfaz Shopify ↔ HubSpot ↔ Bsale (campos, formato, conflicto) | GPT | Documento de contrato versionado | Contrato firmado por dueño | TI |
| 4 | Levantar sandbox n8n en VPS chileno con PostgreSQL local | Claude Code | Instancia n8n accesible, primer workflow de prueba | Sandbox estable 48h | TI |
| 5 | Inventario de webhooks existentes en Shopify/HubSpot/Bsale | Grok Bot | Lista de webhooks activos y sus payloads | Mapa completo | TI |

Regla: ninguna tarea toca producción. Todo se prueba en sandbox.

## 3. Contratos de avance (obligatorios antes de Etapa 1)

Para iniciar la Etapa 1 (Mercado Público → HubSpot) se requiere:
1. Secretos rotados y confirmados fuera del repo.
2. Sandbox n8n estable.
3. Contrato de datos Mercado Público ↔ HubSpot escrito y aprobado.
4. Plan de rollback: desactivar workflow n8n, volver a monitoreo manual.
5. Dueño humano asignado (Comercial / Ventas).

## 4. Lo que NO se hace esta semana

- No se fusionan ramas.
- No se reactiva deploy.yml.
- No se conecta ningún portal de licitation a producción.
- No se escribe código de bot cliente (eso es Etapa 2+).
- No se agregan documentos nuevos al Drive sin pasar por el protocolo IA.

## 5. Señal de que el arranque fue exitoso

Al cierre de la semana 1:
- Sandbox n8n corriendo con un workflow de prueba que lee una licitación de Mercado Público (datos de prueba, no reales) y crea un contacto de prueba en HubSpot sandbox.
- Secretos rotados, evidencia en el registro de decisiones.
- Contrato Shopify↔HubSpot↔Bsale aprobado.
- Lista de webhooks mapeada.

Si eso no ocurre, se congela todo y se reevalúa. No se avanza por inercia.
