import React from 'react';
import { Link } from 'react-router-dom';
import { TypeMenuItemsProps } from '../../types/components';
import { Button } from 'flowbite-react';
import useColorMode from '../../hooks/useColorMode';

const Header: React.FC<TypeMenuItemsProps> = ({ menu }) => {
    const theme = useColorMode();

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
        <header className="w-full h-auto bg-primary/80">
            <div className="max-w-screen-lg py-5 mx-auto">
                <div className="flex items-center justify-between w-full">
                    <ul className="flex justify-between w-1/3">{menuMemo}</ul>
                    <div className="flex items-center">
                        <Button className="mx-10" onClick={() => theme}>
                            Dark?
                        </Button>
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
