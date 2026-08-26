<p align="center">
  <a href="https://vite.dev/" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn.simpleicons.org/vite/646CFF" width="80" height="80" alt="Vite Logo" />
  </a>
</p>

<h1 align="center">Vite React Application (<code>vite-app</code>)</h1>

<p align="center">
  <strong>Single Page Application (SPA) built with Vite 8, React 19, Tailwind CSS v4, and React Compiler.</strong>
</p>

<p align="center">
  <a href="https://vite.dev/"><img src="https://img.shields.io/badge/Vite-v8.2-646CFF?style=flat&logo=vite&logoColor=white" alt="Vite" /></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-v19.2-61DAFB?style=flat&logo=react&logoColor=black" alt="React" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-v4.3-06B6D4?style=flat&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-v5.9-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <img src="https://img.shields.io/badge/workspace-apps%2Fvite--app-60A5FA?style=flat" alt="Workspace" />
</p>

<p align="center">
  <a href="#english">English</a> • <a href="#español">Español</a>
</p>

---

## English

Go to Spanish version: [Español](#español)

### Overview

`vite-app` provides a lightweight, client-side rendered SPA with ultra-fast Hot Module Replacement (HMR). It seamlessly integrates with shared components from `@space/ui` and validation utilities from `@space/utils`.

### Key Features

- **Bundler**: Vite 8 with HMR
- **Framework**: React 19 with React Compiler (`@rolldown/plugin-babel`)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Integrations**: Consumes shared UI components (`@space/ui`) and utilities (`@space/utils`)

### Available Scripts

Run from workspace root:

- **Start dev server**:

  ```bash
  pnpm --filter vite-app dev
  ```

- **Build for production**:

  ```bash
  pnpm --filter vite-app build
  ```

- **Preview production build**:

  ```bash
  pnpm --filter vite-app prod
  ```

- **Run typecheck**:

  ```bash
  pnpm --filter vite-app typecheck
  ```

- **Run lint**:
  ```bash
  pnpm --filter vite-app lint
  ```

---

## Español

Ir a la versión en inglés: [English](#english)

### Descripción General

`vite-app` ofrece una aplicación de página única (SPA) renderizada en el cliente con Hot Module Replacement (HMR) ultra rápido. Se integra sin problemas con componentes compartidos de `@space/ui` y utilidades de `@space/utils`.

### Características Principales

- **Empaquetador**: Vite 8 con HMR
- **Framework**: React 19 con React Compiler (`@rolldown/plugin-babel`)
- **Estilos**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Integración**: Consume componentes de interfaz (`@space/ui`) y utilidades (`@space/utils`)

### Scripts Disponibles

Ejecutar desde la raíz del workspace:

- **Iniciar servidor de desarrollo**:

  ```bash
  pnpm --filter vite-app dev
  ```

- **Compilar para producción**:

  ```bash
  pnpm --filter vite-app build
  ```

- **Previsualizar compilación de producción**:

  ```bash
  pnpm --filter vite-app prod
  ```

- **Verificación de tipos**:

  ```bash
  pnpm --filter vite-app typecheck
  ```

- **Verificación de linter**:
  ```bash
  pnpm --filter vite-app lint
  ```
