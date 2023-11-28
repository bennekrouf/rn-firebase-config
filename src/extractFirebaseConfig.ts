import { NativeModules } from 'react-native';
import { Logger } from 'mayo-logger';
import { FirebaseConfig } from 'mayo-firebase-config';

const { FirebaseConfigExtractor } = NativeModules;
console.log('MODULE MODULE MODULE MODULE :', Object.keys(FirebaseConfigExtractor));

export const extractFirebaseConfig = async (): Promise<FirebaseConfig> => {
  try {
    Logger.info('Starting1 Firebase config extraction...', null, { tag: 'mayo-firebase-config-extractor' });

    const config: FirebaseConfig = await FirebaseConfigExtractor.extractFirebaseConfig();

    if (config && typeof config === 'object' && Object.keys(config).length > 0) {
      Logger.info('Successfully extracted Firebase config', null, { tag: 'mayo-firebase-config-extractor' });
    } else {
      Logger.warn('Failed to extract valid Firebase config or the config is empty', null, { tag: 'mayo-firebase-config-extractor' });
    }

    // Be cautious about logging potentially sensitive information
    Logger.info('Extracted Firebase config:', { config }, { tag: 'mayo-firebase-config-extractor' });

    return config;
  } catch (error) {
    // Handle the error appropriately
    Logger.error('Error extracting Firebase config', error, { tag: 'mayo-firebase-config-extractor' });
    throw error;
  }
};
