export interface Ihms {
    seconds: string;
    minutes: string;
    hours: string;
}

export const getTime = (time: number): Ihms => {
    if (time < 0) throw new Error("store time < 0")
    const showZero = (time: number) => {
        if (time < 10) return `0${time}`;
        return String(time);
    };

    return {
        seconds: showZero(time % 60),
        minutes: showZero(Math.floor(time / 60) % 60),
        hours: showZero((Math.floor(time / 60 / 60) % 24) % 60),
    };
};
