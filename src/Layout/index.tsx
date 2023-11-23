import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../_components/Static/Header';
import type { TypeMenuItems } from '../types/components';
import SideBar from '../_components/Sidebar/index';

const menu: TypeMenuItems[] = [
    { link: 'react', name: 'React?', dropdown: false },
    { link: 'component', name: 'Гит', dropdown: false },
    { link: 'hooks', name: 'Author', dropdown: false },
];

const MainLayout: React.FC = () => {
    return (
        <div className="w-full h-full bg-blue_b">
            <Header menu={menu} />
            <div className="min-h-screen">
                <SideBar />
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
