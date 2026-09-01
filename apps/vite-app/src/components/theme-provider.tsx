/** biome-ignore-all lint/style/useComponentExportOnlyModules: <on this provider> */
import * as React from 'react';

import { useThemeHotkey } from '@space/ui/hooks/use-theme-hotkey';

import * as ThemeHelper from './theme-helper';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: ThemeHelper.Theme;
  storageKey?: string;
  disableTransition?: boolean;
};

type ThemeProviderState = {
  theme: ThemeHelper.Theme;
  setTheme: (theme: ThemeHelper.Theme) => void;
};

const ThemeProviderContext = React.createContext<ThemeProviderState | undefined>(undefined);

export function ThemeProvider(propsTheme: Readonly<ThemeProviderProps>) {
  const { children, defaultTheme = 'system', storageKey = 'theme', disableTransition = true, ...props } = propsTheme;

  const [theme, setThemeState] = React.useState<ThemeHelper.Theme>(() => {
    const storedTheme = localStorage.getItem(storageKey);

    if (ThemeHelper.isTheme(storedTheme)) {
      return storedTheme;
    }

    return defaultTheme;
  });

  const setTheme = React.useCallback(
    (nextTheme: ThemeHelper.Theme) => {
      localStorage.setItem(storageKey, nextTheme);
      setThemeState(nextTheme);
    },
    [storageKey],
  );

  const applyTheme = React.useCallback(
    (nextTheme: ThemeHelper.Theme) => {
      const root = document.documentElement;
      const resolvedTheme = nextTheme === 'system' ? ThemeHelper.getSystemTheme() : nextTheme;
      const restoreTransitions = disableTransition ? ThemeHelper.disableTransitionsTemporarily() : null;

      root.classList.remove('light', 'dark');
      root.classList.add(resolvedTheme);

      if (restoreTransitions) {
        restoreTransitions();
      }
    },
    [disableTransition],
  );

  const toggleTheme = React.useCallback(() => {
    setThemeState((currentTheme) => {
      const nextTheme = ThemeHelper.getNextThemeFromShortcut(currentTheme);

      localStorage.setItem(storageKey, nextTheme);

      return nextTheme;
    });
  }, [storageKey]);

  useThemeHotkey({ onToggle: toggleTheme });

  React.useEffect(() => {
    applyTheme(theme);

    if (theme !== 'system') {
      return undefined;
    }

    const mediaQuery = window.matchMedia(ThemeHelper.COLOR_SCHEME_QUERY);
    const handleChange = () => {
      applyTheme('system');
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [theme, applyTheme]);

  React.useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.storageArea !== localStorage) {
        return;
      }

      if (event.key !== storageKey) {
        return;
      }

      if (ThemeHelper.isTheme(event.newValue)) {
        setThemeState(event.newValue);
        return;
      }

      setThemeState(defaultTheme);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [defaultTheme, storageKey]);

  const value = React.useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme],
  );

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
