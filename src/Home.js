import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Background from './Background';

const Home = () => {
  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.text}>Let's start</Text>
        <Text style={styles.second_text}>Coding</Text>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container:{
    marginHorizontal: 35,
    marginVertical: 100
  },
  text:{
    color: "white",
    fontSize: 64,
    fontFamily:"",
  },
  second_text:{
    color: "white",
    fontSize: 64,
    fontFamily:"",
  }
})

export default Home;
