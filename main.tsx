// Safe-guard window.fetch assignment in sandbox environments
try {
  let currentFetch = window.fetch;
  Object.defineProperty(window, 'fetch', {
    configurable: true,
    enumerable: true,
    get() {
      return currentFetch;
    },
    set(val) {
      currentFetch = val;
    }
  });
} catch (e) {
  // Fail-safe if property descriptor is entirely read-only/unconfigurable
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
