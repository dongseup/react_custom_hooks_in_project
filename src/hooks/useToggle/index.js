import useToggle from './useToggle';

export default function Index() {
    const [value, toggleValue] = useToggle(false);

    return (
        <div>
            <div>{value.toString()}</div>
            <button onClick={toggleValue}>Toggle</button>
            <button onClick={() => toggleValue(true)}>Make Ture</button>
            <button onClick={() => toggleValue(false)}>Make false</button>
        </div>
    );
}
