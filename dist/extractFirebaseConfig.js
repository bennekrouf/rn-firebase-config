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
exports.extractFirebaseConfig = void 0;
const react_native_1 = require("react-native");
const mayo_logger_1 = require("mayo-logger");
const { FirebaseConfigExtractor } = react_native_1.NativeModules;
const extractFirebaseConfig = () => __awaiter(void 0, void 0, void 0, function* () {
    mayo_logger_1.Logger.info('TOTO Starting Firebase config extraction...', null, { tag: 'mayo-firebase-config-extractor' });
    const config = yield FirebaseConfigExtractor.extractConfig();
    if (config && typeof config === 'object' && Object.keys(config).length > 0) {
        mayo_logger_1.Logger.info('Successfully extracted Firebase config', null, { tag: 'mayo-firebase-config-extractor' });
    }
    else {
        mayo_logger_1.Logger.warn('Failed to extract valid Firebase config or the config is empty', null, { tag: 'mayo-firebase-config-extractor' });
    }
    // This log may expose sensitive information, so be cautious about using it in a production environment
    mayo_logger_1.Logger.info('Extracted Firebase config:', { config }, { tag: 'mayo-firebase-config-extractor' });
    return config;
});
exports.extractFirebaseConfig = extractFirebaseConfig;
