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

- Next.js app: `@space/typescript-config/tsconfig.next`
- Vite app (React frontend): `@space/typescript-config/tsconfig.vite.app`
- Vite Node (scripts, tooling, SSR helpers): `@space/typescript-config/tsconfig.vite.node`
- NestJS app (backend): `@space/typescript-config/tsconfig.nest`
- Shared React library: `@space/typescript-config/tsconfig.react`
- Neutral/base config (special cases): `@space/typescript-config/tsconfig.base`

### Notes

- Use `tsconfig.base` only when you need a neutral starting point and want to define runtime-specific options manually.
- For web apps, prefer `tsconfig.next` or `tsconfig.vite.app`.
- For Node/Nest backend, prefer `tsconfig.nest`.
- Note for NestJS: ensure `emitDecoratorMetadata` is `true` in your final config so Dependency Injection keeps working.
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

- App Next.js: `@space/typescript-config/tsconfig.next`
- App Vite (frontend React): `@space/typescript-config/tsconfig.vite.app`
- Vite Node (scripts, tooling, SSR helpers): `@space/typescript-config/tsconfig.vite.node`
- App NestJS (backend): `@space/typescript-config/tsconfig.nest`
- Librería React compartida: `@space/typescript-config/tsconfig.react`
- Configuración neutral/base (casos especiales): `@space/typescript-config/tsconfig.base`

### Notas

- Usa `tsconfig.base` solo cuando necesites partir de una base neutral y definir manualmente opciones de runtime.
- Para apps web, prefiere `tsconfig.next` o `tsconfig.vite.app`.
- Para backend Node/Nest, prefiere `tsconfig.nest`.
- Nota para NestJS: asegúrate de que `emitDecoratorMetadata` esté en `true` en tu configuración final para que la inyección de dependencias funcione correctamente.
- Para scripts o herramientas de Vite en entorno Node, prefiere `tsconfig.vite.node`.

Ver ejemplos de código: [Code Examples](#code-examples)

## Code Examples

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

### React Library

```json
{
  "extends": "@space/typescript-config/tsconfig.react"
}
```

### Base (special cases)

```json
{
  "extends": "@space/typescript-config/tsconfig.base"
}
```
