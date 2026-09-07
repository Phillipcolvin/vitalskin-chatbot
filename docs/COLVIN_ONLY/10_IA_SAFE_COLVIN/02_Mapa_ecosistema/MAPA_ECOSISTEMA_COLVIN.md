# Mapa del ecosistema Colvin y Cía. Ltda.

Colvin y Cía. Ltda. · 7 de septiembre de 2026 · IA-SAFE · v3

## Propósito
Documento vivo que describe el ecosistema digital de Colvin como representante y servicio técnico de Teledyne FLIR en Chile. Sin secretos, sin PII, sin URLs de admin. Actualizar solo cuando cambia una integración real.

## Actores
- Cliente final (B2C / B2B)
- Distribuidor / partner / reseller
- Integrador e instalador certificado
- Técnico de servicio y termógrafo certificado
- Organismo público comprador (Estado, municipalidades, hospitales, FF.AA.)
- Mandante privado (minería, energía, industria, retail, construcción)
- Equipo Colvin (comercial, operaciones, servicio técnico, CEP, finanzas)
- Fábrica FLIR (catálogo, precios, soporte, RMA global)

## Plataformas y rol
| Plataforma | Rol en Colvin | Dato que entra | Dato que sale | Dueño humano | ¿IA?
|---|---|---|---|---|---|
| HubSpot | CRM y memoria comercial | Leads, contactos, deals, UTM | Tareas, scoring, pipeline | Comercial | Sí (consulta)
| Shopify | E-commerce B2C/B2B + historial unificado | Pedidos, stock, clientes, RMA, certificaciones | Órdenes, estado, perfil 360 | Comercial | No
| Bsale | Facturación electrónica | Facturas, NC/ND, pagos | Estado tributario | Finanzas | No
| UpKeep | Servicio técnico / IoT | Tickets, RMA, activos | Estado de caso | Servicio técnico | No
| FedEx | Logística y tracking | Guías, POD | Estado de envío | Operaciones | No
| Mercado Pago | Pagos online | Pagos, settlements | Confirmación | Finanzas | No
| Banco Santander | Conciliación | Extractos, transferencias | Matching | Finanzas | No
| Portal FLIR | Catálogo y soporte fábrica | Precios, docs, lead time | Órdenes de compra | Comercial | Sí (sync controlado)
| WhatsApp Business | Atención omnicanal | Mensajes, intención | Respuestas, handoff | Comercial | Sí (bot)
| Colvin CEP | Capacitación y certificaciones | Inscripciones, asistencia | Certificados, vigencia | CEP | No
| Google Ads | Captación de demanda | Clics, conversiones, UTM | Leads a HubSpot | Marketing | No
| Meta Ads / RRSS | Captación y contenido | Leads, interacciones | Leads a HubSpot | Marketing | No
| n8n (self-hosted) | Orquestación | Eventos, webhooks | Acciones tipadas | TI | Sí
| Mercado Público (ChileCompra) | Compras del Estado | Licitaciones, órdenes, catálogo | Ofertas, respuestas | Comercial | Sí (monitoreo)
| SICEP | Calificación proveedores minería/industria | Estado, categorías, auditorías | Perfil, evidencias | Comercial | No
| Artikos | Compras y licitaciones mandantes privados | RFQ, licitaciones, adjudicaciones | Ofertas, documentos | Comercial | No
| RedNegocios | Registro proveedores (Codelco y mandantes) | Estado, categorías, capacidad | Ficha, documentos | Comercial | No
| Senegocia | Marketplace y cotizaciones privadas | RFQ, invitaciones | Ofertas, cotizaciones | Comercial | No
| Wherex | Licitaciones y compras LATAM | RFQ, categorías | Ofertas | Comercial | No
| Unilink | Marketplace MRO minería/energía | RFQ, catálogo | Ofertas, catálogo | Comercial | No
| iConstruye | Marketplace construcción | Requerimientos, obras | Ofertas, despachos | Comercial | No
| RyCE | Registro proveedores (ENAMI y mandantes) | Estado, evaluación | Ficha, evidencias | Comercial | No
| Achilles | Homologación y riesgo cadena suministro | Cuestionarios, auditorías | Evidencias, certificaciones | Comercial | No

## Flujos dorados (piloto)
1. Lead → HubSpot → bot WhatsApp → handoff humano.
2. (Futuro) Pedido → Bsale → FedEx → conciliación.
3. (Futuro) Falla → RMA → laboratorio → devolución.
4. (Futuro) Partner B2B → portal → orden de compra → stock → entrega.
5. (Futuro, Etapa 2) Licitación → portal → oferta → adjudicación → pedido → entrega.

## Regla
Este mapa se actualiza solo cuando cambia una integración real. No se documentan integraciones planificadas como si existieran. Los portales de licitación se monitorean primero; se integran solo cuando hay volumen real de oportunidades en verticales FLIR.
