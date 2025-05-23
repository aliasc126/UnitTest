export function fibonacciSeries(n: number): number[] {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const series: number[] = [0, 1];
    for (let i = 2; i < n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return series;
}