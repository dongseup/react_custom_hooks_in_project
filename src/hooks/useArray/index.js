import useArray from './useArray';

export default function Index() {
    const { array, set, push, filter, update, remove, clear } = useArray([
        1, 2, 3, 4, 5, 6,
    ]);

    return (
        <div>
            <div>{array.join(',')}</div>
            <button onClick={() => push(7)}>add 7</button>
            <button onClick={() => update(1, 9)}>
                Change secound element to 9
            </button>
            <button onClick={() => remove(1)}>Remove Second Element</button>
            <button onClick={() => filter(n => n < 3)}>
                Keep Numbers Less Than 4
            </button>
            <button onClick={() => set([1, 2])}>Set To 1, 2</button>
            <button onClick={clear}>Clear</button>
        </div>
    );
}
