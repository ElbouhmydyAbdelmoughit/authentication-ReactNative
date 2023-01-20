import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {create} from 'react-test-renderer';
const backgroundImage = require('./assets/leaves.jpg');

const Background = ({children}) => {
  return (
    <View>
      <ImageBackground source={backgroundImage} style={styles.image} />
      <View style={styles.cheldrin}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: '100%',
  },
  cheldrin: {
    position: 'absolute',
  },
});

export default Background;
