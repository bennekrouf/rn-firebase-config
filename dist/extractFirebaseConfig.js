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
console.log('MODULE MODULE MODULE MODULE :', Object.keys(FirebaseConfigExtractor));
const extractFirebaseConfig = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        mayo_logger_1.Logger.info('Starting1 Firebase config extraction...', null, { tag: 'mayo-firebase-config-extractor' });
        const config = yield FirebaseConfigExtractor.extractFirebaseConfig();
        if (config && typeof config === 'object' && Object.keys(config).length > 0) {
            mayo_logger_1.Logger.info('Successfully extracted Firebase config', null, { tag: 'mayo-firebase-config-extractor' });
        }
        else {
            mayo_logger_1.Logger.error('Failed to extract valid Firebase config or the config is empty', null, { tag: 'mayo-firebase-config-extractor' });
            throw new Error('Failed to extract valid Firebase config or the config is empty');
        }
        // Be cautious about logging potentially sensitive information
        mayo_logger_1.Logger.info('Extracted Firebase config:', { config }, { tag: 'mayo-firebase-config-extractor' });
        return config;
    }
    catch (error) {
        // Handle the error appropriately
        mayo_logger_1.Logger.error('Error extracting Firebase config', error, { tag: 'mayo-firebase-config-extractor' });
        throw error;
    }
});
exports.extractFirebaseConfig = extractFirebaseConfig;
