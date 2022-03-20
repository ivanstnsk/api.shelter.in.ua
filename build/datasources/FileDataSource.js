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
exports.FileDataSource = void 0;
const apollo_datasource_1 = require("apollo-datasource");
const fs_1 = __importDefault(require("fs"));
// import { validateCountryData } from "../helpers/countries.helpers";
class FileDataSource extends apollo_datasource_1.DataSource {
    constructor() {
        super();
    }
    getAllCities() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                fs_1.default.readFile(`${__dirname}/../../data/cities.json`, 'utf8', (err, data) => {
                    if (err) {
                        console.log('ERROR no data (need to add more logging here');
                        resolve([]);
                    }
                    else {
                        try {
                            const parsedData = JSON.parse(data);
                            // const validatedData = validateCountryData(parsedData);
                            // resolve(validatedData);
                            resolve(parsedData);
                        }
                        catch (err) {
                            console.log(err);
                            resolve([]);
                        }
                    }
                });
            });
        });
    }
}
exports.FileDataSource = FileDataSource;
//# sourceMappingURL=FileDataSource.js.map