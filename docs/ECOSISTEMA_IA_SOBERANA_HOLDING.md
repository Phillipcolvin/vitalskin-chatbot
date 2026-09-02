# Ecosistema Digital de IA Soberana — Holding y Compañía

**Documento maestro integrado**  
Versión: 1.0  
Fecha: 2026-09-02  
Clasificación: Interno — Protección de datos y ciberseguridad  
Marco legal: Ley 21.719 (entrada en vigor 1 de diciembre de 2026; existe proyecto de aplazamiento a 2027, pero se planifica contra la fecha vigente)

---

## 1. Resumen ejecutivo

Este documento modela el ecosistema digital completo de la holding y sus compañías: desde el cliente final hasta la fábrica, la logística, los pagos, el CRM, las bodegas, los portales públicos y el servicio técnico. El objetivo es diseñar un sistema de IA que **busque, piense, razone y actúe** dentro de un perímetro controlado, con protección de datos sensibles y ciberseguridad de extremo a extremo.

Principio rector: **separar la carga**. La nube solo procesa lo no sensible. Todo lo que no puede salir de la red corre en infraestructura propia, preferentemente air-gapped. El agente de IA es un analista con acceso de lectura total y ejecución acotada: propone, un humano aprueba en lo crítico.

---

## 2. Configuración actual (Cloud Code) y problemáticas

### 2.1 Estado actual
- Integración de herramientas con Cloud Code: lectura de documentos, almacenamiento, dashboard, conciliación bancaria, leyes de comisiones para vendedores, cuentas por cobrar, facturas, guías de despacho.
- Repositorio público `vitalskin-chatbot` (Phillipcolvin/vitalskin-chatbot): contiene API key de Google Vision hardcodeada en texto plano y envía imágenes de piel de clientes a servidores externos sin consentimiento explícito.
- La lógica de negocio sensible vive en un servicio de terceros que puede auditar, retener o filtrar datos.

### 2.2 Problemáticas
1. **Egreso de datos**: cada prompt y documento sale a un datacenter no auditado.
2. **Retención y entrenamiento**: los proveedores pueden retener datos hasta 30 días (o 5 años según política) y usarlos para entrenar modelos.
3. **ZDR no por defecto**: Zero Data Retention no viene activado; requiere contrato enterprise.
4. **Caché local en texto plano**: datos sensibles quedan en disco sin cifrar.
5. **Privilegio del agente**: el agente tiene acceso amplio sin scope estricto.
6. **Falta de gobernanza**: sin versionado de prompts, sin kill switch, sin reporte de incidentes en 72 h.
7. **Lock-in**: la lógica de negocio queda atrapada en el proveedor.
8. **Transferencia internacional**: datos cruzan fronteras sin base legal clara bajo Ley 21.719.
9. **Shadow AI**: equipos usan herramientas no aprobadas.
10. **Superficie de ataque**: cada conector es una puerta potencial.

---

## 3. Actores del ecosistema (mapa completo)

### 3.1 Clientes y mercado
- Cliente final (B2C / B2B)
- Instalador certificado
- Técnico de servicio
- Termógrafo certificado
- Distribuidor
- Comprador público

### 3.2 Canales de interacción
- WhatsApp (Cloud API oficial y gateways self-hosted)
- Web chat
- Email
- Instagram / redes sociales
- Voz
- Portales de venta pública: Ariva, Árticos, Mercado Público (ChileCompra)

### 3.3 Sistemas internos
- **RMA** (servicio técnico): tickets, garantías, devoluciones, historial de equipos
- **Centro de entrenamiento**: cursos, asistencia, certificados, vigencia, recertificación
- **Certificaciones**: termógrafo, instalador, asistencia a capacitaciones
- **Bodegas / WMS**: stock, ubicaciones, barcode, picking, packing
- **Stock en tránsito**
- **Cuentas por pagar / por cobrar**
- **Conciliación bancaria**
- **Dashboard** (leyes de comisiones, facturas, guías)
- **HubSpot** (CRM: contactos, deals, score, trazabilidad)
- **Repositorio de código** (GitHub)

### 3.4 Proveedores y logística
- Fábrica (confirmaciones, fechas estimadas, invoices)
- FedEx (tracking, labels, POD)
- Mercado Pago (pagos, settlements, comisiones)
- Banco Santander (extractos, transferencias)
- Otros bancos / open banking (Floid u agregadores)

### 3.5 Capa de seguridad
- Vault de secretos (Infisical / HashiCorp Vault self-hosted)
- DLP (Data Loss Prevention)
- WAF + reverse proxy
- Logs append-only firmados
- Sandbox de ejecución (microVM)
- Segmentación de red

