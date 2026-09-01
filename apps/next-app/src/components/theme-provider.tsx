'use client';

import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';
import type { ComponentProps } from 'react';

import { useThemeHotkey } from '@space/ui/hooks/use-theme-hotkey';

function ThemeProvider({ children, ...props }: Readonly<ComponentProps<typeof NextThemesProvider>>) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange {...props}>
      <ThemeHotkey />
      {children}
    </NextThemesProvider>
  );
}

function ThemeHotkey() {
  const { resolvedTheme, setTheme } = useTheme();

  useThemeHotkey({
    onToggle: () => {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    },
  });

  return null;
}

export { ThemeProvider };
