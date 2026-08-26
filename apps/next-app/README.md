<p align="center">
  <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn.simpleicons.org/nextdotjs/000000" width="80" height="80" alt="Next.js Logo" />
  </a>
</p>

<h1 align="center">Next.js Application (<code>next-app</code>)</h1>

<p align="center">
  <strong>Modern web application built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and React Compiler.</strong>
</p>

<p align="center">
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-v16.3-000000?style=flat&logo=nextdotjs&logoColor=white" alt="Next.js" /></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-v19.2-61DAFB?style=flat&logo=react&logoColor=black" alt="React" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-v4.3-06B6D4?style=flat&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-v5.9-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <img src="https://img.shields.io/badge/workspace-apps%2Fnext--app-60A5FA?style=flat" alt="Workspace" />
</p>

<p align="center">
  <a href="#english">English</a> • <a href="#español">Español</a>
</p>

---

## English

Go to Spanish version: [Español](#español)

### Overview

`next-app` provides server-side rendering (SSR), static site generation (SSG), and interactive client components using Next.js App Router. It consumes shared components from `@space/ui` and validation schemas from `@space/utils`.

### Key Features

- **Framework**: Next.js 16 with App Router & Turbopack
- **UI & Styling**: Tailwind CSS v4 with `@space/ui` shared components
- **Compiler**: React Compiler enabled via `next.config.ts`
- **Integrations**: Fully integrated with workspace packages (`@space/ui`, `@space/utils`)

### Available Scripts

Run from workspace root:

- **Start in development mode**:

  ```bash
  pnpm --filter next-app dev
  ```

- **Build for production**:

  ```bash
  pnpm --filter next-app build
  ```

- **Start production server**:

  ```bash
  pnpm --filter next-app start
  ```

- **Run typecheck**:

  ```bash
  pnpm --filter next-app typecheck
  ```

- **Run lint**:
  ```bash
  pnpm --filter next-app lint
  ```

---

## Español

Ir a la versión en inglés: [English](#english)

### Descripción General

`next-app` ofrece renderizado del lado del servidor (SSR), generación de sitios estáticos (SSG) y componentes interactivos del cliente utilizando Next.js App Router. Consume componentes compartidos de `@space/ui` y esquemas de validación de `@space/utils`.

### Características Principales

- **Framework**: Next.js 16 con App Router y Turbopack
- **Interfaz y Estilos**: Tailwind CSS v4 con componentes compartidos de `@space/ui`
- **Compilador**: React Compiler habilitado vía `next.config.ts`
- **Integración**: Totalmente integrado con paquetes del workspace (`@space/ui`, `@space/utils`)

### Scripts Disponibles

Ejecutar desde la raíz del workspace:

- **Iniciar en modo desarrollo**:

  ```bash
  pnpm --filter next-app dev
  ```

- **Compilar para producción**:

  ```bash
  pnpm --filter next-app build
  ```

- **Iniciar servidor de producción**:

  ```bash
  pnpm --filter next-app start
  ```

- **Verificación de tipos**:

  ```bash
  pnpm --filter next-app typecheck
  ```

- **Verificación de linter**:
  ```bash
  pnpm --filter next-app lint
  ```
