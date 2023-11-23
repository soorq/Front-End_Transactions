import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/index.tsx';
import Loader from './_components/Loader/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} fallbackElement={<Loader />} />
        <App />
    </React.StrictMode>
);
