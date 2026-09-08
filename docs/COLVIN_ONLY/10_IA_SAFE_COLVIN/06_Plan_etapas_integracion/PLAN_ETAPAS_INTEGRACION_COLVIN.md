# Plan de etapas de integracion — Colvin y Cia. Ltda.

Documento vivo. Cada etapa tiene: objetivo, entregable, KPI de exito, dueño humano, criterio de rollback y criterio de apagado.
Principio: rapido primero, profesional despues. No se avanza de etapa sin cumplir el KPI.

## Etapa 0 — Fundaciones (semana 1)
Objetivo: verdad unica y sandbox.
Entregables:
- Auditoria AS-IS read-only (BASE-001): despliegue real, secretos rotados, fuentes de verdad.
- Sandbox n8n self-hosted en VPS chileno con PostgreSQL local.
- Diccionario de datos v1.1 y contratos de interfaz por plataforma.
KPI: cero secretos en repo, un solo entorno de pruebas funcional.
Dueño humano: TI / Plataforma.
Rollback: apagar sandbox, no toca produccion.
Apagado: si no hay sandbox estable en 7 dias, se congela todo lo demas.

## Etapa 1 — Flujo vertical 1: Mercado Publico a HubSpot (semanas 2-3)
Objetivo: primer lead de licitacion llega solo.
Entregables:
- Conector API Mercado Publico (ticket ClaveUnica) en n8n.
- Clasificador UNSPSC a vertical FLIR.
- Creacion de lead en HubSpot con UTM y scoring.
- Notificacion al vendedor en menos de 2 horas.
KPI: primer lead real clasificado en menos de 2 horas; 2 oportunidades FLIR en 30 dias.
Dueño humano: Comercial / Ventas.
Rollback: desactivar workflow n8n, leads manuales como antes.
Apagado: si no genera 2 oportunidades en 30 dias, se pausa el portal.

## Etapa 2 — Flujo vertical 2: lead a oportunidad a entrega (semanas 4-6)
Objetivo: del lead a la orden sin friccion.
Entregables:
- HubSpot Deal a Shopify (B2C o B2B portal).
- Cotizacion, stock y ETA visibles.
- Shipit / Chilexpress segun regla de producto-orden-cliente.
- Bsale factura, Mercado Pago o Santander cobran.
KPI: tiempo de primera respuesta menor a 3 segundos; MQL-to-SQL medible.
Dueño humano: Comercial.
Rollback: volver a proceso manual de cotizacion.
Apagado: si el checkout se rompe, se revierte a Shopify nativo.

## Etapa 3 — Servicio y ciclo de vida (semanas 7-9)
Objetivo: el activo instalado genera recurrencia.
Entregables:
- UpKeep tickets y RMA integrados a Frankie.
- Perfil 360 en Shopify: compras + RMA + certificaciones CEP.
- Colvin CEP: cursos y certificaciones ligados al serial.
KPI: tasa de renovacion y NPS; tiempo de resolucion RMA.
Dueño humano: Servicio Tecnico.
Rollback: UpKeep standalone como antes.
Apagado: si el RMA no cierra en el SLA, se desacopla.

## Etapa 4 — Portales adicionales y B2B partners (semanas 10-14)
Objetivo: cobertura nacional de licitaciones y red de partners.
Entregables:
- Unilink, SICEP, RedNegocios, Artikos, Senegocia, Wherex en monitoreo por alerta.
- Portal B2B partners: stock, cotizacion, ordenes de compra, territorio.
- iConstruye solo si hay vertical de infraestructura.
KPI: 2 oportunidades por portal activo al mes; partners con al menos 1 orden.
Dueño humano: Comercial / Partners.
Rollback: monitoreo manual, sin integracion.
Apagado: portal sin 2 oportunidades en 90 dias se apaga.

## Etapa 5 — Profesionalismo y gobernanza (semanas 15-24)
Objetivo: independencia digital y seguridad de datos.
Entregables:
- Contratos de interfaz versionados y auditados.
- Plan de rollback probado por integracion.
- Backups y DR en VPS chileno, retencion 30 dias.
- Separacion de tenants: Colvin limpio, sin codigo ajeno.
- Evaluacion de migracion a infraestructura propia (sin SaaS extranjero para datos de conversacion).
KPI: auditoria sin hallazgos criticos; 100% de datos de conversacion en VPS local.
Dueño humano: Sponsor Ejecutivo (Phillip Colvin) + TI.
Rollback: version anterior del contrato de interfaz.
Apagado: si una integracion no tiene rollback probado, no se despliega.

## Regla de avance
Ninguna etapa se inicia sin: contrato de datos firmado, KPI definido, dueño humano asignado y plan de rollback escrito.
