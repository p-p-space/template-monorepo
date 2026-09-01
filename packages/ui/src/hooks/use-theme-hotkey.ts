import * as React from 'react';

type UseThemeHotkeyOptions = {
  onToggle: () => void;
};

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  return target.isContentEditable || target.closest("input, textarea, select, [contenteditable='true']") !== null;
}

export function useThemeHotkey({ onToggle }: Readonly<UseThemeHotkeyOptions>) {
  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (
        event.defaultPrevented
        || event.repeat
        || event.metaKey
        || event.ctrlKey
        || event.altKey
        || event.key.toLowerCase() !== 'd'
        || isTypingTarget(event.target)
      ) {
        return;
      }

      onToggle();
    }

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onToggle]);
}
