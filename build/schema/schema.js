"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
require("graphql-import-node");
const schema_1 = require("@graphql-tools/schema");
const resolvers_1 = require("../resolvers");
const schema_graphql_1 = require("./schema.graphql");
exports.schema = (0, schema_1.makeExecutableSchema)({
    typeDefs: schema_graphql_1.typeDefs,
    resolvers: resolvers_1.resolvers,
});
//# sourceMappingURL=schema.js.map