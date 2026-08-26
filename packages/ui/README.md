<p align="center">
  <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" width="80" height="80" alt="Tailwind CSS Logo" />
  </a>
</p>

<h1 align="center"><code>@space/ui</code></h1>

<p align="center">
  <strong>Shared UI Component Library built with Tailwind CSS v4, Base UI, Shadcn primitives, and Class Variance Authority.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/package-%40space%2Fui-60A5FA?style=flat" alt="Package Name" />
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-v4.3-06B6D4?style=flat&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" /></a>
  <a href="https://base-ui.com/"><img src="https://img.shields.io/badge/Base_UI-v1.7-18181B?style=flat" alt="Base UI" /></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-v19.2-61DAFB?style=flat&logo=react&logoColor=black" alt="React" /></a>
  <a href="#license"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License" /></a>
</p>

<p align="center">
  <a href="#english">English</a> • <a href="#español">Español</a>
</p>

---

## English

Go to Spanish version: [Español](#español)

### Overview

`@space/ui` is a internal shared package containing reusable UI components, styling primitives, and layout utilities for React applications (`next-app`, `vite-app`).

### Exports & Usage

Add `@space/ui` to your application's dependencies:

```json
{
  "dependencies": {
    "@space/ui": "workspace:*"
  }
}
```

#### Importing Styles

Import global styles in your app entrypoint (`layout.tsx` or `main.tsx`):

```tsx
import "@space/ui/globals.css";
```

#### Importing Components

```tsx
import { Button } from "@space/ui/components/button";

export function CustomCard() {
  return (
    <Button variant="default" size="sm">
      Click Me
    </Button>
  );
}
```

#### Importing Utilities

```tsx
import { cn } from "@space/ui/lib/utils";

const className = cn("p-4", "bg-primary", false && "hidden");
```

---

## Español

Ir a la versión en inglés: [English](#english)

### Descripción General

`@space/ui` es un paquete compartido interno que contiene componentes de UI reutilizables, primitivas de estilo y utilidades de maquetación para aplicaciones React (`next-app`, `vite-app`).

### Exportaciones y Uso

Añade `@space/ui` a las dependencias de tu aplicación:

```json
{
  "dependencies": {
    "@space/ui": "workspace:*"
  }
}
```

#### Importación de Estilos

Importa los estilos globales en el punto de entrada de tu aplicación (`layout.tsx` o `main.tsx`):

```tsx
import "@space/ui/globals.css";
```

#### Importación de Componentes

```tsx
import { Button } from "@space/ui/components/button";

export function CustomCard() {
  return (
    <Button variant="default" size="sm">
      Hacer Clic
    </Button>
  );
}
```

#### Importación de Utilidades

```tsx
import { cn } from "@space/ui/lib/utils";

const className = cn("p-4", "bg-primary", false && "hidden");
```
