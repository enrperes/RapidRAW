import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { installFrontendLogBridge } from './utils/frontendLogBridge';
import './styles.css';

installFrontendLogBridge();

const Root = lazy(() => (getCurrentWindow().label === 'viewer' ? import('./window/ViewerWindow') : import('./App')));

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <Root />
    </Suspense>
  </React.StrictMode>,
);
