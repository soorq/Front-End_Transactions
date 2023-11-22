import React from 'react';
import HookState from './hooks/state';
import HookEffect from './hooks/effect';
import HookRef from './hooks/ref';

const Hooks: React.FC = () => {
    return (
        <div className="grid grid-rows-6 grid-cols-12">
            <HookState />
            <HookEffect />
            <HookRef />
        </div>
    );
};

export default Hooks;

// 1 - useState - [Complete]

// 2 -useEffect - [Complete]

// 3 -useLayoutEffect - [Complete]

// 4 -useRef -

// 5 -useContext -

// 6 - useReducer -

// 7 - useMemo -

// 8 - useCallback -
