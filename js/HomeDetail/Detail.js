import React, {Component} from 'react';

import {Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
//import native java module
import {NativeModules} from  'react-native';
var HelloWorld = NativeModules.HelloWorld;

export default class Detail extends Component{
  constructor(props){
    super(props);
    this.state = {detail: 'KK'};
    this.sayHiFromJava = this.sayHiFromJava.bind(this);
  }
  //async function to call the Java naive method
  async sayHiFromJava(){
    HelloWorld.sayHi(
      (err)=>{console.log(err)},
      (msg, text)=>{
        this.setState({detail: text})
      }
    );
  }
  render() {
    return (
      <View>
      <TouchableOpacity onPress={Platform.OS === 'ios' ? null : this.sayHiFromJava}>
          <Text>Invoke native java</Text>
      </TouchableOpacity>
      <Text>{this.state.detail}</Text>
      </View>
    );
  }
}

Detail.navigationOptions = {
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon size={25} name={ Platform.OS === 'ios' ? (focused ? 'ios-lock' : 'ios-lock-outline') : 'md-lock' } style={{ color: tintColor }} />
  )
}
