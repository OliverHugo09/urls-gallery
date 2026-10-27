---
description: Discovery And Scope - Skill para el proyecto URLs-Gallery
---

---
description: Discovery And Scope - Skill para URLs-Gallery
---

# Discovery And Scope — Skill para URLs-Gallery

## Usage (cuándo usarlo)

El **Discovery and Scope** se usa en las fases iniciales del flujo de trabajo (MISG) para:
- Capturar requisitos del usuario en forma estructurada
- Definir el alcance del proyecto (qué hacer y qué no)
- Establecer criterios de éxito y métricas de aceptación
- Producir una spec de trabajo verificable

---

## Semáforo de Gatos (always-on)

- **ANALIZAR antes de editar**: Estudiar el propósito y el alcance antes de tocar código
- **NUNCA borrar código**: Solo agregar, modificar o proponer
- **DRY / SOLID**: Seguir principios de diseño
- **Justificar nuevas dependencias**: Documentar por qué se necesita una nueva lib
- **Documentar decisiones en código**: Comentarios concisos, no en docs separados
- **UserId siempre de sesión**: `owner_id = session.user.id`, nunca input del cliente
- **Español en UI / Inglés en código**: UI en español, código y liberías en inglés
- **Scope-limited work**: No extender el proyecto más allá del alcance definido
- **NUNCA auto-advance**: Esperar al usuario para iniciar siguiente historia
- **No plans without executing**: El usuario espera implementación real, no planes

---

## Flujo de discovery

1. **Cargar contexto** → `context/PROJECT_CONTEXT.md` (o equivalente)
2. **Explorar requisitos**:
   - Qué será visible para el usuario final (landing, cards, filtros)
   - Qué será por dentro (dashboard, login, CRUD, contadores)
3. **Definir alcance**:
   - MVP (mínimo viable): funcionalidades esenciales
   - Post-MVP: mejoras y extensiones
   - Claramente separados
4. **Establecer métricas**:
   - KPIs de aceptación
   - Fronteras de performance
   - Población esperada (100-1000 URLs para MVP)
5. **Producir spec verificable**:
   - Requisitos funcionales (RFx)
   - Requisitos no funcionales
   - Criterios de aceptación
   - Pruebas de smoke

---

## Artifacts del discovery

| Artifact | Descripción | Ubicación |
|----------|-------------|-----------|
| `01-discovery.md` | Requisitos del usuario y flujo de trabajo | `docs/` |
| `02-commercial.md` | Aspectos comerciales/negocio | `docs/` |
| `03-tech-radar.md` | Stack tecnológico y decisiones | `docs/` |
| `04-backlog.md` | Backlog del proyecto (tareas) | `docs/` |

---

## Criterios de aceptación

- ✅ Toda la información del usuario se captura (requisitos + preferencias)
- ✅ Alcance está claramente definido (MVP vs Post-MVP)
- ✅ Criterios de aceptación son verificables (no subjetivos)
- ✅ Stack tecnológico está documentado con justificación
- ✅ Backlog tiene tareas numeradas y secuenciadas
- ✅ Nota: 100-1000 URLs para MVP (máximo 10,000 en peor caso)
- ✅ Vista móvil first en UI
- ✅ Español en UI, inglés en código

---

## Stack seleccionado para este proyecto

| Capa | Tecnología | Justificación |
|------|------------|---------------|
| Frontend | Next.js 16 (App Router) + React 19 + TS | Modern, performante, estático export |
| UI | shadcn/ui + Tailwind v4 + next-themes | Componentes consistentes, fácil de mantener |
| Monorepo | pnpm + Turborepo | Deps compartidos, builds eficientes |
| Backend | Supabase (auth, DB, storage) | Backend completito sin gestionar |
| Deploy | Cloudflare Pages (static export) | Caro, global, fácil |

---

## Referencia rápida

- **Comandos Windows**: `cmd.exe /c "pnpm run build"` (no usar `pnpm` directamente en bash)
- **Next.js static export**: `output: "export"`, `distDir: "dist"`, `trailingSlash: true`, `images: { unoptimized: true }`
- **Estado**: `STATE.md` con columnas: ID, Descripción, Fase, Estado
- **Tareas activas**: 1.1 ✅, 1.2 🔄, 1.3 🔄, 1.4 🔄
