import { cities } from './cities';

export const resolvers: any = {
  Query: {
    ...cities.Query,
  }
};
