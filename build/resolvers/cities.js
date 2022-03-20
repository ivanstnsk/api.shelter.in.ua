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
Object.defineProperty(exports, "__esModule", { value: true });
exports.cities = void 0;
const filterCities_1 = require("../helpers/filterCities");
const validate_1 = require("../validate");
exports.cities = {
    Query: {
        cities(parent, args, context) {
            return __awaiter(this, void 0, void 0, function* () {
                const { error } = yield (0, validate_1.isTokenValid)(context.token);
                if (error) {
                    return {
                        totalCount: 0,
                        cities: [],
                    };
                }
                const { input } = args;
                const { dataAPI } = context.dataSources;
                const cities = yield dataAPI.getAllCities();
                if (!input || !(input === null || input === void 0 ? void 0 : input.filter)) {
                    return {
                        totalCount: cities.length,
                        cities,
                    };
                }
                const filteredData = (0, filterCities_1.filterCities)(cities, input.filter);
                return {
                    totalCount: filteredData.length,
                    cities: filteredData,
                };
            });
        },
    },
};
//# sourceMappingURL=cities.js.map