import { useState, useEffect } from 'react';
import { getUnixTime } from 'date-fns';

import { useIsFirstRender } from '@/hooks';

interface CountDownProps {
    deadlineTime: number;
}

const CountDown: React.FC<CountDownProps> = props => {
    const { deadlineTime } = props;

    const isFirstRender = useIsFirstRender();
    useEffect(() => {
        console.log('isFirstRender\n', isFirstRender);
    }, [isFirstRender]);

    const [restTime, setRestTime] = useState(deadlineTime - getUnixTime(Date.now()));

    useEffect(() => {
        const intervalInt = setInterval(() => {
            setRestTime(() => deadlineTime - getUnixTime(Date.now()));
        }, 1000);

        return () => {
            clearInterval(intervalInt);
        };
    }, []);

    return <div className="CountDown">{restTime}</div>;
};

export default CountDown;
