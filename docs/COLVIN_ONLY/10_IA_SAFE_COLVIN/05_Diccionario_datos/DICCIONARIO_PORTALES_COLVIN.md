# Diccionario de datos — Portales de licitación — Colvin y Cía. Ltda.

Colvin y Cía. Ltda. · 7 de septiembre de 2026 · IA-SAFE · v1.1

Documento de referencia para bots y agentes. Define cada entidad de los portales de licitación con su nombre, propósito, campos clave, sistema de verdad y reglas de privacidad. Sin PII real, sin secretos, sin credenciales.

## 1. Licitación / Oportunidad
- **Qué es:** proceso de compra publicado en un portal donde Colvin puede ofertar equipos FLIR, servicios técnicos o capacitación.
- **Campos clave:** ID portal, portal origen, título, descripción, comprador, RUT comprador (dato público del mandante), región, fecha publicación, fecha cierre, tipo (pública/privada), estado, monto estimado, moneda, modalidad de pago, UNSPSC, vertical FLIR, score de afinidad, URL bases, documentos adjuntos.
- **Sistema de verdad:** portal origen (Mercado Público, Unilink, SICEP, etc.) → HubSpot (lead/oportunidad).
- **Regla:** el bot detecta y clasifica; nunca presenta oferta ni firma. Si el UNSPSC no mapea a una vertical FLIR, se descarta automáticamente.

## 2. Comprador / Mandante
- **Qué es:** organismo o empresa que publica la licitación.
- **Campos clave:** RUT (dato público, espejo de Licitación), razón social, tipo (Estado/minera/constructora/retail/salud), región, vertical dominante, historial de compras FLIR.
- **Sistema de verdad:** portal origen → HubSpot (empresa).
- **Regla:** el RUT del comprador es dato público de licitación y vive en la entidad Licitación. Los datos de contacto del mandante (nombre, cargo, correo, teléfono) son sensibles: el bot los detecta pero nunca los almacena ni los usa; los deriva a humano para contacto directo. Nunca datos bancarios.

## 3. Ítem / Línea de licitación
- **Qué es:** producto o servicio específico solicitado dentro de una licitación.
- **Campos clave:** correlativo, código producto, nombre, descripción, UNSPSC, cantidad, unidad de medida, especificación técnica, modelo FLIR candidato (no serial — el serial se asigna solo tras adjudicación), precio unitario estimado.
- **Sistema de verdad:** portal origen → HubSpot (línea de oportunidad).
- **Regla:** el bot mapea el ítem a un modelo FLIR del catálogo usando la especificación técnica; si no hay match, deriva a humano. Nunca inventa ni busca seriales en una licitación — el serial no existe hasta que Colvin gana y despacha.

## 3b. Pregunta al portal (NUEVO)
- **Qué es:** consulta técnica o aclaratoria que Colvin envía al mandante antes del cierre de la licitación, a través del canal de preguntas del portal (Mercado Público, Artikos, etc.).
- **Campos clave:** ID pregunta, ID licitación, portal, fecha envío, texto de la pregunta (redactado por el bot, revisado por humano), fecha respuesta, respuesta del mandante, estado (borrador/enviada/respondida), responsable humano.
- **Sistema de verdad:** portal origen (envío) → HubSpot (registro de la pregunta y su respuesta).
- **Regla:** el bot redacta la pregunta técnica a partir de la especificación del ítem y la envía al vendedor para aprobación. El humano aprueba y envía. El bot nunca envía preguntas sin visto bueno humano. Las respuestas del mandante se indexan en la base de conocimiento para futuras licitaciones similares.

## 4. Oferta / Propuesta
- **Qué es:** respuesta de Colvin a una licitación (técnica y económica).
- **Campos clave:** ID oferta, ID licitación, fecha envío, estado (borrador/enviada/adjudicada/rechazada), monto ofertado, documentos técnicos, garantía ofrecida, plazo de entrega, responsable humano.
- **Sistema de verdad:** HubSpot (oportunidad) + portal origen (presentación).
- **Regla:** el bot prepara el borrador; el humano revisa, ajusta y envía. Nunca el bot envía la oferta.

## 5. Adjudicación
- **Qué es:** resultado de la licitación.
- **Campos clave:** ID licitación, ganador, monto adjudicado, fecha, motivo (si se conoce), seriales FLIR comprometidos (asignados post-adjudicación), fecha de entrega comprometida.
- **Sistema de verdad:** portal origen → HubSpot (closed won/lost) → Bsale (factura si gana).
- **Regla:** el bot registra el resultado y notifica al vendedor; no celebra ni reclama. Los seriales comprometidos se generan recién en esta etapa y se vinculan al Activo/Serial del diccionario general.

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

## Changelog v1 → v1.1
- Unificado: RUT del comprador es dato público y vive solo en Licitación; contactos del mandante son sensibles y se derivan a humano.
- Nuevo: entidad 3b Pregunta al portal — el bot redacta, el humano aprueba y envía.
- Corregido: ítem usa "modelo FLIR candidato", no serial. El serial se asigna recién tras adjudicación (entidad 5).