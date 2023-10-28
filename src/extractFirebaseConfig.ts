import { NativeModules } from 'react-native';
import { Logger } from 'mayo-logger';
import { FirebaseConfig } from 'mayo-firebase-config'; // import the type from the module

const { FirebaseConfigExtractor } = NativeModules;

export const extractFirebaseConfig = async (): Promise<FirebaseConfig> => {
  Logger.info('Starting Firebase config extraction...', null, { tag: 'mayo-firebase-config-extractor' });

  const config: FirebaseConfig = FirebaseConfigExtractor.extractConfig();

  if (config && typeof config === 'object' && Object.keys(config).length > 0) {
    Logger.info('Successfully extracted Firebase config', null, { tag: 'mayo-firebase-config-extractor' });
  } else {
    Logger.warn('Failed to extract valid Firebase config or the config is empty', null, { tag: 'mayo-firebase-config-extractor' });
  }

  // This log may expose sensitive information, so be cautious about using it in a production environment
  Logger.info('Extracted Firebase config:', { config }, { tag: 'mayo-firebase-config-extractor' });

  return config;
};
