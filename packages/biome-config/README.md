# @space/biome-config

Shared Biome configurations for the monorepo.

[EN](#english) | [ES](#español)

## English

Go to Spanish version: [Español](#español)

Shared Biome configurations for the monorepo.

### Installation

Install both the Biome CLI and the shared configuration package in each app or package that uses them:

```json
{
  "devDependencies": {
    "@biomejs/biome": "catalog:",
    "@space/biome-config": "workspace:*"
  }
}
```

`@biomejs/biome` provides the `biome` CLI used by the `lint` and `format` scripts. `@space/biome-config` provides the shared presets referenced by the project's `biome.json`. Declare both dependencies in every workspace that uses the CLI or extends a shared preset instead of relying on the root installation.

### What to extend by project type

- Base config for shared packages and simple apps: `@space/biome-config/biome.base`
- React app or library: `@space/biome-config/biome.react`
- Next.js app: `@space/biome-config/biome.next`
- NestJS backend: `@space/biome-config/biome.nest`

### Notes

- Start from `biome.base` for general-purpose projects and shared packages.
- `biome.react` adds React-specific rules on top of the base preset.
- `biome.next` adds Next.js-specific rules. Combine it with `biome.base` and `biome.react`.
- Vite React apps use `biome.base` and `biome.react`; there is no Vite-specific preset.
- `biome.nest` adds NestJS-specific adjustments. Combine it with `biome.base`.

See code examples: [Code Examples](#code-examples)

## Español

Ir a la versión en inglés: [English](#english)

Configuraciones compartidas de Biome para el monorepo.

### Instalación

Instala tanto el CLI de Biome como el paquete de configuración compartida en cada app o paquete que los utilice:

```json
{
  "devDependencies": {
    "@biomejs/biome": "catalog:",
    "@space/biome-config": "workspace:*"
  }
}
```

`@biomejs/biome` proporciona el CLI `biome` utilizado por los scripts `lint` y `format`. `@space/biome-config` proporciona los presets compartidos referenciados por el `biome.json` del proyecto. Declara ambas dependencias en cada workspace que utilice el CLI o extienda un preset compartido; no dependas de la instalación de la raíz.

### Qué extender según el tipo de proyecto

- Configuración base para paquetes compartidos y apps simples: `@space/biome-config/biome.base`
- App o librería React: `@space/biome-config/biome.react`
- App Next.js: `@space/biome-config/biome.next`
- Backend NestJS: `@space/biome-config/biome.nest`

### Notas

- Parte de `biome.base` para proyectos generales y paquetes compartidos.
- `biome.react` añade reglas específicas de React.
- `biome.next` añade reglas específicas de Next.js. Combínalo con `biome.base` y `biome.react`.
- Las apps React con Vite usan `biome.base` y `biome.react`; no existe un preset específico para Vite.
- `biome.nest` añade ajustes específicos de NestJS. Combínalo con `biome.base`.

Ver ejemplos de código: [Code Examples](#code-examples)

## Code Examples

### Base (all projects)

```json
{
  "extends": ["@space/biome-config/biome.base"]
}
```

### NestJS

```json
{
  "extends": ["@space/biome-config/biome.base", "@space/biome-config/biome.nest"]
}
```

### Next.js

```json
{
  "extends": ["@space/biome-config/biome.base", "@space/biome-config/biome.react", "@space/biome-config/biome.next"]
}
```

### Vite React

```json
{
  "extends": ["@space/biome-config/biome.base", "@space/biome-config/biome.react"]
}
```
