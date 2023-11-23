import React from 'react';
import { Outlet } from 'react-router-dom';

const HookLayout: React.FC = () => {
    return (
        <div className="w-full bg-emerald-50">
            <Outlet />
        </div>
    );
};

export default HookLayout;
