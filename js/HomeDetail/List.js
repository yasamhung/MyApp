import React, {Component} from 'react';

import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NpViewPager from '../Tools/NpViewPager';
import BasicSwiper from '../Tools/BasicSwiper';

export default class List extends Component{
  render() {
    return (
            <View style={styles.container}>
              <ScrollView contentContainerStyle = {styles.scrollView}>
                <BasicSwiper />
                <NpViewPager />
                <BasicSwiper />
                <BasicSwiper />
                <BasicSwiper />
                <BasicSwiper />
                <BasicSwiper />
              </ScrollView>
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

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: (Platform.OS)=== 'ios' ? 20 :0
  },
  scrollView:{
    alignSelf: 'stretch',
  },
});
