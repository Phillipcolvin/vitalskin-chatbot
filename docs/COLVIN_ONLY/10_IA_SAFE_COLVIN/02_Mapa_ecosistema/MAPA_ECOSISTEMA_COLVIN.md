# Mapa del ecosistema digital — Colvin y Cía. Ltda.

Documento vivo. Representante oficial Teledyne FLIR en Chile.

## Actores

- Cliente final: compra, consulta, soporte, capacitación, renovación.
- Partner / distribuidor / integrador / instalador: portal B2B, stock, cotización, órdenes de compra, territorio.
- Equipo interno Colvin: ventas, servicio técnico, laboratorio, finanzas, marketing.
- Fábrica FLIR: catálogo, precios, lead time, RMA, soporte.
- Organismos compradores (Estado y privados): licitaciones vía portales.

## Verticales de negocio

Termografía (T&M), detección de gases y OGI, seguridad, defensa, automatización y control, UAV y cargas útiles, servicios y software.

## Plataformas y sistemas

### Captación
- Google Ads, Meta Ads, redes sociales → leads con UTM a HubSpot.
- Mail de fábrica → HubSpot.
- **Portales de licitación (capa activa, todos integrables):**
  - Capa 1 (prioridad): Mercado Público (API pública), Unilink (MRO minería), SICEP, RedNegocios, Artikos, Wherex, iConstruye, Senegocia.
  - Capa 2 (solo si mandante lo exige): Achilles, RyCE, SAP Ariba.
  - Detalle completo en `05_Portales_licitacion/PORTALES_LICITACION_COLVIN.md`.

### Comercio
- Shopify: tienda B2C + portal B2B. Perfil 360: compras + RMA + certificaciones CEP bajo un solo usuario.
- Partners interactúan: stock real, cotización, órdenes de compra, territorio, comisiones.

### Servicio
- UpKeep: tickets y RMA.
- Colvin CEP: cursos y certificaciones.
- Frankie: orquestación de todo el ciclo de vida del activo.

### Fábrica
- Portal FLIR: catálogo, precios, lead time, soporte técnico.

### Dinero
- Bsale: facturación electrónica.
- Mercado Pago y Banco Santander: cobranza.
- FedEx: despacho y tracking.
- Softland: ERP financiero.

### Orquestación
- n8n self-hosted en VPS chileno.
- Frankie: núcleo de reglas, eventos, identidad, trazabilidad.
- Datos de conversación en PostgreSQL local. Retención 30 días.

## Flujos dorados (Etapa 1)

1. Lead (Ads/Meta/portal) → HubSpot → bot WhatsApp → handoff a vendedor.
2. Oportunidad de licitación (cualquier portal) → clasificador UNSPSC → lead HubSpot → notificación vendedor. Bot detecta; humano presenta.
3. Cliente con serial → perfil 360 → RMA o renovación.

## Regla dura

Un flujo vertical a la vez. Nada más hasta que responda un lead real. Cada cambio mueve un KPI o se apaga.
