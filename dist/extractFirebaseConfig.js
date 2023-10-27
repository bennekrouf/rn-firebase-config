"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractFirebaseConfig = void 0;
const react_native_1 = require("react-native");
const mayo_logger_1 = require("mayo-logger");
const { FirebaseConfigExtractor } = react_native_1.NativeModules;
const extractFirebaseConfig = () => {
    mayo_logger_1.Logger.info('Starting Firebase config extraction...', null, { tag: 'mayo-firebase-config-extractor' });
    const config = FirebaseConfigExtractor.extractConfig();
    if (config && typeof config === 'object' && Object.keys(config).length > 0) {
        mayo_logger_1.Logger.info('Successfully extracted Firebase config', null, { tag: 'mayo-firebase-config-extractor' });
    }
    else {
        mayo_logger_1.Logger.warn('Failed to extract valid Firebase config or the config is empty', null, { tag: 'mayo-firebase-config-extractor' });
    }
    // This log may expose sensitive information, so be cautious about using it in a production environment
    mayo_logger_1.Logger.info('Extracted Firebase config:', { config }, { tag: 'mayo-firebase-config-extractor' });
    return config;
};
exports.extractFirebaseConfig = extractFirebaseConfig;
