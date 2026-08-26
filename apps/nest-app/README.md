<p align="center">
  <a href="https://nestjs.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://nestjs.com/img/logo-small.svg" width="80" height="80" alt="NestJS Logo" />
  </a>
</p>

<h1 align="center">NestJS Application (<code>nest-app</code>)</h1>

<p align="center">
  <strong>Backend REST API service built with NestJS 11, Express platform, Jest, and TypeScript.</strong>
</p>

<p align="center">
  <a href="https://nestjs.com/"><img src="https://img.shields.io/badge/NestJS-v11.2-E0234E?style=flat&logo=nestjs&logoColor=white" alt="NestJS" /></a>
  <a href="https://expressjs.com/"><img src="https://img.shields.io/badge/Express-v5.0-000000?style=flat&logo=express&logoColor=white" alt="Express" /></a>
  <a href="https://jestjs.io/"><img src="https://img.shields.io/badge/Jest-v30.4-C21325?style=flat&logo=jest&logoColor=white" alt="Jest" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-v5.9-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <img src="https://img.shields.io/badge/workspace-apps%2Fnest--app-60A5FA?style=flat" alt="Workspace" />
</p>

<p align="center">
  <a href="#english">English</a> • <a href="#español">Español</a>
</p>

---

## English

Go to Spanish version: [Español](#español)

### Overview

`nest-app` serves as the backend service layer within the monorepo. It features modular architecture, dependency injection, and comprehensive testing setups with Jest.

### Key Features

- **Framework**: NestJS 11 with Express
- **Tooling**: Biome for linting/formatting, TypeScript with decorator metadata
- **Testing**: Jest unit tests (`*.spec.ts`) and End-to-End tests (`test/*.e2e-spec.ts`)
- **Shared Packages**: Can consume shared validation schemas and utilities from `@space/utils`

### Available Scripts

Run from workspace root:

- **Start in development mode (with watch)**:

  ```bash
  pnpm --filter nest-app dev
  ```

- **Build for production**:

  ```bash
  pnpm --filter nest-app build
  ```

- **Start production server**:

  ```bash
  pnpm --filter nest-app prod
  ```

- **Run unit tests**:

  ```bash
  pnpm --filter nest-app test
  ```

- **Run E2E tests**:

  ```bash
  pnpm --filter nest-app test:e2e
  ```

- **Run typecheck**:

  ```bash
  pnpm --filter nest-app typecheck
  ```

- **Run lint**:
  ```bash
  pnpm --filter nest-app lint
  ```

---

## Español

Ir a la versión en inglés: [English](#english)

### Descripción General

`nest-app` sirve como la capa de servicios backend dentro del monorepo. Cuenta con arquitectura modular, inyección de dependencias y configuración completa para pruebas con Jest.

### Características Principales

- **Framework**: NestJS 11 con plataforma Express
- **Herramientas**: Biome para linting y formateo, TypeScript con soporte de metadata para decoradores
- **Pruebas**: Pruebas unitarias con Jest (`*.spec.ts`) y pruebas End-to-End (`test/*.e2e-spec.ts`)
- **Paquetes Compartidos**: Capaz de consumir esquemas de validación y utilidades de `@space/utils`

### Scripts Disponibles

Ejecutar desde la raíz del workspace:

- **Iniciar en modo desarrollo (con watch)**:

  ```bash
  pnpm --filter nest-app dev
  ```

- **Compilar para producción**:

  ```bash
  pnpm --filter nest-app build
  ```

- **Iniciar servidor de producción**:

  ```bash
  pnpm --filter nest-app prod
  ```

- **Ejecutar pruebas unitarias**:

  ```bash
  pnpm --filter nest-app test
  ```

- **Ejecutar pruebas E2E**:

  ```bash
  pnpm --filter nest-app test:e2e
  ```

- **Verificación de tipos**:

  ```bash
  pnpm --filter nest-app typecheck
  ```

- **Verificación de linter**:
  ```bash
  pnpm --filter nest-app lint
  ```
