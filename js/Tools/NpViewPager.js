'use strict';

import React, {Component} from 'react';
import {
    Platform,
    Image,
    Dimensions,
    StyleSheet, Text, View, ScrollView,TouchableOpacity
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
               height={deviceWidth*40/75}
               horizontal={true}
               autoplay={true}
               autoplayTimeout={2.5}
               showsButtons={true}
               buttonWrapperStyle={styles.buttonWrapperStyle}
               loop={true}
               paginationStyle={{bottom:10}}
               dotStyle={styles.dotStyle}
               nextButton=<Text style={styles.buttonText}>›</Text>
               prevButton=<Text style={styles.buttonText}>‹</Text>
               //activeDotStyle={{backgroundColor:'rgba(0,0,0,.5)', width: 12, height: 12}}>
               activeDotStyle={styles.activeDotStyle}>
               <View style={styles.swiperItem}>
                   <Image style={styles.imageStyle0} source={Images[0].src}></Image>
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
          <View>
          <ScrollView
              style={styles.container}>
              {this._renderSwiper()}
          </ScrollView>
          </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        height: deviceWidth*45/75,
    },
    swiperStyle:{
        width: deviceWidth,
    },
    swiperItem:{
        //flex:1,
        height:deviceWidth*40/75,
        justifyContent:'center',
        backgroundColor:'transparent',
    },
    imageStyle0:{
        //flex:1,
        width: deviceWidth,
        height: deviceWidth*45/75,
    },
    imageStyle:{
        //flex:1,
        width: deviceWidth,
        height: deviceWidth*45/75,
    },
    activeDotStyle:{
      backgroundColor:'#a945b2',
       width: 12,
       height: 12,
       //borderRadius: 0,
     },
    dotStyle:{
      backgroundColor:'#e6a1ed',
       width: 8,
       height: 8,
       opacity: 0.4,
       //borderRadius: 0,
     },
     buttonWrapperStyle:{
       backgroundColor: 'transparent',
       flexDirection: 'row',
       position: 'absolute',
       top: 0,
       left: 0,
       flex: 1,
       paddingHorizontal: 10,
       paddingVertical: 10,
       justifyContent: 'space-between',
       alignItems: 'center'
     },
     buttonText:{
       fontSize:60,
       color:'#e6a1ed',
       paddingTop:30,
       paddingBottom:30
     }
});
