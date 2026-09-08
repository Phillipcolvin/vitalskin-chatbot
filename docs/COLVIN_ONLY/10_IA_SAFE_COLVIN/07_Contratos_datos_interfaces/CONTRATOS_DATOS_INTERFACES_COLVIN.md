# Contratos de datos e interfaces — Colvin y Cia. Ltda.

Documento vivo. Cada plataforma tiene un contrato: que datos entran, que datos salen, formato, sistema de verdad y regla de conflicto.
Principio: un solo dueno por dato. Si dos sistemas discrepan, gana el dueno declarado.

## 1. Mercado Publico -> HubSpot
Entra: id licitacion, comprador (RUT, nombre), items UNSPSC, montos, fechas, adjudicacion.
Sale: lead creado con UTM portal, scoring vertical FLIR, notificacion vendedor.
Formato: JSON OCDS estandar, 73 campos.
Sistema de verdad: Mercado Publico (origen), HubSpot (estado comercial).
Conflicto: si el item no mapea a vertical FLIR, se deriva a humano. Nunca se inventa categoria.

## 2. HubSpot -> Shopify
Entra: Deal cerrado, contacto, items, vertical.
Sale: orden B2C o B2B, stock reservado, ETA.
Formato: REST API Shopify, line items con SKU FLIR.
Sistema de verdad: Shopify (stock y pedido), HubSpot (oportunidad).
Conflicto: si el stock en Shopify difiere del forecast de Frankie, gana Shopify. Frankie se actualiza.

## 3. Shopify -> Shipit / Chilexpress
Entra: orden, direccion, peso, tipo producto.
Sale: guia de despacho, tracking.
Formato: API Shipit nativa Shopify; Chilexpress por regla.
Sistema de verdad: Shipit (envio local), Chilexpress (envio alternativo).
Conflicto: la regla de eleccion es producto + orden + cliente. Si no hay regla, se deriva a humano.
Nota: FedEx NO interviene aqui. FedEx es solo fabrica -> aduanas -> bodegas Colvin.

## 4. Shopify / Bsale -> Mercado Pago / Santander
Entra: orden pagada, monto, metodo.
Sale: conciliacion en Softland, estado de pago en HubSpot.
Formato: webhooks de pago, DTE Bsale.
Sistema de verdad: Bsale (factura), Softland (contabilidad), banco (movimiento).
Conflicto: si el pago no concilia en 48 horas, se alerta a Finanzas.

## 5. UpKeep -> Frankie (RMA)
Entra: ticket, serial, diagnostico, garantia.
Sale: RMA ID, estado, cotizacion reparacion, devolucion.
Formato: API UpKeep, eventos a Frankie.
Sistema de verdad: UpKeep (ticket activo), Frankie (historial completo del activo).
Conflicto: si el tecnico cierra en UpKeep pero Frankie no recibe el evento, se reintenta 3 veces y se alerta.

## 6. Colvin CEP -> Shopify (perfil 360)
Entra: curso, alumno, certificacion, fecha.
Sale: certificacion visible en perfil del cliente/partner.
Formato: API CEP, vinculacion por RUT o email.
Sistema de verdad: Colvin CEP (certificacion), Shopify (vista unificada).
Conflicto: la certificacion vence; Shopify muestra estado, CEP es la fuente.

## 7. Portal FLIR -> Frankie
Entra: catalogo, precios, lead time, disponibilidad, documentacion tecnica.
Sale: datos de producto a Shopify, HubSpot y base de conocimiento del bot.
Formato: portal FLIR (scraping controlado o API si existe).
Sistema de verdad: portal FLIR (precios y stock de fabrica).
Conflicto: si el precio local difiere del de fabrica, gana fabrica. Se notifica a Comercial.

## 8. Portales licitacion (Unilink, SICEP, Artikos, Senegocia, Wherex)
Entra: RFQ o licitacion, items, plazos, mandante.
Sale: alerta clasificada, lead en HubSpot si aplica.
Formato: monitoreo por alerta (sin API publica en la mayoria).
Sistema de verdad: el portal (origen), HubSpot (seguimiento).
Conflicto: sin API, el bot no puede confirmar adjudicacion. Solo alerta; el humano verifica.

## Regla general de conflicto
1. Origen gana sobre derivado.
2. Sistema transaccional gana sobre analitico.
3. Humano gana sobre bot en caso de duda.
4. Toda discrepancia no resuelta en 24 horas se escala al dueno humano.
