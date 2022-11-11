
import React, { useState, useEffect } from 'react';
import { Button , Platform, Text, View, StyleSheet } from 'react-native';
import MapView from "react-native-maps";
import * as Location from 'expo-location';
import { Marker } from 'react-native-maps';
import { StatusBar } from 'expo-status-bar';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth();


// every screen in react-native gets navigation prop by default


function MapScreen({navigation}) {
  // location from geolocation
  // region is for mapview
  const [location, setLocation] = useState(null);  
  const [mapRegion, setMapRegion] = useState(null);
  const [hasLocationPermissions, setHasLocationPermissions] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [markers, setMarkers] = useState([]);


  const dummy_marker = ({ latlng: {latitude:  53.45773759071978, longitude: -2.750744316726923},title : "bob" ,description : "heres bob" });
  const dummy_marker2 = ({ latlng: {latitude: 53.459842665717744, longitude: -2.7442201785743237},title : "teresa" ,description : "shes here" });

    function logout(){
        auth.signOut();        
    }

    
  useEffect(() => {
    (async () => {      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      setHasLocationPermissions(true);
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      //  https://snack.expo.dev/@professorxii/expo-map-and-location-example
      // assuming latitude delta , longitude delta is size area around the location gps given by phone
      setMapRegion({ latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 });
      setMarkers([ dummy_marker , dummy_marker2 ]);

    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }


  function handleMapRegionChange(mapRegionNew){
    console.log(mapRegionNew);
    console.log(location);
    //setMapRegion(mapRegionNew);
  }


  // markers are pins in the map 

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
          Pan, zoom, and tap on the map!
        </Text>
        
        {
          location === null ?
          <Text>Finding your current location...</Text> :
          hasLocationPermissions === false ?
            <Text>Location permissions are not granted.</Text> :
            mapRegion === null ?
            <Text>Map region doesn't exist.</Text> :
            <MapView
              style={{ alignSelf: 'stretch', height: 400 }}
              region={mapRegion}
              onRegionChange={handleMapRegionChange} >

{markers.map((marker, index) => (
    <Marker
      key={index}
      coordinate={marker.latlng}
      title={marker.title}
      description={marker.description}
    />
  ))}

              </MapView>
            
        }
        
         {
        location === null ? <Text>finding location ...</Text> : 
        <Text>
          Location: {"somewhere location lat: " + location.coords.latitude + " , lon: " + location.coords.longitude}
        </Text>
         }

          <Text>This is the map screen!</Text>
      
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />

        <Button
          title={'Logout'}
          style={styles.input}
      onPress={logout}  />
          
      <StatusBar style="auto" />

   </View>
  );
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


export default MapScreen;

