import React from 'react';
// import OtherComponent from './otherComponent';

const HookState: React.FC = () => {
    const [value, setCount] = React.useState(0);

    React.useEffect(() => {
        console.log('Aa');
    }, [value]);

    return (
        <div className="col-span-3">
            <div className="code-from-hook">
                {/* <OtherComponent count={value} /> */}
                <code className="bg-emerald-300">
                    <pre>Your count is {value}</pre>
                </code>
                <div className="flex justify-between w-full mb-5">
                    <button
                        className="button"
                        onClick={() => setCount(prev => prev + 1)}
                    >
                        +
                    </button>
                    <button
                        className="button"
                        onClick={() => setCount(prev => prev - 1)}
                    >
                        -
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HookState;

// 1 - useState - [Complete]
