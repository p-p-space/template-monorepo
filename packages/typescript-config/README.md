# @space/typescript-config

Shared TypeScript configs for the monorepo.

[EN](#english) | [ES](#español)

## English

Go to Spanish version: [Español](#español)

Shared TypeScript configs for the monorepo.

### Installation

Install the package in your app or package:

```json
{
  "devDependencies": {
    "@space/typescript-config": "workspace:*"
  }
}
```

### What to extend by project type

- Neutral/base config for special cases: `@space/typescript-config/tsconfig.base`
- Node runtime preset for services, tools, Prisma, and scripts: `@space/typescript-config/tsconfig.node`
- Shared React preset for React/JSX apps and libraries: `@space/typescript-config/tsconfig.react`
- Next.js app: `@space/typescript-config/tsconfig.next`
- Vite app (React frontend): `@space/typescript-config/tsconfig.vite.app`
- Vite Node (scripts, tooling, SSR helpers): `@space/typescript-config/tsconfig.vite.node`
- NestJS app (backend): `@space/typescript-config/tsconfig.nest`

### Notes

- Use `tsconfig.base` only when you need a neutral strict starting point and want to define runtime-specific options manually.
- Use `tsconfig.node` for general Node-based services, packages, CLI tools, Prisma, and similar tooling.
- `tsconfig.react` is the base preset for React and JSX-based projects.
- `tsconfig.next` and `tsconfig.vite.app` build on React and add their own runtime-specific options.
- `tsconfig.nest` builds on Node and enables decorator metadata for NestJS.
- For Vite scripts or tooling that run in Node, prefer `tsconfig.vite.node`.

See code examples: [Code Examples](#code-examples)

## Español

Ir a la versión en inglés: [English](#english)

Configuraciones compartidas de TypeScript para el monorepo.

### Instalación

Instala el paquete en tu app o paquete:

```json
{
  "devDependencies": {
    "@space/typescript-config": "workspace:*"
  }
}
```

### Qué extender según el tipo de proyecto

- Configuración neutral/base para casos especiales: `@space/typescript-config/tsconfig.base`
- Preset de runtime Node para servicios, herramientas, Prisma y scripts: `@space/typescript-config/tsconfig.node`
- Preset compartido de React para apps y librerías con JSX: `@space/typescript-config/tsconfig.react`
- App Next.js: `@space/typescript-config/tsconfig.next`
- App Vite (frontend React): `@space/typescript-config/tsconfig.vite.app`
- Vite Node (scripts, tooling, SSR helpers): `@space/typescript-config/tsconfig.vite.node`
- App NestJS (backend): `@space/typescript-config/tsconfig.nest`

### Notas

- Usa `tsconfig.base` solo cuando necesites una base neutral y estricta y quieras definir manualmente opciones específicas del runtime.
- Usa `tsconfig.node` para servicios, paquetes, herramientas CLI, Prisma y otras utilidades basadas en Node.
- `tsconfig.react` es el preset base para proyectos con React y JSX.
- `tsconfig.next` y `tsconfig.vite.app` se construyen sobre React y añaden opciones específicas de runtime.
- `tsconfig.nest` se construye sobre Node y habilita metadata de decoradores para NestJS.
- Para scripts o herramientas de Vite que corren en Node, prefiere `tsconfig.vite.node`.

Ver ejemplos de código: [Code Examples](#code-examples)

## Code Examples

### Base (special cases)

```json
{
  "extends": "@space/typescript-config/tsconfig.base"
}
```

### Node

```json
{
  "extends": "@space/typescript-config/tsconfig.node"
}
```

### React Library

```json
{
  "extends": "@space/typescript-config/tsconfig.react"
}
```

### Next.js

```json
{
  "extends": "@space/typescript-config/tsconfig.next"
}
```

### Vite App

```json
{
  "extends": "@space/typescript-config/tsconfig.vite.app"
}
```

### Vite Node

```json
{
  "extends": "@space/typescript-config/tsconfig.vite.node"
}
```

### NestJS

```json
{
  "extends": "@space/typescript-config/tsconfig.nest"
}
```
