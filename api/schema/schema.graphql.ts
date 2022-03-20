import { gql } from 'apollo-server-core';

export const typeDefs = gql`
input CititesFilter {
  level_1: Int
  level_2: Int
  level_3: Int
  level_4: Int
}

input CitiesInput {
  filter: CititesFilter
}

type CitiesPayload {
  totalCount: Int!
  cities: [City!]!
}

type City {
  level_1: Int!
  level_2: Int!
  level_3: Int!
  level_4: Int!
  object_category: String!
  object_name: String!
  object_code: Int!
  region: String!
  community: String!
}

type Query {
  cities(input: CitiesInput): CitiesPayload!
}
`;
