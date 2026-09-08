# Diccionario de datos — Portales de licitación — Colvin y Cía. Ltda.

Colvin y Cía. Ltda. · 7 de septiembre de 2026 · IA-SAFE · v1

Documento de referencia para bots y agentes. Define cada entidad de los portales de licitación con su nombre, propósito, campos clave, sistema de verdad y reglas de privacidad. Sin PII real, sin secretos, sin credenciales.

## 1. Licitación / Oportunidad
- **Qué es:** proceso de compra publicado en un portal donde Colvin puede ofertar equipos FLIR, servicios técnicos o capacitación.
- **Campos clave:** ID portal, portal origen, título, descripción, comprador, RUT comprador, región, fecha publicación, fecha cierre, tipo (pública/privada), estado, monto estimado, moneda, modalidad de pago, UNSPSC, vertical FLIR, score de afinidad, URL bases, documentos adjuntos.
- **Sistema de verdad:** portal origen (Mercado Público, Unilink, SICEP, etc.) → HubSpot (lead/oportunidad).
- **Regla:** el bot detecta y clasifica; nunca presenta oferta ni firma. Si el UNSPSC no mapea a una vertical FLIR, se descarta automáticamente.

## 2. Comprador / Mandante
- **Qué es:** organismo o empresa que publica la licitación.
- **Campos clave:** RUT, razón social, tipo (Estado/minera/constructora/retail/salud), región, contacto, historial de compras FLIR, vertical dominante.
- **Sistema de verdad:** portal origen → HubSpot (empresa).
- **Regla:** el bot identifica al comprador por RUT, nunca por datos bancarios ni contactos personales del mandante.

## 3. Ítem / Línea de licitación
- **Qué es:** producto o servicio específico solicitado dentro de una licitación.
- **Campos clave:** correlativo, código producto, nombre, descripción, UNSPSC, cantidad, unidad de medida, especificación técnica, serial FLIR aplicable, precio unitario estimado.
- **Sistema de verdad:** portal origen → HubSpot (línea de oportunidad).
- **Regla:** el bot mapea el ítem a un producto FLIR del catálogo; si no hay match, deriva a humano.

## 4. Oferta / Propuesta
- **Qué es:** respuesta de Colvin a una licitación (técnica y económica).
- **Campos clave:** ID oferta, ID licitación, fecha envío, estado (borrador/enviada/adjudicada/rechazada), monto ofertado, documentos técnicos, garantía ofrecida, plazo de entrega, responsable humano.
- **Sistema de verdad:** HubSpot (oportunidad) + portal origen (presentación).
- **Regla:** el bot prepara el borrador; el humano revisa, ajusta y envía. Nunca el bot envía la oferta.

## 5. Adjudicación
- **Qué es:** resultado de la licitación.
- **Campos clave:** ID licitación, ganador, monto adjudicado, fecha, motivo (si se conoce), seriales FLIR comprometidos, fecha de entrega comprometida.
- **Sistema de verdad:** portal origen → HubSpot (closed won/lost) → Bsale (factura si gana).
- **Regla:** el bot registra el resultado y notifica al vendedor; no celebra ni reclama.

## 6. Inscripción / Habilitación de proveedor
- **Qué es:** estado de Colvin como proveedor habilitado en cada portal.
- **Campos clave:** portal, RUT, estado (hábil/inhábil/en revisión), fecha vencimiento, categorías registradas, arancel pagado, documentos vigentes, contacto portal.
- **Sistema de verdad:** portal origen (ficha de proveedor).
- **Regla:** el bot monitorea el estado de habilitación; si vence, alerta al responsable humano. Nunca el bot paga aranceles ni sube documentos.

## 7. Categoría / Rubro / UNSPSC
- **Qué es:** clasificación del producto o servicio en el portal.
- **Campos clave:** código UNSPSC, nombre categoría, portal, vertical FLIR mapeada, score de afinidad histórico.
- **Sistema de verdad:** catálogo FLIR + portal origen.
- **Regla:** el bot usa el mapeo UNSPSC → vertical FLIR para filtrar oportunidades relevantes. Sin mapeo, no hay alerta.

## 8. Alerta / Notificación de oportunidad
- **Qué es:** señal que dispara el monitoreo de un portal.
- **Campos clave:** portal, ID licitación, timestamp, tipo (nueva/actualización/cierre), score, destinatario (vendedor asignado), canal de notificación (email/WhatsApp interno).
- **Sistema de verdad:** n8n (VPS chileno) → HubSpot.
- **Regla:** la alerta llega al vendedor en menos de dos horas. El bot no decide si ofertar; solo notifica con el score.

## 9. Documento de licitación
- **Qué es:** bases, anexos, preguntas y respuestas, actas de adjudicación.
- **Campos clave:** ID documento, tipo, URL, fecha, hash, portal origen, idioma.
- **Sistema de verdad:** portal origen (almacenamiento) → HubSpot (referencia).
- **Regla:** el bot descarga y resume el documento; nunca lo comparte fuera del VPS. Los documentos con datos sensibles van a la zona NO_IA_NUNCA.

## Regla general
Si un campo de un portal no está en este diccionario, el bot lo trata como sensible y lo deriva a humano. Las credenciales de acceso a cada portal viven en `00_NO_IA_NUNCA_COLVIN`, nunca en el repo.
