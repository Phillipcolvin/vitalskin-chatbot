# Gobernanza e independencia digital — Colvin y Cia. Ltda.

Documento vivo. Define como Colvin reduce dependencia de proveedores externos, elimina backdoors y protege la informacion que se generara.
Principio: lo que hoy es poco dato, manana sera el activo mas valioso. Se construye la independencia desde el dia uno.

## 1. Independencia de infraestructura
Hoy: n8n self-hosted en VPS chileno, PostgreSQL local, retencion 30 dias.
Objetivo 12 meses: datos de conversacion y de negocio 100% en infraestructura propia o controlada.
Regla: ningun dato de cliente, serial, RMA o licitacion se almacena en SaaS extranjero con derecho a entrenar modelos.
Excepcion temporal: APIs de Meta (WhatsApp Business) y OpenAI/Claude para inferencia, con opt-out de entrenamiento y sin persistencia.

## 2. Independencia de datos
- Diccionario de datos versionado: cada campo tiene dueno y sistema de verdad.
- Contratos de interfaz versionados: cambios se anuncian 30 dias antes.
- Backups diarios en VPS chileno + copia semanal fuera del proveedor de hosting.
- Ningun secreto en GitHub: rotacion cada 90 dias, credenciales en gestor local.

## 3. Eliminacion de backdoors
Backdoors identificados y mitigados:
- Secretos en codigo: rotados, prohibido en repo.
- Deriva de despliegue (Cloud Run vs App Engine): un solo entorno declarado.
- Archivos de 4000+ lineas: refactor a modulos pequenos.
- Permisos anyone/writer en Drive: restringidos a editores nombrados.
- Codigo de otros proyectos mezclado: nucleo Colvin limpio, separado.
- Commits coautorados por IA sin revision: todo commit de agente requiere aprobacion humana.

## 4. Gobernanza de agentes
- Grok Bot: arquitectura y diseno. No escribe codigo de produccion.
- Claude Code: codigo e integraciones. No define estrategia.
- GPT: documentacion y contenido. No toca datos ni secretos.
- Ningun agente tiene acceso a 00_NO_IA_NUNCA_COLVIN.
- Todo output de agente pasa por revision humana antes de produccion.
- Registro de decisiones: cada eleccion de agente queda documentada con motivo.

## 5. Independencia de proveedores de IA
Riesgo: los tres agentes dependen de proveedores externos (xAI, Anthropic, OpenAI).
Mitigacion:
- Prompts y diccionarios versionados en GitHub propio: si un proveedor cae, se migra a otro con el mismo contexto.
- No se entrena modelo propietario con datos de Colvin todavia: primero volumen, despues decision.
- Evaluar en 12 meses: modelo local o fine-tune propio para el bot de atencion.

## 6. Plan de evolucion de seguridad
Etapa 1 (hoy): autenticacion basica, HTTPS, backups, retencion 30 dias.
Etapa 2 (6 meses): RBAC por rol, auditoria de accesos, cifrado en reposo.
Etapa 3 (12 meses): WAF, monitoreo de intrusiones, pruebas de penetracion.
Etapa 4 (18 meses): evaluacion de infraestructura 100% propia, modelo propio o fine-tune.

## Regla de oro
Cada nueva integracion debe responder: que pasa si este proveedor cierra manana?
Si la respuesta es "perdemos todo", la integracion esta mal disenada.
