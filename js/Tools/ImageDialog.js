
import React, { Component } from 'react';
import {
    Modal,
    Text,
    TouchableHighlight,
    View,
    Image,
    StyleSheet,
    BackAndroid
} from 'react-native';

import PropTypes from 'prop-types';

let Dimensions = require('Dimensions');
let SCREEN_WIDTH = Dimensions.get('window').width;//宽
let SCREEN_HEIGHT = Dimensions.get('window').height;//高


export default class ImageDialog extends Component {

    // 构造
    constructor(props) {
        super(props);
    }

    static propTypes = {
        _dialogTitle: PropTypes.string, //タイトル
        _dialogContent: PropTypes.string, //内容
        _url: PropTypes.string,
        _dialogLeftBtnTitle: PropTypes.string,    //左ボタン名称
        _dialogRightBtnTitle: PropTypes.string,   //右ボタン名称
        _dialogLeftBtnAction: PropTypes.func.isRequired,  //左ボタンクリック方法定義
        _dialogRightBtnAction: PropTypes.func.isRequired, //右ボタンクリック方法定義
        _dialogVisible: PropTypes.bool,       //Dialog表示かどうか
        _imageOnly: PropTypes.bool,
        _dialogLeftBtnVisible: PropTypes.bool,
        _dialogRightBtnVisible: PropTypes.bool,
    }

    static defaultProps = {
        _dialogTitle: '警告注意',
        _dialogContent: '退出するか？',
        _dialogLeftBtnTitle: 'キャンセル',
        _dialogRightBtnTitle: '確認',
        _dialogVisible: false,
        _imageOnly:true,
        _dialogLeftBtnVisible: false,
        _dialogRightBtnVisible: false,

    }

    render() {
        // onPress事件直接与父组件传递进来的属性挂接
        return (
            <Modal
                visible={this.props._dialogVisible}
                transparent={true}
                onRequestClose={() => {}} //如果是Android设备 必须有此方法
                >
                    <View style={styles.circleView}>
                      <TouchableHighlight onPress={this.props._dialogRightBtnAction}>
                      <View style={styles.circle}>
                          <Text style={styles.X}>X</Text>
                      </View>
                      </TouchableHighlight>
                    </View>
                <View style={styles.bg}>
                    <View style={styles.dialog}>
                        {
                          this.props._imageOnly ? null:
                          <View style={styles.dialogTitleView}>
                              <Text style={styles.dialogTitle}>
                                  {this.props._dialogTitle}
                              </Text>
                          </View>
                        }
                        {
                          this.props._imageOnly ? null:
                          <View style={styles.dialogContentView}>
                              <Text style={styles.dialogContent}>
                                  {this.props._dialogContent}
                              </Text>
                              <Image style={styles.imageStyle0} source={this.props._url}></Image>
                          </View>
                        }
                        {
                          this.props._imageOnly ?
                          <View style={styles.dialogContentImageView}>
                              <Image style={styles.imageStyle0} source={this.props._url}></Image>
                          </View>
                          : null
                        }
                        <View style={styles.dialogBtnView}>
                              <TouchableHighlight style={styles.dialogBtnViewItem} onPress={this.props._dialogLeftBtnAction}>
                                  <Text style={styles.leftButton}>
                                      {this.props._dialogLeftBtnTitle}
                                  </Text>
                              </TouchableHighlight>
                              <TouchableHighlight style={styles.dialogBtnViewItem} onPress={this.props._dialogRightBtnAction}>
                                  <Text style={styles.rightButton}>
                                      {this.props._dialogRightBtnTitle}
                                  </Text>
                              </TouchableHighlight>
                        </View>

                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    bg: {  //全屏显示 半透明 可以看到之前的控件但是不能操作了
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        backgroundColor: 'rgba(52,52,52,0.5)',  //rgba  a0-1  其余都是16进制数
        justifyContent: 'center',
        alignItems: 'center',
    },
    dialog: {
        width: SCREEN_WIDTH * 0.8,
        height: SCREEN_HEIGHT * 0.28,
        backgroundColor: 'white',
        borderRadius: 8,
    },
    dialogTitleView: {
        width: SCREEN_WIDTH * 0.8,
        height: SCREEN_HEIGHT * 0.08,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    dialogTitle: {
        textAlign: 'center',
        fontSize: 18,
        color: '#000000',
    },
    dialogContentView: {
        width: SCREEN_WIDTH * 0.8,
        height: SCREEN_HEIGHT * 0.12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dialogContent: {
        textAlign: 'center',
        fontSize: 16,
        color: '#4A4A4A',
    },
    dialogBtnView: {
        width: SCREEN_WIDTH * 0.8,
        height: SCREEN_HEIGHT * 0.08,
        flexDirection: 'row',
    },
    dialogBtnViewItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E5F2FF',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    leftButton: {
        fontSize: 18,
        color: '#007AFF',
        borderBottomLeftRadius: 8,
    },
    rightButton: {
        fontSize: 18,
        color: '#007AFF',
        borderBottomRightRadius: 8,
    },
    circle:{
      marginRight:10,
      alignItems:'center',
      justifyContent:'center',
      width: 32,
      height:32,
      backgroundColor:'white',
      borderColor:'green',
      borderStyle:'solid',
      borderRadius:15,
      paddingBottom:2
    },
    imageStyle0:{
        //flex:1,
        width: SCREEN_WIDTH * 0.9,
        height: SCREEN_WIDTH * 0.28,
        resizeMode: 'contain', //'cover',
        //marginRight: 10,
        //marginBottom: 12,
        //marginTop: 12,
    },
    X:{
      fontSize:24,
      textAlign:'center',
      color:'black',
      //backgroundColor:'white',
    },
    circleView:{
      alignItems:'flex-start',
      backgroundColor:'transparent',
    },
    dialogContentImageView: {
        width: SCREEN_WIDTH * 0.8,
        height: SCREEN_HEIGHT * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        //justifyContent: 'flex-start',
        //alignItems: 'center',
    },
});
