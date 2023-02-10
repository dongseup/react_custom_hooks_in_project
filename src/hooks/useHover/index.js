import { useRef } from 'react';
import useHover from './useHover';

export default function Index() {
    const elementRef = useRef();
    const hovered = useHover(elementRef);

    return (
        <div
            ref={elementRef}
            style={{
                backgroundColor: hovered ? 'blue' : 'red',
                width: '100px',
                height: '100px',
            }}
        >
            useHovered
        </div>
    );
}
