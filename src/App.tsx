import { getUnixTime } from 'date-fns';
import CountDown from './components/CountDown';

function App() {
    const ddl = getUnixTime(new Date('2023/12/08 00:01:00'));
    return <CountDown deadlineTime={ddl} />;
}

export default App;
