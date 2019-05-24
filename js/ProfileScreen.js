import React, {Component} from 'react';

import {Platform, StyleSheet, Text, View} from 'react-native';
import {
      createStackNavigator,
      createAppContainer
    } from 'react-navigation';
import HomeScreen from './HomeScreen';

class ProfileScreen extends Component{
  render() {
    return (
      <View style={styles.title}>
          <Text style={styles.profile}>Profile</Text>
          <Text style={styles.test}>Test</Text>
          <Text style={styles.text}>Text</Text>
          <HomePage />
      </View>
    );
  }
}
export default ProfileScreen;
const HomePage = createAppContainer(HomeScreen);
const styles = StyleSheet.create(
  {
    title: {
      flex: 1,
      //height: '25%',
      //backgroundColor: 'red',
    },
    text: {
      color: 'green',
      fontSize: 12,
      fontFamily: 'Cochin',
      backgroundColor: 'red',
    },
    profile: {
      color: 'yellow',
      fontSize: 12,
      fontFamily: 'Cochin',
      backgroundColor: 'blue',
    },
    test: {
      color: 'white',
      fontSize: 12,
      fontFamily: 'Cochin',
      backgroundColor: 'black',
    },
  }
);