---

## 4. Flujos a modelar (principio a fin)

### 4.1 Atención y servicio
1. Cliente reporta falla por WhatsApp/portal → gateway → orquestador → IA local → clasifica severidad → consulta RMA → propone diagnóstico → abre/actualiza ticket → escala a técnico certificado si hay riesgo.
2. Instalador consulta vigencia de certificado de termógrafo → IA verifica en base local → responde estado, fecha de vencimiento, ruta de recertificación (sin exponer datos de terceros).
3. Escalamiento humano: contexto mínimo, historial completo queda en logs locales.

### 4.2 Marketing y leads
4. Campaña → leads → scoring → HubSpot → recomendación de acción comercial.
5. Búsqueda en portales públicos (Ariva, Árticos, Mercado Público) → resumen de opciones → lead/cotización en HubSpot con fuente trazable.

### 4.3 Pagos y finanzas
6. Pago entrante (Mercado Pago / Santander) → concilia automáticamente → matching con factura/deal → registro en contabilidad.
7. Diferencias y alertas de fraude → escalamiento a humano.
8. Invoice de fábrica → OCR/RAG → cotejo de tres vías (pedido + albarán + factura) → cuentas por pagar → registro de pago → cierre.

### 4.4 Supply chain y fábrica
9. Orden de compra (generada por humano) → fábrica → confirmación → stock en tránsito → invoice → cuentas por pagar → pago → cierre.
10. FedEx tracking → actualiza estado de envío → notifica cliente → actualiza bodega.

### 4.5 Decisiones asistidas
11. El agente cruza RMA + stock + campañas + pagos + fábrica → entrega informe con evidencia, no una orden ciega.
12. Recomendaciones de inversión en marketing por canal, basadas en atribución y score.

### 4.6 Documentos y correo
13. Correo/portal → documento → OCR/RAG → acción propuesta → aprobación humana si supera umbral.
14. Almacenamiento local cifrado, trazabilidad, vencimientos.

---

## 5. Capacidades del agente seguro y escalable

- **Búsqueda**: RAG local sobre RMA, certificados, catálogo, portales, políticas internas.
- **Pensamiento**: cadena de razonamiento acotada, temperatura baja en tareas críticas, validación de salida antes de ejecutar.
- **Herramientas tipadas**: conectores hacia RMA, HubSpot, base de certificados, portales, gateway de mensajería, FedEx, Mercado Pago, Santander.
- **Permisos y scope**: cada herramienta exige permiso, scope y justificación.
- **DLP**: bloquea secretos, RUT, correos, datos de clientes antes de cualquier salida.
- **Sandbox**: ejecución de código no confiable en microVM aislada.
- **Escalabilidad**: colas, workers, caché de respuestas frecuentes, modelos pequeños para tareas simples y grandes solo para casos complejos.
- **Gobernanza**: versionado de prompts, evaluación continua, kill switch por herramienta, reporte de incidentes < 72 h (Ley 21.719).

---

## 6. Matriz de riesgos

| # | Riesgo | Impacto | Probabilidad | Mitigación |
|---|--------|--------|--------------|------------|
| 1 | Egreso de datos sensibles a Cloud Code | Alto | Alta | Stack local, air-gap parcial |
| 2 | Secretos hardcodeados (ej. Google Vision key) | Crítico | Media | Vault, rotación, nunca en repo |
| 3 | Filtración vía dashboard/MCP | Alto | Media | Scope estricto, DLP |
| 4 | Retención y entrenamiento por proveedor | Alto | Alta | ZDR contractual o eliminación del proveedor |
| 5 | Prompt injection vía mensajes de clientes | Alto | Media | Sanitización, aislamiento de contexto |
| 6 | RAG poisoning (documentos maliciosos) | Alto | Baja-Media | Validación de fuentes, hash de documentos |
| 7 | Acción no autorizada del agente (escribir en HubSpot, abrir RMA) | Crítico | Media | Sandbox, lista blanca, aprobación humana |
| 8 | Error de matching en conciliación bancaria | Crítico | Media | Doble control, reglas duras |
| 9 | Alucinación en orden de compra a fábrica | Crítico | Baja | Generación humana, IA solo prepara borrador |
| 10 | Transferencia internacional sin base legal | Alto | Alta | Residencia de datos local |
| 11 | Ban de número WhatsApp (gateway no oficial) | Medio | Media | Cloud API oficial o números secundarios |
| 12 | Credenciales en logs de portales públicos | Alto | Media | Read-only, rotación, mTLS |
| 13 | Falsificación de certificados | Alto | Baja | Verificación criptográfica, base local |
| 14 | Perfilado de clientes (marketing) | Alto | Media | Consentimiento, minimización de datos |
| 15 | Superficie de ataque por cada conector | Alto | Media | Segmentación, WAF, least privilege |

