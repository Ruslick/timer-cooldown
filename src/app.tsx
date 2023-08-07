
import { useState } from 'react';
import GlobalStyles from './assets/styles/globalStyles';
import { HeaderLayout } from './components/Layout/HeaderLayout';
import { WrapperTimer } from './components/Main/Timer/WrapperTimer';
import { WrapperCooldown } from './components/Main/Cooldown/WrapperCooldown';

export type TPages = 'cooldown' | 'timer';

function App() {
    const [page, setPage] = useState<TPages>('timer');

    const onPageChange = () => {
        setPage(page === 'timer' ? 'cooldown' : 'timer');
    };
    return (
        <>
            <GlobalStyles />
            <HeaderLayout page={page} onPageChange={onPageChange} />
            <WrapperTimer hidden={page !== 'timer'} />
            <WrapperCooldown hidden={page !== 'cooldown'} />
        </>
    );
}

export default App;
