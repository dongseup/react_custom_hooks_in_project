import { useEffect, useRef } from 'react';

export default function useRenderCount() {
    const count = useRef(0);

    useEffect(() => {
        count.current++;
    }, []);

    return count.current;
}
