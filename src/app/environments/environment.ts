// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const FIREBASE_URL = "https://mavvana-1755b-default-rtdb.firebaseio.com/";
// const STORAGE_URL = "https://firebasestorage.googleapis.com/v0/b";

export const environment = {
  production: true,
  FIREBASE_URL: FIREBASE_URL,
  // STORAGE_URL: STORAGE_URL,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
