import { Container } from '@mui/material';
import { ISettings, InputSlider } from './InputSlider';
import { CooldownButtons } from './CooldownButtons';

export const Controller = () => {
    const minutesSettings: ISettings = {
        inputStep: 5,
        inputMax: 719,
        sliderStep: 1,
        sliderMax: 59,
    };
    const secundesSettings: ISettings = {
        inputStep: 15,
        inputMax: 60,
        sliderStep: 15,
        sliderMax: 59,
    };

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
            }}
        >
            <InputSlider label='Minutes' unit='minutes' settings={minutesSettings} />
            <InputSlider label='Seconds' unit='seconds' settings={secundesSettings} />
            <CooldownButtons />
        </Container>
    );
};
