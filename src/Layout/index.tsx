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
    const [open, setOpen] = React.useState(true);

    console.log('render');

    return (
        <div className="w-full h-full bg-blue_b">
            <Header menu={menu} setSidebarOpen={setOpen} sidebarOpen={open} />
            <div className="min-h-screen">
                <SideBar open={open} />
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
