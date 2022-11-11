
import 'dotenv/config';

export default {
  "runtimeVersion": {
    "policy": "sdkVersion"
  },
  "updates": {
    "url": "https://u.expo.dev/c8e44483-e593-4dc2-b6dd-2e7f341cf50f"
  },
   
  "expo": {
    "name": "login-app",
    "icon": "./images/spiderman.png",
    "version": "1.0.0",
    "slug": "login-app",
    "version": "1.0.0",
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
      "ios": {
      "bundleIdentifier": "com.madeupcompany.login",
      "buildNumber": "1.0.0"
      },
   "android": {
       "package": "com.madeupcompany.login",
       "versionCode": 1
   },   
      "extra": {
          "eas": {              
        "projectId": "c8e44483-e593-4dc2-b6dd-2e7f341cf50f"
          },
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID
    }
  }
}
