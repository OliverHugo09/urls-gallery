# Metodología: MISG

## Fases

| Fase | Método | Herramienta |
|------|--------|-------------|
| 1. Contexto | Discovery | `discovery-and-scope` |
| 2. Alcance | Atomic Planning | `atomic-planner` |
| 3. Construcción | Gated Builder | `gated-builder` |
| 4. Estado | Project Router | `project-router` |

## Reglas de Oro

1. **Analizar antes de editar** - No modificar sin entender el impacto
2. **Nunca borrar código** - Solo agregar, modificar o proponer
3. **DRY / SOLID** - Seguir principios de diseño
4. **Nuevas dependencias** - Justificar siempre
5. **Documentar decisiones** - En código y en docs/
6. **Validación con Zod v4** - `refine`, `preprocess`, `union` + `literal`
7. **Idioma** - Español en UI, inglés en código
8. **Auth** - `owner_id = session.user.id` (nunca input del cliente)

## Estado de Tareas

| ID | Descripción | Fase | Estado |
|----|-------------|------|--------|
| 1.1 | Variables + .env.example | Configuración | ✅ DONE |
| 1.2 | Conexión Supabase | Verificación | 🔄 Pendiente |
| 1.3 | Schema de base datos | Base de datos | 🔄 Pendiente |
| 1.4 | Seed/leer datos | Datos | 🔄 Pendiente |

## Flujo de Trabajo

1. Verificar `context/PROJECT_CONTEXT.md`
2. Invocar skill adecuado (atomic-planner, gated-builder, etc.)
3. Verificar criterios antes de avanzar (gated-builder)
4. Actualizar `STATE.md` con el progreso
5. Verificar `git status` antes de cada commit
