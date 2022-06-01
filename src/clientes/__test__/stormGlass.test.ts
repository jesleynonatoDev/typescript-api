import { StormGlass } from '@src/clientes/stormGlass';
import axios from 'axios';

jest.mock('axios');

describe('StormGlass client service', () => {
    it('Should return the normalized forecast from the StormGlass service', async () => {
        const ltd = -33.792776;
        const lng = 150.289824;

        axios.get = jest.fn().mockResolvedValue({});

        const stormGlass = new StormGlass(axios);
        const response = await stormGlass.fetchPoints(ltd, lng);
        expect(response).toEqual({});
    });
});