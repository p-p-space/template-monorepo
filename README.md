<p align="center">
  <a href="https://turbo.build/" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn.simpleicons.org/turborepo/EF4444" width="80" height="80" alt="Turborepo Logo" />
  </a>
</p>

<h1 align="center">Template Monorepo</h1>

<p align="center">
  <strong>Enterprise-grade monorepo template built with Turborepo, pnpm Workspaces, Biome, and TypeScript.</strong>
</p>

<p align="center">
  <a href="#license"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License" /></a>
  <a href="https://turbo.build/"><img src="https://img.shields.io/badge/Turborepo-v2.10-EF4444?style=flat&logo=turborepo&logoColor=white" alt="Turborepo" /></a>
  <a href="https://pnpm.io/"><img src="https://img.shields.io/badge/pnpm-v11.23-F69220?style=flat&logo=pnpm&logoColor=white" alt="pnpm" /></a>
  <a href="https://biomejs.dev/"><img src="https://img.shields.io/badge/Biome-v2.5-60A5FA?style=flat&logo=biome&logoColor=white" alt="Biome" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-v5.9-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-%3E%3D20.11-339933?style=flat&logo=node.js&logoColor=white" alt="Node.js" /></a>
</p>

<p align="center">
  <a href="#english">English</a> • <a href="#español">Español</a>
</p>

---

## English

