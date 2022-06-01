import { AxiosStatic } from "axios";
export class StormGlass {

    constructor(protected request: AxiosStatic) {}

    public async fetchPoints(ltd: number, lng: number): Promise<{}> {
        return this.request.get('');
    }
}