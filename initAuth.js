import { init } from 'next-firebase-auth'

const initAuth = () => {
  init({
    authPageURL: '/auth',
    appPageURL: '/dashboard',
    loginAPIEndpoint: '/api/login', // required
    logoutAPIEndpoint: '/api/logout', // required
    firebaseAdminInitConfig: {
      credential: {
        projectId: 'url-shortener-2b352',
        clientEmail:
          'firebase-adminsdk-ticb9@url-shortener-2b352.iam.gserviceaccount.com',
        privateKey: process.env.FIREBASE_PRIVATE_KEY
      }
    },
    firebaseClientInitConfig: {
      apiKey: 'AIzaSyDCvMj90xaF4C8vPA2cdMRJF-A9pgmbbVU', // required
      authDomain: 'url-shortener-2b352.firebaseapp.com',
      projectId: 'url-shortener-2b352'
    },
    cookies: {
      name: '@urlShortener', // required
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: true, // set this to false in local (non-HTTPS) development
      signed: true
    }
  })
}

export default initAuth

/*

{
  "type": "service_account",
  "project_id": "url-shortener-2b352",
  "private_key_id": "4aa865b48a55b444ffac8501f58b92bb3de92291",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCqN8xeiDjpe+DH\n4o1px6kc2sPiblLNAj4YIumWk5y+vAS/voi692cbIk05ebQxQHbOPYDgoEJvhKO5\nuKbpln4GYTiU89NpgpI3v88uB/d9YmSA80pergu4l73N4odc/tZfzjiZ2iizPF/m\nOqxp+Wv6TMI76pwwREIVPCGZWacWubIjdo8U+DgU1PDtfWetYyM3x61UFsTtJ9yD\nz3p3tel4ujfrGUdN3UyEsmXlX3B2FsU471tdf4GdHaCssohp5cch2+qBhFJznPe/\nuLOvqhQ+zz2kpClIZwHgS0MCPZ1uvhEdBK7JT4VQH6gUVBQujZRMjeZDulFLswrI\noPOQTEwJAgMBAAECggEACV16DU5t4Sy7ZIv6r1H4pDmGEwByZkykCXRsSShUdKsI\nENulDrJbdiL4QDwJtbcAAl9gZptypEuWLXrzFgF9bBDvycQzgsfYDyCqv7PZAklG\nUdDw684kH3Mb0obO30c3GLzSIObfm+LrvNFIGKmMLxCHlD/XeZFb2Gq/R35nAsk8\nQynAAG36CtIOyM/meDjXao9RxymrB0BDivqIbRQj7gWTE+7m/mGCHSW2hgULYZup\n3tI7tlZVrBgc+PxEXgBNe83yQsMm2MNSQ1e+T8f3zinFV3FKnhZ/JdioBrUDgUEY\nwH6ZWZZVcMFNVllaGF9RqvAAQGHrmXJThp/B5B4+nQKBgQDRDH+7LBJLWNfouaxV\nEzuo8eS4Y/oz/lZXb7TUc7zscL2nsULUiIywEcY7wO5bKAprA06li1hjl64rig+Y\neg4c+brNX6dh44PK6ZbzUen7VcUf4tnUqTIhr4Kw82q8V8aGRDfDJwb+HJSyOzqU\n3+nC9fnQpDKiGC/70tr6cGt2TQKBgQDQcqyxyFjjyQbyTxETKVWiUp0o6NaRC41A\nnpj1zxwvVt1e3T2GQdzL5lv929d8mIEAzoOUv6wc8Y2ypddKcJ7HYeihZ2lZAa7I\ngUoDkFWKlgmsExLC/xSycZUx60BFjNn4rIIrv9c/0xfLpZzh7MIGP6/9q3IIB1/Y\ndIB7qaPCrQKBgQDC9aUqKi/llTXHFWJi9UzugqmMTbFKTCi54rQCbu4ClCJMAkUR\ncUfD7M+zanrhCLaulqcCPLJyL0N/14Iz8aC35S8R2eOAp26CDtd4lSxh+dudoTMF\n4cWfJM/9twYUIMhE79oRZpRe6MjEb/hyX2DjMgOJUZjnEyes8zjF15JhAQKBgQC7\nIafdtuHuJKPC1q6aiCojno0Ok/FEp504nOjvC+7epNn5dx7rr6cbugNt5HYQmgx9\n/+fqmyRVm5k8/1tGrdItZr1kYSUXTcZupHsgtevFjarDOyBFxJ/9DrEE7pB1n9xz\nPdNimUgROV4MafJsdJM+7t/9GHQ3tv8ZoIVT/1hPxQKBgBTlEakn7S30OzoBGYtu\nBmdwGTeUcvjKjb3HiWd2Y/XrUOkx8ja79jJCmkc2qgZE4omhvmLSNgwJk/ba1z8T\nC9DppmuK6JqgGBZRWbP1665cBDYZmS+fn08XmYi7ZZT/oORifDnjahX9L+sLGbLK\nxnnKDN9SrzFtSPj1e8y9N0RI\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-ticb9@url-shortener-2b352.iam.gserviceaccount.com",
  "client_id": "117099052064040510924",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ticb9%40url-shortener-2b352.iam.gserviceaccount.com"
}

*/
