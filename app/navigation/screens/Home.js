import * as React from 'react';
import{View, Text, SafeAreaView,StyleSheet,Image, TouchableHighlight} from 'react-native';


import Page2 from './Page2.js';

export default function Home({navigation}) {
  const handleImagePress = () => {
    navigation.navigate('Page2');
  };
    return (
      <View style={styles.container}>
      <Text style={styles.title}>Your search for the best rental in Bangalore ends here!
      </Text>
      <Text style={styles.subtitle}>What would you like to rent?
      </Text>
      <TouchableHighlight onPress={handleImagePress}>
      <Image style={{width:150, height:200}} source={require('D:/_PROJECTS/SharePal/app/assets/Action_Camera.png')} />
      </TouchableHighlight>
      <Image style={{width:150, height:200}} source={require('D:/_PROJECTS/SharePal/app/assets/Camera.png')} />
      <Image style={{width:150, height:200}} source={require('D:/_PROJECTS/SharePal/app/assets/Trekking_Gear.png')} />
      </View> 
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 22,
    backgroundColor: '#D7DF23',
  },
  title: {
    fontSize: 20, // Updated font size to 18
    fontWeight: 'bold',
    textAlign: 'center', // Align text at the center
    lineHeight: 30,
    padding: 10,
  },
  subtitle:{
    fontSize: 18, // Updated font size to 18
    fontWeight: 'normal',
    textAlign: 'center', // Align text at the center
    padding: 10,
  }
});