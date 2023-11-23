import React from 'react';

const Loader: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="relative">
                <div className="w-24 h-24 border-t-8 border-b-8 rounded-full border-milken"></div>
                <div className="absolute top-0 left-0 w-24 h-24 border-t-8 border-b-8 rounded-full border-secondary animate-spin"></div>
            </div>
        </div>
    );
};

export default Loader;
