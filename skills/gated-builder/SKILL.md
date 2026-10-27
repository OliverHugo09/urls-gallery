---
description: Gated Builder - Skill para el proyecto URLs-Gallery
---

---
description: Gated Builder - Skill para URLs-Gallery
---

# Gated Builder — Skill para URLs-Gallery

## Usage (cuándo usarlo)

El **Gated Builder** se usa en cada paso del flujo de trabajo (MISG) para:
- Verificar criterios de calidad antes de avanzar a la siguiente fase
- Garantizar que el paso anterior esté completo y verificado
- Mantener el estándar de calidad durante toda la construcción

---

## Semáforo de Gatos (always-on)

- **ANALIZAR antes de editar**: Estudiar el propósito y el alcance antes de tocar código
- **NUNCA borrar código**: Solo agregar, modificar o proponer. Sin rollback destructivo (git clean/reset/rm -r --cached)
- **DRY / SOLID**: Seguir principios de diseño.
- **Justificar nuevas dependencias**: Documentar por qué se necesita una nueva lib
- **Documentar decisiones en código**: Comentarios concisos, no en docs separados
- **UserId siempre de sesión**: `owner_id = session.user.id`, nunca input del cliente
- **Español en UI / Inglés en código**: UI en español, código y liberías en inglés

### Cleaning & Structure (NUEVO)
- **NO crear archivos innecesarios**: Solo crear archivos que se van a usar en esta tarea. Si un archivo no es necesario, no crearlo.
- **Estructura de proyecto**: La estructura raíz tiene `docs/` y `skills/`. El proyecto `apps/web` NO debe tener su propio `docs/`. Si se necesita documentación, usar `docs/` en la raíz.
- **Verificar estructura antes de crear**: `ls -la` para ver qué carpetas existen antes de crear nuevos archivos.
- **Eliminar archivos duplicados**: Si se crea un archivo en el lugar incorrecto, eliminarlo inmediatamente y moverlo a la ubicación correcta.

### Scope & Manual Operations (NUEVO)
- **Scope limitado**: Solo trabajar en lo que se pidió. No adelantar historias sin permiso.
- **Operaciones manuales**: Toda la base de datos y operaciones de Supabase se hacen manualmente a través del dashboard o SQL Editor. No se generan scripts automáticos.
- **No SQL scripts**: Cuando el usuario diga "no se generan scripts", respetar esa restricción. Permitirlo solo con notificación explícita.

---

---

## Flujo de trabajo verificado

1. **Cargar contexto** → `context/PROJECT_CONTEXT.md`
2. **Ejecutar skill** → `atomic-planner`, `discovery-and-scope`, etc.
3. **Verificar criterios** → Gated Builder (puntos de verificación)
4. **Actualizar estado** → `STATE.md` con progreso
5. **Verificar git** → `git status` antes de cada commit

---

## Pasos de verificación

Cada paso verificable debe incluir:

1. **Precondición**: ¿Qué debe estar presente antes de comenzar?
2. **Proceso**: ¿Qué se ejecuta exactamente?
3. **Postcondición**: ¿Qué debe ser cierto al terminar?
4. **Verificación**: ¿Cómo se comprueba (comando, snapshot, test)?

Ejemplo:
- Precondición: archivo `.env.example` existente
- Proceso: `pnpm run build`
- Postcondición: build exitoso (código 0)
- Verificación: `echo $?` muestra 0

---

## Referencia rápida

- **Comandos Windows**: `cmd.exe /c "pnpm run build"` (no usar `pnpm` directamente en bash)
- **Next.js static export**: `output: "export"`, `distDir: "dist"`, `trailingSlash: true`, `images: { unoptimized: true }`
- **Estado**: `STATE.md` con columnas: ID, Descripción, Fase, Estado
- **Tareas activas**: 1.1 ✅, 1.2 🔄, 1.3 🔄, 1.4 🔄

