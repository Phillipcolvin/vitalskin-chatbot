# Separación Ohana — Lecciones rescatadas y deuda descartada

Colvin y Cía. Ltda. · 7 de septiembre de 2026

## Qué se rescata de Ohana Core

- El patrón de arquitectura: WhatsApp Business API → adaptador de canal → orquestador → agente con RAG + tools → CRM como fuente de verdad.
- La disciplina de niveles de autonomía (0 a 3) y handoff humano.
- El protocolo de separación IA-SAFE / IA-OUTPUT / NO_IA_NUNCA.
- La idea de memoria vectorial (pgvector) para contexto de conversación.

## Qué se descarta

- Todo lo específico de Barros Wellness y hotelería. No aplica a termografía industrial FLIR.
- El multi-tenant genérico pensado para varios verticales. Colvin es un solo tenant: representante FLIR.
- Cualquier referencia a Ohana Labs como plantilla activa. Queda como antecedente histórico.

## Regla

Ohana Core no se usa como base de código para Colvin. Se usa como referencia de patrones. El código de Colvin se construye limpio, con n8n self-hosted y HubSpot como única fuente de verdad comercial.
