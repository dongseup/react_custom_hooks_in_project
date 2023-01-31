import UseToggle from './hooks/useToggle';
import UseTimeout from './hooks/useTimeout';
import UseDebounce from './hooks/useDebounce';
import UseUpdateEffect from './hooks/useUpdateEffect';
import UseArray from './hooks/useArray';
import UsePrevious from './hooks/usePrevious';
import UseStateWithHistory from './hooks/useStateWithHistory';
import UseStorage from './hooks/useStorage';
import UseAsync from './hooks/useAsync';
import UseFetch from './hooks/useFetch';
import UseScript from './hooks/useScript';

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
            <br />
            <h1>useStateWithHistory</h1>
            <UseStateWithHistory />
            <br />
            <h1>useStorage</h1>
            <UseStorage />
            <br />
            <h1>UseAsync</h1>
            <UseAsync />
            <br />
            <h1>UseFetch</h1>
            <UseFetch />
            <br />
            <h1>UseScript</h1>
            <UseScript />
        </>
    );
}

export default App;
