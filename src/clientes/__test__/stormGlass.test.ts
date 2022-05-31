import { StormGlass } from '@src/clientes/stormGlass';

describe('StormGlass client service', () => {
    it('Should return the normalized forecast from the StormGlass service', async () => {
        const ltd = -33.792776;
        const lng = 150.289824;

        const stormGlass = new StormGlass();
        const response = await stormGlass.fetchPoints(ltd, lng);
        expect(response).toEqual({});
    });
});