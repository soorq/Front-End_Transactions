import React from 'react';
import { Link } from 'react-router-dom';
import { TypeMenuItemsProps } from '../../types/components';
import ThemeToggle from '../ThemeToggle';

const Header: React.FC<TypeMenuItemsProps> = ({
    menu,
    setSidebarOpen,
    sidebarOpen,
}) => {
    const menuMemo = React.useMemo(() => {
        return menu.map((el, i) => {
            return (
                <li key={i} className="px-4 py-2">
                    <Link
                        to={el.link}
                        className="font-medium transition-all delay-75 text-blue_b hover:text-milken"
                    >
                        {el.name}
                    </Link>
                </li>
            );
        });
    }, [menu]);

    return (
        <header className="w-full h-auto dark:bg-black bg-primary/80">
            <div className="max-w-screen-lg py-5 mx-auto">
                <div className="flex items-center justify-between w-full px-10">
                    <ul className="justify-between hidden w-1/3 sm:flex">
                        {menuMemo}
                    </ul>
                    <button
                        // aria-controls="sidebar"
                        type="button"
                        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        onClick={e => {
                            e.stopPropagation();
                            setSidebarOpen(!sidebarOpen);
                        }}
                    >
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                clipRule="evenodd"
                                fillRule="evenodd"
                                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                            ></path>
                        </svg>
                    </button>
                    <div className="flex items-center">
                        <ThemeToggle />
                        <div className="max-w-[50px] max-h-[50px]">
                            <img
                                src={'/vite.svg'}
                                alt="Logo"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
