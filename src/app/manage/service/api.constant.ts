import { environment } from '../../../environments/environment';


const BASE_URL = environment.nodeEndPoint.url;
const BASE_PORT = environment.nodeEndPoint.port;
const BASE_URL_OAUTH = environment.backend.endpoint;

export const API_URL = {
    // OAuth Config All
    clientId: environment.backend.clientId,
    clientSecret: environment.backend.clientSecret,
    grantType: environment.backend.grantType,

    // open file back end
    openPdfdil: environment.openFileBackEnd.pdfUrl,

    // Login oAuth And get token
    apiLogin: BASE_URL_OAUTH + 'oauth/token',
    
    // Template
    getTemplateAll: BASE_URL + 'getAllTemplate',
    deleteTemplate: BASE_URL + 'template',
    editTempYn: BASE_URL + 'templateUpdateYn',
    getFildMark: BASE_URL + 'fildmark',
    createTemplate: BASE_URL + 'createTemplateFile',



    
}