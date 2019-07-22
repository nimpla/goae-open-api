const multiplier = 0.0582873;

export const calculateRate = (points) => {
    return Math.round(points * multiplier * 100) / 100;
}
