import { CitiesInput, CitiesPayload } from '../generated/graphql';
import { filterCities } from '../helpers/filterCities';
import { isTokenValid } from '../validate';

export const cities = {
  Query: {
    async cities(parent: any, args: { input: CitiesInput }, context: any): Promise<CitiesPayload> {
      const { error } = await isTokenValid(context.token) as any;

      if (error) {
        return {
          totalCount: 0,
          cities: [],
        }
      }

      const { input } = args;
      const { dataAPI } = context.dataSources;

      const cities = await dataAPI.getAllCities();

      if (!input || !input?.filter) {
        return {
          totalCount: cities.length,
          cities,
        };
      }

      const filteredData = filterCities(cities, input.filter);

      return {
        totalCount: filteredData.length,
        cities: filteredData,
      };
    },
  },
};