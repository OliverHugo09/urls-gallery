---
description: Class-level skill for verifying Next.js builds and deployments
name: nextjs-build-verify
---

# Next.js Build & Verify — Skill para URLs-Gallery

## Usage (cuándo usarlo)

Aplicar cuando se necesite verificar si una aplicación Next.js compila correctamente, qué produce la salida estática, y cómo depurar errores en el proceso de build. Incluye:

- Código de verificación y assertivas
- Patrones de depuración
- Guía de despliegue a Cloudflare Pages

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

## Flujo de verificación

1. **Llenar Variables** (si no están llenas):
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_SITE_URL` (opcional, para producción)

2. **Compilar**:
   ```bash
   cd /c/Users/Oliver/Desktop/urls-gallery/urls-gallery
   cmd.exe /c "pnpm run build"
   ```

3. **Verificar código de salida**:
   ```bash
   echo $?  # 0 = éxito, 1 = fallo
   ```

4. **Revisar salida**:
   - `apps/web/dist/index.html` existe
   - `apps/web/dist/_next/static/` contiene JS/CSS
   - No hay errores en la consola

5. **Depurar si falla**:
   - **BUILD ERROR**: Ver `apps/web/.next/logs/` o `apps/web/dist/_next/` para pistas
   - **STATIC EXPORT ERROR**: Verificar `images: { unoptimized: true }` en next.config.ts
   - **Turborepo CACHED**: Forzar build limpio: `pnpm run clean && pnpm run build`

---

## Patrones de depuración

| Error | Causa probable | Solución |
|-------|----------------|----------|
| `Cannot find module` | Dependencias no instaladas | `pnpm install` |
| `output: export` sin `images: { unoptimized: true }` | Static export requiere esto | Añadir `images: { unoptimized: true }` |
| `distDir` no respetado | Ruta incorrecta | Verificar `distDir: "dist"` |
| Static export falla en imágenes | `unoptimized: true` faltante | Añadir a next.config.ts |
| Build exitoso pero sin HTML | Route no es static export compatible | Revisar routes y layouts |

---

## Verificación de flujo

- **PASS**: Build exitoso → `apps/web/dist/` existe → `index.html` presente → 0 errores
- **FAIL**: Build falla → Revisar `apps/web/.next/logs/` → Corregir y reintentar
- **ACCUMULATE**: Múltiples rápidos éxito → Volver a template base y reparar

---

## Insurgentes y casos extremos

- **iOS / MacOS**: No usar `pnpm` directamente; usar `cmd.exe /c "pnpm run build"`
- **Linux / WSL**: `pnpm` puede estar en PATH; verificar `which pnpm`
- **Cloudflare Pages**: Configure "Build command: pnpm run build", "Build output: apps/web/dist"
- **Static export completo**: `index.html` + `_next/static/` + `_not-found.html` + `404.html`

---

## Referencia rápida

- **Next.js docs**: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- **Cloudflare Pages**: https://developers.cloudflare.com/pages/
- **pnpm Windows**: https://pnpm.io/
