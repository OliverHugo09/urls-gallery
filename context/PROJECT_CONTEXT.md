# Contexto del Proyecto: URLs-Gallery

> Proyecto personal: Galería de URLs en cards públicas con dashboard protegido.

## Stack Técnico

- **Frontend**: Next.js 16 (App Router) + React 19 + TypeScript
- **UI**: shadcn/ui (base-nova) + Tailwind v4 + next-themes
- **Monorepo**: pnpm + Turborepo
- **Backend**: Supabase (auth, database, storage)
- **Deploy**: Cloudflare Pages (estático)

## Estructura del Proyecto

```
urls-gallery/
├── apps/
│   └── web/          # Aplicación Next.js (landing + dashboard)
├── packages/
│   ├── ui/           # Biblioteca de componentes reutilizables
│   ├── eslint-config/
│   └── typescript-config/
├── skills/           # Skills del método MISG
├── docs/             # Documentación del proyecto
└── context/          # Contexto del proyecto
```

## Método de Trabajo: MISG

1. **Context** - Cargar `context/PROJECT_CONTEXT.md`
2. **Skill** - Invocar skill correspondiente
3. **Gated** - Verificar criterios antes de avanzar
4. **State** - Actualizar estado en `STATE.md`

## Tareas Pendientes

| ID | Fase | Descripción | Estado |
|----|------|-------------|--------|
| 1.1 | Config | Variables + .env.example | ✅ Completado |
| 1.2 | Supabase | Conectar variables al dashboard | 🔄 Pendiente |
| 1.3 | Base de datos | Schema + tablas | 🔄 Pendiente |
| 1.4 | Datos | Seed/lectura de datos | 🔄 Pendiente |

## Convenciones

- **Idioma**: Español en UI, código en inglés
- **Validación**: Zod v4 (no `invalid_type_error`, usar `refine`/`preprocess`)
- **Auth**: owner_id = session.user.id (nunca input del cliente)
- **Despliegue**: Estático (output: 'export', distDir: 'dist')

## Variables de Entorno

Ver `.env.example` - llenar manualmente antes de despliegue.

## Skill Invocación

Los skills se pueden invocar mediante:
- Prompt: `@skill:<nombre>` en el chat
- Comando: `pnpm run skill:<nombre>` en terminal
- Asistente: preguntar directamente al asistente
