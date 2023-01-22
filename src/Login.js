import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import Background from './Background';

const Login = () => {
  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.first_title}>Login</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.second_title}>Welcome Back</Text>
        <Text style={styles.last_title}>Login to your account</Text>
        <TextInput
          style={styles.email_Input}
          placeholder="Enter Email"
          keyboardType="Email-address"
        />
        <TextInput
          style={styles.password_Input}
          placeholder="Enter Password"
          keyboardType="numeric"
          secureTextEntry={true}
        />
        <View style={styles.forgot}>
          <Text style={styles.forgot_text}>Forgot Password ?</Text>
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 370,
  },
  first_title: {
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
  second_title: {
    color: 'green',
    fontSize: 40,
    fontWeight: 'bold',
  },
  last_title: {
    color: 'grey',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  email_Input: {
    width: '80%',
    height: 40,
    margin: 12,
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#DDDDDD',
    placeholderTextColor: 'green',
    marginTop: 30,
  },
  password_Input: {
    width: '80%',
    height: 40,
    margin: 12,
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#DDDDDD',
    placeholderTextColor: 'green',
  },
  forgot: {
    alignItems: 'flex-end',
    width: '78%',
    paddingRight: 16,
  },
  forgot_text: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Login;
