# Política Marco del Ecosistema Digital Colvin

**Versión:** 0.1 — borrador de trabajo  
**Estado:** EN DEFINICIÓN  
**Autoridad:** Dirección Colvin y Cía. Ltda.  
**Vigencia:** desde su aprobación formal  
**Supersede:** borradores previos de Drive A y Drive B que contradigan este documento  

---

## 1. Propósito

Establecer la política única que gobierna el diseño, desarrollo, integración y operación del ecosistema digital integrado de Colvin. Este documento es la **fuente canónica de verdad** para toda decisión de arquitectura, permisos, contratos y automatización. Todo anexo, blueprint o ticket de desarrollo debe citarlo; nada puede contradecirlo.

## 2. Principios rectores

1. **Un solo cerebro, muchos canales.** Frankie es el orquestador. Shopify, HubSpot, FLBR, Bsale y RMA son fuentes de verdad por dominio, no competidores.
2. **Automatizar lo rutinario, reservar lo crítico.** El sistema maximiza automatización en registro, scoring, matching y evidencia. Las decisiones de cierre, autorización de partners y arbitraje de conflictos las toma un humano experto.
3. **Evidencia antes de automatizar.** No se construye software sobre hipótesis cuando la evidencia es obtenible. Cada feature exige un caso real validado.
4. **Soberanía de datos.** Los datos sensibles viven bajo gobernanza controlada por Colvin, con trazabilidad de accesos y consentimiento granular del partner.
5. **Precedentes vinculantes.** Cada decisión humana documentada alimenta el aprendizaje del sistema y reduce intervención futura.
6. **Élite selectiva, no volumen.** Partners son líderes o expertos por zona y nicho. La calidad del aliado prima sobre la cantidad.
7. **No canibalismo.** La competencia entre partners es sana y cooperativa: se premia el trabajo, no solo el cierre.

## 3. Actores del ecosistema

| Actor | Rol | Puerta de entrada |
|---|---|---|
| Cliente final | Compra directa, cursos, servicio | E-commerce, WA, vendedor |
| Partner comercial | Vende por volumen o proyecto en su zona/nicho | Portal B2B / Partner |
| Integrador certificado | Integra y certifica instalación | Portal técnico |
| Instalador | Ejecuta obra con permisos de sitio | Asignación del sistema |
| Vendedor interno | Cierra y aprueba | HubSpot + Frankie |
| Experto FLIR / Colvin | Apoya proyectos complejos | Escalamiento |
| Cliente institucional (defensa) | Fuerzas armadas, policía, proyectos clasificados | Portal Defensa |

Cada actor tiene un **perfil** con capacidades, permisos, evidencia y score. El sistema no pregunta "¿qué producto quieres?" sino "¿quién eres y qué te corresponde?".

## 4. Verticales comerciales

Se adoptan las verticales identificadas en la página web de fábrica (Teledyne FLIR), integradas al ecosistema con sus reglas propias:

- Portable Inspection, Continuous Monitoring, Security, Test & Measurement, OGI, ITS, First Responders, Research & Science.
- **Defense**, incluyendo Unmanned, ISR-T, Integrated Solutions, Detection, Lasers & Optics, Missions.
- **Capacitación** y **Servicio Técnico** como verticales transversales a todas las anteriores.

Cada vertical define: elegibilidad de partners, filtros de certificación, formato de evidencia, y criterios de arbitraje. Las verticales transversales (capacitación, servicio) cruzan dominios sin duplicar reglas.

## 5. Reglas de embudo y competencia

- **Volumen/retail:** el cliente elige canal (e-commerce o tienda física del partner). Sin embudo formal.
- **Proyecto/especializado:** embudo formal. El partner que registra primero por RUT + división + producto obtiene prioridad. Un segundo partner puede competir si el equipo de ventas lo autoriza.
- **Criterios de prioridad:** antigüedad del registro, demostrativos en terreno, desarrollo del proyecto, calidad de la evidencia.
- **Comisión compartida:** posible para quien no cerró pero demostró gestión. Se evalúa caso a caso.
- **Decisiones de arbitraje:** equipo de ventas revisa duplicados. Un encargado de holding interviene en conflictos cercanos al cierre. Toda decisión queda como precedente vinculante.
- **Apelación:** un rechazo no es definitivo. El partner puede corregir, ajustar contrato o certificaciones y re-solicitar.

## 6. Motor de orquestación

El sistema recomienda equipos de actores para cada oportunidad según el patrón: cliente crítico + producto técnico + instalación certificada + partner comercial. El humano aprueba o ajusta. La decisión queda como precedente.

## 7. Evidencia y expedientes

Cada gestión del partner (demo, cotización, gestión de venta) se registra con formato estándar por vertical: fecha, tipo, cliente presente, producto, resultado. El expediente es inmutable, timestamped y vinculante. Sirve para scoring, arbitraje y aprendizaje del sistema.

## 8. Frontera IA

- **Observe → Recommend → Draft → Execute.** El agente observa, recomienda y redacta. La ejecución directa está prohibida en decisiones críticas.
- Solo lee material en `IA_SAFE`. Nunca accede a `NO_IA_NUNCA`.
- Handoff humano obligatorio para garantía, descuento, plazo, autorización de partner.

## 9. Soberanía de datos y cumplimiento

- Cumplimiento Ley 21.719. Responsable del tratamiento: Colvin como empresa, con DPO designado.
- Consentimiento granular y explícito del partner.
- Cláusula de **responsabilidad de notificación**: todo actor con acceso al portal debe notificar cambios de personal, cargo o empleador. Si no notifica y hay acceso indebido, la responsabilidad es del actor, no de Colvin.
- Prohibido scraping de perfiles externos (LinkedIn u otros) para detectar cambios de empleo.
- Datos sensibles en infraestructura controlada por Colvin, con trazabilidad de accesos.

## 10. Decisiones diferidas

Las siguientes se definen con datos y evidencia, no como reglas fijas:

- Exclusividad por cuenta, nicho o territorio.
- Formato exacto de evidencia por vertical.
- Caducidad vs revocación por evento de vínculos persona-equipo.
- Umbrales de score para upgrades automáticos de partner.
- Detalle de comisión compartida por vertical.

## 11. Relación con los Drives

- **Drive A (banco documental):** esta Política Marco y sus anexos canónicos.
- **Drive B (workspace de ejecución):** evidencia, tickets, outputs de IA, piloto WhatsApp. Cero copias de canónicos.
- Regla: si responde "qué es verdad / qué está decidido" → Drive A. Si responde "qué hicimos esta semana" → Drive B.

---

*Fin del borrador v0.1. Pendiente: anexos A–E y aprobación formal.*