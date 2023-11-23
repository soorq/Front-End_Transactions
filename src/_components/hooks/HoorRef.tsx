import React from 'react';

const HookRef: React.FC = () => {
    const divEleme = React.useRef<HTMLDivElement | null>(null);

    const handleClickChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (divEleme) {
            divEleme.current!.innerText += e.currentTarget.value;
        }
    };

    React.useEffect(() => {
        if (divEleme.current) {
            divEleme.current.addEventListener('click', e => {
                divEleme.current!.style.top = `${e.clientX}`;
            });
        }

        return () => {
            divEleme.current?.removeEventListener('click', () => {});
        };
    }, []);

    return (
        <div className="relative w-full h-full col-span-3 col-start-1 row-start-5 rounded-xl bg-violet-400">
            <div ref={divEleme} className="absolute"></div>
            <button onClick={e => handleClickChange(e)}>
                Я умею менять тебя
            </button>
        </div>
    );
};

export default HookRef;

// useRef - это хук React, позволяющий ссылаться на значение, которое не нужно для рендеринга.
