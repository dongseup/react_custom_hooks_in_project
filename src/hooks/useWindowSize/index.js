import useWindowSize from './useWindowSize';

export default function Index() {
    const { width, height } = useWindowSize();

    return (
        <div>
            {width} x {height}
        </div>
    );
}
