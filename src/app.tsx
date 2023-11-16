import React, { useState } from 'react';
import GlobalStyles from './assets/styles/globalStyles';
import { HeaderLayout } from './components/Layout/HeaderLayout';
import { WrapperTimer } from './components/Main/Timer/WrapperTimer';
import { WrapperCooldown } from './components/Main/Cooldown/WrapperCooldown';

export type TPages = 'cooldown' | 'timer';

function App() {
    const [page, setPage] = useState<TPages>('timer');
    const onPageChange = React.useCallback(() => {
        setPage(page === 'timer' ? 'cooldown' : 'timer');
    }, [page]);
    return (
        <>
            <GlobalStyles />
            <HeaderLayout page={page} onPageChange={onPageChange} />
            <WrapperTimer hidden={page === 'cooldown'} />
            <WrapperCooldown hidden={page === 'timer'} />
        </>
    );
}

export default App;
