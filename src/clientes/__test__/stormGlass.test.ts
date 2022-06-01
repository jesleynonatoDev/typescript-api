import { StormGlass } from '@src/clientes/stormGlass';
import axios from 'axios';
import stormglassNormalizedResponseFixture from '@test/fixtures/stormglass_normalized_response_3_hours.json';
import stormglassWeatherPointFixture from '@test/fixtures/stormglass_weather_3_hours.json';

jest.mock('axios');

describe('StormGlass client service', () => {
    it('Should return the normalized forecast from the StormGlass service', async () => {
        const ltd = -33.792776;
        const lng = 150.289824;

        axios.get = jest.fn().mockResolvedValue({});

        const stormGlass = new StormGlass(axios);
        const response = await stormGlass.fetchPoints(ltd, lng);
        expect(stormglassNormalizedResponseFixture).toEqual(stormglassWeatherPointFixture);
    });
});