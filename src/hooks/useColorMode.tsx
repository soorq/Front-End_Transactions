export const useTheme = () => {
    const stylesheets = {
        light: '',
        dark: '',
    };

    const systemTheme = () =>
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';

    const createStylesheetLink = (): HTMLLinkElement => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.id = 'antd-stylesheet';
        document.head.appendChild(link);
        return link;
    };
    const getTheme = () =>
        (localStorage.getItem('theme') as Theme) || systemTheme();
    const getStylesheetLink = (): HTMLLinkElement =>
        document.head.querySelector('#antd-stylesheet') ||
        createStylesheetLink();

    const setTheme = (theme: Theme) => {
        localStorage.setItem('theme', theme);
    };

    return () => setTheme(getTheme() === 'dark' ? 'light' : 'dark');
};
