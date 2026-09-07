# Lecciones de arquitectura — base propia Colvin

Colvin y Cía. Ltda. · 7 de septiembre de 2026

## Patrones adoptados como propios

- Arquitectura de canal: WhatsApp Business API → adaptador de canal → orquestador → agente con RAG + tools → CRM como fuente de verdad.
- Niveles de autonomía 0 a 3 con handoff humano obligatorio en decisiones comerciales.
- Protocolo de separación IA-SAFE / IA-OUTPUT / NO_IA_NUNCA.
- Memoria vectorial (pgvector) para contexto de conversación.

## Decisiones propias de Colvin

- Un solo tenant: representante y servicio técnico FLIR en Chile. Sin multi-vertical.
- n8n self-hosted en VPS chileno como orquestador.
- HubSpot como única fuente de verdad comercial.
- Código construido limpio desde cero para la operación FLIR; no se reutiliza código de otros proyectos.

## Regla

Toda la base documental de Colvin se construye y mantiene como propia. No se citan ni se usan como plantilla otras empresas, marcas o productos ajenos a la operación.
