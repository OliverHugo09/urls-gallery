---
description: Atomic Planner - Skill para el proyecto URLs-Gallery
---

---
description: Atomic Planner - Skill para URLs-Gallery
---

# Atomic Planner — Skill para URLs-Gallery

## Usage (cuándo usarlo)

El **Atomic Planner** se usa para descomponer trabajo complejo en tareas atómicas y numeradas, verificables y secuenciales. Se usa en la fase de planificación del método MISG.

---

## Semáforo de Gatos (always-on)

- **ANALIZAR antes de editar**: Estudiar el propósito y el alcance antes de tocar código
- **NUNCA borrar código**: Solo agregar, modificar o proponer
- **DRY / SOLID**: Seguir principios de diseño
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

## Flujo de planeación

1. **Definir alcance**: Qué se va a construir y por qué (fase de discovery)
2. **Identificar widget**():
   - Unidad mínima de trabajo
   - Un solo objetivo
   - Verificable de forma independiente
   - Secuencial (no depende de paso futuro)
3. **Numerar tareas**: `T-XXX` con prioridad, dependencias y criterios de aceptación
4. **Secuenciar**: Orden de ejecución, dependencias explícitas
5. **Verificar antes de seguir**: Descargar y ejecutar cada tarea con Gated Builder antes de avanzar

---

## Estructura de tarea atómica

| Campo | Descripción |
|-------|-------------|
| ID | `T-XXX` (número secuencial) |
| Título | Objeto de trabajo concreto |
| Entradas | Archivos, APIs, datos que requiere |
| Salida | Resultado medible (archivo, API, pantalla) |
| Criterios de aceptación | Verificables (código 0, test pass, snapshot igual) |
| Dependencias | Tareas previas (si las hay) |
| Verificación | Comando o steps para comprobar |

---

## Ejemplo de tarea atómica

```markdown
T-001: Crear .env.example con variables de entorno

- Entradas: None
- Salida: .env.example con campos opcionales (NaN, 0, "" para completar manual)
- Criterios de aceptación:
  - Archivo existe
  - Tiene 3 Variables de entorno (SUPABASE_URL, SUPABASE_ANON_KEY, SITE_URL)
  - Valores son commentarios (NaN, 0, "") para llenar manual
- Verificación: `ls .env.example && head -5 .env.example`
```

---

## Referencia rápida

- **Requerimientos del usuario** (de `context/PROJECT_CONTEXT.md`):
  - Landing pública con cards (URL + foto + title + description)
  - Dashboard protegido con login + CRUD de cards y categorías
  - Contadores de clics por card y categoría
  - Filtros: categorías, más vistos (time windows: 1h, 6h, 12h, 24h, 3d, 7d, 14d, meses)
  - MVP: 100-1000 URLs (máximo 10,000 en el peor caso)
  - Vista móvil first en UI
- **Despliegue**: Cloudflare Pages con static export
- **Backend**: Supabase (auth, DB, storage)

