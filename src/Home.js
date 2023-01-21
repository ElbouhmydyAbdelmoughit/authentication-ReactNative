import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Alert } from 'react-native';
import Background from './Background';

const Home = () => {
 
  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.text}>Let's start</Text>
        <Text style={styles.text}>Coding</Text>
        <TouchableOpacity style={styles.Button_login} >
          <Text style={styles.button_Text_login}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button_signup} >
          <Text style={styles.button_Text_signup}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 35,
    marginVertical: 130,
    marginBottom:300
  },
  text: {
    color: 'white',
    fontSize: 60,
    fontFamily:"Poppins"
  },
  Button_login:{
    alignItems: 'center',
    backgroundColor: "green",
    borderRadius: 100,
    width: 300,
    paddingVertical: 7,
    marginVertical:10,
  },
  Button_signup:{
    alignItems: 'center',
    backgroundColor: "white",
    borderRadius: 100,
    width: 300,
    paddingVertical: 7,
    marginVertical:10,
  },
  button_Text_login:{
    color: "white",
    fontSize: 25,
    fontWeight: 'bold',
  },
  button_Text_signup:{
    color: "green",
    fontSize: 25,
    fontWeight: 'bold',
  }
});

export default Home;
