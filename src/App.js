import UseToggle from './hooks/useToggle';
import UseTimeout from './hooks/useTimeout';
import UseDebounce from './hooks/useDebounce';
import UseUpdateEffect from './hooks/useUpdateEffect';

function App() {
    return (
        <>
            <h1>usetoggle</h1>
            <UseToggle />
            <br />
            <h1>usetimeout</h1>
            <UseTimeout />
            <br />
            <h1>useDebounce</h1>
            <UseDebounce />
            <br />
            <h1>useUpdateEffect</h1>
            <UseUpdateEffect />
        </>
    );
}

export default App;
