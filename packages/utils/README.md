<p align="center">
  <a href="https://zod.dev/" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn.simpleicons.org/zod/3E67B1" width="80" height="80" alt="Zod Logo" />
  </a>
</p>

<h1 align="center"><code>@space/utils</code></h1>

<p align="center">
  <strong>Shared Utilities and Zod Validation Schemas for frontend and backend applications.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/package-%40space%2Futils-60A5FA?style=flat" alt="Package Name" />
  <a href="https://zod.dev/"><img src="https://img.shields.io/badge/Zod-v4.4-3E67B1?style=flat&logo=zod&logoColor=white" alt="Zod" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-v5.9-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="#license"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License" /></a>
</p>

<p align="center">
  <a href="#english">English</a> • <a href="#español">Español</a>
</p>

---

## English

Go to Spanish version: [Español](#español)

### Overview

`@space/utils` provides shared data validation schemas, TypeScript type definitions, and business logic utilities. It can be consumed by both frontend applications (`next-app`, `vite-app`) and backend services (`nest-app`).

### Exports & Usage

Add `@space/utils` to your package dependencies:

```json
{
  "dependencies": {
    "@space/utils": "workspace:*"
  }
}
```

#### Importing Schemas and Types

```ts
import { userSchema, type UserInput } from "@space/utils";

const result = userSchema.safeParse({
  name: "Ana",
  email: "ana@example.com",
  password: "password123",
});

if (result.success) {
  const user: UserInput = result.data;
  console.log("Validated user:", user);
}
```

---

## Español

Ir a la versión en inglés: [English](#english)

### Descripción General

`@space/utils` proporciona esquemas de validación de datos con Zod, definiciones de tipos TypeScript y utilidades de lógica de negocio compartidas. Puede ser consumido tanto por aplicaciones frontend (`next-app`, `vite-app`) como por servicios backend (`nest-app`).

### Exportaciones y Uso

Añade `@space/utils` a las dependencias de tu paquete:

```json
{
  "dependencies": {
    "@space/utils": "workspace:*"
  }
}
```

#### Importación de Esquemas y Tipos

```ts
import { userSchema, type UserInput } from "@space/utils";

const result = userSchema.safeParse({
  name: "Ana",
  email: "ana@ejemplo.com",
  password: "password123",
});

if (result.success) {
  const user: UserInput = result.data;
  console.log("Usuario validado:", user);
}
```
