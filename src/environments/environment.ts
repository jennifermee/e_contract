// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  debugMode: true,
  whitelistedDomains: ['localhost:8080'],
  nodeEndPoint: {
    url: 'http://150.95.80.227:8081/jst-e-contract/api/',
    port: '4000/api',
  },
  openFileBackEnd: {
    pdfUrl: 'http://150.95.80.227:8081/jst-e-contract/pdf/'
  },
  backend: {
    endpoint: 'http://localhost:8080/JSTCRM/',
    clientId: 'locus',
    clientSecret: 'locus123',
    grantType: 'password'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
