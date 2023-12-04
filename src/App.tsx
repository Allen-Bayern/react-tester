import { FC, useEffect } from 'react';

// 用两个新的hooks
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from './store';

const App: FC = () => {
    const count = useSelector(state => (state as RootState).countStore.count);
    const info = useSelector(state => (state as RootState).countStore.info);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'countStore/setNewObj',
        });
    }, []);

    return (
        <div className="app">
            <p className="cnt">
                The count is
                {count}
            </p>

            <p className="info">
                The info is
                {info}
            </p>
        </div>
    );
};

export default App;
