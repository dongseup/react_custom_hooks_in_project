import useCookie from './useCookie';

export default function CookieComponent() {
    const [value, updateCookie, deleteCookie] = useCookie('name', 'John');

    return (
        <>
            <div>{value}</div>
            <button onClick={() => updateCookie('Sally')}>
                Change Name To sally
            </button>
            <button onClick={() => deleteCookie('name')}>Delete Name</button>
        </>
    );
}
