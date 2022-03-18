import { CitiesInput, CitiesPayload } from '../generated/graphql';
import { filterCities } from '../helpers/filterCities';

export const cities = {
  Query: {
    async cities(parent: any, args: { input: CitiesInput }, context: any): Promise<CitiesPayload> {
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