import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image , TextInput , Input, Button } from 'react-native-elements';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();


import { StatusBar } from "expo-status-bar";
import { ImageBackground , ScrollView , ActivityIndicator } from "react-native";

const staticImage = require("../images/cycling.png");
const staticImage2 = require("../images/spiderman.png");

// images just dont want to work at all



// // uri images
// const foo = async (f) => {
//     const {default: exampleImage } = await require(f);
//     const imageUri = Image.resolveAssetSource(exampleImage).uri;
//     return imageUri;
// }

// const IMAGES2 = ["../images/cycling.png" , "../images/spiderman.png"];
// const IMAGES = IMAGES2.map(foo);


// const IMAGES = ["../images/cycling.png" , "../images/spiderman.png"].map(async file =>  {
//     const {default: exampleImage } = await import(file);
//     const imageUri = Image.resolveAssetSource(exampleImage).uri;
//     return imageUri;
// });


const ListScreen = ({navigation}) => {
    const [loading, setLoading] = React.useState(false);


    
    
 return (
   <View style={styles.container}>
     <ImageBackground source={staticImage} style={styles.ImageBackground}>
       <StatusBar style="auto" />
         {/* TODO: something goes here  */}
<ScrollView
         style={styles.ImageContainer}
         contentContainerStyle={{
           flexDirection: "row",
           flexWrap: "wrap",
           justifyContent: "center",
         }}
         horizontal={false}
       >
         {IMAGES.map((image, i) => {
           return (
             <View
               style={{
                 padding: 5,
               }}
               key={i}
             >
               <Image
                 source={{ uri: image }}
                 style={[
                   styles.Image,
                   {
                     width: i % 2 === 1 ? 150 : 95,
                     height: i % 2 === 1 ? 150 : 95,
                   },
                 ]}
                 resizeMode="center"
                 onLoadStart={() => setLoading(true)}
                 onLoadEnd={() => setLoading(false)}
               />
               {loading && <ActivityIndicator color="green" size="large" />}
             </View>
           );
         })}
     </ScrollView>
         
     
     </ImageBackground>
   </View>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: "#fff",
   alignItems: "center",
   justifyContent: "center",
 },
 ImageBackground: {
   flex: 1,
   resizeMode: "cover",
   width: "100%",
   alignItems: "center",
 },
    ImageContainer: {
   marginHorizontal: 16,
   marginTop: 30,
   width: "100%",
 },
 Image: {
   shadowColor: "black",
   shadowOffset: {
     width: -10,
     height: 9,
   },
   shadowOpacity: 0.5,
   shadowRadius: 2,
   elevation:5
 },
});





export default ListScreen;


