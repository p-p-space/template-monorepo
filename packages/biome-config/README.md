# @space/biome-config

Shared Biome configurations for the monorepo.

[EN](#english) | [ES](#español)

## English

Go to Spanish version: [Español](#español)

Shared Biome configurations for the monorepo.

### Installation

Install the package in your app or package:

```json
{
  "devDependencies": {
    "@space/biome-config": "workspace:*"
  }
}
```

### What to extend by project type

- Base config for shared packages and simple apps: `@space/biome-config/biome.base`
- React app or library: `@space/biome-config/biome.react`
- Next.js app: `@space/biome-config/biome.next`
- Vite React app: `@space/biome-config/biome.vite`
- NestJS backend: `@space/biome-config/biome.nest`

### Notes

- Start from `biome.base` for general-purpose projects and shared packages.
- `biome.react` adds React-specific rules on top of the base preset.
- `biome.next` already includes the base and React layers, so it is enough for Next.js apps.
- For Vite React apps, combine `biome.react` and `biome.vite`.
- For NestJS apps, extend `biome.nest`; it already includes the base preset.

See code examples: [Code Examples](#code-examples)

## Español

Ir a la versión en inglés: [English](#english)

Configuraciones compartidas de Biome para el monorepo.

### Instalación

Instala el paquete en tu app o paquete:

```json
{
  "devDependencies": {
    "@space/biome-config": "workspace:*"
  }
}
```

### Qué extender según el tipo de proyecto

- Configuración base para paquetes compartidos y apps simples: `@space/biome-config/biome.base`
- App o librería React: `@space/biome-config/biome.react`
- App Next.js: `@space/biome-config/biome.next`
- App React con Vite: `@space/biome-config/biome.vite`
- Backend NestJS: `@space/biome-config/biome.nest`

### Notas

- Parte de `biome.base` para proyectos generales y paquetes compartidos.
- `biome.react` añade reglas específicas de React sobre la base.
- `biome.next` ya incluye las capas base y React, así que basta para apps Next.js.
- Para apps React con Vite, combina `biome.react` y `biome.vite`.
- Para apps NestJS, extiende `biome.nest`; ya incluye la base.

Ver ejemplos de código: [Code Examples](#code-examples)

## Code Examples

### Base (all projects)

```json
{
  "extends": ["@space/biome-config/biome.base"]
}
```

### React

```json
{
  "extends": ["@space/biome-config/biome.react"]
}
```

### Next.js

```json
{
  "extends": ["@space/biome-config/biome.next"]
}
```

### Vite React

```json
{
  "extends": ["@space/biome-config/biome.react", "@space/biome-config/biome.vite"]
}
```

### NestJS

```json
{
  "extends": ["@space/biome-config/biome.nest"]
}
```
