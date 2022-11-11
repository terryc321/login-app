# Expo React-Native Spike (more like the Eiffel f.n tower)

<p>
  <!-- iOS -->
  <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
</p>

This demonstrates authentication , maps and markers (pins in map) , taking photo and uploads to firebase storage

## demo

- [map functionality , login authentication , photo taking / upload to firebase] (https://youtu.be/CTr6CrRcKAc)

## 🚀 How to use

- go to firebase website ,
- configure firebase using web interface 
- setup project as web application
- enable authentication email ,
- enable storage
- inside firebase project settings , scroll down to bottom page , should see something like this


```js
// this code is in config/firebase.js file of this repo , replace with your own settings

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0pr1FTrmTQ20qVjJLtQAiNvPKFCvjRLA",
  authDomain: "demo1-10664.firebaseapp.com",
  projectId: "demo1-10664",
  storageBucket: "demo1-10664.appspot.com",
  messagingSenderId: "947876007835",
  appId: "1:947876007835:web:2348aeffd8eb0611f71b3e",
  measurementId: "G-J17HS9KG1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
```

- clone the repository
- cd into directory `cd login-app`
- run `npm install`
- run `npm start`

should see a QR code that can be scanned by android or ios phone

download expo app from google playstore for android phones

for apple phones - maybe download expo app from apple store then use the camera 

## development

- [Snack expo] https://snack.expo.dev/

## android studio

lets assume downloaded this through google chrome 

there will be a file named something like

~/Downloads/android-studio-2021.3.1.17-linux.tar.gz

```bash
cd ~/Downloads 
tar -xf android*gz
sudo chown -Rv root:root android*
sudo mv android* /opt
```
to start the android studio 
`/opt/android-studio/bin/studio.sh` 

- close any projects open
- right hand corner be option virtual devices , vmd
- choose pixel 3
- press play button to start the emulator



## 📝 Notes

- [Firebase Storage API](https://firebase.google.com/docs/storage/web/upload-files)
- [Expo Firebase guide](https://docs.expo.dev/versions/latest/guides/using-firebase/)