Go to Spanish version: [Español](#español)

### Overview

This repository provides a standardized architecture for scalable full-stack applications. It integrates modern web frameworks, shared component libraries, and strict tooling configurations out of the box.

### Tech Stack & Architecture

- **Build System**: [Turborepo 2](https://turbo.build/) + [pnpm 11 Workspaces](https://pnpm.io/)
- **Linter & Formatter**: [Biome 2.5](https://biomejs.dev/)
- **Type Checking**: [TypeScript 5.9](https://www.typescriptlang.org/)
- **Frontend Applications**:
  - `apps/next-app`: Next.js 16 (App Router), Tailwind CSS v4, React 19, React Compiler
  - `apps/vite-app`: Vite 8, React 19, Tailwind CSS v4, React Compiler
- **Backend Application**:
  - `apps/nest-app`: NestJS 11, Express platform, Jest unit & E2E testing
- **Shared Packages**:
  - `packages/ui` (`@space/ui`): Shared UI components built with Tailwind CSS v4 & Base UI
  - `packages/utils` (`@space/utils`): Shared utilities and Zod validation schemas
  - `packages/typescript-config` (`@space/typescript-config`): Centralized tsconfig presets
  - `packages/biome-config` (`@space/biome-config`): Centralized Biome lint/format configurations

### Monorepo Structure

```text
.
├── apps/
│   ├── nest-app/           # NestJS 11 REST API
│   ├── next-app/           # Next.js 16 SSR & App Router frontend
│   └── vite-app/           # Vite 8 + React 19 SPA frontend
├── packages/
│   ├── biome-config/       # Biome shared rules (@space/biome-config)
│   ├── typescript-config/  # TypeScript tsconfig presets (@space/typescript-config)
│   ├── ui/                 # Shared UI component library (@space/ui)
│   └── utils/              # Shared validation schemas & helpers (@space/utils)
├── biome.json              # Root Biome configuration
├── commitlint.config.mjs   # Commit message linting policy
├── package.json            # Root scripts and workspace devDependencies
├── pnpm-workspace.yaml     # pnpm workspace definition and catalog
└── turbo.json              # Turborepo task pipeline configuration
```

### Prerequisites

- **Node.js**: `>= 20.11.0`
- **pnpm**: `>= 11.0.0`

### Quick Start

1. **Install dependencies**:

   ```bash
   pnpm install
   ```

2. **Start development servers**:

   ```bash
   pnpm dev
   ```

3. **Build all applications and packages**:
   ```bash
   pnpm build
   ```

### Audit & Inspection Commands

These commands allow you to review, audit, and validate the health, types, code style, and build readiness of the entire monorepo in a non-interactive stream output:

- **Run all lint & typecheck validations**:

  ```bash
  npx turbo run lint typecheck --ui=stream
  ```

- **Run full build across all workspaces**:

  ```bash
  npx turbo run build --ui=stream
  ```

- **Run code formatting verification**:

  ```bash
  npx turbo run format --ui=stream
  ```

- **Format and auto-fix linting issues across workspaces**:

  ```bash
  pnpm lint:fix
  pnpm format:fix
  ```

- **Run unit and E2E tests**:
  ```bash
  pnpm test
  ```

### Governance & Commit Conventions

This project enforces conventional commit messages via **Husky** (`.husky/commit-msg`) and **commitlint** (`.commitlint.config.mjs`). Refer to [`COMMIT_CONVENTION.md`](./COMMIT_CONVENTION.md) for detailed rules and guidelines.

---

## Español

Ir a la versión en inglés: [English](#english)

### Descripción General

Este repositorio proporciona una arquitectura estandarizada para aplicaciones full-stack escalables. Integra frameworks web modernos, librerías de componentes compartidos y configuraciones de herramientas estrictas desde el primer momento.

### Stack Tecnológico y Arquitectura

- **Sistema de Construcción**: [Turborepo 2](https://turbo.build/) + [pnpm 11 Workspaces](https://pnpm.io/)
- **Linter y Formateador**: [Biome 2.5](https://biomejs.dev/)
- **Comprobación de Tipos**: [TypeScript 5.9](https://www.typescriptlang.org/)
- **Aplicaciones Frontend**:
  - `apps/next-app`: Next.js 16 (App Router), Tailwind CSS v4, React 19, React Compiler
  - `apps/vite-app`: Vite 8, React 19, Tailwind CSS v4, React Compiler
- **Aplicación Backend**:
  - `apps/nest-app`: NestJS 11, Plataforma Express, Pruebas unitarias y E2E con Jest
- **Paquetes Compartidos**:
  - `packages/ui` (`@space/ui`): Componentes de UI compartidos con Tailwind CSS v4 y Base UI
  - `packages/utils` (`@space/utils`): Utilidades compartidas y esquemas de validación con Zod
  - `packages/typescript-config` (`@space/typescript-config`): Presets centralizados de tsconfig
  - `packages/biome-config` (`@space/biome-config`): Configuraciones centralizadas de Biome

### Estructura del Monorepo

```text
.
├── apps/
│   ├── nest-app/           # API REST con NestJS 11
│   ├── next-app/           # Frontend Next.js 16 (App Router y SSR)
│   └── vite-app/           # Frontend SPA con Vite 8 + React 19
├── packages/
│   ├── biome-config/       # Reglas compartidas de Biome (@space/biome-config)
│   ├── typescript-config/  # Presets de TypeScript (@space/typescript-config)
│   ├── ui/                 # Librería de componentes UI compartida (@space/ui)
│   └── utils/              # Esquemas de validación y utilidades (@space/utils)
├── biome.json              # Configuración raíz de Biome
├── commitlint.config.mjs   # Política de linting para mensajes de commit
├── package.json            # Scripts raíz y devDependencies del workspace
├── pnpm-workspace.yaml     # Definición de workspace y catálogo de pnpm
└── turbo.json              # Pipeline de tareas de Turborepo
```

### Requisitos Previos

- **Node.js**: `>= 20.11.0`
- **pnpm**: `>= 11.0.0`

### Inicio Rápido

1. **Instalar dependencias**:

   ```bash
   pnpm install
   ```

2. **Iniciar servidores de desarrollo**:

   ```bash
   pnpm dev
   ```

3. **Compilar todas las aplicaciones y paquetes**:
   ```bash
   pnpm build
   ```

### Comandos de Auditoría y Revisión

Estos comandos permiten revisar, auditar y validar la salud, los tipos, el estilo de código y la preparación para construcción de todo el monorepo en salida no interactiva por streaming:

- **Ejecutar validación de linting y verificación de tipos en todo el monorepo**:

  ```bash
  npx turbo run lint typecheck --ui=stream
  ```

- **Ejecutar compilación completa de todos los workspaces**:

  ```bash
  npx turbo run build --ui=stream
  ```

- **Ejecutar verificación de formato de código**:

  ```bash
  npx turbo run format --ui=stream
  ```

- **Corregir automáticamente formato e incidencias de linting**:

  ```bash
  pnpm lint:fix
  pnpm format:fix
  ```

- **Ejecutar pruebas unitarias y E2E**:
  ```bash
  pnpm test
  ```

### Gobernanza y Convención de Commits

Este proyecto exige mensajes de commit convencionales mediante **Husky** (`.husky/commit-msg`) y **commitlint** (`.commitlint.config.mjs`). Consulta [`COMMIT_CONVENTION.md`](./COMMIT_CONVENTION.md) para ver las reglas y guías detalladas.
