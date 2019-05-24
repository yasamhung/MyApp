'use strict';

import React, {Component} from 'react';
import {Image,
    Dimensions,
    StyleSheet, Text, View, ScrollView,
} from 'react-native';

import PropTypes from 'prop-types';
import Swiper from 'react-native-swiper';

var deviceWidth = Dimensions.get('window').width;

const Images = [
  {src:require('../images/7-11/1.jpg')},
  {src:require('../images/7-11/2.jpg')},
  {src:require('../images/7-11/3.jpg')},
  {src:require('../images/7-11/4.jpg')},
  {src:require('../images/7-11/5.jpg')},
  ]
export default class NpViewPager extends React.Component {

    constructor(props) {
        super(props);

    }

    _renderSwiper(){
       return (
           <Swiper
               style={styles.swiperStyle}
               height={200}
               horizontal={true}
               autolay={true}
               loop={true}
               paginationStyle={{bottom:10}}
               dotStyle={{backgroundColor:'#e6a1ed', width: 8, height: 8}}
               //activeDotStyle={{backgroundColor:'rgba(0,0,0,.5)', width: 12, height: 12}}>
               activeDotStyle={{backgroundColor:'#a945b2', width: 12, height: 12}}>
               <View style={styles.swiperItem}>
                   <Image style={styles.imageStyle} source={Images[0].src}></Image>
               </View>
               <View style={styles.swiperItem}>
                   <Image style={styles.imageStyle} source={Images[1].src}></Image>
               </View>
               <View style={styles.swiperItem}>
                   <Image style={styles.imageStyle} source={Images[2].src}></Image>
               </View>
               <View style={styles.swiperItem}>
                   <Image style={styles.imageStyle} source={Images[3].src}></Image>
               </View>
               <View style={styles.swiperItem}>
                   <Image style={styles.imageStyle} source={Images[4].src}></Image>
               </View>
           </Swiper>
       )
   }
    render() {
      return (
          <ScrollView
              style={styles.container}>
              {this._renderSwiper()}
          </ScrollView>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //height: 1000,
    },
    swiperStyle:{

    },
    swiperItem:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'transparent',
    },
    imageStyle:{
        flex:1,
    },
});
