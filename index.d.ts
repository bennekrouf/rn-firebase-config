declare module 'mayo-firebase-config' {
  export interface FirebaseConfig {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId?: string;
    databaseURL?: string;
    webClientId?: string;
    [key: string]: string | undefined;
  }

  export function extractConfig(): Promise<FirebaseConfig>;
}
