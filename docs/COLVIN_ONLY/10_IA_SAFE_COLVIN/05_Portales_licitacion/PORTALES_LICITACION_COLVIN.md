# Portales de licitacion y compras — Colvin y Cia. Ltda.

Documento vivo. Estado: **integrable / automatizable / atendible por bot**.

## Principio

Colvin ya esta inscrito y operativo en los portales. El problema no es el acceso: es que hoy un vendedor entra manualmente, busca oportunidades y las transcribe a HubSpot. Eso se elimina.

El ecosistema debe:
1. **Detectar** oportunidades automaticamente (monitoreo + alertas).
2. **Clasificar** por vertical FLIR (termografia, OGI, seguridad, defensa, automatizacion, UAV).
3. **Generar lead** en HubSpot con UTM de origen = portal.
4. **Notificar** al vendedor asignado con resumen y link directo.
5. **Delegar** la presentacion de oferta a humano. El bot NUNCA presenta ni firma.

## Capas de integracion (de barato a caro)

| Capa | Que hace | Costo | Cuando
|---|---|---|---
| 1. Monitoreo + alerta | Scraping/API + notificacion | Bajo | Etapa 0 — ya
| 2. Lead automatico | Webhook a HubSpot | Medio | Etapa 1
| 3. Respuesta asistida | Bot redacta borrador de oferta | Medio | Etapa 2
| 4. Presentacion automatica | API del portal | Alto | Solo si el portal lo permite y hay volumen

Regla: **monitorear primero, integrar despues**. Un portal sin volumen real de oportunidades FLIR no se conecta por API. Se vigila.

## Portales prioritarios

### Prioridad 1 — Estado (obligatorio, API publica)

**Mercado Publico (ChileCompra)** — api.mercadopublico.cl
- Organismos: hospitales, FF.AA., Carabineros, municipalidades, ministerios, MOP.
- Compras de camaras termicas, OGI, seguridad perimetral, deteccion de gases.
- API REST con ticket (ClaveUnica) + datos abiertos OCDS sin ticket.
- Filtro UNSPSC: 39120000 (equipos de vigilancia), 46180000 (instrumentos de medicion).
- Volumen estimado Chile: ~US$22.000 millones/ano. FLIR tiene share real aqui.

**SICEP** — sicep.cl
- Registro de proveedores minero-industrial. Usado por Codelco, BHP, Anglo American, Collahuasi, SQM, Antofagasta Minerals.
- No tiene API publica documentada. Monitoreo por alerta de correo + scraping controlado.
- Calificacion por competencias: 7 areas auditadas.

**RedNegocios (CCS)** — rednegocios.cl
- Plataforma electronica de proveedores de Codelco. Gestiona MIPYMEs locales.
- Inscripcion anual con pago. Monitoreo de oportunidades por categoria.

### Prioridad 2 — Privados con API o integracion

**Artikos** — artikos.cl
- Modulo de licitaciones B2B. Gestiona RFQ, ofertas, adjudicacion.
- Usado por grandes empresas industriales. Posible integracion via API o export.

**Unilink** — unilinkcorp.com
- Marketplace MRO minero-energetico. +60.000 proveedores, +US$12 mil millones transados.
- Clientes: Collahuasi, Sierra Gorda, ENAP, Caserones.
- Integracion ERP (SAP/Oracle) disponible. Prioridad para vertical mineria.

**Wherex** — wherex.com
- Plataforma de licitaciones digitales sector privado. +60.000 proveedores LATAM.
- Enfocado en transparencia y compliance. API de consulta de procesos.

**iConstruye** — iconstruye.com
- Marketplace de construccion. +1.500 compradores, +70% constructoras grandes.
- Relevante para infraestructura, seguridad de obra, deteccion de incendios.

### Prioridad 3 — Solo si mandante lo exige

**Achilles**, **RyCE**, **SAP Ariba** — no se integran proactivamente. Se monitorean cuando un cliente las exige contractualmente.

## Flujo objetivo (Etapa 1)

```
Portal (Mercado Publico / SICEP / Unilink / ...)
    |
    v  [n8n: monitor + clasificador]
Oportunidad detectada (UNSPSC + keywords FLIR)
    |
    v  [n8n: crea Lead en HubSpot]
Lead con UTM=portal, vertical, monto estimado, fecha cierre
    |
    v  [n8n: notifica vendedor]
Vendedor recibe resumen + link + borrador de oferta (humano presenta)
    |
    v  [humano]
Oferta presentada en el portal
```

## Datos clave a capturar por oportunidad

- Codigo de licitacion / ID portal
- Organismo comprador
- Categoria UNSPSC
- Monto estimado
- Fecha de cierre
- Requerimientos tecnicos (extraidos)
- Vertical FLIR asignada
- Vendedor responsable

## Reglas duras

- El bot **detecta y notifica**. No presenta ofertas, no firma, no compromete precios de fabrica.
- Credenciales de portales van en `00_NO_IA_NUNCA_COLVIN`. Nunca en el repo.
- Cada portal integrado debe mover un KPI: oportunidades detectadas/mes, leads generados, tasa de presentacion, tasa de adjudicacion.
- Si un portal no genera al menos 2 oportunidades FLIR/mes en 90 dias, se apaga el monitoreo.

## Proximos pasos

1. Inventario de portales donde Colvin esta inscrito hoy (checklist).
2. Priorizar Mercado Publico (API) y Unilink (mineria) para Etapa 1.
3. Definir keywords y UNSPSC de FLIR para el clasificador.
4. Primer flujo: Mercado Publico -> HubSpot -> notificacion vendedor.
