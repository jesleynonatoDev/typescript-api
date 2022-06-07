import { StormGlass } from '@src/clientes/stormGlass';
import stormglassNormalizedResponseFixture from '@test/fixtures/stormglass_normalized_response_3_hours.json';
import * as stormglassWeatherPointFixture from '@test/fixtures/stormglass_weather_3_hours.json';
import axios from 'axios';

jest.mock('axios');

const lat = -33.792726;
const lng = 151.289824;

describe('StormGlass client', () => {

  const mockedAxios = axios as jest.Mocked<typeof axios>;

  it('should return the normalized forecast from the StormGlass service', async () => {

    mockedAxios.get.mockResolvedValue({ data: stormglassWeatherPointFixture });

    const stormGlass = new StormGlass(mockedAxios);
    const response = await stormGlass.fetchPoints(lat, lng);
    expect(response).toEqual(stormglassNormalizedResponseFixture);
  });

  it('should exclude incomplete data points', async() => {

    const incompleteResponse = {
        hours: [
            {
                windDirection: {
                    noaa: 300,
                },
                time: '2020-04-25T00:00:00+00:00'
            },
        ],
    };
    mockedAxios.get.mockResolvedValue({data: incompleteResponse});

    const stormGlass = new StormGlass(mockedAxios);
    const response = await stormGlass.fetchPoints(lat, lng);

    expect(response).toEqual([])
  });

  it('should get a generic erro from stormGlass service when the request fail before reaching the service', async () => {
    
    mockedAxios.get.mockRejectedValue({message: 'Network Error'});
    
    const stormGlass = new StormGlass(mockedAxios);
    await expect(stormGlass.fetchPoints(lat, lng)).rejects.toThrow(
        'Unexpected error when trying to communicate to StormGlass, Network Error'
    );
  });

});
