import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path: '/',
        lazy: async () => {
            const MainLayout = await import('../Layout/index');
            return { Component: MainLayout.default };
        },
    },
    {
        path: 'hooks',
        lazy: async () => {
            const Hooks = await import('../Layout/HookLayout');
            return { Component: Hooks.default };
        },
        children: [
            {
                path: 'state',
                lazy: async () => {
                    const useState = await import(
                        '../_components/hooks/HookState'
                    );
                    return { Component: useState.default };
                },
            },
            {
                path: 'effect',
                lazy: async () => {
                    const useEffect = await import(
                        '../_components/hooks/HookEffect'
                    );
                    return { Component: useEffect.default };
                },
            },
            {
                path: 'memo',
                lazy: async () => {
                    const useMemo = await import(
                        '../_components/hooks/HookMemo'
                    );
                    return { Component: useMemo.default };
                },
            },
        ],
    },
]);
