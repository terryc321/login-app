import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput , Input, Button } from 'react-native-elements';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

const ListScreen = ({navigation}) => {
  const [value, setValue] = React.useState({
    email: '',
    password: '',
    error: ''
  });

  async function signIn() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory.'
      });
      return;
    }

    try {
        await signInWithEmailAndPassword(auth, value.email, value.password);        
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      });
        return;  
    }

     //successful sign in
      navigation.navigate("Home");            
  }

    

    // email and password
 return (
         <View style={styles.container}>

       {!!value.error && <View style={styles.error}><Text>{value.error}</Text></View>}
     
        <Input
          value={value.email}
     onChangeText={(email) => setValue({...value, email})}
          placeholder={'Email address'}
          style={styles.input}
        />
        <Input
          value={value.password}
          onChangeText={(password) => setValue({...value, password})}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={signIn}
        />
      </View>
    );

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
    error: {
        marginTop: 10,
        padding: 10,
        color: '#fff',
        backgroundColor: '#D54826FF',
    },

});



export default ListScreen;


