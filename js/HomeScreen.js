import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  createAppContainer,
  createMaterialTopTabNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './HomeDetail/Home';
import Detail from './HomeDetail/Detail';
import List from './HomeDetail/List';

//export default createMaterialBottomTabNavigator(
const HomeScreen = createMaterialTopTabNavigator(
  {
    HomePage: Home,
    Detail:  Detail,
    List: List
  },
  {
    tabBarOptions:{
      activeTintColor: 'white',
      inactiveTintColor: '#0080ff',
      showIcon: true,
      style:{
        backgroundColor: '#c4e1ff'
      }
    },
  }
)//;
//const HomeScreen = createAppContainer(HomeTabNavigator);

export default HomeScreen;
