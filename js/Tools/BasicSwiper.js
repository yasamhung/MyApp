import React , {Component} from 'react';
import {
  Text,
  Dimensions,
  View
} from 'react-native'
import Swiper from 'react-native-swiper'

var deviceWidth = Dimensions.get('window').width;

var styles = {
  wrapper: {
  },
  slide1: {
    flex: 1,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#010205',
    fontSize: 30,
    fontWeight: 'bold'
  },
  container: {
      //flex: 1,
      height: deviceWidth*20/100,
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
     color:'#4382b2',
     paddingTop:30,
     paddingBottom:30
   },
}

class BasicSwiper extends Component {
  render(){
    return (
      <View style ={styles.container}>
       <Swiper style={styles.wrapper}
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
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
      </View>
    );
  }
}
export default BasicSwiper;
