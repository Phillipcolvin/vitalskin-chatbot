# Diccionario de datos — Colvin y Cía. Ltda.

Colvin y Cía. Ltda. · 7 de septiembre de 2026 · IA-SAFE · v1

Documento de referencia para bots y agentes. Define cada entidad del ecosistema con su nombre, propósito, campos clave, sistema de verdad y reglas de privacidad. Sin PII real, sin secretos.

## 1. Lead
- **Qué es:** prospecto que aún no compró. Entra por Google Ads, Meta, RRSS, mail de fábrica o web.
- **Campos clave:** nombre, teléfono (token), email, UTM/fuente, vertical, aplicación termográfica, ticket estimado, urgencia.
- **Sistema de verdad:** HubSpot.
- **Regla:** el bot identifica al lead por token de teléfono, nunca por RUT ni datos bancarios.

## 2. Contacto / Cliente
- **Qué es:** persona u organización con historial en Colvin.
- **Campos clave:** token de teléfono, email, vertical, activos instalados, certificaciones CEP, historial de compras y RMA.
- **Sistema de verdad:** HubSpot (comercial) + Shopify (perfil 360 unificado).
- **Regla:** el perfil 360 en Shopify consolida compras, servicio técnico y certificaciones bajo un solo usuario.

## 3. Partner / Reseller / Integrador
- **Qué es:** actor de la cadena de distribución B2B (distribuidor, integrador, instalador certificado).
- **Campos clave:** tipo de partner, territorio autorizado, nivel de acceso, comisiones, órdenes de compra.
- **Sistema de verdad:** HubSpot + portal B2B.
- **Regla:** el portal B2B permite cotizar, ver stock real y registrar órdenes sin llamar a nadie. El bot no promete descuentos ni precios de fábrica.

## 4. Activo / Serial
- **Qué es:** equipo FLIR físico con número de serie trazable.
- **Campos clave:** serial, modelo, cliente dueño, fecha de instalación, garantía, calibraciones, RMA, próxima renovación.
- **Sistema de verdad:** Shopify (perfil 360) + UpKeep (servicio) + Frankie (orquestación).
- **Regla:** cada serial es un nodo de recurrencia. El bot consulta estado por serial, nunca expone datos de otros clientes.

## 5. Pedido / Orden
- **Qué es:** orden de compra B2C o B2B.
- **Campos clave:** número de orden, items, stock, ETA, estado de pago, guía FedEx.
- **Sistema de verdad:** Shopify (B2C/B2B) → Bsale (factura) → FedEx (envío).
- **Regla:** el bot consulta estado, no mueve dinero ni envíos.

## 6. RMA / Caso de servicio
- **Qué es:** solicitud de reparación, calibración o reemplazo.
- **Campos clave:** case ID, serial, severidad, diagnóstico, estado, técnico asignado, SLA.
- **Sistema de verdad:** UpKeep (hoy) → Frankie (objetivo).
- **Regla:** el bot acusa y tria por severidad; el diagnóstico técnico es humano.

## 7. Certificación CEP
- **Qué es:** curso, asistencia y certificado de capacitación Colvin CEP.
- **Campos clave:** curso, fecha, asistente, certificado, vigencia, competencia.
- **Sistema de verdad:** Colvin CEP.
- **Regla:** el bot informa cursos y agenda; no emite certificados.

## 8. Token de identidad
- **Qué es:** identificador anónimo del cliente en el chat. Sustituye al teléfono real para el bot.
- **Campos clave:** token, canal, última interacción.
- **Sistema de verdad:** n8n (VPS chileno) + PostgreSQL local.
- **Regla:** Meta solo ve el mensaje en tránsito. El dato sensible nunca cruza el VPS.

## 9. Evento / Señal
- **Qué es:** cualquier interacción que alimenta el scoring (clic, mensaje, descarga, compra).
- **Campos clave:** tipo, fuente, timestamp, score delta.
- **Sistema de verdad:** HubSpot + n8n.
- **Regla:** cada señal mejora el scoring; ninguna señal se exporta a brokers.

## Regla general
Si un campo no está en este diccionario, el bot lo trata como sensible y lo deriva a humano.
