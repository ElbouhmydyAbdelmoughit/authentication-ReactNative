import React from 'react';
import {Text, View} from 'react-native';
import Background from './Background';

const Home = () => {
  return (
    <Background>
      <View style={{marginHorizontal: 40, marginVertical: 60}}>
        <Text style={{color: 'white', fontSize: "64"}}>Let's start</Text>
      </View>
    </Background>
  );
};

export default Home;
