
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { StackScreenProps } from '@react-navigation/stack';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


const auth = getAuth();

const SignUpScreen = ({navigation}) => {
    const [value, setValue] = React.useState({
        email: '',
        password: '',
        error: ''
    });

    
    async function signUp() {
        if (value.email === '' || value.password === '') {
            setValue({
                ...value,
                error: 'Email and password are mandatory.'
            });
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, value.email, value.password);
        } catch (error) {
            setValue({
                ...value,
                error: error.message,
            });
            return;
        }
        

        //successful sign up
        navigation.navigate('Home');    
    }


       // email and password
       return (
         <View style={styles.container}>

       {value.error && <View style={styles.error}><Text>{value.error}</Text></View>}

           
        <Input value={value.email}  onChangeText={(email) => setValue({...value, email})}
           placeholder={'Email address'} style={styles.input} />
               
        <Input value={value.password} onChangeText={(password) => setValue({...value, password})}
          placeholder={'Password'} secureTextEntry={true} style={styles.input} />
        
        <Button title={'SignUp'} style={styles.input} onPress={signUp} />
      </View>
    );

    
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    controls: {
        flex: 1,
    },

    control: {
        marginTop: 10
    },

    error: {
        marginTop: 10,
        padding: 10,
        color: '#fff',
        backgroundColor: '#D54826FF',
    }
});

export default SignUpScreen;

