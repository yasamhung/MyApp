import React, {Component} from 'react';

import {Platform, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NpViewPager from '../Tools/NpViewPager';
import BasicSwiper from '../Tools/BasicSwiper';

export default class List extends Component{
  render() {
    return (
            <View>
              <BasicSwiper />
              <NpViewPager />
            </View>
    );
  }
}

List.navigationOptions = {
  tabBarColor: '#842655',
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon size={25} name={ Platform.OS === 'ios' ? (focused ? 'ios-mail' : 'ios-mail-outline') : 'md-mail' } style={{ color: tintColor }} />
  )
}
