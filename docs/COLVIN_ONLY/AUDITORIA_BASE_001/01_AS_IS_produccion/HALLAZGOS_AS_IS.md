# Hallazgos AS-IS — Auditoría BASE-001 (read-only)

Colvin y Cía. Ltda. · 7 de septiembre de 2026

## Deriva de despliegue

El README dice Cloud Run, el app.yaml dice App Engine Python 3.11. Nadie sabe qué corre de verdad. Eso es una puerta trasera abierta, no una arquitectura.

## Secretos en el código

Claves de Google API en scripts y notebooks. Ya están indexadas en GitHub. Los competidores no necesitan espías — tienen un crawler.

## RMA en Azure Functions

Sin owner corporativo ni backup probado. Si cae, se pierde el ciclo de vida del activo y toda la recurrencia.

## Archivos monolíticos

Archivos de cuatro mil a seis mil líneas concentrando lógica. Un solo bug y se cae el banco de conciliación.

## Ohana Core mezclado con Colvin

Ohana Core está pensado para Barros Wellness, no para Colvin. Mezclar dos verticales en un solo núcleo contamina el aislamiento multi-tenant. Separar ya.

## Backlog hinchado

El backlog de 105 tareas sigue creciendo mientras el piloto no arranca. Congelar documentación nueva hasta que el bot responda un lead real.

## Acciones inmediatas

1. Congelar documentación. Cero documentos nuevos hasta que el bot responda un lead real.
2. Ejecutar BASE-001 hoy. Auditoría AS-IS read-only, sin tocar código. Resolver la verdad de despliegue y los secretos primero.
3. Un solo flujo vertical: lead de alta intención → HubSpot → bot WhatsApp → handoff. Nada más.
4. n8n self-hosted en VPS chileno.
5. Separar Ohana Core de Colvin.
