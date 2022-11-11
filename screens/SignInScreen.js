import React from 'react';
import {useState , useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Alert , TextInput , Input, Button } from 'react-native-elements';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

const SignInScreen = ({navigation}) => {
  const [value, setValue] = useState({
    email: '',
    password: '',
    error: ''
  });
    const [refresh,setRefresh] = useState(true);
    const [after,setAfter] = useState(null);
    
  // trying to set input fields to some default so easier to debug + develop on  
  useEffect(() => {    
  },[refresh]);
    
    
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


    async function fastSignIn(email , password) {
        setValue((cur) => {return {
            ...cur ,
            email : email ,
            password : password            
        }});
        // document.getElementById("email").value = email;
        // document.getElementById("password").value = password;        
        // console.log("email = " ,email);
        // console.log("password = " ,password);

        // trigger refresh , then call signIn
        //setRefresh(!refresh);
        // wait 3 seconds then sign in ?
        //setTimeout(signIn , 3000);
        
        
    }
    

    // email and password
 return (
         <View style={styles.container}>

       {!!value.error && <View style={styles.error}><Text>{value.error}</Text></View>}
     
        <Input
     value={value.email}
     id={"email"}
     onChangeText={(email) => setValue({...value, email})}
          placeholder={'Email address'}
          style={styles.input}
        />
        <Input
     value={value.password}
     id={"password"}
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

    <Button
          title={'FastLogin-terry-dev'}
          style={styles.input}
     onPress={() => fastSignIn("terry.cadd@gmail.com" , "password")}
         />

    <Button
          title={'FastLogin-george5-dev'}
          style={styles.input}
     onPress={() => fastSignIn("george5@gmail.com","george5")}
         />

    <Button
          title={'FastLogin-nancy77-dev'}
          style={styles.input}
     onPress={() => fastSignIn("nancy77@gmail.com","nancy77")}
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



export default SignInScreen;


