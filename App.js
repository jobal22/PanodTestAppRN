import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import HomePage from './Components/HomePage/HomePage';
import logo from './assets/logo.png';
import social from './Components/Images/social.png';
import alert from './Components/Images/alert.png';
import search from './Components/Images/search.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.navbar}>PANODIME</Text>
      <HomePage />
      <Text style={styles.footback} />
      <View style={styles.footer}>
        <Image source={search} style={styles.footicon}/>
        <Image source={social} style={styles.footicon}/>
        <Image source={alert} style={styles.footicon}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 20,
    marginTop: 55,
    position: 'absolute',
    zIndex: 1,
    left: 105,
  },
  navbar: {
    fontSize: 20,
    width: '100%',
    height: 90,
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 53,
    textAlign: 'center',
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  footback: {
    backgroundColor: 'grey',
    width: '100%',
    position:'absolute',
    bottom: 0,
    height: 61,
  },
  footer: {
    position:'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    width: '100%',
    height: 60,
    textAlign: 'center',
    paddingTop: 10,
    borderTopColor: 'black',
    flexDirection:'row',
    flexWrap:'wrap',

  },
  footicon: {
    width: 30,
    height: 30,
    marginLeft: 50,
    marginRight: 50,
  }
});
