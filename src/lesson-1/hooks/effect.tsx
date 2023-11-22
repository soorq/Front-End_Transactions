import React from 'react';

type TypeMouseCoord = {
    x?: number;
    y?: number;
};

const HookEffect = () => {
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
        <div className="col-span-3 col-start-1 row-start-3 bg-black rounded-xl w-full h-full">
            <div className="flex justify-center items-center w-full py-3 relative">
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
