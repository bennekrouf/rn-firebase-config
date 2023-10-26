declare module 'rn-firebase-config' {
  export function extractFirebaseConfig(): {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
    databaseURL: string;
    webClientId?: string;
  };
}
