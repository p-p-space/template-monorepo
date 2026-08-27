import { useState } from 'react';

import { Button } from '@space/ui/components/button';

import heroImg from './assets/hero.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="flex grow flex-col items-center justify-center gap-6.25 px-5 py-8 text-center lg:px-0 lg:py-0">
        <div className="relative h-44.75 w-full">
          <img src={heroImg} className="relative z-0 mx-auto h-44.75 w-42.5" width="170" height="179" alt="" />
          <img
            src={reactLogo}
            className="absolute inset-x-0 top-8.5 z-10 mx-auto h-7 w-auto transform-[perspective(2000px)_rotateZ(300deg)_rotateX(44deg)_rotateY(39deg)_scale(1.4)]"
            alt="React logo"
          />
          <img
            src={viteLogo}
            className="absolute inset-x-0 top-26.75 z-0 mx-auto h-6.5 w-auto transform-[perspective(2000px)_rotateZ(300deg)_rotateX(40deg)_rotateY(39deg)_scale(0.8)]"
            alt="Vite logo"
          />
        </div>
        <div>
          <h1 className="my-5 text-4xl font-medium tracking-[-1.68px] text-foreground lg:my-8 lg:text-[56px]">
            Get started
          </h1>
          <p className="text-muted-foreground">
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <Button
          type="button"
          className="mb-6 h-auto rounded-[5px] border-2 border-transparent bg-(--accent-bg) px-2.5 py-1.25 font-mono text-base text-accent transition-[border-color] duration-300 hover:bg-(--accent-bg) hover:border-(--accent-border) focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </Button>
      </section>

      <div className="relative w-full before:absolute before:-top-1 before:left-0 before:border-[5px] before:border-transparent before:border-l-border after:absolute after:-top-1 after:right-0 after:border-[5px] after:border-transparent after:border-r-border" />

      <section className="flex border-t border-border text-left max-lg:flex-col max-lg:text-center">
        <div className="flex-1 p-6 lg:border-r lg:border-border lg:p-8">
          <svg className="mb-4 h-5.5 w-5.5" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2 className="mb-2 text-xl font-medium text-foreground lg:text-2xl">Documentation</h2>
          <p className="text-muted-foreground">Your questions, answered</p>
          <ul className="mt-5 flex list-none flex-wrap justify-center gap-2 p-0 lg:mt-8">
            <li>
              <a
                className="flex items-center gap-2 rounded-md bg-(--social-bg) px-3 py-1.5 text-[16px] text-foreground no-underline transition-shadow duration-300 hover:[box-shadow:var(--shadow)]"
                href="https://vite.dev/"
                target="_blank"
                rel="noopener"
              >
                <img className="h-4.5 w-auto" src={viteLogo} alt="vite-logo" /> Explore Vite
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-2 rounded-md bg-(--social-bg) px-3 py-1.5 text-[16px] text-foreground no-underline transition-shadow duration-300 hover:[box-shadow:var(--shadow)]"
                href="https://react.dev/"
                target="_blank"
                rel="noopener"
              >
                <img className="h-4.5 w-auto" src={reactLogo} alt="react-logo" /> Learn more
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-6 lg:p-8">
          <svg className="mb-4 h-5.5 w-5.5" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2 className="mb-2 text-xl font-medium text-foreground lg:text-2xl">Connect with us</h2>
          <p className="text-muted-foreground">Join the Vite community</p>
          <ul className="mt-5 flex list-none flex-wrap justify-center gap-2 p-0 lg:mt-8">
            <li>
              <a
                className="flex items-center gap-2 rounded-md bg-(--social-bg) px-3 py-1.5 text-[16px] text-foreground no-underline transition-shadow duration-300 hover:[box-shadow:var(--shadow)]"
                href="https://github.com/vitejs/vite"
                target="_blank"
                rel="noopener"
              >
                <svg className="h-4.5 w-4.5 dark:invert dark:brightness-200" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-2 rounded-md bg-(--social-bg) px-3 py-1.5 text-[16px] text-foreground no-underline transition-shadow duration-300 hover:[box-shadow:var(--shadow)]"
                href="https://chat.vite.dev/"
                target="_blank"
                rel="noopener"
              >
                <svg className="h-4.5 w-4.5 dark:invert dark:brightness-200" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-2 rounded-md bg-(--social-bg) px-3 py-1.5 text-[16px] text-foreground no-underline transition-shadow duration-300 hover:[box-shadow:var(--shadow)]"
                href="https://x.com/vite_js"
                target="_blank"
                rel="noopener"
              >
                <svg className="h-4.5 w-4.5 dark:invert dark:brightness-200" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-2 rounded-md bg-(--social-bg) px-3 py-1.5 text-[16px] text-foreground no-underline transition-shadow duration-300 hover:[box-shadow:var(--shadow)]"
                href="https://bsky.app/profile/vite.dev"
                target="_blank"
                rel="noopener"
              >
                <svg className="h-4.5 w-4.5 dark:invert dark:brightness-200" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="relative w-full before:absolute before:-top-1 before:left-0 before:border-[5px] before:border-transparent before:border-l-border after:absolute after:-top-1 after:right-0 after:border-[5px] after:border-transparent after:border-r-border" />
      <section className="h-12 border-t border-border lg:h-22" />
    </>
  );
}

export default App;
