/**
 * js中没有long类型
 * reactjs详细的数据类型查看 com.facebook.react.bridge.BaseJavaModule这个类
 */

'use-strict';

import React, {
    Component,
    AppRegistry,
    NativeModules,
    requireNativeComponent,
    ToastAndroid
} from 'react-native';


//获得java module 对象实例
var callJavaModule = NativeModules.JsCallJavaModuleTest;

function CallModule() {
    this.callJavaNone = function(params) {
        callJavaModule.onCallNoneParams();
        // console.log('callJavaNone: ');
        ToastAndroid.show('JsToast', ToastAndroid.SHORT);
    };
    this.callJavaStr = function(params) {
        callJavaModule.onCallStr(params);
        // console.log('callJavaStr: ' + params);
        ToastAndroid.show('JsToast', ToastAndroid.SHORT);
    };
    this.callJavaInt = function(count) {
        callJavaModule.onCallInt(count);
        // console.log('callJavaInt: ' + count);
        ToastAndroid.show('JsToast', ToastAndroid.SHORT);
    }
    this.callJavaFloat = function(count) {
        callJavaModule.onCallFloat(count);
        // console.log('callJavaInt: ' + count);
        ToastAndroid.show('JsToast', ToastAndroid.SHORT);
    }
}

module.exports = {
    SDK: new CallModule()
};