# Portales de licitación y compras — Colvin y Cía. Ltda.

Colvin y Cía. Ltda. · 7 de septiembre de 2026 · IA-SAFE · v1

## Propósito
Mapa de portales donde Colvin puede captar demanda de organismos públicos y mandantes privados en verticales FLIR (seguridad, minería, energía, industria, defensa, infraestructura). Sin secretos, sin credenciales, sin RUT de Colvin.

## Regla de oro
Primero monitorear. Después integrar. Nunca construir integración propia antes de tener volumen real de oportunidades en el portal.

## Capa 1 — Estado (obligatorio, gratis)
| Portal | Qué es | Por qué importa a Colvin | Cómo se usa | Prioridad
|---|---|---|---|---|
| Mercado Público (ChileCompra) | Plataforma oficial de compras del Estado. ~US$22 mil millones/año, +100.000 proveedores. | Hospitales, FF.AA., municipalidades, ministerios compran cámaras, OGI, seguridad y servicios. | Inscripción en ChileProveedores (obligatoria desde dic-2024). Monitoreo por API (api.mercadopublico.cl, datos abiertos OCDS). Alertas por rubro UNSPSC. | Alta — Etapa 1
| ChileCompra Express | Tienda electrónica de Convenios Marco. | Catálogo donde organismos compran sin licitar. | Adjudicación en Convenio Marco de equipos estandarizados. | Media — Etapa 2
| Compra Ágil | Compras ≤100 UTM, solo pymes. | Entrada rápida a organismos pequeños. | API Compra Ágil (Beta, 2026). | Media — Etapa 2

## Capa 2 — Minería e industria (mandantes privados)
| Portal | Qué es | Por qué importa a Colvin | Cómo se usa | Prioridad
|---|---|---|---|---|
| SICEP | Sistema de calificación de proveedores minero-industrial. | Codelco, BHP, Anglo American, Collahuasi, SQM exigen SICEP para ofertar. | Inscripción + auditoría de competencias. Mantener categoría A. | Alta — Etapa 1
| RedNegocios | Registro electrónico de proveedores (CCS). Gestiona registro de Codelco y otros mandantes. | Acceso a licitaciones de Codelco y mandantes mineros. | Inscripción + acreditación anual. Categorías industriales. | Alta — Etapa 1
| Artikos | Plataforma de compras y licitaciones de mandantes privados (CCS). | RFQ y licitaciones de grandes empresas. | Responder RFQ, subir ofertas, gestionar contratos. | Media — Etapa 2
| Senegocia | Marketplace y portal de proveedores (+25.000 proveedores). | Cotizaciones y licitaciones de minería, retail, salud, infraestructura. | Inscripción, responder cotizaciones, Senegocia Pay. | Media — Etapa 2
| Wherex | Plataforma de abastecimiento LATAM (+60.000 proveedores). | Licitaciones de minería, energía, salmonicultura, retail. | Registro gratis, alertas por categoría, ofertar. | Media — Etapa 2
| Unilink | Marketplace B2B MRO minería/energía. | Catálogo de materiales para mineras (Collahuasi, Sierra Gorda, ENAP, etc.). | Registro, catálogo MRO, responder RFQ. | Media — Etapa 2
| Achilles | Homologación y gestión de riesgo de cadena de suministro. | Certificación exigida por mandantes mineros para proveedores críticos. | Cuestionarios, auditorías, evidencias. | Baja — Etapa 3
| RyCE | Registro de proveedores (ENAMI y mandantes). | Acceso a procesos de ENAMI y contratistas. | Inscripción + evaluación de riesgos. | Baja — Etapa 3

## Capa 3 — Construcción e infraestructura
| Portal | Qué es | Por qué importa a Colvin | Cómo se usa | Prioridad
|---|---|---|---|---|
| iConstruye | Marketplace de construcción (+70% constructoras grandes). | Obras, seguridad perimetral, termografía de estructuras. | Registro, responder requerimientos, despachos. | Baja — Etapa 3

## Capa 4 — Herramientas de monitoreo (no son portales de oferta)
| Herramienta | Rol | Prioridad
|---|---|---|
| LicitaLAB / Pro Licitaciones / AlertasMP | Buscadores con alertas de licitaciones. | Alta — Etapa 1 (complemento de Mercado Público)
| Datos abiertos ChileCompra | Análisis de adjudicaciones históricas. | Media — Etapa 2

## Estrategia de integración (Frankie / n8n)
1. **Etapa 1 (0-90 días):** Inscripción en Mercado Público + SICEP + RedNegocios. Monitoreo manual + alertas por correo. Sin bot.
2. **Etapa 2 (3-9 meses):** Conector n8n que lee la API de Mercado Público (Compra Ágil + licitaciones) y genera alerta en HubSpot con scoring por vertical FLIR. El bot Atendedor puede informar al partner si hay oportunidad relevante.
3. **Etapa 3 (9-18 meses):** Conectores a SICEP, Artikos, Senegocia, Wherex, Unilink según volumen real. Cada conector es un flujo vertical propio.
4. **Etapa 4:** Achilles y RyCE solo si un mandante lo exige contractualmente.

## Lo que el bot NUNCA hace en portales de licitación
- No presenta ofertas automáticamente.
- No sube documentos firmados.
- No acepta términos ni garantías.
- Toda oferta es revisada y enviada por un humano.

## Regla
Un portal sin volumen real de oportunidades FLIR no se integra. Se monitorea. La integración es costo; el monitoreo es barato.
