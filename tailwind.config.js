/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#2CDA9D',
                secondary: '#F0EBD8',
                bg: '#0C120C',
                gray: '#6D7275',
                l_gray: '#ECEBF3',
                blue_g: '#748CAB',
                blue_l: '#3E5C76',
                blue_m: '#1D2D44',
                blue_b: '',
                milken: '#E1CA96',
            },
        },
    },
    darkMode: ['class'],
    plugins: [require('flowbite/plugin')],
};
