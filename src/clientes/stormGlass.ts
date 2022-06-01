import { AxiosStatic } from "axios";

export interface StormGlassPointSource {
    [key: string]: number
}
export interface StormGlassPoint {
    readonly time: string;
    readonly waveHeight: StormGlassPointSource;
    readonly swellDirection: StormGlassPointSource;
    readonly swellPeriod: StormGlassPointSource;
    readonly swellHeight: StormGlassPointSource;
    readonly waveDirection: StormGlassPointSource;
    readonly windDirection: StormGlassPointSource;
    readonly windSpeed: StormGlassPointSource;
}
export interface StormGlassForecastResponse {
    hours: StormGlassPoint[];
}
export interface ForecastPoint {
    time: string;
    waveHeight: number;
    waveDirection: number;
    swellDirection: number;
    swellHeight: number;
    swellPeriod: number;
    windDirection: number;
    windSpeed: number;
}
export class StormGlass {

    readonly stormGlassAPIParams =
    'swellDirection,swellHeight,swellPeriod,waveDirection,waveHeight,windDirection,windSpeed';
    readonly stormGlassAPISource = 'noaa';

    constructor(protected request: AxiosStatic) {}

    public async fetchPoints(ltd: number, lng: number): Promise<{}> {
        const response = await this.request.get<StormGlassForecastResponse>(
            `https://api.stormglass.io/v2/weather/point?lat=${ltd}&lng=${lng}&params=${this.stormGlassAPIParams}&source=${this.stormGlassAPISource}`
        );
    }

    private normalizeResponse(points: StormGlassForecastResponse): ForcastPoint[] {

    }
}