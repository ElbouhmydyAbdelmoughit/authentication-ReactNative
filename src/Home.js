import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Background from './Background';

const Home = ({navigation}) => {
  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.text}>Let's start</Text>
        <Text style={styles.text_second}>Connecting</Text>
        <TouchableOpacity
          style={styles.Button_login}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.button_Text_login}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button_signup}
          onPress={() => navigation.navigate('Signup')}>
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
  },
  text: {
    color: 'white',
    fontSize: 59,
  },
  text_second: {
    color: 'white',
    fontSize: 59,
    marginBottom: 100,
  },
  Button_login: {
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 100,
    width: 300,
    paddingVertical: 7,
    marginVertical: 10,
  },
  Button_signup: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 100,
    width: 300,
    paddingVertical: 7,
    marginVertical: 10,
  },
  button_Text_login: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  button_Text_signup: {
    color: 'green',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default Home;
