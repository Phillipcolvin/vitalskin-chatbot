# Flujo dorado 1 — Lead de alta intención a oportunidad

Colvin y Cía. Ltda. · Piloto WhatsApp · 90 días

## Objetivo

Que un lead de alta intención (cotización, stock/ETA, interés B2B) reciba respuesta en menos de 3 segundos, quede calificado y llegue al vendedor correcto sin que el cliente repita información.

## Flujo

1. Lead entra por Google Ads, Meta o mail de fábrica → UTM se guarda en el contacto de HubSpot.
2. El bot responde en WhatsApp en menos de 3 segundos, identifica al contacto por teléfono, consulta stock/ETA y catálogo FLIR vía tools.
3. Califica con scoring fit + comportamiento (vertical, ticket, urgencia, aplicación termográfica).
4. Si es alta intención: crea el Deal, asigna owner, dispara tarea con resumen completo — el vendedor no repite nada.
5. Si es técnico normal: responde desde la base de conocimiento (manuales, casos, CEP) y agenda con especialista.
6. RMA o falla crítica: acuse inmediato, triage por severidad, deriva a Laboratorio.

## Lo que NO toca el bot

Descuentos, garantías, especificaciones críticas, licitaciones. Eso es humano, siempre. Niveles 0 a 3 según documento 053.

## Integraciones

- WhatsApp Business API → adaptador de canal → orquestador n8n → agente OMNIC con RAG + tools → HubSpot como única fuente de verdad comercial.
- n8n self-hosted en VPS chileno. Modelo LLM desacoplado (OpenAI o Claude). Memoria en PostgreSQL con pgvector.
- FedEx, Visail, Chipit y Bsale: NO integrados al bot en el piloto. Van por webhooks de n8n disparados desde el Deal en HubSpot. El bot solo consulta estado, no mueve dinero ni envíos.

## KPIs del flujo

- Tiempo de primera respuesta (meta: < 3 s).
- MQL-to-SQL.
- Tasa de handoff correcto.
- Oportunidades creadas por el bot.
- Errores de enrutamiento.
