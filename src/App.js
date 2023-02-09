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
import UseEventListener from './hooks/useEventListener';
import UseOnScreen from './hooks/useOnScreen';
import UseWindowSize from './hooks/useWindowSize';
import UseMediaQuery from './hooks/useMediaQuery';
import UseStateWithValidation from './hooks/useStateWithValidation';
import UseSize from './hooks/useSize';
import UseEffectOnce from './hooks/useEffectOnce';
import UseClickOutside from './hooks/useClickOutside';
import UseDarkMode from './hooks/useDarkMode';
import UseCopyToClipboard from './hooks/useCopyToClipboard';

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
            <br />
            <h1>useEventListener</h1>
            <UseEventListener />
            <br />
            <h1>UseOnScreen</h1>
            <UseOnScreen />
            <br />
            <h1>UseWindowSize</h1>
            <UseWindowSize />

            <br />
            <h1>UseMediaQuery</h1>
            <UseMediaQuery />
            <br />
            <h1>UseStateWithValidation</h1>
            <UseStateWithValidation />
            <br />
            <h1>UseSize</h1>
            <UseSize />
            <br />
            <h1>UseEffectOnce</h1>
            <UseEffectOnce />
            <br />
            <h1>UseClickOutside</h1>
            <UseClickOutside />
            <br />
            <h1>UseDarkMode</h1>
            <UseDarkMode />
            <br />
            <h1>UseCopyToClipboard</h1>
            <UseCopyToClipboard />
        </>
    );
}

export default App;
