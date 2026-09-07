# COLVIN_ONLY — Base documental Colvin y Cía. Ltda.

Representante oficial Teledyne FLIR en Chile.

## Estructura

- `10_IA_SAFE_COLVIN/` — lo que la IA puede leer y escribir (gobierno, mapa, procesos anonimizados, flujos de bots sin secretos, integraciones funcionales, playbooks sin PII, glosario, checklist).
- `20_IA_OUTPUT_COLVIN/` — borradores, actualizaciones diarias, índices e inventarios.
- `00_NO_IA_NUNCA_COLVIN/` — credenciales, clientes reales, contratos de fábrica, finanzas, accesos a portales, respaldos de código con env.
- `30_HUMANO_SOLO_COLVIN/` — decisiones comerciales, contratos firmados, listas de clientes, precios de fábrica, accesos admin.
- `SEPARACION_OHANA_REFERENCIA/` — lecciones rescatadas y deuda descartada de Ohana Core. Ohana queda como antecedente histórico, no como plantilla.
- `PILOTO_WHATSAPP_COLVIN/` — flujos dorados, intents y scoring, handoff humano, KPIs y evidencia, playbooks de Inside Sales.
- `AUDITORIA_BASE_001/` — AS-IS de producción, secretos rotados, fuentes de verdad, recorridos dorados, riesgos críticos, evidencia del piloto.

## Reglas duras

1. Congelar documentación nueva hasta que el bot responda un lead real.
2. Cero secretos en código o en 10_IA_SAFE. Rotar claves de Google API ya indexadas en GitHub.
3. n8n self-hosted en VPS chileno. Datos de conversación no pasan por SaaS extranjero.
4. Un solo flujo vertical primero: lead de alta intención → HubSpot → bot WhatsApp → handoff humano.
5. FedEx, Visail, Chipit y Bsale van después, por webhooks, no por código propio.
6. Separar Ohana Core de Colvin. No mezclar tenants.
7. Piloto de 90 días. Medir tiempo de primera respuesta, MQL-to-SQL y margen asistido. Si no mueve esos números, se apaga.

## North Star

Margen real incremental originado o asistido digitalmente.
