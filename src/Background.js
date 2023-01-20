import React from 'react';
import {View, ImageBackground} from 'react-native';

const Background = ({cheldrin}) => {
  return (
    <View>
      <ImageBackground
        source={require('./assets/leaves.jpg')}
        style={{height: '100%'}}
      />
      <View style={{position: 'absolute'}}>{cheldrin}</View>
    </View>
  );
};

export default Background;
