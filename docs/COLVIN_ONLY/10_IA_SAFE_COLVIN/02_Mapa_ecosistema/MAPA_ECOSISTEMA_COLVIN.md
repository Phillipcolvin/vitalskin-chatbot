# Mapa del ecosistema digital — Colvin y Cia. Ltda.

Documento vivo. Representante oficial Teledyne FLIR en Chile.

## Actores

- Cliente final: compra, consulta, soporte, capacitacion, renovacion.
- Partner / distribuidor / integrador / instalador: portal B2B, stock, cotizacion, ordenes de compra, territorio.
- Equipo interno Colvin: ventas, servicio tecnico, laboratorio, finanzas, marketing.
- Fabrica FLIR: catalogo, precios, lead time, RMA, soporte.
- Organismos compradores (Estado y privados): licitaciones via portales.

## Verticales de negocio

Termografia (T&M), deteccion de gases y OGI, seguridad, defensa, automatizacion y control, UAV y cargas utiles, servicios y software.

## Plataformas y sistemas

### Captacion
- Google Ads, Meta Ads, redes sociales -> leads con UTM a HubSpot.
- Mail de fabrica -> HubSpot.
- **Portales de licitacion** (ver documento dedicado): Mercado Publico, SICEP, RedNegocios, Artikos, Unilink, Wherex, iConstruye, Achilles, RyCE, SAP Ariba.

### Comercio
- Shopify: tienda B2C + portal B2B. Perfil 360: compras + RMA + certificaciones CEP bajo un solo usuario.
- Partners interactuan: stock real, cotizacion, ordenes de compra, territorio, comisiones.

### Servicio
- UpKeep: tickets y RMA.
- Colvin CEP: cursos y certificaciones.
- Frankie: orquestacion de todo el ciclo de vida del activo.

### Fabrica
- Portal FLIR: catalogo, precios, lead time, soporte tecnico.

### Dinero
- Bsale: facturacion electronica.
- Mercado Pago y Banco Santander: cobranza.
- FedEx: despacho y tracking.
- Softland: ERP financiero.

### Orquestacion
- n8n self-hosted en VPS chileno.
- Frankie: nucleo de reglas, eventos, identidad, trazabilidad.
- Datos de conversacion en PostgreSQL local. Retencion 30 dias.

## Flujos dorados (Etapa 1)

1. Lead (Ads/Meta/portal) -> HubSpot -> bot WhatsApp -> handoff a vendedor.
2. Oportunidad de licitacion -> clasificador -> lead HubSpot -> notificacion vendedor.
3. Cliente con serial -> perfil 360 -> RMA o renovacion.

## Regla dura

Un flujo vertical a la vez. Nada mas hasta que responda un lead real. Cada cambio mueve un KPI o se apaga.
