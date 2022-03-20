"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_core_1 = require("apollo-server-core");
const graphql_depth_limit_1 = __importDefault(require("graphql-depth-limit"));
const http_1 = require("http");
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const schema_1 = require("./schema");
const FileDataSource_1 = require("./datasources/FileDataSource");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const httpServer = (0, http_1.createServer)(app);
const bootstrap = () => __awaiter(void 0, void 0, void 0, function* () {
    const server = new apollo_server_express_1.ApolloServer({
        schema: schema_1.schema,
        dataSources: () => ({
            dataAPI: new FileDataSource_1.FileDataSource(),
        }),
        validationRules: [(0, graphql_depth_limit_1.default)(7)],
        plugins: [
            (0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)(),
        ],
        context: ({ req }) => {
            const { authorization: token } = req.headers;
            return { token };
        },
    });
    app.use('*', (0, cors_1.default)());
    app.use((0, compression_1.default)());
    yield server.start();
    server.applyMiddleware({ app, path: '/api' });
    httpServer.listen({ port: process.env.PORT }, () => console.log(`\n🚀 GraphQL is now running on http://localhost:${process.env.PORT}/api`));
});
bootstrap();
exports.default = app;
//# sourceMappingURL=index.js.map