import React from 'react';

const ThemeToggle = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const [theme, setTheme] = React.useState(savedTheme);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    React.useEffect(() => {
        document.documentElement.className =
            theme === 'light' ? 'light' : 'dark';
    }, [theme]);

    return (
        <div>
            <button
                onClick={toggleTheme}
                className="px-4 py-2 mx-4 bg-black rounded-md dark:bg-primary"
            >
                {theme === 'dark' ? 'light' : 'dark'}
            </button>
        </div>
    );
};

export default ThemeToggle;
