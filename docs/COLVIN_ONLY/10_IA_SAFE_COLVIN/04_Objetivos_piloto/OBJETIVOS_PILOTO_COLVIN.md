# Objetivos del piloto — Colvin y Cía. Ltda.

Colvin y Cía. Ltda. · 7 de septiembre de 2026 · IA-SAFE

## Meta
Bot WhatsApp respondiendo leads reales en 90 días, sin secretos expuestos y sin capas de seguridad propias.

## KPIs (medir, no opinar)
- Tiempo de primera respuesta < 3 s.
- MQL-to-SQL: baseline a definir en semana 1.
- Margen asistido: baseline a definir en semana 1.
- % handoff con contexto completo > 80%.

## Alcance del piloto (simple)
1. Lead → HubSpot → bot WhatsApp → handoff humano.
2. Intents: cotización, stock, estado de pedido, RMA, CEP, partner B2B.
3. n8n self-hosted en VPS chileno para datos de conversación.
4. Sin FedEx, Bsale, Mercado Pago ni portal de fábrica en el piloto.

## Fuera de alcance (por ahora)
- Integraciones financieras y de logística.
- Agentes de abastecimiento, financiero o marketing.
- Data lake / warehouse.
- Air-gap o modelos locales.

## Regla de apagado
Si a los 90 días no mueve los KPIs, se apaga el bot y se revisa.

## Principio
Resultados pronto, simple, operativo y realista. La complejidad se gana, no se construye por adelantado.
