import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Background from './Background';

const Login = () => {
  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.form}>
        <Text>Welcome Back</Text>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 370,
  },
  title: {
    color: 'white',
    fontSize: 62,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  form: {
    height: 700,
    backgroundColor: 'white',
    borderTopLeftRadius: 130,
    paddingTop: 100,
    alignItems: 'center',
  },
});

export default Login;
