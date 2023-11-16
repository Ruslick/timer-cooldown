import { Container, Input } from '@mui/material';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { getSetActionCooldown } from '../../../store/Actions';
import { storeCooldown } from '../../../store/ColldownStore';
import { useCallback } from 'react';

export interface ISettings {
    inputStep: number;
    inputMax: number;
    sliderStep: number;
    sliderMax: number;
}

interface IInputSlider {
    unit: 'minutes' | 'seconds';
    label: string;
    settings: ISettings;
}

export const InputSlider = ({ label, unit, settings }: IInputSlider) => {
    const { inputStep, inputMax, sliderMax, sliderStep } = settings;
    const store = storeCooldown.useStore();

    const dispatch = storeCooldown.useStoreDispatch();

    const currentUnit = store[unit];

    const handle = useCallback(
        (event: React.BaseSyntheticEvent) => {
            const targetValue = +event.target.value > inputMax ? inputMax : +event.target.value;
            dispatch(getSetActionCooldown(unit, targetValue));
        },
        [unit, dispatch, inputMax]
    );

    return (
        <Container>
            <Grid container spacing={2} alignItems='center'>
                <Grid item>
                    <Typography gutterBottom>{label}</Typography>
                </Grid>
                <Grid item xs>
                    <Slider
                        disabled={store.isStarted}
                        value={typeof currentUnit === 'number' ? currentUnit : 0}
                        marks
                        onChange={handle as any}
                        step={sliderStep}
                        max={sliderMax}
                        min={0}
                    />
                </Grid>
                <Grid item>
                    <Input
                        disabled={store.isStarted}
                        value={currentUnit}
                        size='small'
                        onChange={handle as any}
                        inputProps={{
                            step: inputStep,
                            min: 0,
                            max: inputMax,
                            type: 'number',
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
};
