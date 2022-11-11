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


- clone the repository
- cd into directory `cd login-app`
- missing .env file , ask nicely and i may lend you mine on slack?

```
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=
```

- run `npm install`
- run `npm start`

should see a QR code that can be scanned by android or ios phone

download expo app from google playstore for android phones

for apple phones - maybe download expo app from apple store then use the camera 

## development

- [Snack expo] https://snack.expo.dev/

## android studio

if been unfortunate to download this whale , get a tar file tar.gz
~/Downloads/android-studio-2021.3.1.17-linux.tar.gz

`cd ~/Downloads `
`tar -xf android*gz`
`sudo chown -Rv root:root android*`
`sudo mv android* /opt`

to start the android studio 
`/opt/android-studio/bin/studio.sh` 

- close any projects open
- right hand corner be option virtual devices , vmd
- choose pixel 3
- press play button to start the emulator



## 📝 Notes

- [Firebase Storage API](https://firebase.google.com/docs/storage/web/upload-files)
- [Expo Firebase guide](https://docs.expo.dev/versions/latest/guides/using-firebase/)

