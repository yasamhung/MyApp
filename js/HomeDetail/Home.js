import React, {Component} from 'react';

import {Platform, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Home extends Component{
  render() {
    return (
        <Text>Home</Text>
    );
  }
}

Home.navigationOptions = {
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon size={25} name={ Platform.OS === 'ios' ? (focused ? 'ios-planet' : 'ios-planet-outline') : 'md-planet' } style={{ color: tintColor }} />
  )
}
