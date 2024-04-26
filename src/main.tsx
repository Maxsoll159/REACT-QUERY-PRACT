import React from 'react'
import ReactDOM from 'react-dom/client'

import { NextUIProvider } from "@nextui-org/react";
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router.tsx';

import './index.css';
import { TakStackProvider } from './plugins/TakStackProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TakStackProvider>

      <NextUIProvider>
        <main className="dark text-foreground bg-background">
          <RouterProvider router={router} />
        </main>
      </NextUIProvider>

    </TakStackProvider>
  </React.StrictMode>,
)
