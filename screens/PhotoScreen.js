
// uploads image to firebase storage

import * as ImagePicker from "expo-image-picker";
import { getApps, initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
    Alert,
  ActivityIndicator,
  Button,
    Image,
    Platform,
  Share,
  StatusBar,
  StyleSheet,
  Text,
  View,
  LogBox,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import uuid from "uuid";

import React, { useState, useEffect } from 'react';
// import MapView from "react-native-maps";
// import * as Location from 'expo-location';
// import { Marker } from 'react-native-maps';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth();

function PhotoScreen({navigation}) {
    const [state , setState] = useState({image: null , uploading : false});
    
    function logout(){
        auth.signOut();        
    }

    useEffect( () => {

        const helper = async () => {
        const {
        status,
      } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Sorry, we need camera roll permissions to make this work!");
      }
        };

        helper();
    },[]);

   
    useEffect( () => { console.log("image updated : " , state.image);
                       _maybeRenderImage(); }, [state.image]);

  _maybeRenderUploadingOverlay = () => {
    if (state.uploading) {
      return (
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: "rgba(0,0,0,0.4)",
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
        >
          <ActivityIndicator color="#fff" animating size="large" />
        </View>
      );
    }
  };

  _maybeRenderImage = () => {
      let image = state.image;  // let {image} = state; // equivalent??
    if (!image) {
      return;
    }
      console.log("image = " , image);

    return (
      <View
        style={{
          marginTop: 30,
          width: 250,
          borderRadius: 3,
          elevation: 2,
        }}
            >            
        <View
          style={{
            borderTopRightRadius: 3,
            borderTopLeftRadius: 3,
            shadowColor: "rgba(0,0,0,1)",
            shadowOpacity: 0.2,
            shadowOffset: { width: 4, height: 4 },
            shadowRadius: 5,
            overflow: "hidden",
          }}
        >
          <Image source={{ uri: image }} style={{ width: 250, height: 250 }} />
            </View>
            
              <Text>Long press to share photo</Text>
              <Text>Short press to copy photo to clipboard</Text>
        <Text
          onPress={_copyToClipboard}
          onLongPress={_share}
        style={{ paddingVertical: 10, paddingHorizontal: 10 , color : "green" }}>
          {image}
        </Text>
      </View>
    );
  };

  _share = () => {
    Share.share({
      message: state.image,
      title: "Check out this photo",
      url: state.image,
    });
  };

    
   _copyToClipboard = () => {
    Clipboard.setString(state.image);
    Alert.alert("Copied image URL to clipboard");
  };

    

    _takePhoto = async () => {
    let pickerResult = await ImagePicker.launchCameraAsync({
      //allowsEditing: true,
      aspect: [4, 3],
    });

    _handleImagePicked(pickerResult);
  };

    
    _pickImage = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
//      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log({ pickerResult });
    _handleImagePicked(pickerResult);
  };

  _handleImagePicked = async (pickerResult) => {
    try {
        setState((latest) => { return { ...latest , uploading: true }});

      if (!pickerResult.cancelled) {
        const uploadUrl = await uploadImageAsync(pickerResult.uri);
          setState((latest) => {return { ...latest , image: uploadUrl }});
      }
    } catch (e) {
      console.log(e);
      alert("Upload failed, sorry :(");
    } finally {
        setState((latest) => { return { ...latest , uploading: false }});
    }
  };
    
  return (
    <View style={styles.container}>

      {state.image && (
          <View>
          <Text
            style={{
              fontSize: 20,
              marginBottom: 20,
              textAlign: "center",
              marginHorizontal: 15,
            }}
          >
            Example: Upload ImagePicker result
             </Text>
            </View> 
        )}

          <Button onPress={_pickImage} title="Pick an image from camera roll" />
          
        <Button onPress={_takePhoto} title="Take a photo" />
      
        {_maybeRenderImage()}
        {_maybeRenderUploadingOverlay()}
      
        <StatusBar barStyle="default" />
      
          <Text>This is the photo screen!</Text>
          <Text>state image {state.image}</Text>
          <Text>state uploading {state.uploading}</Text>
      
          <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />

      <Button title="Go back" onPress={() => navigation.goBack()} />


        <Button title={'Logout'} style={styles.input} onPress={logout}  />
         
      <StatusBar style="auto" />

   </View>
  );
}


async function uploadImageAsync(uri) {
  // Why are we using XMLHttpRequest? See:
  // https://github.com/expo/expo/issues/2402#issuecomment-443726662
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });

  const fileRef = ref(getStorage(), uuid.v4());
  const result = await uploadBytes(fileRef, blob);

  // We're done with the blob, close and release it
  blob.close();

  return await getDownloadURL(fileRef);
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
    paragraph: {
        color: "red",
    },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});


export default PhotoScreen;

