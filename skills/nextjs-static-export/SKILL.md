---
description: Class-level skill for configuring Next.js for static export to Cloudflare Pages
name: nextjs-static-export
---

# Next.js Static Export — Skill para URLs-Gallery

## Usage (cuándo usarlo)

Aplicar cuando se necesite desplegar una aplicación Next.js como sitios estáticos (Cloudflare Pages, GitHub Pages, Netlify, Vercel, etc.). Incluye:

- Configurar `next.config.ts` para static export
- Configurar el directorio de salida (`dist` vs `out`)
- Configurar `trailingSlash` y `images`
- Verificar el build y depurar errores comunes

---

## Semáforo de Gatos (always-on)

- **ANALIZAR antes de editar**: Estudiar el propósito y el alcance antes de tocar código
- **NUNCA borrar código**: Solo agregar, modificar o proponer
- **DRY / SOLID**: Seguir principios de diseño
- **Justificar nuevas dependencias**: Documentar por qué se necesita una nueva lib
- **Documentar decisiones en código**: Comentarios concisos, no en docs separados
- **UserId siempre de sesión**: `owner_id = session.user.id`, nunca input del cliente
- **Español en UI / Inglés en código**: UI en español, código y liberías en inglés
- **Windows/MSYS**: Usar `cmd.exe /c "pnpm run build"` (no `pnpm` directamente en bash)
- **Node en Windows**: `C:\Program Files\nodejs` NO en PATH bash

---

## Flujo clásico

1. **Leer el current config**: `apps/web/next.config.ts` (o root)
2. **Configurar static export**:
   ```typescript
   const nextConfig: NextConfig = {
     output: "export",
     distDir: "dist",
     trailingSlash: true,
     images: { unoptimized: true },
     transpilePackages: ["@workspace/ui"],
   }
   export default nextConfig
   ```
3. **Verificar build**: `pnpm run build` → exit code 0
4. **Revisar output**: `apps/web/dist/` contiene `index.html`, `_next/static/`, etc.
5. **Depurar si falla**:
   - `images: { unoptimized: true }` es REQUIRIDO para static export
   - `trailingSlash: true` para compatibilidad Cloudflare
   - `distDir: "dist"` para directorio de salida personalizado

---

## Decision Table

| Escenario | Configuración | Raíz |
|-----------|---------------|-------|
| Desplegar a Cloudflare Pages (estático) | `output: "export"` + `distDir: "dist"` | `apps/web/dist/` |
| Desplegar a Vercel | Sin `output: "export"` (servido) | `.next/` |
| Preferir `out/` en lugar de `dist/` | `output: "export"` (default `out/`) | `apps/web/out/` |
| Images con CDN | `images: { loader: "custom", loaderFile: ... }` | - |
| Routes dinámicas requeridas | No es static export compatible | - |

---

## Pitfalls y técnicas de depuración

- **Static export no soporta route handlers / server actions** → usar Client Components o API routes externas
- **Static export requiere `images: { unoptimized: true }`** → si se omite, el build falla
- **Next.js 16 cambia el modo por defecto** → verificar `output` explícitamente
- **Turborepo cache stale** → ejecutar `pnpm run clean` o borrar `node_modules/.cache/turbo`
- **Next.js agentGuidance** → CAÍDO (next dev lo re-adding automáticamente)
- **Redirigir con trailing slashes** → `trailingSlash: true` previene 308 loops en Cloudflare

---

## Referencia rápida

- **Comandos**: `pnpm run build` → salidas a `apps/web/dist/`
- **Next.js docs**: `https://nextjs.org/docs/app/building-your-application/deploying/static-exports`
- **Cloudflare Pages**: Configure "Build command: pnpm run build", "Build output: apps/web/dist"
