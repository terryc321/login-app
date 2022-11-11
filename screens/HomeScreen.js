
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button , StyleSheet, Text, View } from 'react-native';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth();

// every screen in react-native gets navigation prop by default

function HomeScreen({navigation}) {

    function logout(){
        auth.signOut();        
    }

    function findUsersOnMap(){
        navigation.navigate('Map');
    }

    console.log(auth);
        
  return (
    <View style={styles.container}>
          <Text>Home screen!</Text>
          <Text>User : { auth.currentUser.email }</Text>

        <Button
          title={'Look on Map'}
          style={styles.input}
      onPress={findUsersOnMap}  />


      <Button title="Take a Photo" onPress={() => navigation.navigate('Photo')} />
      
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;