---

## 7. Alternativas técnicas (stack local)

### 7.1 Inferencia
- **Ollama**: punto de entrada, fácil, API compatible con OpenAI en localhost. Ideal para piloto.
- **vLLM**: producción, throughput alto, continuous batching, soporte multi-GPU. Estándar de facto.
- **LM Studio**: interfaz gráfica, Windows/Mac, menos potente.

Modelos recomendados: Qwen 3 / Qwen3-Coder 32B, Mistral Small 3.1, Llama 70B, Granite. Para código: Qwen3-Coder 30B-32B.

### 7.2 RAG y documentos
- **AnythingLLM** self-hosted: multi-fuente, UI pulida, citations. Mejor para equipos.
- **PrivateGPT**: air-gap estricto, offline-only, API-first. Mejor para máxima paranoia.
- **Open WebUI**: ergonomía multi-usuario.

Base vectorial: Qdrant o ChromaDB self-hosted.

### 7.3 Orquestación
- **n8n** self-hosted: catálogo profundo, LangChain nodes, comunidad grande. Requiere Enterprise para HA multi-main y secrets externos.
- **Activepieces** self-hosted: licencia MIT, más simple, workers stateless.

Ambos deben correr en red propia, nunca en cloud.

### 7.4 Gateway de mensajería
- **Evolution API** o **WAHA** self-hosted (Baileys-based): control total, pero riesgo de ban del número. Solo pruebas o números secundarios.
- **WhatsApp Cloud API oficial** con región de datos controlada: modo "No Storage" (1 h) o ZDR contractual.
- **Chatwoot / Synaplan** self-hosted como inbox unificado.

### 7.5 Agentes con herramientas
- **LangGraph** o orquestador propio con herramientas tipadas, permisos y auditoría.
- Sandbox: microVM (LangSmith Sandboxes, Firecracker, gVisor) para código no confiable.
- Secrets fuera del sandbox: inyectados por proxy de autorización.

### 7.6 Secretos y seguridad
- **Infisical** (amigable, E2E) o **HashiCorp Vault** (enterprise, dynamic secrets, PKI).
- DLP self-hosted o reglas en el orquestador.
- WAF (Cloudflare self-hosted / Traefik + reglas) + reverse proxy.
- Logs append-only (WORM) firmados con hash y timestamp local.

### 7.7 Desarrollo de código
- **Cline** o **Aider** apuntando a Ollama/vLLM local. Reemplazo directo de Cloud Code para producción.
- Nunca versionar secretos; usar vault + variables de entorno no versionadas.

### 7.8 CRM y portales
- **HubSpot**: solo API privada (Service Keys, no legacy private apps que se descontinúan en 2026). Desactivar workflows nativos con LLM. Datos del cliente pertenecen al cliente (términos actualizados mayo 2026).
- **Portales públicos**: conector read-only preferible; integración oficial si existe; nunca credenciales en texto plano.
- **FedEx**: API oficial + webhooks AIV para tracking.
- **Mercado Pago**: API + webhooks idempotentes + conciliación SII.
- **Santander / bancos**: open banking vía agregadores (Floid) o API directa con consentimiento.

---

## 8. Arquitectura en tres planos

```
[ Plano sensible — air-gapped / red aislada ]
  IA local (vLLM + Qwen 32B) | RAG (AnythingLLM/PrivateGPT) | RMA | Certificados | Vault | DLP | Logs WORM
        ↓ (solo resultados limpios)
[ Plano de orquestación — red interna ]
  n8n/Activepieces | Gateway WhatsApp | Conectores tipados | Sandbox
        ↓
[ Plano externo — internet controlada ]
  HubSpot API | FedEx | Mercado Pago | Santander | Portales públicos | Fábrica
```

- **Plano 1 (sensible)**: todo lo que no puede salir. Modelos, documentos, RMA, certificados, vault.
- **Plano 2 (orquestación)**: recibe, procesa, enruta. Sin persistencia de PII en claro.
- **Plano 3 (externo)**: solo recibe resultados limpios o envía datos no sensibles. Credenciales rotativas, mTLS, WAF.

---

## 9. Controles de aprobación humana (riesgo crítico)

