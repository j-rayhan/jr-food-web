import React from 'react';
import loaderImg from './assets/images/loader.gif';
import './App.css';
import Main from './routes';

const wait = (milliseconds = 3000) => new Promise((resolve) => setTimeout(resolve, milliseconds));

const App: React.FC = () => {
    const [isLoading, setLoading] = React.useState<boolean>(false);
    const fetchData = React.useCallback(async () => {
        try {
            setLoading(true);
            await wait();
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error('ERROR***=====>', error);
        } finally {
            setLoading(false);
        }
    }, []);
    React.useLayoutEffect(() => {
        fetchData();
    }, [fetchData]);

    return isLoading ? (
        <div className="loader-container">
            <img src={loaderImg} alt="" />
        </div>
    ) : (
        <Main />
    );
};
export default App;
