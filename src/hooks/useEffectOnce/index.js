import { useState } from 'react';
import useEffectOnce from './useEffectOnce';

export default function Index() {
    const [count, setCount] = useState(0);

    useEffectOnce(() => console.log('useEffectOnce'));

    return (
        <>
            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
        </>
    );
}
