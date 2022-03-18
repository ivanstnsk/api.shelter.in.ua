import { CititesFilter } from "../generated/graphql";
import { City } from "../generated/graphql";

export const filterCities = (cities: Array<City>, filter: CititesFilter): Array<City> => {
  if (!filter) {
    return cities;
  }

  let filteredData = cities;
  const { level_1, level_2, level_3, level_4 } = filter;

  if (level_1) {
    filteredData = filteredData.filter((c: City) => c.level_1 === level_1);
  }
  if (level_2) {
    filteredData = filteredData.filter((c: City) => c.level_2 === level_2);
  }
  if (level_3) {
    filteredData = filteredData.filter((c: City) => c.level_3 === level_3);
  }
  if (level_4) {
    filteredData = filteredData.filter((c: City) => c.level_4 === level_4);
  }

  return filteredData;
}