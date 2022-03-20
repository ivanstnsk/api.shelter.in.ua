"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_core_1 = require("apollo-server-core");
exports.typeDefs = (0, apollo_server_core_1.gql) `
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
//# sourceMappingURL=schema.graphql.js.map