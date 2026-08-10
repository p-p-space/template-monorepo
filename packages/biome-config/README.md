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

- Base config (all projects): `@space/biome-config/biome.base`
- React app/library: `@space/biome-config/biome.react`
- Next.js app: `@space/biome-config/biome.next`
- Vite-specific adjustments: `@space/biome-config/biome.vite`
- NestJS/backend adjustments: `@space/biome-config/biome.nest`

### Notes

- In most projects, start from `biome.base` and add the framework-specific presets you need.
- For Next.js projects, combine `biome.react` and `biome.next` to get both React and Next rules.
- For Vite React projects, combine `biome.react` and `biome.vite`.
- For NestJS projects, combine `biome.base` and `biome.nest`.

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

- Configuración base (todos los proyectos): `@space/biome-config/biome.base`
- App/librería React: `@space/biome-config/biome.react`
- App Next.js: `@space/biome-config/biome.next`
- Ajustes específicos para Vite: `@space/biome-config/biome.vite`
- Ajustes para NestJS/backend: `@space/biome-config/biome.nest`

### Notas

- En la mayoría de proyectos, parte de `biome.base` y agrega los presets específicos del framework que necesites.
- Para proyectos Next.js, combina `biome.react` y `biome.next` para tener reglas de React y de Next.
- Para proyectos Vite React, combina `biome.react` y `biome.vite`.
- Para proyectos NestJS, combina `biome.base` y `biome.nest`.

Ver ejemplos de código: [Code Examples](#code-examples)

## Code Examples

### Base (all projects)

```json
{
  "extends": ["@space/biome-config/biome.base"]
}
```

### Next.js (React + Next)

```json
{
  "extends": ["@space/biome-config/biome.base", "@space/biome-config/biome.react", "@space/biome-config/biome.next"]
}
```

### Vite React

```json
{
  "extends": ["@space/biome-config/biome.base", "@space/biome-config/biome.react", "@space/biome-config/biome.vite"]
}
```

### NestJS

```json
{
  "extends": ["@space/biome-config/biome.base", "@space/biome-config/biome.nest"]
}
```
