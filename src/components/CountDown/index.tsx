import React from 'react';
import { getUnixTime } from 'date-fns';

interface CountDownProps {
    readonly deadlineTime: number;
}

const { useState, useEffect } = React;

const CountDown: React.FC<CountDownProps> = props => {
    const { deadlineTime } = props;

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
