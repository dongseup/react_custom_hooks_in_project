import UseToggle from './hooks/useToggle';
import UseTimeout from './hooks/useTimeout';
import UseDebounce from './hooks/useDebounce';
import UseUpdateEffect from './hooks/useUpdateEffect';
import UseArray from './hooks/useArray';
import UsePrevious from './hooks/usePrevious';

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
            <br />
            <h1>useArray</h1>
            <UseArray />
            <br />
            <h1>usePrevious</h1>
            <UsePrevious />
        </>
    );
}

export default App;
