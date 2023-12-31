/* eslint-disable @typescript-eslint/no-explicit-any */
export type TypeMenuItems = {
    link: string;
    name: string;
    dropdown?: boolean;
};

export type TypeMenuItemsProps = {
    menu: TypeMenuItems[];
    sidebarOpen: boolean;
    setSidebarOpen: (arg0: boolean) => void;
};

export interface SubmenuItem {
    title: string;
    component: React.LazyExoticComponent<React.FC>;
}

export interface MainTab {
    title: string;
    submenu: SubmenuItem[];
}

export interface SubmenuTabsProps {
    tabs: MainTab[];
}
