const THEME_VALUES: Set<Theme> = new Set(['dark', 'light', 'system']);
type ResolvedTheme = 'dark' | 'light';

/** Media query used to determine whether the operating system prefers dark mode. */
export const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';

/** The user's saved theme preference; `system` delegates the final choice to the OS. */
export type Theme = 'dark' | 'light' | 'system';

/** Returns whether a value read from storage is one of the supported theme preferences. */
export function isTheme(value: string | null): value is Theme {
  if (value === null) {
    return false;
  }

  return THEME_VALUES.has(value as Theme);
}

/** Resolves the browser's current color-scheme preference to `dark` or `light`. */
export function getSystemTheme(): ResolvedTheme {
  if (window.matchMedia(COLOR_SCHEME_QUERY).matches) {
    return 'dark';
  }

  return 'light';
}

/**
 * Temporarily disables every CSS transition in the document.
 *
 * Returns a restore function. It forces a style calculation, then waits for two
 * animation frames before removing the injected style so the theme class change
 * is painted without animating while future transitions remain available.
 */
export function disableTransitionsTemporarily() {
  const style = document.createElement('style');
  style.appendChild(
    document.createTextNode('*,*::before,*::after{-webkit-transition:none!important;transition:none!important}'),
  );
  document.head.appendChild(style);

  return () => {
    window.getComputedStyle(document.body);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        style.remove();
      });
    });
  };
}

/**
 * Chooses the opposite concrete theme for the keyboard shortcut.
 *
 * A `system` preference first resolves the current OS setting, then returns its
 * opposite; activating the shortcut always produces `dark` or `light`.
 */
export function getNextThemeFromShortcut(currentTheme: Theme): Theme {
  if (currentTheme === 'dark') {
    return 'light';
  }

  if (currentTheme === 'light') {
    return 'dark';
  }

  return getSystemTheme() === 'dark' ? 'light' : 'dark';
}
