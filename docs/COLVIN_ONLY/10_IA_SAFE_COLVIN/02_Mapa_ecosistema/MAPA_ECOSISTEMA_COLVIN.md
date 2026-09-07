# Mapa del ecosistema Colvin y Cía. Ltda.

Colvin y Cía. Ltda. · 7 de septiembre de 2026 · IA-SAFE

## Propósito
Documento vivo que describe el ecosistema digital de Colvin como representante y servicio técnico de Teledyne FLIR en Chile. Sin secretos, sin PII, sin URLs de admin.

## Actores
- Cliente final (B2C / B2B)
- Distribuidor / partner / reseller
- Integrador e instalador certificado
- Técnico de servicio y termógrafo certificado
- Equipo Colvin (comercial, operaciones, servicio técnico, CEP, finanzas)
- Fábrica FLIR (catálogo, precios, soporte, RMA global)

## Plataformas y rol
| Plataforma | Rol en Colvin | Dato que entra | Dato que sale | Dueño humano | ¿IA?
|---|---|---|---|---|---|
| HubSpot | CRM y memoria comercial | Leads, contactos, deals, UTM | Tareas, scoring, pipeline | Comercial | Sí (consulta)
| Shopify | E-commerce B2C/B2B | Pedidos, stock, clientes | Órdenes, estado | Comercial | No
| Bsale | Facturación electrónica | Facturas, NC/ND, pagos | Estado tributario | Finanzas | No
| UpKeep | Servicio técnico / IoT | Tickets, RMA, activos | Estado de caso | Servicio técnico | No
| FedEx | Logística y tracking | Guías, POD | Estado de envío | Operaciones | No
| Mercado Pago | Pagos online | Pagos, settlements | Confirmación | Finanzas | No
| Banco Santander | Conciliación | Extractos, transferencias | Matching | Finanzas | No
| Portal FLIR | Catálogo y soporte fábrica | Precios, docs, lead time | Órdenes de compra | Comercial | Sí (sync controlado)
| WhatsApp Business | Atención omnicanal | Mensajes, intención | Respuestas, handoff | Comercial | Sí (bot)
| Colvin CEP | Capacitación y certificaciones | Inscripciones, asistencia | Certificados, vigencia | CEP | No
| n8n (self-hosted) | Orquestación | Eventos, webhooks | Acciones tipadas | TI | Sí

## Flujos dorados (piloto)
1. Lead → HubSpot → bot WhatsApp → handoff humano.
2. (Futuro) Pedido → Bsale → FedEx → conciliación.
3. (Futuro) Falla → RMA → laboratorio → devolución.

## Regla
Este mapa se actualiza solo cuando cambia una integración real. No se documentan integraciones planificadas como si existieran.
