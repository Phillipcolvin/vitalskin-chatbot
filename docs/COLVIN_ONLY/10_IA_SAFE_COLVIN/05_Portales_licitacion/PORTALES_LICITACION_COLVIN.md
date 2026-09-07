# Portales de licitación — Colvin y Cía. Ltda.

Documento vivo. Representante oficial Teledyne FLIR en Chile.
Colvin ya está inscrito en todos los portales. El objetivo: dejarlos integrables, automatizables y atendibles por el bot para detectar oportunidades sin búsqueda manual.

## Principio rector

**Monitorear primero, integrar después.** Un portal sin volumen real de oportunidades FLIR no se conecta por API: se vigila con alertas. La integración es costo; el monitoreo es barato.

Regla de apagado: un portal que no genere al menos dos oportunidades FLIR al mes en noventa días se apaga.

El bot detecta, clasifica y notifica. **Nunca presenta ni firma ofertas.** Eso es humano, siempre.

## Flujo estándar (todos los portales)

1. **Detección:** scraper/API/alerta del portal → n8n.
2. **Clasificación:** filtro por vertical FLIR (termografía, OGI, seguridad, defensa, automatización, UAV) y código UNSPSC.
3. **Enriquecimiento:** monto estimado, fecha de cierre, organismo comprador, vertical.
4. **Lead en HubSpot:** contacto del organismo + deal con origen = portal.
5. **Notificación:** vendedor asignado recibe resumen + link + deadline.
6. **Humano presenta** la oferta en el portal. El bot solo hace seguimiento de estado.

## Capa 1 — Integración prioritaria (API o monitoreo activo)

### Mercado Público (ChileCompra)
- **Quién compra:** Estado, hospitales, FF.AA., Carabineros, municipalidades, ministerios.
- **Por qué importa a Colvin:** el canal obligatorio del Estado (~US$22 mil millones/año). Cámaras térmicas, OGI, seguridad y defensa se compran por aquí.
- **API:** pública y documentada. Ticket vía ClaveÚnica. Endpoints: `/licitaciones.json` (por fecha, código, estado), datos abiertos OCDS en `datos-abiertos.chilecompra.cl`. Actualización en tiempo real.
- **Integración:** n8n consulta diaria por palabras clave FLIR + UNSPSC (cámaras térmicas, detectores de gas, sistemas de seguridad). Crea lead automático.
- **Prioridad:** Etapa 1, semana 1.

### Unilink (MRO Dealer / Cat4MRO)
- **Quién compra:** minería y energía — Collahuasi, Codelco, ENAP, Caserones, Sierra Gorda, Mantos Blancos, Lomas Bayas, Alto Norte, Sigdo Koppers, CMP, El Pachón.
- **Por qué importa:** marketplace B2B MRO más grande de LATAM para minería-energía. Módulo MRO Dealer concentra RFQs de múltiples compradores. 83% de cotizaciones adjudicadas a proveedores sugeridos por algoritmo.
- **API:** no pública documentada. Integración vía portal de proveedor + alertas por correo/RSS. Catálogo estandarizado MRO.
- **Integración:** monitoreo de RFQs entrantes + alerta inmediata al vendedor de vertical minería.
- **Prioridad:** Etapa 1, semana 2.

### SICEP
- **Quién compra:** principales mineras e industrias — Codelco, BHP, Anglo American, SQM, Glencore.
- **Por qué importa:** registro calificado de proveedores mineros. Siete competencias auditadas. Sin SICEP, Colvin no existe para el 32% de su margen (Defensa y Minería).
- **API:** no pública. Monitoreo por alerta de cotizaciones y encuentros de negocios.
- **Integración:** alerta de nuevas cotizaciones + recordatorio de actualización anual de antecedentes.
- **Prioridad:** Etapa 1, semana 3.

### RedNegocios (CCS)
- **Quién compra:** Codelco (registro de proveedores administrado por Cámara de Comercio de Santiago) y red de +8.000 proveedores.
- **Por qué importa:** llave de entrada a cotizaciones electrónicas de Codelco vía Quadrem/QMarket.
- **API:** no pública. Alianza reciente con Artikos integra módulos de abastecimiento.
- **Integración:** monitoreo de cotizaciones Codelco + alerta de renovación anual.
- **Prioridad:** Etapa 1, semana 3.

### Artikos (CCS)
- **Quién compra:** grandes empresas chilenas con SRM propio — compras, licitaciones, contratos, facturación.
- **Por qué importa:** 25 años de trayectoria, filial de CCS. Módulo de licitaciones con alta carga documental y preguntas/respuestas.
- **API:** no pública. Portal de proveedores con cotizaciones y adjudicaciones.
- **Integración:** alerta de licitaciones y RFQs en categorías FLIR.
- **Prioridad:** Etapa 2.

### Wherex
- **Quién compra:** +200 empresas en LATAM, +70.000 proveedores, +900 categorías. IA para matching de proveedores.
- **Por qué importa:** plataforma de compras mejor evaluada en LATAM. Automatiza licitaciones y conciliación de facturas.
- **API:** no pública documentada. Matching por IA del propio portal.
- **Integración:** monitoreo de procesos de compra relevantes + alerta.
- **Prioridad:** Etapa 2.

### iConstruye
- **Quién compra:** +1.500 empresas compradoras de construcción, 70% de las constructoras más grandes del país.
- **Por qué importa:** seguridad perimetral, detección de fuego y termografía en obras e infraestructura.
- **API:** no pública. Marketplace con cotizaciones y órdenes de compra.
- **Integración:** alerta de requerimientos de materiales y servicios de seguridad/termografía.
- **Prioridad:** Etapa 2.

### Senegocia
- **Quién compra:** +160 empresas compradoras, +25.000 proveedores, certificación ISO 27001. Sectores: minería, consumer, alimentos, retail, salud, infraestructura, industrial.
- **Por qué importa:** cobertura transversal; oportunidades diarias por categoría.
- **API:** no pública. Portal de proveedores con notificaciones.
- **Integración:** alerta de licitaciones privadas en categorías FLIR.
- **Prioridad:** Etapa 2.

## Capa 2 — Solo si un mandante lo exige contractualmente

### Achilles
- Certificación global de cadena de suministro. Alianza con Sutmin para minería en Chile y LATAM. Se activa solo cuando un comprador (p. ej. minera internacional) lo exige. No se integra proactivamente.

### RyCE
- Registro nacional de proveedores y contratistas con análisis financiero, legal y laboral. Se activa por exigencia de mandante. No genera flujo automático.

### SAP Ariba
- Plataforma corporativa de grandes empresas. Se activa solo si un cliente específico la usa como canal de compra. No es prioridad de monitoreo.

## Credenciales y accesos

Van en la zona `00_NO_IA_NUNCA_COLVIN` del Drive. Nunca en el repo. GitHub indexa todo y lo vende a brokers de datos.

## KPI del módulo

- Oportunidades FLIR detectadas / mes (meta: ≥2 por portal activo).
- Tiempo desde publicación hasta notificación al vendedor (meta: <2 horas).
- Tasa de conversión lead licitación → propuesta presentada.
- Tasa de adjudicación sobre propuestas presentadas.