Tareas que **siempre** requieren aprobación humana:
- Generación de órdenes de compra a fábrica.
- Pagos a fábrica / proveedores.
- Conciliación bancaria con diferencias > umbral.
- Apertura de RMA de alto valor o disputado.
- Envío de comunicaciones legales o de consentimiento.
- Cambios en certificados o permisos de instaladores.

El agente **prepara** el borrador, cruza datos, detecta inconsistencias y presenta evidencia. El humano **aprueba y firma**. Esto permite escalar sin ceder el control.

---

## 10. Recomendaciones accionables

1. **Inmediato**: sacar API keys del repo `vitalskin-chatbot`; rotar la de Google Vision; migrar a vault.
2. **Corto plazo (0-30 días)**: desplegar Ollama + AnythingLLM en servidor local; prototipar RAG sobre RMA y certificados.
3. **Mediano plazo (30-90 días)**: migrar orquestación a n8n self-hosted; conectar gateway WhatsApp (Cloud API oficial); desactivar workflows de IA nativos en HubSpot.
4. **Largo plazo (90-180 días)**: vLLM + Qwen 32B en producción; air-gap parcial para RMA/certificados/pagos; sandbox para herramientas; plan de cumplimiento Ley 21.719.
5. **Gobernanza continua**: versionado de prompts, evaluación semanal, kill switch, reporte de incidentes < 72 h, auditoría financiera con evidencia.
6. **Principio de minimización**: el agente ve todo en lectura, ejecuta solo lo de la lista blanca, y nada sale sin DLP.

---

## 11. Stack mínimo viable

- Servidor con GPU 24 GB VRAM (RTX 4090 o equivalente; nota: 4090 EOL en 2026, mercado de usados).
- Ollama (piloto) → vLLM (producción).
- Modelo: Qwen3 32B o Qwen3-Coder 32B.
- AnythingLLM o PrivateGPT + Qdrant.
- n8n self-hosted (Postgres + Redis).
- Evolution API / WAHA o Cloud API oficial.
- Infisical o Vault.
- WAF + reverse proxy.
- Logs WORM firmados.
- HubSpot solo por API privada (Service Keys).

---

## 12. Casos de borde legal y consentimiento

- **Opt-out**: el cliente puede revocar consentimiento por cualquier canal; el agente debe respetarlo y registrar la revocación.
- **Consentimiento por canal**: WhatsApp, email, web chat requieren base legal distinta; el orquestador etiqueta el canal y aplica la política correspondiente.
- **Retención**: definir plazos por tipo de dato (RMA, certificados, pagos) alineados a Ley 21.719 y obligaciones contractuales.
- **Derechos ARSOP**: acceso, rectificación, supresión, oposición, portabilidad — el agente debe poder ejecutarlos sobre la base local.
- **Transferencia internacional**: si algún dato debe salir (ej. FedEx tracking), documentar la base legal y minimizar.
- **Incidentes**: protocolo de notificación < 72 h a la Agencia de Protección de Datos y a afectados si hay riesgo alto.

---

## 13. Plan de despliegue por fases

**Fase 0 — Lectura y propuesta (semanas 1-4)**
- Desplegar Ollama + AnythingLLM.
- RAG sobre políticas, catálogo, RMA (solo lectura).
- El agente propone, no ejecuta.

**Fase 1 — Ejecución controlada (semanas 5-12)**
- n8n self-hosted + gateway WhatsApp.
- Conectores a HubSpot (API), FedEx, Mercado Pago (lectura).
- Aprobación humana en todo lo financiero y de compras.
- DLP y vault activos.

**Fase 2 — Autonomía en bajo riesgo (semanas 13-24)**
- vLLM + Qwen 32B en producción.
- Sandbox para herramientas.
- Autonomía total solo en tareas de bajo riesgo (respuestas FAQ, scoring de leads, actualización de tracking).
- Air-gap parcial para RMA, certificados, pagos.

**Fase 3 — Madurez y cumplimiento (semanas 25+)**
- Evaluación continua, red teaming, auditoría externa.
- Cumplimiento pleno Ley 21.719.
- Documentación de transferencia internacional y DPIA.

---

## 14. Principio final

El cliente habla con tu bot. Tu bot piensa en tu servidor. HubSpot, FedEx, Mercado Pago y la fábrica solo reciben el resultado limpio. Nada más cruza la frontera. El agente puede buscar, pensar y actuar, pero solo dentro de un **sandbox de permisos auditable**. Fuera de ese sandbox, no toca un peso, una orden ni un dato sensible.

Esto no es automatización. Es **apalancamiento humano** con soberanía de datos.

---

*Documento generado como parte del diseño del ecosistema de IA soberana. Revisar y adaptar a la realidad operativa de la holding antes de implementación.*
