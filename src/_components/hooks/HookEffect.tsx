import React from 'react';

type TypeMouseCoord = {
    x?: number;
    y?: number;
};

const HookEffect: React.FC = () => {
    const [valueMouse, setValueMouse] = React.useState<TypeMouseCoord>({});

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setValueMouse({ x: e.clientX, y: e.clientY });
        console.log(e.clientX, e.clientY);
    };

    React.useEffect(() => {
        console.log('Render Effect component');
    }, []);

    console.log('render HookEffect component');

    React.useEffect(() => {
        console.log(valueMouse.x, valueMouse.y);
    }, [valueMouse]);

    return (
        <div className="w-full h-full col-span-3 col-start-1 row-start-3 bg-black rounded-xl">
            <div className="relative flex items-center justify-center w-full py-3">
                <button onClick={e => handleClick(e)}>Click me</button>
            </div>
            <code className="text-center">
                <pre about="js">{valueMouse.x && valueMouse.y}</pre>
            </code>
        </div>
    );
};

export default HookEffect;

// useLayoutEffect - Хрень, которая вызывается синхронно с рендером компонента
// Есть такие как , componentDidMount, componentDidUpdate, componentWillUnmount
